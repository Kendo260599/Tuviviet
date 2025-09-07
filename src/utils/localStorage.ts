import { ZodiacSign } from '../types';

const STORAGE_KEY = 'tuviviet-user-sign';

/**
 * Lưu cung hoàng đạo của user vào localStorage
 */
export function saveUserSign(sign: ZodiacSign): void {
  try {
    localStorage.setItem(STORAGE_KEY, sign);
  } catch (error) {
    console.warn('Cannot save to localStorage:', error);
  }
}

/**
 * Lấy cung hoàng đạo đã lưu của user
 */
export function getUserSign(): ZodiacSign | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved as ZodiacSign || null;
  } catch (error) {
    console.warn('Cannot read from localStorage:', error);
    return null;
  }
}

/**
 * Xóa cung hoàng đạo đã lưu
 */
export function clearUserSign(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Cannot clear localStorage:', error);
  }
}

/**
 * Kiểm tra có hỗ trợ localStorage không
 */
export function isLocalStorageAvailable(): boolean {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
