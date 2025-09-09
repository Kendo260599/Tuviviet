/**
 * Format số điểm rating thành sao
 */
export function formatStars(rating: number): string {
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2;
  const emptyStars = 5 - fullStars - halfStar;
  
  return '★'.repeat(fullStars) + 
         (halfStar ? '☆' : '') + 
         '☆'.repeat(emptyStars);
}

/**
 * Lấy màu sắc theo rating
 */
export function getRatingColor(rating: number): string {
  if (rating >= 8) return '#22c55e'; // green
  if (rating >= 6) return '#eab308'; // yellow  
  if (rating >= 4) return '#f97316'; // orange
  return '#ef4444'; // red
}

/**
 * Format ngày hiển thị
 */
export function formatDisplayDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Validate ngày tháng
 */
export function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Lấy ngày hiện tại theo định dạng YYYY-MM-DD
 */
export function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Tính tuổi từ ngày sinh
 */
export function calculateAge(birthDate: Date): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Kiểm tra xem có phải là năm nhuận không
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

/**
 * Capitalize first letter
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Debounce function cho search
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Kiểm tra device có phải mobile không
 */
export function isMobile(): boolean {
  return window.innerWidth <= 768;
}

/**
 * Scroll to top smooth
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Format số thành chuỗi có dấu phẩy
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('vi-VN');
}

/**
 * Lấy gradient theo element
 */
export function getElementGradient(element: string): string {
  const gradients: Record<string, string> = {
    Fire: 'linear-gradient(135deg, #ff6b6b, #feca57)',
    Earth: 'linear-gradient(135deg, #a8e6cf, #88d8a3)',
    Air: 'linear-gradient(135deg, #74b9ff, #0984e3)',
    Water: 'linear-gradient(135deg, #6c5ce7, #a29bfe)'
  };
  
  return gradients[element] || 'linear-gradient(135deg, #ddd, #bbb)';
}
