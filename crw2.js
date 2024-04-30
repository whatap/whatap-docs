// 구성2
// 1. 제품별로 묶고
// 2. 날짜 순서로 기능 상세 추가
// 2.1. 버전 코드 태그 추가
// 2.2. feature, new, changed
// 3. mdx 추가 형식

// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/service/service-2_3_x';

// URL을 '/'로 분할하여 배열로 만든 후 배열의 마지막 요소 가져오기
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
const seg2 = lastUrl.split('-');
const lastUrl2 = seg2[0];

// 구성2
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        // MDX 파일로 데이터 저장할 변수
        let mdxContent = '';

        // 중복을 제거하기 위한 Set
        let contentSet = new Set();

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // 버전 정보 가져오기
            const version = $(element).find('h2').text().trim();
            // 날짜 정보 가져오기
            const date = $(element).find('h2 + p').text().trim();

            // <h3>를 찾아냄
            $(element).find('h3').each((index, h3Element) => {
                // 제품명 가져오기
                const productName = $(h3Element).text().trim();

                // <h4>를 찾음
                const h4Elements = $(h3Element).nextUntil('h3', 'h4');

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
                        const featureInUl = nextUl.find('code.Feature, code.New, code.Changed');
                        const featureInP = nextP.find('code.Feature, code.New, code.Changed');
                        // 중복 제거한 기능 상세 가져오기
                        const features = new Set();
                        featureInUl.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });
                        featureInP.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });
                        // 출력할 필요 없는 경우는 건너뜁니다.
                        if (features.size === 0) return;

                        // 중복 체크 및 MDX 형식으로 데이터 생성하여 파일 내용에 추가
                        // const content = `## ${version} - ${date} - ${productName}`;
                        // if (!contentSet.has(content)) {
                        //     mdxContent += content + '\n\n';
                        //     contentSet.add(content);
                        // }
                        // mdxContent += `### ${featureName}\n\n` +
                        //     [...features].map(feature => `- ${feature}`).join('\n\n') +
                        //     '\n\n';
                        
                        // 구성2 요건
                        const content2 = `### ${version} - ${date} - ${productName}` + `\n`; 
                        if (!contentSet.has(content2)){
                          mdxContent += content2 + '\n';
                          contentSet.add(content2);
                        }
                        mdxContent += `#### ${featureName}\n\n` +
                            [...features].map(feature => `- ${feature} <code class='changelog-service'>${version}</code>`).join('\n\n') +
                            '\n\n';

                    });
                } else {
                    // <h4>가 없는 경우
                    // <h3> 다음에 오는 <ul> 또는 <p> 찾기
                    const nextUl = $(h3Element).next('ul').first();
                    const nextP = $(h3Element).next('p').first();
                    // <ul> 또는 <p> 안에 있는 <code class="Feature"> 가져오기
                    const featureInUl = nextUl.find('code.Feature, code.New, code.Changed');
                    const featureInP = nextP.find('code.Feature, code.New, code.Changed');
                    // 중복 제거한 기능 상세 가져오기
                    const features = new Set();
                    featureInUl.each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });
                    featureInP.each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });
                    // 출력할 필요 없는 경우는 건너뜁니다.
                    if (features.size === 0) return;

                    // 중복 체크 및 MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    // const content = `## ${version} - ${date} - ${productName}`;
                    // if (!contentSet.has(content)) {
                    //     mdxContent += content + '\n\n';
                    //     contentSet.add(content);
                    // }
                    // mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
                    //     '\n\n';

                    // 구성2 요건
                    const content2 = `### ${version} - ${date} - ${productName}` + `\n`; 
                    if (!contentSet.has(content2)){
                      mdxContent += content2 + '\n';
                      contentSet.add(content2);
                    }
                    mdxContent += [...features].map(feature => `- ${feature} <code class='changelog-service'>${version}</code>`).join('\n\n')+
                        '\n\n';

                }
            });
        });

        // MDX 파일로 데이터 저장
        // const fileName = `./crw-data/_import_test_${lastUrl}.mdx`; 
        // fs.writeFileSync(fileName, mdxContent);
        // console.log(`MDX file saved: ${fileName}`);

        const fileName = `./crw-data/_import-test-${lastUrl2}.mdx`;
        let existingContent = '';
        if (fs.existsSync(fileName)) {
            existingContent = fs.readFileSync(fileName, 'utf-8');
        }

        const updatedContent = mdxContent + existingContent;

        fs.writeFileSync(fileName, updatedContent);
        console.log(`MDX file updated: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });