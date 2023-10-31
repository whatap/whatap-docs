const fs = require("fs");
const sharp = require("sharp");
const path = require("path");
const { json } = require("body-parser");

const directoryPath = './static/img';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    const imageInfo = {};

    files.forEach((file) => {
        const imagePath = path.join(directoryPath, file);
        sharp(imagePath).metadata((err, metadata) => {
            if (err) {
                console.error(`Error reading metadata for ${file}:`, err);
            } else {
                imageInfo[file] = { width: metadata.width, height: metadata.height };
            }
            const jsonOutput = JSON.stringify(imageInfo, null, 2);
            fs.writeFileSync("./src/components/sizeOfimages.json", jsonOutput, 'utf-8');
        });
    });
    console.log("complete");
});