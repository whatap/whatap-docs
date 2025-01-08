const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const releaseNotesFolder = path.join(__dirname, '/docs/release-notes');
const blogFolder = path.join(__dirname, '/blog');
const TWO_WEEKS = 14;  // 2주 경과 기준
const FOUR_WEEKS = 28; // 4주 경과 기준

function checkLatestFileInFolders() {
    // 릴리스 노트 검사
    console.log('🔍 릴리스 노트 검사');
    const productFolders = fs.readdirSync(releaseNotesFolder)
        .map(folder => path.join(releaseNotesFolder, folder))
        .filter(folder => fs.statSync(folder).isDirectory());

    productFolders.forEach(folder => checkLatestFile(folder));

    // 블로그 검사
    console.log('\n🔍 블로그 문서 검사');
    checkLatestFile(blogFolder, true); // 블로그 폴더에는 하위 폴더가 없으므로 옵션 추가
}

// 특정 폴더에서 최신 파일 검사
function checkLatestFile(folder, isFlatFolder = false) {
    const files = fs.readdirSync(folder)
        .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
        .map(file => {
            const filePath = path.join(folder, file);
            const stats = fs.statSync(filePath);
            return {
                file: filePath,
                modifiedDate: dayjs(stats.mtime),
            };
        });

    if (files.length === 0) {
        console.log(`🚫 [${folder}] 폴더에 마크다운 파일이 없습니다.`);
        return;
    }

    // 최신 파일 찾기
    const latestFile = files.sort((a, b) => b.modifiedDate - a.modifiedDate)[0];
    const today = dayjs();
    const diffDays = today.diff(latestFile.modifiedDate, 'day');

    // 조건: 2주, 4주 경과 기준
    if (diffDays >= FOUR_WEEKS) {
        console.log(`❕ 4주 이상 미수정: ${latestFile.file} (마지막 수정일: ${latestFile.modifiedDate.format('YYYY-MM-DD')})`);
    } else if (diffDays >= TWO_WEEKS) {
        console.log(`❗ 업데이트 확인: ${latestFile.file} (마지막 수정일: ${latestFile.modifiedDate.format('YYYY-MM-DD')})`);
    } else {
        console.log(`✅ 최신 파일: ${latestFile.file} (마지막 수정일: ${latestFile.modifiedDate.format('YYYY-MM-DD')})`);
    }
}

// 검사 실행
checkLatestFileInFolders();