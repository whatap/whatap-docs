import React from 'react';

// MDX 파일에서 날짜 정보를 추출하는 함수
function extractDatesFromMDX(mdxContent) {
    const regex = /<code class='changelog-date'>(.*?)<\/code>/g;
    const dates = [];
    let match;
    while ((match = regex.exec(mdxContent)) !== null) {
        dates.push(match[1]);
    }
    return dates;
}

// 가장 상단에 위치한 날짜를 식별하는 함수
function findTopDate(dates) {
    // 가장 먼저 나타나는 날짜를 반환
    return dates[0];
}

// 커스텀 리스트 컴포넌트
function CustomList({ mdxContent }) {
    // MDX 파일에서 날짜 정보 추출
    const dates = extractDatesFromMDX(mdxContent);
    // 가장 상단에 위치한 날짜 식별
    const topDate = findTopDate(dates);

    return (
        <div className="history_overview">
            <ul>
                {dates.map((date, index) => (
                    <li key={index} style={{ display: dates.indexOf(date) === index ? 'block' : 'none' }}>
                        <span className="changelog-date">{date}</span>
                        {/* 기타 내용들 */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomList;
