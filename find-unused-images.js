const fs = require('fs');

const allImages = fs.readFileSync('imagePathsAll.txt', 'utf-8');
const mdxImages = fs.readFileSync('imagePaths.txt', 'utf-8');

// 파일 내용을 배열로 변환
const allArray = allImages.split('\n');
const mdxArray = mdxImages.split('\n');

// 두 배열에서 내용을 비교해 중복된 값 제거하기
const diffArray = allArray.filter(x => !mdxArray.includes(x)).concat(mdxArray.filter(x => !allArray.includes(x)));

fs.writeFile('unusedImages.txt', diffArray.sort().join('\n'), { flag: 'w' }, function (err) {
    if (err) throw err;
    console.log("It's saved!");
})