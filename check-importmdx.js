const fs = require('fs');
const path = require('path');

// common-items 폴더 안에 있는 파일 목록 배열 생성
const commonItemsDirectory = './docs/common-items';
const commonItemsFiles = fs.readdirSync(commonItemsDirectory);
const commonItemsFileNames = commonItemsFiles.map(file => file);

// 중복을 제거한 mdx 파일 목록을 저장할 배열
let importedMdxFiles = [];

// docs 폴더 안에 있는 mdx 파일들을 탐색하고 common-items 폴더를 제외한 파일에서 common-items 폴더의 mdx 파일을 import한 경우를 찾음
function findImportedMdxFiles(directory) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        const fileStat = fs.statSync(filePath);
        if (fileStat.isDirectory()) {
            // common-items 폴더는 제외
            if (filePath !== commonItemsDirectory) {
                findImportedMdxFiles(filePath);
            }
        } else if (path.extname(file) === '.mdx') {
            const content = fs.readFileSync(filePath, 'utf-8');
            const importedFiles = findImportedFiles(content);
            importedFiles.forEach(importedFile => {
                if (importedMdxFiles.indexOf(importedFile) === -1) {
                    importedMdxFiles.push(importedFile);
                }
            });
        }
    });
}

// 주어진 내용에서 common-items 폴더 안에 있는 파일을 import한 경우를 반환하는 함수
function findImportedFiles(content) {
    const importedFiles = [];
    const importRegex = /^import\s+(.+?)\s+from\s+['"](.+?)\/common-items\/(.+?)['"]/gm;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        const importedFile = match[3];
        importedFiles.push(importedFile);
    }
    return importedFiles;
}

// docs 폴더 안에 있는 mdx 파일들을 탐색하고 import한 mdx 파일 목록을 생성
findImportedMdxFiles('./docs');

// 중복을 제거한 mdx 파일 목록과 common-items 안에 있는 파일 목록을 비교하여 중복되지 않은 파일 목록을 생성
const uniqueFiles = commonItemsFileNames.filter(file => !importedMdxFiles.includes(file));

// 중복되지 않은 파일 목록을 txt 파일로 저장
const outputFilePath = './check-importmdx.txt';
fs.writeFileSync(outputFilePath, uniqueFiles.join('\n'));
console.log(`중복되지 않은 파일 목록이 ${outputFilePath}에 저장되었습니다.`);
