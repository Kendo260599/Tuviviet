/**
 * Chia sẻ nội dung sử dụng Web Share API hoặc fallback copy
 */
export interface ShareData {
  title: string;
  text: string;
  url: string;
}

export async function shareContent(data: ShareData): Promise<boolean> {
  // Kiểm tra có hỗ trợ Web Share API không
  if (navigator.share && navigator.canShare?.(data)) {
    try {
      await navigator.share(data);
      return true;
    } catch (error) {
      console.warn('Web Share API failed:', error);
      // Fallback to copy
      return await copyToClipboard(data.url);
    }
  }
  
  // Fallback: copy URL to clipboard
  return await copyToClipboard(data.url);
}

/**
 * Copy text vào clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    
    // Fallback cho browser cũ
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const result = document.execCommand('copy');
    document.body.removeChild(textArea);
    return result;
  } catch (error) {
    console.warn('Copy to clipboard failed:', error);
    return false;
  }
}

/**
 * Tạo share data cho tử vi
 */
export function createHoroscopeShareData(signName: string, baseUrl: string): ShareData {
  return {
    title: `Tử Vi ${signName} - Tử Vi Việt`,
    text: `Xem tử vi hàng ngày cho cung ${signName} tại Tử Vi Việt`,
    url: `${baseUrl}?sign=${encodeURIComponent(signName)}`
  };
}

/**
 * Tạo share data chung
 */
export function createGeneralShareData(baseUrl: string): ShareData {
  return {
    title: 'Tử Vi Việt - Xem Tử Vi Hàng Ngày Miễn Phí',
    text: 'Khám phá tử vi hàng ngày cho 12 cung hoàng đạo và tìm hiểu về tương hợp cung hoàng đạo',
    url: baseUrl
  };
}
