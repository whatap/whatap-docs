// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/service/service-2_3_x';


// Axios를 사용하여 웹 페이지 HTML 가져오기
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('ul').each((index, element) => {
            // <p> 안에 <code class="Feature">가 있는지 확인
            if ($(element).find('p code.Feature').length > 0) {
                const version = $(element).prevAll('h2').first().text().trim(); // 릴리스 노트 버전 정보 가져오기
                const date = $(element).prevAll('h2').first().next('p').text().trim(); // 릴리스 노트 날짜 가져오기
                const productName = $(element).prevAll('h3').first().find('code').text().trim(); // 제품명 가져오기

                const contentArray = []; // 각 릴리스 노트 내용을 저장할 배열

                // <p> 태그의 내용과 해당하는 <code class="Feature"> 태그의 내용을 배열에 저장
                $(element).find('p').each((idx, el) => {
                    const paragraph = $(el).html(); // <p> 태그의 HTML 내용 가져오기
                    const features = $(el).find('code.Feature').toArray(); // <p> 태그 내의 모든 <code class="Feature"> 태그 가져오기
                    if (features.length > 0) {
                        // <code class="Feature"> 태그가 있는 경우 '- '를 앞에 붙여서 내용을 배열에 저장
                        contentArray.push(...features.map(feat => `- ${$(feat).parent().html()}`));
                    }
                });

                // 중복된 내용 제거 후 리스트 형태로 작성
                const uniqueContent = Array.from(new Set(contentArray)).join('\n\n');

                // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                mdxContent += `## ${version} - ${date} - ${productName}\n\n${uniqueContent}\n\n`;
            }
        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/crawled-data.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });




// Axios를 사용하여 웹 페이지 HTML 가져오기2
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // 제품명 가져오기
            const productName = $(element).find('div.indentTab > h3').text().trim();

            // 릴리스 노트 버전 정보 가져오기
            const version = $(element).find('h2').text().trim();

            // 릴리스 노트 날짜 가져오기
            const date = $(element).find('h2 + p').text().trim();

            const contentArray = []; // 각 릴리스 노트 내용을 저장할 배열

            // <p> 태그의 내용과 해당하는 <code class="Feature"> 태그의 내용을 배열에 저장
            $(element).find('div.indentTab > ul > li > p').each((idx, el) => {
                const paragraph = $(el).html(); // <p> 태그의 HTML 내용 가져오기
                const features = $(el).find('code.Feature').toArray(); // <p> 태그 내의 모든 <code class="Feature"> 태그 가져오기
                if (features.length > 0) {
                    // <code class="Feature"> 태그가 있는 경우 '- '를 앞에 붙여서 내용을 배열에 저장
                    contentArray.push(...features.map(feat => `- ${$(feat).parent().html()}`));
                }
            });

            // 중복된 내용 제거 후 리스트 형태로 작성
            const uniqueContent = Array.from(new Set(contentArray)).join('\n\n');

            // MDX 형식으로 데이터 생성하여 파일 내용에 추가
            mdxContent += `## ${version} - ${date} - ${productName}\n\n${uniqueContent}\n\n`;
        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/crawled-data.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });



// Axios를 사용하여 웹 페이지 HTML 가져오기
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            const paragraphs = $(element).find('div.indentTab > ul > li > p'); // <p> 태그 가져오기

            // <p> 태그를 반복하면서 <code class="Feature">를 포함한 경우에만 처리
            paragraphs.each((idx, el) => {
                const paragraph = $(el).html(); // <p> 태그의 HTML 내용 가져오기
                const features = $(el).find('code.Feature').toArray(); // <p> 태그 내의 모든 <code class="Feature"> 태그 가져오기
                if (features.length > 0) {
                    const productName = $(element).find('div.indentTab > h3').text().trim(); // 제품명 가져오기
                    const version = $(element).find('h2').text().trim(); // 릴리스 노트 버전 정보 가져오기
                    const date = $(element).find('h2 + p').text().trim(); // 릴리스 노트 날짜 가져오기

                    const contentArray = []; // 각 릴리스 노트 내용을 저장할 배열

                    // <code class="Feature"> 태그가 있는 경우 '- '를 앞에 붙여서 내용을 배열에 저장
                    contentArray.push(...features.map(feat => `- ${$(feat).parent().html()}`));

                    // 중복된 내용 제거 후 리스트 형태로 작성
                    const uniqueContent = Array.from(new Set(contentArray)).join('\n\n');

                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    mdxContent += `## ${version} - ${date} - ${productName}\n\n${uniqueContent}\n\n`;
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



// Axios를 사용하여 웹 페이지 HTML 가져오기3
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // <h3> 옆에 있는 <ul> 또는 <p>를 선택합니다.
            const nextElement = $(element).find('h3').next();

            // <ul> 안에 <p>의 안에 있는 <code class="Feature">가 있는 경우
            if (nextElement.is('ul')) {
                nextElement.find('p').each((idx, el) => {
                    // <code class="Feature"> 태그가 있는 경우에만 출력
                    if ($(el).find('code.Feature').length > 0) {
                        // 릴리스 노트 버전 정보 가져오기
                        const version = $(element).find('h2').text().trim();
                        // 릴리스 노트 날짜 가져오기
                        const date = $(element).find('h2 + p').text().trim();
                        // 제품명 가져오기
                        const productName = $(element).find('div.indentTab > h3').text().trim();
                        // <code class="Feature"> 태그가 있는 <p>의 HTML 내용 가져오기
                        const featureContent = $(el).html().trim();
                        
                        // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                        mdxContent += `## ${version} - ${date} - ${productName}\n\n- ${featureContent}\n\n`;
                    }
                });
            }

            // <h3> 옆에 있는 <p>의 안에 있는 <code class="Feature">가 있는 경우
            if (nextElement.is('p')) {
                // <code class="Feature"> 태그가 있는 경우에만 출력
                if (nextElement.find('code.Feature').length > 0) {
                    // 릴리스 노트 버전 정보 가져오기
                    const version = $(element).find('h2').text().trim();
                    // 릴리스 노트 날짜 가져오기
                    const date = $(element).find('h2 + p').text().trim();
                    // 제품명 가져오기
                    const productName = $(element).find('div.indentTab > h3').text().trim();
                    // <code class="Feature"> 태그가 있는 <p>의 HTML 내용 가져오기
                    const featureContent = nextElement.html().trim();

                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    mdxContent += `## ${version} - ${date} - ${productName}\n\n- ${featureContent}\n\n`;
                }
            }
        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/crawled-data.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });

// Axios를 사용하여 웹 페이지 HTML 가져오기4
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // <h3> 옆에 있는 <ul> 또는 <p>를 선택합니다.
            const nextElement = $(element).find('h3').next();

            // <ul> 안에 <p>의 안에 있는 <code class="Feature">가 있는 경우
            if (nextElement.is('ul')) {
                // <h3> 옆에 있는 <ul> 안의 <p>에 <code class="Feature">가 있는지 확인
                const hasFeatureInUl = nextElement.find('p code.Feature').length > 0;

                // <h3> 옆에 있는 <p>에 <code class="Feature">가 있는지 확인
                const hasFeatureInP = $(element).find('h3').next('p').find('code.Feature').length > 0;

                // 둘 중 하나라도 <code class="Feature">가 있는 경우에만 출력
                if (hasFeatureInUl || hasFeatureInP) {
                    // 릴리스 노트 버전 정보 가져오기
                    const version = $(element).find('h2').text().trim();
                    // 릴리스 노트 날짜 가져오기
                    const date = $(element).find('h2 + p').text().trim();
                    // 제품명 가져오기
                    const productName = $(element).find('div.indentTab > h3').text().trim();
                    // <ul> 안의 <p>에 있는 <code class="Feature"> 태그의 내용 가져오기
                    const featureContent = nextElement.find('p').html().trim();

                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    mdxContent += `## ${version} - ${date} - ${productName}\n\n- ${featureContent}\n\n`;
                }
            }

            // <h3> 옆에 있는 <p>의 안에 있는 <code class="Feature">가 있는 경우
            if (nextElement.is('p')) {
                // <h3> 옆의 <p>에 <code class="Feature">가 있는지 확인
                const hasFeatureInP = nextElement.find('code.Feature').length > 0;

                // <code class="Feature">가 있는 경우에만 출력
                if (hasFeatureInP) {
                    // 릴리스 노트 버전 정보 가져오기
                    const version = $(element).find('h2').text().trim();
                    // 릴리스 노트 날짜 가져오기
                    const date = $(element).find('h2 + p').text().trim();
                    // 제품명 가져오기
                    const productName = $(element).find('div.indentTab > h3').text().trim();
                    // <p>의 안에 있는 <code class="Feature"> 태그의 내용 가져오기
                    const featureContent = nextElement.html().trim();

                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    mdxContent += `## ${version} - ${date} - ${productName}\n\n- ${featureContent}\n\n`;
                }
            }
        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/crawled-data.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });


// Axios를 사용하여 웹 페이지 HTML 가져오기5
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // <h3> 옆에 있는 <ul> 또는 <p>를 선택합니다.
            const nextElement = $(element).find('h3').next();

            // <ul> 안에 <p>의 안에 있는 <code class="Feature">가 있는 경우
            if (nextElement.is('ul')) {
                // 릴리스 노트 버전 정보 가져오기
                const version = $(element).find('h2').text().trim();
                // 릴리스 노트 날짜 가져오기
                const date = $(element).find('h2 + p').text().trim();
                // 제품명 가져오기
                const productName = $(element).find('div.indentTab > h3').text().trim();

                // 중복을 제거한 <code class="Feature"> 내용 가져오기
                const features = new Set();
                nextElement.find('p code.Feature').each((idx, code) => {
                    features.add($(code).parent().html().trim());
                });

                // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                if (features.size > 0) {
                    mdxContent += `## ${version} - ${date} - ${productName}\n\n`;
                    mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n');
                    mdxContent += '\n\n';
                }
            }

            // <h3> 옆에 있는 <p>의 안에 있는 <code class="Feature">가 있는 경우
            if (nextElement.is('p')) {
                // <code class="Feature">가 있는 경우에만 출력
                if (nextElement.find('code.Feature').length > 0) {
                    // 릴리스 노트 버전 정보 가져오기
                    const version = $(element).find('h2').text().trim();
                    // 릴리스 노트 날짜 가져오기
                    const date = $(element).find('h2 + p').text().trim();
                    // 제품명 가져오기
                    const productName = $(element).find('div.indentTab > h3').text().trim();
                    // <p>의 안에 있는 <code class="Feature"> 태그의 내용 가져오기
                    const featureContent = nextElement.html().trim();

                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    mdxContent += `## ${version} - ${date} - ${productName}\n\n- ${featureContent}\n\n`;
                }
            }
        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/crawled-data.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });



// Axios를 사용하여 웹 페이지 HTML 가져오기5-2
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // <h3> 옆에 있는 <ul> 또는 <p>를 선택합니다.
            const nextElement = $(element).find('h3').next();

            // <ul> 안에 <p>의 안에 있는 <code class="Feature">가 있는 경우
            if (nextElement.is('ul')) {
                // 릴리스 노트 버전 정보 가져오기
                const version = $(element).find('h2').text().trim();
                // 릴리스 노트 날짜 가져오기
                const date = $(element).find('h2 + p').text().trim();

                // 제품명 초기화 
                let productName = '';
                // <h3>를 찾아냄
                const h3Elements = $(element).find('h3');
                // <h3>가 여러 개인 경우 가장 가까운 <code class="Feature">를 찾음
                h3Elements.each((index, h3Element) => {
                const nextElement = $(h3Element).next(); // <h3>의 다음 형제 요소

                // <ul> 또는 <p>에서 <code class="Feature">를 찾음
                const featureElement = nextElement.find('ul code.Feature, p code.Feature').first();

                productName = $(h3Element).text().trim();
                });

                // 제품명 가져오기
                // const productName = $(element).find('div.indentTab > h3').text().trim();

                // 중복을 제거한 <code class="Feature"> 내용 가져오기
                const features = new Set();
                nextElement.find('p code.Feature').each((idx, code) => {
                    features.add($(code).parent().html().trim());
                });

                // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                if (features.size > 0) {
                    mdxContent += `## ${version} - ${date} - ${productName}\n\n`;
                    mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n');
                    mdxContent += '\n\n';
                }
            }

            // <h3> 옆에 있는 <p>의 안에 있는 <code class="Feature">가 있는 경우
            if (nextElement.is('p')) {
                // <code class="Feature">가 있는 경우에만 출력
                if (nextElement.find('code.Feature').length > 0) {
                    // 릴리스 노트 버전 정보 가져오기
                    const version = $(element).find('h2').text().trim();
                    // 릴리스 노트 날짜 가져오기
                    const date = $(element).find('h2 + p').text().trim();

                    // 제품명 초기화 
                    let productName = '';
                    // <h3>를 찾아냄
                    const h3Elements = $(element).find('h3');
                    // <h3>가 여러 개인 경우 가장 가까운 <code class="Feature">를 찾음
                    h3Elements.each((index, h3Element) => {
                    const nextElement = $(h3Element).next(); // <h3>의 다음 형제 요소

                    // <ul> 또는 <p>에서 <code class="Feature">를 찾음
                    const featureElement = nextElement.find('ul code.Feature, p code.Feature').first();
                    
                    productName = $(h3Element).text().trim();
                    });

                    // 제품명 가져오기
                    // const productName = $(element).find('div.indentTab > h3').text().trim();

                    // <p>의 안에 있는 <code class="Feature"> 태그의 내용 가져오기
                    const featureContent = nextElement.html().trim();

                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    mdxContent += `## ${version} - ${date} - ${productName}\n\n- ${featureContent}\n\n`;
                }
            }
        });

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/crawled-data.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });



// Axios를 사용하여 웹 페이지 HTML 가져오기6
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // <div class="indentTab"> 안에 있는 <h3>가 여러 개인 경우
            const productNameElement = $(element).find('div.indentTab > h3');
            let productName = ''; // 출력할 제품명 초기화

            // 각 <code class="Feature">에 대해 가장 가까운 <h3>를 찾습니다.
            $(element).find('code.Feature').each((idx, code) => {
              let closestH3;

              // <code class="Feature">가 포함된 부모 요소를 찾습니다.
              const parentElement = $(code).parent();

              // <code class="Feature">가 속한 <p> 또는 <ul>을 찾습니다.
              const closestP = parentElement.is('p') ? parentElement : parentElement.closest('p');
              const closestUl = parentElement.is('ul') ? parentElement : parentElement.closest('ul');

              // <p>나 <ul>이 존재하면 그것들로부터 가장 가까운 <h3>를 찾습니다.
              if (closestP.length > 0 || closestUl.length > 0) {
                  closestH3 = closestP.length > 0 ? closestP.prevAll('h3').first() : closestUl.prevAll('h3').first();
              }

              if (closestH3 && closestH3.length > 0) {
                  productName = closestH3.text().trim();
                  return false; // 반복문 종료
              }
            });

            // 제품명이 설정되었고, <code class="Feature">가 있는 경우에만 출력
            if (productName) {
                // 릴리스 노트 버전 정보 가져오기
                const version = $(element).find('h2').text().trim();
                // 릴리스 노트 날짜 가져오기
                const date = $(element).find('h2 + p').text().trim();

                // 중복을 제거한 <code class="Feature"> 내용 가져오기
                const features = new Set();
                $(element).find('div.indentTab > h3 + ul code.Feature, div.indentTab > h3 + p code.Feature').each((idx, code) => {
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

        // MDX 파일로 데이터 저장
        const fileName = './crw-data/crawled-data.mdx'; // 파일 경로 및 이름 설정
        fs.writeFileSync(fileName, mdxContent);
        console.log(`MDX file saved: ${fileName}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });



// Axios를 사용하여 웹 페이지 HTML 가져오기7
axios.get(url)
    .then(response => {
        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(response.data);

        let mdxContent = ''; // 모든 정보를 저장할 MDX 파일의 내용

        // 각 릴리스 노트 항목을 순회하면서 정보 추출
        $('section.remark-sectionize-h2').each((index, element) => {
            // 제품명 초기화
            let productName = '';
            // 버전 초기화
            let version = '';
            // 날짜 초기화
            let date = '';

            // <h3>를 찾아냄
            const h3Elements = $(element).find('h3');

            // <h3>가 여러 개인 경우 가장 가까운 <code class="Feature">를 찾음
            h3Elements.each((index, h3Element) => {
                const nextElement = $(h3Element).next(); // <h3>의 다음 형제 요소

                // <ul> 또는 <p>에서 <code class="Feature">를 찾음
                const featureElement = nextElement.find('ul code.Feature, p code.Feature').first();

                // <code class="Feature">가 발견되었으면 처리
                if (featureElement.length > 0) {
                    // 제품명 설정
                    productName = $(h3Element).text().trim();

                    // 버전 설정
                    version = $(element).find('h2').text().trim();

                    // 날짜 설정
                    date = $(element).find('h2 + p').text().trim();

                    // 중복을 제거한 <code class="Feature"> 내용 가져오기
                    const features = new Set();
                    nextElement.find('code.Feature').each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });

                    // MDX 형식으로 데이터 생성하여 파일 내용에 추가
                    if (features.size > 0) {
                        mdxContent += `## ${version} - ${date} - ${productName}\n\n`;
                        mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n');
                        mdxContent += '\n\n';
                    }
                    return false; // 반복문 종료
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