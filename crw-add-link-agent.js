const fs = require('fs');
const path = require('path');

// 폴더 경로
const folderPath = './crw-data/crwld-service-test';

// 폴더 내 파일 목록 읽기
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // 각 파일에 대해 처리
    files.forEach(file => {
        const filePath = path.join(folderPath, file);

        // 파일인지 확인
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error('Error reading file stats:', err);
                return;
            }

            if (stats.isFile()) {
                // 파일이면 내용 수정
                modifyFile(filePath);
            }
        });
    });
});

// 파일 내용 수정 함수
function modifyFile(filePath) {
    // MDX 파일 내용 읽기
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // 정규식 정의
    const regex = /<code class='changelog-service'>([\w\s.+-]+(?:\sAgent)?)\sv(\d+\.\d+(?:\.\d+)?[a-zA-Z]?)<\/code>/g;

    // 파일 내용 수정
    fileContent = fileContent.replace(regex, (match, product, version) => {
        // 제품 이름에서 공백과 'Agent' 제거, 소문자로 변환
        let productName = product.replace(/\s+Agent/, '').toLowerCase();
        
        // 예외 처리: .NET Agent -> dotnet
        if (productName === '.net') {
            productName = 'dotnet';
        } else {
            // Node.js와 같은 제품 이름 처리
            productName = productName.replace(/\./g, '');
        }

        // 공백을 하이픈으로 변환
        productName = productName.replace(/\s+/g, '-');

        // 링크 생성
        const versionLinkPart = version.replace(/\./g, '_');
        const versionLink = `https://docs.whatap.io/release-notes/${productName}/${productName}-${versionLinkPart}`;
        return `<code class='changelog-service'><a href="${versionLink}">${product} v${version}</a></code>`;
    });

    // 수정된 내용으로 파일 덮어쓰기
    fs.writeFileSync(filePath, fileContent);
    console.log(`File updated: ${filePath}`);
}