#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 설정
const DOCS_DIR = './docs';
const OUTPUT_DIR = './exports/word';

// Word로 변환할 제품 폴더 목록
const PRODUCTS = [
  // APM
  'java',
  'nodejs',
  'python',
  'php',
  'dotnet',
  'golang',
  
  // Database
  'mysql',
  'postgresql',
  'mongodb',
  'oracle',
  'oracle-pro',
  'mssql',
  'redis',
  'tibero',
  'altibase',
  'cubrid',
  'db2',
  'sapase',
  
  // Infrastructure
  'kubernetes',
  'server',
  'npm',
  
  // Cloud
  'aws-log',
  'amazon-ecs',
  'amazon-cloudwatch',
  'azure',
  'ncloud',
  'oracle-cloud',
  
  // Other monitoring
  'browser',
  'log',
  'url',
  'url-pro',
  'nms',
  'mobile',
  
  // Extensions
  'opentelemetry',
  'openmetrics',
  'telegraf'
];

// 출력 디렉토리 생성
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 마크다운 파일 수집 함수
function collectMarkdownFiles(dir) {
  const files = [];
  
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    items.forEach(item => {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.match(/\.(md|mdx)$/i)) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files.sort(); // 파일명 순서대로 정렬
}

// 제품별 Word 파일 생성
function exportProduct(productName) {
  const productDir = path.join(DOCS_DIR, productName);
  
  if (!fs.existsSync(productDir)) {
    console.log(`⚠️  ${productName}: 폴더가 존재하지 않습니다.`);
    return;
  }
  
  const markdownFiles = collectMarkdownFiles(productDir);
  
  if (markdownFiles.length === 0) {
    console.log(`⚠️  ${productName}: 마크다운 파일이 없습니다.`);
    return;
  }
  
  const outputFile = path.join(OUTPUT_DIR, `${productName}-manual.docx`);
  const fileList = markdownFiles.join(' ');
  
  try {
    console.log(`📝 ${productName}: ${markdownFiles.length}개 파일 변환 중...`);
    
    // pandoc 명령어 실행
    const command = `pandoc ${fileList} -o "${outputFile}" --toc --toc-depth=3 -s`;
    execSync(command, { stdio: 'pipe' });
    
    console.log(`✅ ${productName}: ${outputFile} 생성 완료`);
  } catch (error) {
    console.error(`❌ ${productName}: 변환 실패`);
    console.error(error.message);
  }
}

// 제품 카테고리 정의
const CATEGORIES = {
  'APM': ['java', 'nodejs', 'python', 'php', 'dotnet', 'golang'],
  'Database': ['mysql', 'postgresql', 'mongodb', 'oracle', 'oracle-pro', 'mssql', 'redis', 'tibero', 'altibase', 'cubrid', 'db2', 'sapase'],
  'Infrastructure': ['kubernetes', 'server', 'npm'],
  'Cloud': ['aws-log', 'amazon-ecs', 'amazon-cloudwatch', 'azure', 'ncloud', 'oracle-cloud'],
  'Monitoring': ['browser', 'log', 'url', 'url-pro', 'nms', 'mobile'],
  'Extensions': ['opentelemetry', 'openmetrics', 'telegraf']
};

// 메인 실행
console.log('='.repeat(60));
console.log('📚 WhaTap Documentation Export to Word');
console.log('='.repeat(60));
console.log(`출력 폴더: ${OUTPUT_DIR}`);
console.log('');

// 커맨드 라인 인자로 제품 지정
const targetProducts = process.argv.slice(2);

if (targetProducts.length > 0) {
  // 특정 제품만 변환
  console.log(`📦 지정된 제품만 변환: ${targetProducts.join(', ')}\n`);
  targetProducts.forEach(exportProduct);
} else {
  // 전체 변환 (카테고리별로 구분하여 표시)
  console.log(`📦 전체 ${PRODUCTS.length}개 제품 변환\n`);
  
  Object.entries(CATEGORIES).forEach(([category, products]) => {
    console.log(`\n📁 ${category}`);
    console.log('-'.repeat(60));
    products.forEach(exportProduct);
  });
}

console.log('\n' + '='.repeat(60));
console.log('✨ 변환 완료!');
console.log(`📂 출력 위치: ${OUTPUT_DIR}`);
console.log('='.repeat(60));