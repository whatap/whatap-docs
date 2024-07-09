const fs = require('fs');
const path = require('path');

function deleteMdxFilesInDirectories(directories) {
    directories.forEach(directory => {
        deleteMdxFiles(directory);
    });
}

function deleteMdxFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }
                
                if (stat.isDirectory()) {
                    // 하위 디렉토리일 경우 재귀적으로 호출
                    deleteMdxFiles(filePath);
                } else if (file.endsWith('.mdx')) {
                    // .mdx 파일일 경우 삭제
                    fs.unlink(filePath, err => {
                        if (err) {
                            console.error('Error deleting file:', err);
                        } else {
                            console.log('Deleted:', filePath);
                        }
                    });
                }
            });
        });
    });
}

// 삭제할 파일이 있는 디렉토리 경로들 설정
const targetDirectories = ['crw-data/crwld-service-test'];
deleteMdxFilesInDirectories(targetDirectories);
