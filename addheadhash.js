const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
// const mkdirp = require('mkdirp');

const inputFolder = './original'; // 입력 파일들이 있는 폴더 경로
// const outputFolder = 'output'; // 출력 파일들을 저장할 폴더 경로

// 중복되지 않은 해시 ID를 생성하기 위한 변수
let hashIdCounter = 1;
const usedHashIds = new Set();

// 정규식 패턴
const regex = /\{#([^>]+?)\}/;

// 출력 폴더 생성
// mkdirp.sync(outputFolder);

// 폴더 내의 모든 파일 검색
function processMarkdownFiles(folderPath) {
    fs.readdirSync(folderPath).forEach(file => {
        const filePath = path.join(folderPath, file);

        // 파일인 경우만 처리
        if (fs.statSync(filePath).isFile() && file.endsWith('.mdx')) {
            processMarkdownFile(filePath);
        } else if (fs.statSync(filePath).isDirectory()) {
            processMarkdownFiles(filePath); // 하위 디렉토리 처리
        }
    });
}

// 개별 마크다운 파일 처리
function processMarkdownFile(inputFilePath) {
    const inputContent = fs.readFileSync(inputFilePath, 'utf-8');
    const lines = inputContent.split('\n');
    const outputLines = [];

    lines.forEach(line => {
        const match = line.match(/^(#+) ([^#].+)$/);
        if (match) {
            const headingLevel = match[1].length;
            const headingText = match[2].trim();
            let hashId = null;

            // 정규식 패턴과 매치되지 않는 경우에만 해시 ID 생성
            if (!regex.test(line)) {
                while (true) {
                    hashId = crypto
                        .createHash('md5')
                        .update(`${hashIdCounter}-${headingText}`)
                        .digest('hex');
                    hashIdCounter++;
                    if (!usedHashIds.has(hashId)) {
                        usedHashIds.add(hashId);
                        break;
                    }
                }
            }

            // 해시 ID가 있는 경우 처리
            if (hashId) {
                outputLines.push(`${'#'.repeat(headingLevel)} ${headingText} {#${hashId}}`);
            } else {
                outputLines.push(line);
            }
        } else {
            outputLines.push(line);
        }
    });

    // 수정된 내용을 기존 파일에 덮어쓰기
    fs.writeFileSync(inputFilePath, outputLines.join('\n'), 'utf-8');
}

// 작업 시작
// processMarkdownFiles(inputFolder);

const inputFilePath = process.argv[2];
console.log(inputFilePath);
processMarkdownFile(inputFilePath);
console.log('작업이 완료되었습니다.');
