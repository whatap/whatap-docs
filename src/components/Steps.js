import MDXContents from '@theme-original/MDXContent';

// 스타일 분리 위해 type 부여 (예시, about-billing 내 안내 시 yl 사용)
export default function InDoc({ children, type }) {
    const className = type ? `steps steps--${type}` : 'steps';
    
    return (
        <MDXContents>
            <div className={className}>
                {children}
            </div>
        </MDXContents>
    );
}

// 기존 함수
// export default function InDoc ({children}) {
//     return (
//         <MDXContents>
//             <div className="steps">
//                 {children}
//             </div>
//         </MDXContents>
//     );
// }