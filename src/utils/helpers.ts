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
  if (rating >= 8) return '#22c55e';
  if (rating >= 6) return '#eab308';
  if (rating >= 4) return '#f97316';
  return '#ef4444';
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
