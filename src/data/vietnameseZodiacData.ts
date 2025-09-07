import { VietnameseZodiacInfo, VietnameseZodiacSign } from '../types';

// Enhanced Vietnamese Zodiac Data based on Traditional Feng Shui System
export const vietnameseZodiacSigns: Record<VietnameseZodiacSign, VietnameseZodiacInfo> = {
  'ty': { // Tý - Chuột
    id: 'ty',
    name: 'Tý',
    animalName: 'Chuột',
    englishName: 'Rat',
    symbol: '🐭',
    element: 'Thủy',
    secondaryElement: 'Kim', // Mộc đức của Kim
    direction: 'Chính Nam',
    number: 6,
    sign: '(-)',
    position: 'Địa môn',
    elementRelation: 'Mộc đức của Kim',
    description: 'Người tuổi Tý thông minh, nhanh nhẹn, có khả năng thích nghi cao và tài quản lý tốt.',
    traits: ['Thông minh', 'Linh hoạt', 'Tháo vát', 'Tiết kiệm', 'Tham vọng'],
    luckyNumbers: [2, 3, 6],
    luckyColors: ['Xanh dương', 'Vàng', 'Xanh lá'],
    unluckyNumbers: [5, 9],
    unluckyColors: ['Nâu', 'Vàng đậm']
  },
  'ngo': { // Ngọ - Ngựa
    id: 'ngo', 
    name: 'Ngọ',
    animalName: 'Ngựa',
    englishName: 'Horse',
    symbol: '🐴',
    element: 'Hỏa',
    secondaryElement: 'Mộc', // Mộ khố của Mộc
    direction: 'Tây Nam',
    number: 7,
    sign: '(+)',
    elementRelation: 'Mộ khố của Mộc',
    description: 'Người tuổi Ngọ năng động, tự do, có tinh thần phiêu lưu và khả năng lãnh đạo.',
    traits: ['Năng động', 'Tự do', 'Hào hứng', 'Thẳng thắn', 'Phiêu lưu'],
    luckyNumbers: [2, 3, 7],
    luckyColors: ['Đỏ', 'Vàng', 'Xanh lá'],
    unluckyNumbers: [1, 5, 6],
    unluckyColors: ['Xanh dương', 'Trắng', 'Vàng đậm']
  },
  'mui': { // Mùi - Dê/Cừu
    id: 'mui',
    name: 'Mùi',
    animalName: 'Dê',
    englishName: 'Goat',
    symbol: '🐐',
    element: 'Thổ',
    secondaryElement: 'Thủy', // Mộ khố của Thủy
    direction: 'Nam',
    number: 8,
    sign: '(-)',
    elementRelation: 'Mộ khố của Mộc',
    description: 'Người tuổi Mùi hiền lành, nhân hậu, có khiếu nghệ thuật và tình cảm phong phú.',
    traits: ['Hiền lành', 'Nhân hậu', 'Nghệ thuật', 'Nhạy cảm', 'Sáng tạo'],
    luckyNumbers: [3, 4, 9],
    luckyColors: ['Đỏ', 'Tím', 'Xanh lá'],
    unluckyNumbers: [6, 7, 8],
    unluckyColors: ['Vàng đậm', 'Nâu']
  },
  'than': { // Thân - Khỉ
    id: 'than',
    name: 'Thân',
    animalName: 'Khỉ',
    englishName: 'Monkey',
    symbol: '🐵',
    element: 'Kim',
    secondaryElement: 'Thủy', // Trường sinh của Thủy
    direction: 'Chánh Tây',
    number: 9,
    sign: '(+)',
    position: 'Quỷ môn',
    elementRelation: 'Trường sinh của Thủy',
    description: 'Người tuổi Thân thông minh, nhanh trí, linh hoạt và có khả năng sáng tạo cao.',
    traits: ['Thông minh', 'Nhanh trí', 'Linh hoạt', 'Sáng tạo', 'Khôn ngoan'],
    luckyNumbers: [1, 7, 8],
    luckyColors: ['Trắng', 'Vàng đậm', 'Xanh dương'],
    unluckyNumbers: [2, 9],
    unluckyColors: ['Đỏ', 'Hồng']
  },
  'thin': { // Thìn - Rồng
    id: 'thin',
    name: 'Thìn',
    animalName: 'Rồng',
    englishName: 'Dragon',
    symbol: '🐉',
    element: 'Thổ',
    secondaryElement: 'Thủy', // Mộ khố của Thủy
    direction: 'Đông',
    number: 5,
    sign: '(+)',
    position: 'Thiên La (Thiên Cướng)',
    elementRelation: 'Mộ khố của Thủy',
    description: 'Người tuổi Thìn quyền uy, tự tin, có khả năng lãnh đạo và may mắn trong cuộc sống.',
    traits: ['Quyền uy', 'Tự tin', 'Lãnh đạo', 'May mắn', 'Cao quý'],
    luckyNumbers: [1, 6, 7],
    luckyColors: ['Vàng đậm', 'Bạc', 'Xám'],
    unluckyNumbers: [3, 8],
    unluckyColors: ['Xanh lá', 'Xanh dương']
  },
  'ti': { // Tị - Rắn (based on traditional system)
    id: 'ti',
    name: 'Tị',
    animalName: 'Rắn',
    englishName: 'Snake',
    symbol: '🐍',
    element: 'Hỏa',
    secondaryElement: 'Kim',
    direction: 'Nam Nam',
    number: 6,
    sign: '(-)',
    elementRelation: 'Trường sinh của Kim',
    description: 'Người tuổi Tị thông minh, bí ẩn, có trực giác tốt và khả năng thích nghi cao.',
    traits: ['Thông minh', 'Bí ẩn', 'Trực giác', 'Thích nghi', 'Sâu sắc'],
    luckyNumbers: [2, 8, 9],
    luckyColors: ['Đỏ', 'Vàng nhạt', 'Đen'],
    unluckyNumbers: [1, 6, 7],
    unluckyColors: ['Trắng', 'Vàng đậm']
  },
  'dau': { // Dậu - Gà
    id: 'dau',
    name: 'Dậu',
    animalName: 'Gà',
    englishName: 'Rooster',
    symbol: '🐓',
    element: 'Kim',
    secondaryElement: 'Thủy', // Mộc đức của Thủy
    direction: 'Tây Bắc',
    number: 10,
    sign: '(-)',
    elementRelation: 'Mộc đức của Thủy',
    description: 'Người tuổi Dậu chăm chỉ, cẩn thận, có ý chí mạnh mẽ và tinh thần trách nhiệm cao.',
    traits: ['Chăm chỉ', 'Cẩn thận', 'Ý chí mạnh', 'Trách nhiệm', 'Thẳng thắn'],
    luckyNumbers: [5, 7, 8],
    luckyColors: ['Vàng đậm', 'Nâu', 'Vàng'],
    unluckyNumbers: [1, 3, 9],
    unluckyColors: ['Đỏ', 'Xanh lá']
  },
  'mao': { // Mão - Mèo/Thỏ
    id: 'mao',
    name: 'Mão',
    animalName: 'Mèo',
    englishName: 'Cat',
    symbol: '🐱',
    element: 'Mộc',
    secondaryElement: 'Hỏa', // Mộc đức của Hỏa
    direction: 'Đông Nam',
    number: 4,
    sign: '(-)',
    position: 'Lôi môn',
    elementRelation: 'Mộc đức của Hỏa',
    description: 'Người tuổi Mão hiền hòa, thận trọng, có trực giác tốt và khả năng nghệ thuật.',
    traits: ['Hiền hòa', 'Thận trọng', 'Trực giác', 'Nghệ thuật', 'Nhạy bén'],
    luckyNumbers: [3, 4, 9],
    luckyColors: ['Đỏ', 'Hồng', 'Tím', 'Xanh lá'],
    unluckyNumbers: [1, 7, 8],
    unluckyColors: ['Trắng', 'Vàng đậm', 'Xám']
  },
  'tuat': { // Tuất - Chó
    id: 'tuat',
    name: 'Tuất',
    animalName: 'Chó',
    englishName: 'Dog',
    symbol: '🐶',
    element: 'Thổ',
    secondaryElement: 'Hỏa', // Mộ khố của Hỏa
    direction: 'Tây',
    number: 11,
    sign: '(+)',
    position: 'Địa Võng (Hạ Khôi)',
    elementRelation: 'Mộ khố của Hỏa',
    description: 'Người tuổi Tuất trung thành, thẳng thắn, có lòng công bằng và tinh thần bảo vệ.',
    traits: ['Trung thành', 'Thẳng thắn', 'Công bằng', 'Bảo vệ', 'Đáng tin'],
    luckyNumbers: [3, 4, 9],
    luckyColors: ['Đỏ', 'Xanh lá', 'Tím'],
    unluckyNumbers: [1, 6, 7],
    unluckyColors: ['Xanh dương', 'Trắng', 'Vàng đậm']
  },
  'dan': { // Dần - Hổ
    id: 'dan',
    name: 'Dần',
    animalName: 'Hổ',
    englishName: 'Tiger',
    symbol: '🐅',
    element: 'Mộc',
    secondaryElement: 'Hỏa Thổ', // Trường sinh của Hỏa & Thổ
    direction: 'Chánh Đông',
    number: 3,
    sign: '(+)',
    position: 'Nhân môn',
    elementRelation: 'Trường sinh của Hỏa & Thổ',
    description: 'Người tuổi Dần dũng mãnh, quyết đoán, có khí chất lãnh đạo và lòng yêu nước.',
    traits: ['Dũng mãnh', 'Quyết đoán', 'Lãnh đạo', 'Yêu nước', 'Chính trực'],
    luckyNumbers: [1, 3, 4],
    luckyColors: ['Xanh lá', 'Đỏ', 'Cam'],
    unluckyNumbers: [6, 7, 8],
    unluckyColors: ['Vàng đậm', 'Bạc', 'Nâu']
  },
  'suu': { // Sửu - Trâu
    id: 'suu',
    name: 'Sửu',
    animalName: 'Trâu',
    englishName: 'Buffalo',
    symbol: '🐃',
    element: 'Thổ',
    secondaryElement: 'Kim', // Mộ khố của Kim
    direction: 'Bắc',
    number: 2,
    sign: '(-)',
    elementRelation: 'Mộ khố của Kim',
    description: 'Người tuổi Sửu chăm chỉ, kiên nhẫn, có ý chí mạnh mẽ và tính cách trung thực.',
    traits: ['Chăm chỉ', 'Kiên nhẫn', 'Ý chí mạnh', 'Trung thực', 'Đáng tin'],
    luckyNumbers: [1, 4, 5, 6],
    luckyColors: ['Xanh dương', 'Vàng', 'Xanh lá'],
    unluckyNumbers: [3, 8],
    unluckyColors: ['Trắng', 'Xanh lá nhạt']
  },
  'hoi': { // Hợi - Heo/Lợn
    id: 'hoi',
    name: 'Hợi',
    animalName: 'Heo',
    englishName: 'Pig',
    symbol: '🐷',
    element: 'Thủy',
    secondaryElement: 'Mộc', // Trường sinh của Mộc
    direction: 'Chánh Bắc',
    number: 12,
    sign: '(-)',
    position: 'Thiên môn',
    elementRelation: 'Trường sinh của Mộc',
    description: 'Người tuổi Hợi hiền lành, hào phóng, có lòng từ bi và khả năng tạo dựng gia đình hạnh phúc.',
    traits: ['Hiền lành', 'Hào phóng', 'Từ bi', 'Gia đình', 'Thành thật'],
    luckyNumbers: [2, 5, 8],
    luckyColors: ['Vàng', 'Xám', 'Nâu', 'Xanh lá'],
    unluckyNumbers: [1, 7],
    unluckyColors: ['Đỏ', 'Xanh dương', 'Xanh lá']
  }
};

// Five Elements Relationship System
export const fiveElements = {
  'Kim': {
    name: 'Kim',
    color: 'Trắng, Vàng đậm',
    direction: 'Tây',
    season: 'Thu',
    emotion: 'Buồn',
    organ: 'Phổi',
    generates: 'Thủy', // Kim sinh Thủy
    destroys: 'Mộc',  // Kim khắc Mộc
    generatedBy: 'Thổ', // Thổ sinh Kim
    destroyedBy: 'Hỏa'  // Hỏa khắc Kim
  },
  'Mộc': {
    name: 'Mộc',
    color: 'Xanh lá',
    direction: 'Đông',
    season: 'Xuân',
    emotion: 'Giận',
    organ: 'Gan',
    generates: 'Hỏa',
    destroys: 'Thổ',
    generatedBy: 'Thủy',
    destroyedBy: 'Kim'
  },
  'Thủy': {
    name: 'Thủy',
    color: 'Đen, Xanh dương',
    direction: 'Bắc',
    season: 'Đông',
    emotion: 'Sợ',
    organ: 'Thận',
    generates: 'Mộc',
    destroys: 'Hỏa',
    generatedBy: 'Kim',
    destroyedBy: 'Thổ'
  },
  'Hỏa': {
    name: 'Hỏa',
    color: 'Đỏ',
    direction: 'Nam',
    season: 'Hè',
    emotion: 'Vui',
    organ: 'Tim',
    generates: 'Thổ',
    destroys: 'Kim',
    generatedBy: 'Mộc',
    destroyedBy: 'Thủy'
  },
  'Thổ': {
    name: 'Thổ',
    color: 'Vàng, Nâu',
    direction: 'Trung tâm',
    season: 'Cuối mùa',
    emotion: 'Suy tư',
    organ: 'Lách',
    generates: 'Kim',
    destroys: 'Thủy',
    generatedBy: 'Hỏa',
    destroyedBy: 'Mộc'
  }
};

// Directional and Position Information
export const directions = {
  'Chính Bắc': { degree: 0, element: 'Thủy' },
  'Đông Bắc': { degree: 45, element: 'Thổ' },
  'Chánh Đông': { degree: 90, element: 'Mộc' },
  'Đông Nam': { degree: 135, element: 'Mộc' },
  'Chính Nam': { degree: 180, element: 'Hỏa' },
  'Tây Nam': { degree: 225, element: 'Thổ' },
  'Chánh Tây': { degree: 270, element: 'Kim' },
  'Tây Bắc': { degree: 315, element: 'Kim' }
};

// Special Positions (Cửa)
export const specialPositions = {
  'Thiên môn': 'Cửa Thiên - Cửa của trời, mang lại may mắn và thành công',
  'Địa môn': 'Cửa Địa - Cửa của đất, ảnh hưởng đến tài chính và sự nghiệp',  
  'Nhân môn': 'Cửa Nhân - Cửa của con người, tác động đến các mối quan hệ',
  'Quỷ môn': 'Cửa Quỷ - Cửa của tà khí, cần thận trọng',
  'Lôi môn': 'Cửa Lôi - Cửa của sấm sét, mang năng lượng mạnh mẽ',
  'Thiên La (Thiên Cướng)': 'Lưới trời - Vị trí đặc biệt có sức mạnh lớn',
  'Địa Võng (Hạ Khôi)': 'Lưới đất - Vị trí ảnh hưởng đến tài lộc'
};

export default vietnameseZodiacSigns;
