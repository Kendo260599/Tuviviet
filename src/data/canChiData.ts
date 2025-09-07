// Vietnamese Astrology System - Can Chi (Heavenly Stems and Earthly Branches)
export interface CanChiInfo {
  can: ThienCan;
  chi: DiaChi;
  element: FiveElement;
  yinYang: 'Âm' | 'Dương';
  meaning: string;
  characteristics: string[];
}

// Thiên Can (10 Heavenly Stems)
export type ThienCan = 
  | 'Giáp'  // 甲 - Mộc Dương
  | 'Ất'    // 乙 - Mộc Âm
  | 'Bính'  // 丙 - Hỏa Dương  
  | 'Đinh'  // 丁 - Hỏa Âm
  | 'Mậu'   // 戊 - Thổ Dương
  | 'Kỷ'    // 己 - Thổ Âm
  | 'Canh'  // 庚 - Kim Dương
  | 'Tân'   // 辛 - Kim Âm
  | 'Nhâm'  // 壬 - Thủy Dương
  | 'Quý';  // 癸 - Thủy Âm

// Địa Chi (12 Earthly Branches) - Same as zodiac animals
export type DiaChi = 
  | 'Tý'    // 子 - Thủy
  | 'Sửu'   // 丑 - Thổ
  | 'Dần'   // 寅 - Mộc
  | 'Mão'   // 卯 - Mộc  
  | 'Thìn'  // 辰 - Thổ
  | 'Tị'    // 巳 - Hỏa
  | 'Ngọ'   // 午 - Hỏa
  | 'Mùi'   // 未 - Thổ
  | 'Thân'  // 申 - Kim
  | 'Dậu'   // 酉 - Kim
  | 'Tuất'  // 戌 - Thổ
  | 'Hợi';  // 亥 - Thủy

export type FiveElement = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

export interface BirthChart {
  // Four Pillars (Tứ Trụ)
  year: CanChiInfo;    // Niên trụ
  month: CanChiInfo;   // Nguyệt trụ  
  day: CanChiInfo;     // Nhật trụ
  hour: CanChiInfo;    // Giờ trụ
  
  // Birth date info
  birthDate: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  };
  
  // Calculated properties
  dayMaster: ThienCan;           // Nhật chủ (most important)
  strongElements: FiveElement[];  // Ngũ hành mạnh
  weakElements: FiveElement[];    // Ngũ hành yếu
  luckyElements: FiveElement[];   // Ngũ hành may mắn
  unluckyElements: FiveElement[]; // Ngũ hành xui xẻo
  
  // Life phases
  lifePhases: LifePhase[];        // Đại vận
  currentPhase: LifePhase | null; // Đại vận hiện tại
  
  // Personality analysis
  personality: PersonalityAnalysis;
  
  // Compatibility
  compatibility: {
    bestMatches: ThienCan[];
    challengingMatches: ThienCan[];
  };
}

export interface LifePhase {
  startAge: number;
  endAge: number;
  can: ThienCan;
  chi: DiaChi;
  element: FiveElement;
  description: string;
  fortune: 'Tốt' | 'Trung bình' | 'Khó khăn';
  advice: string;
}

export interface PersonalityAnalysis {
  mainTraits: string[];
  strengths: string[];
  weaknesses: string[];
  careerSuggestions: string[];
  healthTendencies: string[];
  relationshipStyle: string;
  moneyManagement: string;
}

// Thiên Can data with elements and properties
export const thienCanData: Record<ThienCan, {
  element: FiveElement;
  yinYang: 'Âm' | 'Dương';
  meaning: string;
  characteristics: string[];
}> = {
  'Giáp': {
    element: 'Mộc',
    yinYang: 'Dương',
    meaning: 'Cây lớn, gỗ cứng',
    characteristics: ['Mạnh mẽ', 'Kiên định', 'Lãnh đạo', 'Bảo thủ', 'Kiên nhẫn']
  },
  'Ất': {
    element: 'Mộc', 
    yinYang: 'Âm',
    meaning: 'Cây nhỏ, hoa cỏ',
    characteristics: ['Linh hoạt', 'Sáng tạo', 'Nhạy cảm', 'Thích nghi', 'Nghệ thuật']
  },
  'Bính': {
    element: 'Hỏa',
    yinYang: 'Dương', 
    meaning: 'Mặt trời, lửa lớn',
    characteristics: ['Nhiệt tình', 'Hào hứng', 'Lạc quan', 'Năng động', 'Chính trực']
  },
  'Đinh': {
    element: 'Hỏa',
    yinYang: 'Âm',
    meaning: 'Nến, lửa nhỏ',
    characteristics: ['Ấm áp', 'Tinh tế', 'Thông minh', 'Cẩn thận', 'Chu đáo']
  },
  'Mậu': {
    element: 'Thổ',
    yinYang: 'Dương',
    meaning: 'Núi, đất cứng',
    characteristics: ['Vững chắc', 'Đáng tin', 'Thực tế', 'Kiên trì', 'Bảo thủ']
  },
  'Kỷ': {
    element: 'Thổ',
    yinYang: 'Âm', 
    meaning: 'Đất mềm, ruông đồng',
    characteristics: ['Nuôi dưỡng', 'Kiên nhẫn', 'Chu đáo', 'Hy sinh', 'Tận tụy']
  },
  'Canh': {
    element: 'Kim',
    yinYang: 'Dương',
    meaning: 'Sắt, kim loại cứng',
    characteristics: ['Cứng rắn', 'Quyết đoán', 'Công bằng', 'Nghiêm khắc', 'Nguyên tắc']
  },
  'Tân': {
    element: 'Kim',
    yinYang: 'Âm',
    meaning: 'Vàng, đá quý',
    characteristics: ['Tinh tế', 'Quý phái', 'Thẩm mỹ', 'Hoàn hảo', 'Tỉ mỉ']
  },
  'Nhâm': {
    element: 'Thủy',
    yinYang: 'Dương',
    meaning: 'Sông, biển lớn',
    characteristics: ['Bao dung', 'Thông minh', 'Linh hoạt', 'Bí ẩn', 'Sâu sắc']
  },
  'Quý': {
    element: 'Thủy', 
    yinYang: 'Âm',
    meaning: 'Mưa, sương, nước nhỏ',
    characteristics: ['Dịu dàng', 'Thấu hiểu', 'Trực giác', 'Nhạy bén', 'Thông thái']
  }
};

// Địa Chi data
export const diaChiData: Record<DiaChi, {
  element: FiveElement;
  animal: string;
  time: string;
  season: string;
  direction: string;
  characteristics: string[];
}> = {
  'Tý': {
    element: 'Thủy',
    animal: 'Chuột', 
    time: '23:00-01:00',
    season: 'Đông',
    direction: 'Bắc',
    characteristics: ['Thông minh', 'Nhanh nhẹn', 'Tháo vát', 'Cơ hội', 'Linh hoạt']
  },
  'Sửu': {
    element: 'Thổ',
    animal: 'Trâu',
    time: '01:00-03:00', 
    season: 'Đông cuối',
    direction: 'Đông Bắc',
    characteristics: ['Chăm chỉ', 'Kiên nhẫn', 'Trung thành', 'Cẩn thận', 'Đáng tin']
  },
  'Dần': {
    element: 'Mộc',
    animal: 'Hổ',
    time: '03:00-05:00',
    season: 'Xuân đầu', 
    direction: 'Đông Đông Bắc',
    characteristics: ['Dũng cảm', 'Mạnh mẽ', 'Lãnh đạo', 'Bảo vệ', 'Chính nghĩa']
  },
  'Mão': {
    element: 'Mộc',
    animal: 'Mèo',
    time: '05:00-07:00',
    season: 'Xuân',
    direction: 'Đông',
    characteristics: ['Thận trọng', 'Tinh tế', 'Nghệ thuật', 'Hòa bình', 'Nhạy cảm']
  },
  'Thìn': {
    element: 'Thổ', 
    animal: 'Rồng',
    time: '07:00-09:00',
    season: 'Xuân cuối',
    direction: 'Đông Đông Nam',
    characteristics: ['Quyền uy', 'Cao quý', 'Thông minh', 'May mắn', 'Lãnh đạo']
  },
  'Tị': {
    element: 'Hỏa',
    animal: 'Rắn', 
    time: '09:00-11:00',
    season: 'Hạ đầu',
    direction: 'Đông Nam',
    characteristics: ['Thông thái', 'Bí ẩn', 'Trực giác', 'Sâu sắc', 'Chiến lược']
  },
  'Ngọ': {
    element: 'Hỏa',
    animal: 'Ngựa',
    time: '11:00-13:00',
    season: 'Hạ',
    direction: 'Nam', 
    characteristics: ['Năng động', 'Tự do', 'Nhiệt tình', 'Phiêu lưu', 'Hào hứng']
  },
  'Mùi': {
    element: 'Thổ',
    animal: 'Dê',
    time: '13:00-15:00',
    season: 'Hạ cuối',
    direction: 'Nam Tây Nam',
    characteristics: ['Hiền lành', 'Nghệ thuật', 'Nhạy cảm', 'Sáng tạo', 'Hòa hợp']
  },
  'Thân': {
    element: 'Kim', 
    animal: 'Khỉ',
    time: '15:00-17:00',
    season: 'Thu đầu',
    direction: 'Tây Tây Nam',
    characteristics: ['Thông minh', 'Linh hoạt', 'Sáng tạo', 'Thích nghi', 'Khôn ngoan']
  },
  'Dậu': {
    element: 'Kim',
    animal: 'Gà',
    time: '17:00-19:00',
    season: 'Thu',
    direction: 'Tây',
    characteristics: ['Cẩn thận', 'Tỉ mỉ', 'Trách nhiệm', 'Trung thực', 'Chính xác']
  },
  'Tuất': {
    element: 'Thổ',
    animal: 'Chó', 
    time: '19:00-21:00',
    season: 'Thu cuối',
    direction: 'Tây Tây Bắc',
    characteristics: ['Trung thành', 'Bảo vệ', 'Công bằng', 'Đáng tin', 'Thẳng thắn']
  },
  'Hợi': {
    element: 'Thủy',
    animal: 'Heo',
    time: '21:00-23:00',
    season: 'Đông đầu',
    direction: 'Tây Bắc',
    characteristics: ['Hiền lành', 'Hào phóng', 'Chân thành', 'May mắn', 'Thành công']
  }
};
