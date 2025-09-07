import { ZodiacSign, DateInput } from '../types';
import { zodiacSigns } from '../data/zodiacData';

/**
 * Xác định cung hoàng đạo từ ngày và tháng sinh
 */
export function getZodiacSign(day: number, month: number): ZodiacSign | null {
  // Validate input
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  // Validate day for specific month
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day > daysInMonth[month - 1]) {
    return null;
  }

  // Find zodiac sign based on date range
  for (const [signId, info] of Object.entries(zodiacSigns)) {
    const { startDate, endDate } = info;
    
    // Skip if no date range is defined (for Vietnamese zodiac signs)
    if (!startDate || !endDate) {
      continue;
    }
    
    // Handle year crossing (e.g., Capricorn: Dec 22 - Jan 19)
    if (startDate.month > endDate.month) {
      // Cross year boundary
      if (
        (month === startDate.month && day >= startDate.day) ||
        (month === endDate.month && day <= endDate.day)
      ) {
        return signId as ZodiacSign;
      }
    } else {
      // Same year
      if (
        (month === startDate.month && day >= startDate.day) ||
        (month === endDate.month && day <= endDate.day) ||
        (month > startDate.month && month < endDate.month)
      ) {
        return signId as ZodiacSign;
      }
    }
  }

  return null;
}

/**
 * Validate ngày sinh
 */
export function validateDate(day: number, month: number, year?: number): boolean {
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  // Check specific month day limits
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // Handle leap year if year provided
  if (year && month === 2) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return day <= (isLeapYear ? 29 : 28);
  }
  
  return day <= daysInMonth[month - 1];
}

/**
 * Format ngày sinh thành chuỗi hiển thị
 */
export function formatDate(day: number, month: number, year?: number): string {
  const dayStr = day.toString().padStart(2, '0');
  const monthStr = month.toString().padStart(2, '0');
  
  if (year) {
    return `${dayStr}/${monthStr}/${year}`;
  }
  return `${dayStr}/${monthStr}`;
}

/**
 * Parse chuỗi ngày thành object DateInput
 */
export function parseDate(dateStr: string): DateInput | null {
  const parts = dateStr.split('/');
  
  if (parts.length < 2) return null;
  
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const year = parts[2] ? parseInt(parts[2]) : undefined;
  
  if (isNaN(day) || isNaN(month) || (parts[2] && isNaN(year!))) {
    return null;
  }
  
  if (!validateDate(day, month, year)) {
    return null;
  }
  
  return { day, month, year };
}

/**
 * Lấy thông tin chi tiết cung hoàng đạo
 */
export function getZodiacInfo(sign: ZodiacSign) {
  return zodiacSigns[sign];
}

/**
 * Lấy danh sách tất cả các cung hoàng đạo
 */
export function getAllZodiacSigns() {
  return Object.values(zodiacSigns);
}

/**
 * Tìm kiếm cung hoàng đạo theo tên
 */
export function searchZodiacSigns(query: string) {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return [];
  
  return Object.values(zodiacSigns).filter(sign => 
    sign.name.toLowerCase().includes(normalizedQuery) ||
    sign.englishName.toLowerCase().includes(normalizedQuery) ||
    sign.id.includes(normalizedQuery)
  );
}
