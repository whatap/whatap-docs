const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 시작 URL 정의
const startUrl = 'https://docs.whatap.io/release-notes/java/java-2_2_26';
const baseUrl = 'https://docs.whatap.io';

axios.get(startUrl)
    .then(response => {
        const $ = cheerio.load(response.data);
        let mdxContent = '';
        let contentSet = new Set();

        const version = $('header').text().trim();
        const date = $('header + p').text().trim();

        // menu__list 클래스를 가진 ul 요소 선택
        const menuList = $('ul.menu__list');

        // 시작 URL을 선택
        const startLink = menuList.find('a[href^="' + startUrl.replace(baseUrl, '') + '"]');

        // 시작 링크가 속한 li 요소 선택
        const listItem = startLink.closest('li');

        // 시작 링크의 부모 li 요소의 인덱스를 가져와서 시작 인덱스로 설정
        const startIndex = menuList.find('li').index(listItem);

        // 시작 인덱스부터 시작하여 선택할 li 요소의 개수
        const selectCount = 3; // 예시: 시작 인덱스부터 3개의 li 요소 선택

        // 선택된 li 요소들의 각각의 a 태그의 href 속성 가져오기
        const selectedUrls = [];
        menuList.find('li').slice(startIndex, startIndex + selectCount).each((index, element) => {
            const link = $(element).find('a.menu__link').attr('href');
            selectedUrls.push(link);
        });

        // 각 선택된 URL에 대해 데이터 처리 및 파일 작성
        selectedUrls.forEach(selectedUrl => {
            axios.get(selectedUrl)
                .then(response => {
                    const $ = cheerio.load(response.data);

                    // 각 페이지에 대한 데이터 처리 로직 추가
                    const sectionElements = $('section.remark-sectionize-h2');

                    if (sectionElements.length > 0) {
                        sectionElements.each((index, element) => {
                            $(element).find('h2').each((index, h2Element) => {
                                // 제품군 내 제품명
                                const productName = $(h2Element).text().trim();
                                console.log(productName);

                                // 기능 상세
                                const nextUl = $(h2Element).next('ul').first();
                                const nextP = $(h2Element).next('p').first();

                                const featureInUl = nextUl.find('code.Feature, code.New, code.Deprecated, code.Deprecate');
                                const featureInP = nextP.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

                                // 중복 제거한 기능 상세 가져오기
                                const features = new Set();
                                featureInUl.each((idx, code) => {
                                    features.add($(code).parent().html().trim());
                                });
                                featureInP.each((idx, code) => {
                                    features.add($(code).parent().html().trim());
                                });

                                // 출력할 필요 없는 경우는 건너뛰기
                                if (features.size === 0) return;

                                // 중복 체크 및 MDX 형식으로 데이터 생성하여 파일 내용에 추가
                                const content = `#### ${version}` + ` - ${date}` + `\n`;
                                if (!contentSet.has(content)) {
                                    mdxContent += content + '\n';
                                    contentSet.add(content);
                                }
                                mdxContent += `##### ${productName}` + `\n\n` + [...features].map(feature => `- ${feature}`).join('\n\n') +
                                    '\n\n';
                            });
                        });
                    } else {
                        const ulContents = $('header + p').next('ul');
                        const featureInUl = ulContents.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

                        const pContents = $('header + p').next('p');
                        const featureInP = pContents.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

                        const features = new Set();
                        featureInUl.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });

                        featureInP.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });

                        if (features.size === 0) return;

                        const content = `#### ${version}` + ` - ${date}` + `\n`;
                        if (!contentSet.has(content)) {
                            mdxContent += content + '\n';
                            contentSet.add(content);
                        }
                        mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
                            '\n\n';
                    }

                    // mdx 파일 생성
                    const fileName = `./crw-data/crwld-agent/_import-test-${lastUrl2}-agent.mdx`;
                    let existingContent = '';
                    if (fs.existsSync(fileName)) {
                        existingContent = fs.readFileSync(fileName, 'utf-8');
                    }

                    const updatedContent = existingContent + mdxContent;

                    fs.writeFileSync(fileName, updatedContent);
                    console.log(`MDX file updated: ${fileName}`);
                })
                .catch(error => {
                    console.error('Error fetching web page:', error);
                });
        });
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });
