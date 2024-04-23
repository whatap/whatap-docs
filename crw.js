// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/service/service-2_2_x';

// URL을 '/'로 분할하여 배열로 만든 후, 배열의 마지막 요소를 가져옵니다.
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
console.log(lastUrl); 

// 고쳐야 하는 것:
// 신규 기능 등 구성 요건 다른 경우 조건 생성 필요
// 으앙나아아아아아악!!

// feature 기준으로 제품명 가져오기, 리스트 형식 출력 방식 


// Axios를 사용하여 웹 페이지 HTML 가져오기 13
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // <h3>를 찾아냄
            const h3Elements = $(element).find('h3');

            // <h4>를 찾아냄
            const h4Elements = $(element).find('h4');

            // 각 <h3>에 대해 처리
            h3Elements.each((index, h3Element) => {
                
                const nextH3 = $(h3Element).next('h3').first(); // <h3>의 다음 형제 <h3>
                const nextUl = $(h3Element).next('ul').first(); // <h3> 다음 <ul>
                const nextP = $(h3Element).next('p').first(); // <h3> 다음 <p>

                // 다음으로 <code class="Feature">가 있는 <p> 또는 <ul>을 찾음
                const featureInP = nextP.find('code.Feature, code.New');
                const featureInUl = nextUl.find('code.Feature, code.New');

                const h3nextH4 = $(h3Element).next('h4').first(); // <h3> 다음의 첫 번째 <h4>

                // <h3>가 존재할 때
                // <code class="Feature">가 발견되었으면 처리
                if (featureInP.length > 0 || featureInUl.length > 0) {

                    // 버전 정보 가져오기
                    const version = $(element).find('h2').text().trim();
                    // 날짜 정보 가져오기
                    const date = $(element).find('h2 + p').text().trim();
                    // 제품명 가져오기
                    const productName = $(h3Element).text().trim();

                    // 중복을 제거한 <code class="Feature"> 내용 가져오기
                    const features = new Set();

                    featureInP.each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });
                    featureInUl.each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });

                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    if (features.size > 0) {
                        mdxContent += `## ${version} - ${date} - ${productName}\n\n`;
                        mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n');
                        mdxContent += '\n\n';
                    } 
                } 
                else if (h3nextH4.length > 0) {
                    
                    // 버전 정보 가져오기
                    const version = $(element).find('h2').text().trim();
                    // 날짜 정보 가져오기
                    const date = $(element).find('h2 + p').text().trim();
                    // 제품명 가져오기
                    // const productName = $(h3Element).text().trim();

                    h4Elements.each((index, h4Element) => {

                        const productName = $(h4Element).prevAll('h3').first().text().trim();
                        
                        // 기능명 가져오기 
                        const fcName = $(h4Element).text().trim();
                        
                        // 중복을 제거한 <code class="Feature"> 내용 가져오기
                        const features = new Set();

                        featureInP.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });
                        featureInUl.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });

                        const h4nextUl = $(h4Element).next('ul').first(); 
                        const h4nextP = $(h4Element).next('p').first();

                        const featureInh4P = h4nextP.find('code.Feature, code.New');
                        const featureInh4Ul = h4nextUl.find('code.Feature, code.New');

                        console.log(fcName);
                        
                        // 중복 제거한 기능 상세 가져오기 
                        const features2 = new Set();

                        featureInh4P.each((idx, code) => {
                            features2.add($(code).parent().html().trim());
                        });
                        featureInh4Ul.each((idx, code) => {
                            features2.add($(code).parent().html().trim());
                        });

                        // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                        if (features2.size > 0) {
                            mdxContent += `## ${version} - ${date} - ${productName}\n\n`;
                            mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n');
                            mdxContent += `### ${fcName}\n\n`;
                            mdxContent += [...features2].map(feature => `- ${feature}`).join('\n\n');
                            mdxContent += '\n\n';
                        }
                        else {
                            // <code class="Feature">가 없을 경우 pass
                            return;
                        }

                    });

                }
                else {
                    // <code class="Feature">가 없을 경우 pass
                    return;
                }
            });

        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/'+lastUrl+'.mdx'; // 파일 경로 및 이름 설정
        // const fileName = './crw-data/crawled-data.mdx'; 
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });
