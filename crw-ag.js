// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/java/java-2_2_28';

// URL을 '/'로 분할하여 배열로 만든 후 배열의 마지막 요소 가져오기
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
console.log(lastUrl);

// Axios를 사용하여 웹 페이지 HTML 가져오기
axios.get(url)
    .then(response => {

      // Cheerio를 사용하여 HTML 파싱
      const $ = cheerio.load(response.data);

      // MDX 파일로 데이터 저장할 변수
      let mdxContent = '';

      // 중복을 제거하기 위한 Set
      let contentSet = new Set();

      
      // 에이전트 버전 정보 가져오기
      const version = $('div.theme-doc-markdown markdown').find('h1').text().trim();
      // 날짜 정보 가져오기
      const date = $(version).next('p').first().text().trim();

      // 상세 정보 가져오기
      const ulContents= $(date).next('ul').text();

      console.log(version + '테스트'); 

    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });