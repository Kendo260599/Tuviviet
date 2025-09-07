import { describe, it, expect } from 'vitest';
import { getZodiacSign, validateDate, formatDate, parseDate } from '../zodiacUtils';

describe('getZodiacSign', () => {
  it('should return correct zodiac sign for valid dates', () => {
    // Test boundary dates for each sign
    expect(getZodiacSign(21, 3)).toBe('bac-duong'); // Bạch Dương start
    expect(getZodiacSign(19, 4)).toBe('bac-duong'); // Bạch Dương end
    
    expect(getZodiacSign(20, 4)).toBe('kim-nguu'); // Kim Ngưu start
    expect(getZodiacSign(20, 5)).toBe('kim-nguu'); // Kim Ngưu end
    
    expect(getZodiacSign(21, 5)).toBe('song-tu'); // Song Tử start
    expect(getZodiacSign(20, 6)).toBe('song-tu'); // Song Tử end
    
    expect(getZodiacSign(21, 6)).toBe('cu-giai'); // Cự Giải start
    expect(getZodiacSign(22, 7)).toBe('cu-giai'); // Cự Giải end
    
    expect(getZodiacSign(23, 7)).toBe('su-tu'); // Sư Tử start
    expect(getZodiacSign(22, 8)).toBe('su-tu'); // Sư Tử end
    
    expect(getZodiacSign(23, 8)).toBe('xu-nu'); // Xử Nữ start
    expect(getZodiacSign(22, 9)).toBe('xu-nu'); // Xử Nữ end
    
    expect(getZodiacSign(23, 9)).toBe('thien-binh'); // Thiên Bình start
    expect(getZodiacSign(22, 10)).toBe('thien-binh'); // Thiên Bình end
    
    expect(getZodiacSign(23, 10)).toBe('bo-cap'); // Bò Cạp start
    expect(getZodiacSign(21, 11)).toBe('bo-cap'); // Bò Cạp end
    
    expect(getZodiacSign(22, 11)).toBe('nhan-ma'); // Nhân Mã start
    expect(getZodiacSign(21, 12)).toBe('nhan-ma'); // Nhân Mã end
    
    // Ma Kết crosses year boundary
    expect(getZodiacSign(22, 12)).toBe('ma-ket'); // Ma Kết start
    expect(getZodiacSign(19, 1)).toBe('ma-ket'); // Ma Kết end
    
    expect(getZodiacSign(20, 1)).toBe('bao-binh'); // Bảo Bình start
    expect(getZodiacSign(18, 2)).toBe('bao-binh'); // Bảo Bình end
    
    expect(getZodiacSign(19, 2)).toBe('song-ngu'); // Song Ngư start
    expect(getZodiacSign(20, 3)).toBe('song-ngu'); // Song Ngư end
  });
  
  it('should return null for invalid dates', () => {
    expect(getZodiacSign(0, 1)).toBe(null); // Invalid day
    expect(getZodiacSign(32, 1)).toBe(null); // Invalid day
    expect(getZodiacSign(15, 0)).toBe(null); // Invalid month
    expect(getZodiacSign(15, 13)).toBe(null); // Invalid month
    expect(getZodiacSign(30, 2)).toBe(null); // Invalid day for February
  });
  
  it('should handle middle dates correctly', () => {
    expect(getZodiacSign(1, 4)).toBe('bac-duong'); // Middle of Bạch Dương
    expect(getZodiacSign(15, 7)).toBe('cu-giai'); // Middle of Cự Giải
    expect(getZodiacSign(1, 1)).toBe('ma-ket'); // Middle of Ma Kết (year crossing)
  });
});

describe('validateDate', () => {
  it('should validate correct dates', () => {
    expect(validateDate(15, 6)).toBe(true);
    expect(validateDate(31, 12)).toBe(true);
    expect(validateDate(1, 1)).toBe(true);
    expect(validateDate(29, 2, 2024)).toBe(true); // Leap year
    expect(validateDate(28, 2, 2023)).toBe(true); // Non-leap year
  });
  
  it('should reject invalid dates', () => {
    expect(validateDate(0, 6)).toBe(false); // Day 0
    expect(validateDate(32, 6)).toBe(false); // Day 32
    expect(validateDate(15, 0)).toBe(false); // Month 0
    expect(validateDate(15, 13)).toBe(false); // Month 13
    expect(validateDate(30, 2)).toBe(false); // Feb 30
    expect(validateDate(29, 2, 2023)).toBe(false); // Feb 29 non-leap year
  });
  
  it('should handle month-specific day limits', () => {
    expect(validateDate(31, 1)).toBe(true); // Jan 31
    expect(validateDate(31, 4)).toBe(false); // Apr 31 (April has only 30 days)
    expect(validateDate(30, 4)).toBe(true); // Apr 30
  });
});

describe('formatDate', () => {
  it('should format date correctly without year', () => {
    expect(formatDate(5, 6)).toBe('05/06');
    expect(formatDate(15, 12)).toBe('15/12');
    expect(formatDate(1, 1)).toBe('01/01');
  });
  
  it('should format date correctly with year', () => {
    expect(formatDate(5, 6, 1990)).toBe('05/06/1990');
    expect(formatDate(15, 12, 2000)).toBe('15/12/2000');
  });
});

describe('parseDate', () => {
  it('should parse valid date strings', () => {
    expect(parseDate('15/06')).toEqual({ day: 15, month: 6 });
    expect(parseDate('05/12')).toEqual({ day: 5, month: 12 });
    expect(parseDate('15/06/1990')).toEqual({ day: 15, month: 6, year: 1990 });
  });
  
  it('should return null for invalid date strings', () => {
    expect(parseDate('invalid')).toBe(null);
    expect(parseDate('15')).toBe(null);
    expect(parseDate('32/06')).toBe(null); // Invalid day
    expect(parseDate('15/13')).toBe(null); // Invalid month
    expect(parseDate('abc/def')).toBe(null); // Non-numeric
  });
  
  it('should handle edge cases', () => {
    expect(parseDate('')).toBe(null);
    expect(parseDate('///')).toBe(null);
    expect(parseDate('15/06/abc')).toBe(null); // Invalid year
  });
});
