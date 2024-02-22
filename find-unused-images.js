const fs = require('fs');

const allImages = fs.readFileSync(imagePathsAll.txt);
const mdxImages = fs.readFileSync(imagePaths.txt);

// 파일 내용을 배열로 변환
const allArray = allImages.split('\n');
const mdxArray = mdxImages.split('\n');

// 배열 결합
const combinedArray = allArray.concat(mdxArray);

// 중복 제거
const uniqueArray = [...new Set(combinedArray)];

fs.writeFile('unused', '', { flag: 'w' }, function (err) {
    if (err) throw err;
    console.log("It's saved!");
})