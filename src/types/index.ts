// Western Zodiac Signs (12 constellations)
export type WesternZodiacSign = 
  | 'bac-duong'    // Bạch Dương (Aries)
  | 'kim-nguu'     // Kim Ngưu (Taurus) 
  | 'song-tu'      // Song Tử (Gemini)
  | 'cu-giai'      // Cự Giải (Cancer)
  | 'su-tu'        // Sư Tử (Leo)
  | 'xu-nu'        // Xử Nữ (Virgo)
  | 'thien-binh'   // Thiên Bình (Libra)
  | 'bo-cap'       // Bò Cạp (Scorpio)
  | 'nhan-ma'      // Nhân Mã (Sagittarius)
  | 'ma-ket'       // Ma Kết (Capricorn)
  | 'bao-binh'     // Bảo Bình (Aquarius)
  | 'song-ngu';    // Song Ngư (Pisces)

// Vietnamese Zodiac Signs (12 animals)
export type VietnameseZodiacSign = 
  | 'ty'    // Tý - Chuột (Rat)
  | 'suu'   // Sửu - Trâu (Buffalo)
  | 'dan'   // Dần - Hổ (Tiger)
  | 'mao'   // Mão - Mèo (Cat)
  | 'thin'  // Thìn - Rồng (Dragon)
  | 'ti'    // Tị - Rắn (Snake)
  | 'ngo'   // Ngọ - Ngựa (Horse)
  | 'mui'   // Mùi - Dê (Goat)
  | 'than'  // Thân - Khỉ (Monkey)
  | 'dau'   // Dậu - Gà (Rooster)
  | 'tuat'  // Tuất - Chó (Dog)
  | 'hoi';  // Hợi - Heo (Pig)

// Combined type for all zodiac systems
export type ZodiacSign = WesternZodiacSign | VietnameseZodiacSign;

// Five Elements in Vietnamese tradition
export type FiveElement = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

// Western four elements
export type WesternElement = 'Hỏa' | 'Thổ' | 'Khí' | 'Thủy';

export interface ZodiacInfo {
  id: ZodiacSign;
  name: string;
  englishName: string;
  symbol: string;
  element: WesternElement | FiveElement;
  dateRange?: string;
  startDate?: { month: number; day: number };
  endDate?: { month: number; day: number };
  description: string;
  traits: string[];
  luckyNumbers: number[];
  luckyColors: string[];
  unluckyNumbers?: number[];
  unluckyColors?: string[];
}

// Enhanced Vietnamese Zodiac Info
export interface VietnameseZodiacInfo extends ZodiacInfo {
  id: VietnameseZodiacSign;
  animalName: string;
  element: FiveElement;
  secondaryElement?: string;
  direction: string;
  number: number;
  sign: '(+)' | '(-)';
  position?: string;
  elementRelation?: string;
}

export interface HoroscopeEntry {
  id: string;
  sign: ZodiacSign;
  date: string;
  period: 'today' | 'week' | 'month';
  general: string;
  love: string;
  career: string;
  health: string;
  finance: string;
  lucky: {
    number: number;
    color: string;
    time: string;
  };
  rating: {
    general: number;
    love: number;
    career: number;
    health: number;
    finance: number;
  };
}

export interface Compatibility {
  sign1: ZodiacSign;
  sign2: ZodiacSign;
  score: number; // 1-10
  type: 'excellent' | 'good' | 'average' | 'challenging';
  description: string;
  strengths: string[];
  challenges: string[];
}

export interface DateInput {
  day: number;
  month: number;
  year?: number;
}

export interface SearchResult {
  sign: ZodiacSign;
  name: string;
  relevance: number;
}
