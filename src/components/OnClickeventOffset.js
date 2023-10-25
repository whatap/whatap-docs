import React from 'react';

export default function OffsetLink({to, children}) {
    const onClickMenu = (e) => {
        e.preventDefault();
        console.log(e.target.hash);
        const headerOffset = 97;
        const targetHash = e.target.hash;
        const targetSection = document.querySelector(targetHash);
        const targetPostion = targetSection.getBoundingClientRect().top;
        const offsetPosition = targetPostion + window.pageYOffset - headerOffset;
        console.log(offsetPosition);
        if (targetSection) {
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    }
    return (
        <a href={to} onClick={onClickMenu} target="_blank">{children}</a>
    );
}