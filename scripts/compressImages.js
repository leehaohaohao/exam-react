const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 源图片目录
const sourceDir = path.join(__dirname, '../src/assets/Photo');
// 压缩后的图片目录
const outputDir = path.join(__dirname, '../src/assets/Photo/compressed');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 压缩配置
const compressOptions = {
    quality: 80, // 图片质量
    width: 1200, // 最大宽度
    height: 800, // 最大高度
    fit: 'inside', // 保持宽高比
    withoutEnlargement: true // 不放大图片
};

// 压缩单张图片
async function compressImage(inputPath, outputPath) {
    try {
        const stats = fs.statSync(inputPath);
        const originalSize = stats.size;
        
        await sharp(inputPath)
            .resize(compressOptions.width, compressOptions.height, {
                fit: compressOptions.fit,
                withoutEnlargement: compressOptions.withoutEnlargement
            })
            .jpeg({ quality: compressOptions.quality })
            .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = newStats.size;
        const compressionRatio = ((originalSize - newSize) / originalSize * 100).toFixed(2);

        console.log(`压缩完成: ${path.basename(inputPath)}`);
        console.log(`原始大小: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
        console.log(`压缩后大小: ${(newSize / 1024 / 1024).toFixed(2)}MB`);
        console.log(`压缩率: ${compressionRatio}%`);
        console.log('------------------------');
    } catch (error) {
        console.error(`压缩失败 ${path.basename(inputPath)}:`, error);
    }
}

// 批量压缩图片
async function compressAllImages() {
    const files = fs.readdirSync(sourceDir);
    const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`找到 ${imageFiles.length} 张图片需要压缩`);

    for (const file of imageFiles) {
        const inputPath = path.join(sourceDir, file);
        const outputPath = path.join(outputDir, file);
        await compressImage(inputPath, outputPath);
    }

    console.log('所有图片压缩完成！');
}

// 执行压缩
compressAllImages(); 