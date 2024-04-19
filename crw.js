// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/service/service-2_3_x';

// 고쳐야 하는 것:
// 묶음에 feature 있을 경우, feature 없는 <p> 배열이 출력
// 신규 기능 등 구성 요건 다른 경우 조건 생성 필요
// h3 여러 개일 때 다 가져오질 못 함
// 으앙나아아아아아악!!

// 반쯤 해결: 
// feature 기준으로 제품명 가져오기, 리스트 형식 출력 방식 
 
// Axios를 사용하여 웹 페이지 HTML 가져오기 9
// Axios를 사용하여 웹 페이지 HTML 가져오기
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
                const prevH3 = $(h3Element).prevAll('h3').first(); // <h3>의 이전 형제 <h3>
                const prevUl = $(h3Element).prevAll('ul').first(); // <h3> 이전의 <ul>
                const prevP = $(h3Element).prevAll('p').first(); // <h3> 이전의 <p>

                // <code class="Feature">가 있는 <p> 또는 <ul>을 찾음
                const featureInP = prevP.find('code.Feature');
                const featureInUl = prevUl.find('code.Feature');

                // <code class="Feature">가 발견되었으면 처리
                if (featureInP.length > 0 || featureInUl.length > 0) {
                    // 버전 정보 가져오기
                    const version = $(element).find('h2').text().trim();
                    // 날짜 정보 가져오기
                    const date = $(element).find('h2 + p').text().trim();
                    // 제품명 가져오기
                    const productName = $(prevH3).text().trim();

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
                } else {
                    // <code class="Feature">가 없거나 <h3>가 하나일 경우 pass
                    return;
                }
            });
        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/crawled-data.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });
