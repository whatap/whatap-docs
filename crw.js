// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/service/service-2_3_x';

// URL을 '/'로 분할하여 배열로 만든 후, 배열의 마지막 요소를 가져옵니다.
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
console.log(lastUrl); 

// 고쳐야 하는 것:
// 신규 기능 등 구성 요건 다른 경우 조건 생성 필요
// 으앙나아아아아아악!!

// feature 기준으로 제품명 가져오기, 리스트 형식 출력 방식 

// 중복건 재수정 필요

// Axios를 사용하여 웹 페이지 HTML 가져오기 16
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // <h3>를 찾아냄
            const h3Elements = $(element).find('h3');

            // 각 <h3>에 대해 처리
            h3Elements.each((index, h3Element) => {
                // <h4>를 찾음
                const h4Elements = $(h3Element).nextUntil('h3', 'h4');

                // 버전 정보 가져오기
                const version = $(element).find('h2').text().trim();
                // 날짜 정보 가져오기
                const date = $(element).find('h2 + p').text().trim();
                // 제품명 가져오기
                const productName = $(h3Element).text().trim();

                // <h4>가 있는 경우
                if (h4Elements.length > 0) {
                    // <h4>에 대해 반복 처리
                    h4Elements.each((index, h4Element) => {
                        // 기능명 가져오기
                        const featureName = $(h4Element).text().trim();
                        // <h4> 다음에 오는 <ul> 또는 <p> 찾기
                        const nextUl = $(h4Element).next('ul').first();
                        const nextP = $(h4Element).next('p').first();
                        // <ul> 또는 <p> 안에 있는 <code class="Feature"> 가져오기
                        const featureInUl = nextUl.find('code.Feature, code.New');
                        const featureInP = nextP.find('code.Feature, code.New');
                        // 중복 제거한 기능 상세 가져오기
                        const features = new Set();
                        featureInUl.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });
                        featureInP.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });
                        // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                        if (features.size > 0) {
                            mdxContent += `## ${version} - ${date} - ${productName}\n\n`;
                            mdxContent += `### ${featureName}\n\n`;
                            mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n');
                            mdxContent += '\n\n';
                        }
                    });
                } else {
                    // <h4>가 없는 경우
                    // <h3> 다음에 오는 <ul> 또는 <p> 찾기
                    const nextUl = $(h3Element).next('ul').first();
                    const nextP = $(h3Element).next('p').first();
                    // <ul> 또는 <p> 안에 있는 <code class="Feature"> 가져오기
                    const featureInUl = nextUl.find('code.Feature, code.New');
                    const featureInP = nextP.find('code.Feature, code.New');
                    // 중복 제거한 기능 상세 가져오기
                    const features = new Set();
                    featureInUl.each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });
                    featureInP.each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });
                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    if (features.size > 0) {
                        mdxContent += `## ${version} - ${date} - ${productName}\n\n`;
                        mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n');
                        mdxContent += '\n\n';
                    }
                }
            });

        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/'+lastUrl+'.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });