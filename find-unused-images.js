const fs = require('fs').promises;
const path = require('path');

// 이미지 파일 경로를 저장할 집합
const imagePathsSet = new Set();

// docs 폴더의 모든 mdx 파일을 찾는 재귀 함수
async function findImagesInMdxFiles(dir) {
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
          await findImagesInMdxFiles(path.join(dir, file.name)); // 디렉토리면 재귀적으로 탐색 계속
      } else if (file.name.endsWith('.mdx')) {
          const data = await fs.readFile(path.join(dir, file.name), 'utf8');
          const imagePaths = data.match(/!\[.*?\]\((.*?)\)/g); // Markdown 이미지 링크 추출
          const imagePaths2 = data.match(/img=['"](.*?)['"]/g);
          
          //https로 시작하는 경우 제외
          if (imagePaths) {
              imagePaths.forEach((imgPath) => {
                  const match = imgPath.match(/\((.*)\)/);
                  if (match && !match[1].startsWith('https://')) {
                      imagePathsSet.add(match[1].replace('/img/', '')); // 이미지 경로 집합에 저장
                  }
              });
          } else if (imagePaths2) {
              imagePaths2.forEach((imgPath) => {
                  const match2 = imgPath.match(/img=['"](.*?)['"]/);
                  if (match2) {
                      imagePathsSet.add(match2[1]); // 이미지 경로 집합에 저장
                  }
              });
          }
      }
    }
}

// 이미지 파일 경로를 텍스트 파일로 출력하는 함수
async function saveImagePathsToTextFile(docsFolder, outputPath) {
    await findImagesInMdxFiles(docsFolder);

    // 이미지 경로가 저장된 집합을 배열로 변환
    const imagePathsArray = Array.from(imagePathsSet);
    
    // 이미지 경로를 개행문자와 함께 합친 문자열 생성
    const imagePathString = imagePathsArray.join('\n');

    // 파일에 이미지 경로 문자열 쓰기
    await fs.writeFile(outputPath, imagePathString, 'utf8');
    console.log('이미지 경로가 imagePaths.txt 파일로 저장되었습니다.');
}

// 사용 예 - 'docs' 폴더 내의 모든 mdx 파일을 검색하여 imagePaths.txt 파일로 이미지 경로 저장
saveImagePathsToTextFile('docs', 'imagePaths.txt')
    .catch((error) => {
        console.error('An error occurred:', error);
    });