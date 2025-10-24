// src/modules/announcement-reset.js (docs 배너 새로고침 시 다시 보여짐)
export default function () {
    if (typeof window === 'undefined') return;
  
    try {
      // 페이지가 로드될 때마다 (즉, 새로고침할 때마다) 닫힘 상태를 초기화
      localStorage.removeItem('docusaurus.announcementBar');
      // console.log('🔁 Announcement bar reset: always show after reload');
    } catch (e) {
      console.error('Announcement reset failed:', e);
    }
  }