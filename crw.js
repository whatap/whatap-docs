// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/service/service-2_3_x';

// URL을 '/'로 분할하여 배열로 만든 후 배열의 마지막 요소 가져오기
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
console.log(lastUrl);

// Axios를 사용하여 웹 페이지 HTML 가져오기 20
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

                        // codeInUl 또는 codeInP 바로 다음에 있는 <ul> 가져오기
                        const nextUlAfterCodeInUl = featureInUl.next('ul');
                        const nextUlAfterCodeInP = featureInP.next('ul');
                        // console.log(nextUlAfterCodeInP);
                        console.log(nextUlAfterCodeInP);
                        // nextUlAfterCodeInUl 또는 nextUlAfterCodeInP가 존재하면 <ul> 안의 내용을 features 배열에 추가
                        if (nextUlAfterCodeInUl && nextUlAfterCodeInUl.length > 0) {
                            nextUlAfterCodeInUl.find('li').each((index, liElement) => {
                                features.add($(liElement).text().trim());
                            });
                        }
                        if (nextUlAfterCodeInP && nextUlAfterCodeInP.length > 0) {
                            // <ul> 안의 각 <li> 요소에 대해 처리
                            nextUlAfterCodeInP.children('li').each((index, liElement) => {
                                // 각 <li> 요소의 텍스트를 가져와 features에 추가
                                features.add($(liElement).text().trim());
                            });
                        }

                        // 출력할 필요 없는 경우는 건너뛰기
                        if (features.size === 0) return;

                        // 중복 체크 및 MDX 형식으로 데이터 생성하여 파일 내용에 추가
                        const content = `## ${version} - ${date} - ${productName}`;
                        if (!contentSet.has(content)) {
                            mdxContent += content + '\n\n';
                            contentSet.add(content);
                        }
                        mdxContent += `### ${featureName}\n\n` +
                            [...features].map(feature => `- ${feature}`).join('\n\n') +
                            '\n\n';
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

                    // codeInUl 또는 codeInP 바로 다음에 있는 <ul> 가져오기
                    const nextUlAfterCodeInUl = featureInUl.next('ul');
                    const nextUlAfterCodeInP = featureInP.next('ul');
                    // nextUlAfterCodeInUl 또는 nextUlAfterCodeInP가 존재하면 <ul> 안의 내용을 features 배열에 추가
                    if (nextUlAfterCodeInUl.length > 0) {
                        nextUlAfterCodeInUl.find('li').each((index, liElement) => {
                            features.add($(liElement).text().trim());
                        });
                    }
                    if (nextUlAfterCodeInP.length > 0) {
                        nextUlAfterCodeInP.find('li').each((index, liElement) => {
                            features.add($(liElement).text().trim());
                        });
                    }

                    // 출력할 필요 없는 경우는 건너뛰기
                    if (features.size === 0) return;

                    // 중복 체크 및 MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    const content = `## ${version} - ${date} - ${productName}`;
                    if (!contentSet.has(content)) {
                        mdxContent += content + '\n\n';
                        contentSet.add(content);
                    }
                    mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
                        '\n\n';
                }
            });
        });

        // MDX 파일로 데이터 저장
        const fileName = `./crw-data/_import_${lastUrl}.mdx`; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });