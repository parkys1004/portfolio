
/**
 * 웹사이트 URL을 입력받아 해당 사이트의 스크린샷 이미지 URL을 반환합니다.
 * WordPress의 mshots API를 사용합니다.
 */
export const getScreenshotUrl = (url: string): string => {
  if (!url || url === 'https://dribbble.com/') {
    // URL이 없거나 데모 URL인 경우 기본 추상적인 이미지 반환
    return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop';
  }
  
  // mshots API: w=1280 (해상도), v=1 (버전)
  // encodeURIComponent로 URL을 안전하게 인코딩합니다.
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=960`;
};
