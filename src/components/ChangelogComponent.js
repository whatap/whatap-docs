// 일단 오버뷰랑 서비스 버전 디스플레이 가리고 br 없애기 (0718 이거 씀)
import React, { useEffect } from 'react';
import '@site/src/css/custom.scss';

const ChangelogComponent = ({ children }) => {
  useEffect(() => {
    // 중복된 changelog-overview, changelog-date, changelog-service 묶음을 체크하기 위한 Set
    const seenCombinations = new Set();
    // 중복된 날짜를 체크하기 위한 Set
    const seenDates = new Set();

    // 모든 changelog-overview 요소 선택
    const overviewElements = document.querySelectorAll('.changelog-overview');
    overviewElements.forEach((overviewEl) => {
      // changelog-overview 다음에 위치한 changelog-date, changelog-service 요소 선택
      const dateEl = overviewEl.nextElementSibling;
      const serviceEl = dateEl.nextElementSibling;

      if (overviewEl && dateEl && serviceEl) {
        // 각 요소의 텍스트 내용 추출 및 조합
        const overview = overviewEl.textContent.trim();
        const date = dateEl.textContent.trim();
        const service = serviceEl.textContent.trim();
        const combination = `${overview}::${date}::${service}`;

        // 이미 존재하는 조합인 경우 해당 요소들을 숨김 처리
        if (seenCombinations.has(combination)) {
          overviewEl.style.display = 'none'; // changelog-overview 숨김
          serviceEl.style.display = 'none';  // changelog-service 숨김
          overviewEl.classList.add('changelog-overview-dup'); // 중복 표시 클래스 추가
          serviceEl.classList.add('changelog-service-dup');   // 중복 표시 클래스 추가

          // changelog-service-dup 다음의 <br> 요소가 있으면 제거
          const brElement = serviceEl.nextElementSibling;
          if (brElement && brElement.tagName === 'BR') {
            brElement.remove();
          }
        } else {
          seenCombinations.add(combination); // 새로운 조합 추가
        }
      }
    });

    // 중복된 날짜 체크
    const dateElements = document.querySelectorAll('.changelog-date');
    dateElements.forEach((el) => {
      const dateText = el.textContent.trim();
      if (seenDates.has(dateText)) {
        el.classList.add('changelog-date-dup'); // 중복 표시 클래스 추가
        el.setAttribute('data-dup', 'true');   // 데이터 속성 설정
      } else {
        seenDates.add(dateText); // 새로운 날짜 추가
      }
    });
  }, []);

  return <div>{children}</div>;
};

export default ChangelogComponent;