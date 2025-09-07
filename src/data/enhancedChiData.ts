// Enhanced Earthly Branches (Địa Chi) - 12 Zodiac Animals with detailed information
import { DiaChi, FiveElement } from './canChiData';

export interface EnhancedChiInfo {
  chi: DiaChi;
  animal: string;
  element: FiveElement;
  chineseCharacter: string;
  time: string;
  season: string;
  meaning: string;
  detailedMeaning: string;
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  compatibility: {
    best: DiaChi[];
    good: DiaChi[];
    challenging: DiaChi[];
    conflict: DiaChi[];
  };
  careerPaths: string[];
  relationships: string;
  moneyAttitude: string;
  healthTendencies: string[];
  luckyNumbers: number[];
  luckyColors: string[];
  favorableDirections: string[];
  lifeStages: {
    childhood: string;
    youth: string;
    middleAge: string;
    oldAge: string;
  };
  monthlyLuck: Record<number, string>;
}

export const enhancedChiData: Record<DiaChi, EnhancedChiInfo> = {
  'Tý': {
    chi: 'Tý',
    animal: 'Chuột',
    element: 'Thủy',
    chineseCharacter: '子',
    time: '23:00 - 01:00',
    season: 'Giữa đông',
    meaning: 'Khởi đầu, sinh sôi',
    detailedMeaning: 'Chuột đại diện cho sự khởi đầu của chu kỳ 12 năm, mang ý nghĩa về sự sinh sôi, phát triển và thông minh lanh lợi.',
    personality: ['Thông minh', 'Linh hoạt', 'Cần cù', 'Tháo vát', 'Có khả năng thích nghi'],
    strengths: ['Trí tuệ cao', 'Khả năng học hỏi nhanh', 'Tính linh hoạt', 'Kỹ năng giao tiếp', 'Óc kinh doanh'],
    weaknesses: ['Hay nghi ngờ', 'Đôi khi ích kỷ', 'Thiếu kiên nhẫn', 'Dễ lo lắng', 'Có thể tham lam'],
    compatibility: {
      best: ['Thìn', 'Thân'],
      good: ['Sửu', 'Hợi'],
      challenging: ['Mão', 'Dậu'],
      conflict: ['Ngọ']
    },
    careerPaths: ['Kinh doanh', 'Tài chính', 'Công nghệ thông tin', 'Nghiên cứu', 'Báo chí', 'Luật sư'],
    relationships: 'Rất biết cách quan tâm đến người yêu nhưng đôi khi quá bận rộn với công việc.',
    moneyAttitude: 'Có khả năng kiếm tiền giỏi và biết cách đầu tư thông minh. Thích tích lũy tài sản.',
    healthTendencies: ['Thận', 'Bàng quang', 'Hệ thần kinh', 'Stress'],
    luckyNumbers: [2, 3, 6, 8],
    luckyColors: ['Xanh dương', 'Vàng', 'Xanh lá'],
    favorableDirections: ['Bắc', 'Đông Bắc', 'Tây'],
    lifeStages: {
      childhood: 'Thông minh sớm, học giỏi, được gia đình yêu thương',
      youth: 'Năng động, có nhiều bạn bè, thành công trong học tập',
      middleAge: 'Sự nghiệp phát triển mạnh, tài chính ổn định',
      oldAge: 'Sống an nhàn, con cháu hiếu thảo, sức khỏe tốt'
    },
    monthlyLuck: {
      1: 'Tháng khởi đầu tốt lành', 2: 'Tình cảm thuận lợi', 3: 'Sự nghiệp phát triển',
      4: 'Cần cẩn thận về sức khỏe', 5: 'Tài chính có biến động', 6: 'Gia đình hòa thuận',
      7: 'Cơ hội du lịch', 8: 'Thu nhập tăng', 9: 'Học hỏi kiến thức mới',
      10: 'Quan hệ xã hội mở rộng', 11: 'Đầu tư thành công', 12: 'Chuẩn bị cho năm mới'
    }
  },
  'Sửu': {
    chi: 'Sửu',
    animal: 'Trâu',
    element: 'Thổ',
    chineseCharacter: '丑',
    time: '01:00 - 03:00',
    season: 'Cuối đông',
    meaning: 'Kiên trì, chịu đựng',
    detailedMeaning: 'Trâu tượng trưng cho sự kiên nhẫn, chăm chỉ và khả năng chịu đựng. Là người đáng tin cậy và có trách nhiệm cao.',
    personality: ['Chăm chỉ', 'Kiên nhẫn', 'Đáng tin cậy', 'Thực tế', 'Có trách nhiệm'],
    strengths: ['Tính kiên trì', 'Sự đáng tin cậy', 'Khả năng chịu đựng', 'Tư duy thực tế', 'Lòng trung thành'],
    weaknesses: ['Cố chấp', 'Chậm thích nghi', 'Thiếu sáng tạo', 'Quá bảo thủ', 'Khó thay đổi'],
    compatibility: {
      best: ['Tị', 'Dậu'],
      good: ['Tý', 'Mão'],
      challenging: ['Thìn', 'Tuất'],
      conflict: ['Mùi']
    },
    careerPaths: ['Nông nghiệp', 'Xây dựng', 'Bất động sản', 'Kế toán', 'Y tế', 'Giáo dục'],
    relationships: 'Rất chung thủy và đáng tin cậy trong tình yêu, luôn đặt gia đình lên hàng đầu.',
    moneyAttitude: 'Tiết kiệm và thận trọng trong chi tiêu. Thích đầu tư vào những tài sản có giá trị lâu dài.',
    healthTendencies: ['Dạ dày', 'Tiêu hóa', 'Xương khớp', 'Cơ bắp'],
    luckyNumbers: [1, 4, 5, 9],
    luckyColors: ['Vàng', 'Cam', 'Đỏ'],
    favorableDirections: ['Bắc', 'Đông Nam'],
    lifeStages: {
      childhood: 'Ngoan ngoãn, chăm ngoan, được người lớn yêu thích',
      youth: 'Học hành chăm chỉ, có trách nhiệm với bạn bè',
      middleAge: 'Công việc ổn định, gia đình hạnh phúc',
      oldAge: 'Được con cháu kính trọng, cuộc sống yên bình'
    },
    monthlyLuck: {
      1: 'Khởi đầu vững chắc', 2: 'Tình yêu bền vững', 3: 'Công việc tiến triển chậm',
      4: 'Sức khỏe cần chú ý', 5: 'Tài chính ổn định', 6: 'Gia đình sum vầy',
      7: 'Cần nghỉ ngơi', 8: 'Thu hoạch thành quả', 9: 'Học hỏi kỹ năng mới',
      10: 'Mở rộng công việc', 11: 'Đầu tư bất động sản', 12: 'Tổng kết năm thành công'
    }
  },
  'Dần': {
    chi: 'Dần',
    animal: 'Hổ',
    element: 'Mộc',
    chineseCharacter: '寅',
    time: '03:00 - 05:00',
    season: 'Đầu xuân',
    meaning: 'Dũng mãnh, lãnh đạo',
    detailedMeaning: 'Hổ là biểu tượng của sức mạnh, dũng cảm và khả năng lãnh đạo. Có tính cách mạnh mẽ và không sợ thử thách.',
    personality: ['Dũng cảm', 'Tự tin', 'Có khả năng lãnh đạo', 'Độc lập', 'Quyết đoán'],
    strengths: ['Lòng dũng cảm', 'Khả năng lãnh đạo', 'Tính quyết đoán', 'Sự tự tin', 'Tinh thần chiến đấu'],
    weaknesses: ['Nóng tính', 'Độc đoán', 'Thiếu kiên nhẫn', 'Có thể bốc đồng', 'Khó nghe lời khuyên'],
    compatibility: {
      best: ['Ngọ', 'Tuất'],
      good: ['Hợi', 'Thìn'],
      challenging: ['Tý', 'Tị'],
      conflict: ['Thân']
    },
    careerPaths: ['Lãnh đạo doanh nghiệp', 'Quân đội', 'Cảnh sát', 'Thể thao', 'Chính trị', 'Luật sư'],
    relationships: 'Đam mê và mạnh mẽ trong tình yêu, luôn bảo vệ người mình yêu thương.',
    moneyAttitude: 'Dám đầu tư và mạo hiểm để kiếm tiền. Có khả năng tạo ra thu nhập cao nhưng cũng có thể tiêu xài nhiều.',
    healthTendencies: ['Gan mật', 'Huyết áp', 'Cơ xương khớp', 'Stress'],
    luckyNumbers: [1, 3, 4, 7],
    luckyColors: ['Cam', 'Vàng', 'Xanh lá'],
    favorableDirections: ['Đông', 'Nam', 'Đông Bắc'],
    lifeStages: {
      childhood: 'Hoạt bát, nghịch ngợm, có tính lãnh đạo sớm',
      youth: 'Dũng cảm thử thách, có nhiều bạn bè ngưỡng mộ',
      middleAge: 'Sự nghiệp thành công, địa vị cao trong xã hội',
      oldAge: 'Được tôn kính, gia đình hạnh phúc'
    },
    monthlyLuck: {
      1: 'Khởi đầu mạnh mẽ', 2: 'Tình cảm nồng nhiệt', 3: 'Sự nghiệp đột phá',
      4: 'Cẩn thận với sức khỏe', 5: 'Cơ hội đầu tư', 6: 'Gia đình hòa thuận',
      7: 'Du lịch thuận lợi', 8: 'Thu nhập tăng cao', 9: 'Học hỏi lãnh đạo',
      10: 'Mở rộng ảnh hưởng', 11: 'Đầu tư thành công', 12: 'Hoàn thành mục tiêu'
    }
  },
  'Mão': {
    chi: 'Mão',
    animal: 'Mèo/Thỏ',
    element: 'Mộc',
    chineseCharacter: '卯',
    time: '05:00 - 07:00',
    season: 'Giữa xuân',
    meaning: 'Nhanh nhẹn, tinh tế',
    detailedMeaning: 'Mèo/Thỏ đại diện cho sự tinh tế, nhanh nhạy và khả năng thích nghi cao. Có tính cách hòa nhã và thông minh.',
    personality: ['Tinh tế', 'Nhanh nhạy', 'Hòa nhã', 'Thông minh', 'Linh hoạt'],
    strengths: ['Tính tinh tế', 'Khả năng thích nghi', 'Sự nhanh nhạy', 'Tài giao tiếp', 'Óc thẩm mỹ'],
    weaknesses: ['Hay thay đổi', 'Thiếu kiên trì', 'Dễ bị ảnh hưởng', 'Có thể hời hợt', 'Lo lắng nhiều'],
    compatibility: {
      best: ['Mùi', 'Hợi'],
      good: ['Sửu', 'Thìn'],
      challenging: ['Dậu', 'Tý'],
      conflict: ['Dậu']
    },
    careerPaths: ['Thiết kế', 'Thời trang', 'Nghệ thuật', 'Truyền thông', 'Du lịch', 'Ngoại giao'],
    relationships: 'Lãng mạn và tinh tế trong tình yêu, thích những điều đẹp đẽ và hài hòa.',
    moneyAttitude: 'Chi tiêu cho những món đồ đẹp và chất lượng. Cần học cách quản lý tài chính tốt hơn.',
    healthTendencies: ['Gan mật', 'Hệ thần kinh', 'Dị ứng', 'Mất ngủ'],
    luckyNumbers: [3, 4, 6, 9],
    luckyColors: ['Xanh lá', 'Hồng', 'Đỏ'],
    favorableDirections: ['Đông', 'Nam', 'Tây Bắc'],
    lifeStages: {
      childhood: 'Dễ thương, thông minh, được mọi người yêu quý',
      youth: 'Có nhiều tài năng, thành công trong nghệ thuật',
      middleAge: 'Cuộc sống thoải mái, có địa vị xã hội',
      oldAge: 'An nhàn, được tôn trọng vì trí tuệ'
    },
    monthlyLuck: {
      1: 'Khởi đầu thuận lợi', 2: 'Tình yêu ngọt ngào', 3: 'Công việc sáng tạo',
      4: 'Cần chú ý sức khỏe', 5: 'Chi tiêu cần kiểm soát', 6: 'Gia đình vui vẻ',
      7: 'Cơ hội du lịch', 8: 'Thu nhập từ tài năng', 9: 'Học nghệ thuật',
      10: 'Giao lưu xã hội', 11: 'Đầu tư thẩm mỹ', 12: 'Đón năm mới vui vẻ'
    }
  },
  'Thìn': {
    chi: 'Thìn',
    animal: 'Rồng',
    element: 'Thổ',
    chineseCharacter: '辰',
    time: '07:00 - 09:00',
    season: 'Cuối xuân',
    meaning: 'Cao quý, quyền lực',
    detailedMeaning: 'Rồng là biểu tượng của quyền lực, sự cao quý và may mắn. Có tầm nhìn xa và khả năng thành công lớn.',
    personality: ['Cao quý', 'Có tầm nhìn', 'Tự tin', 'Tham vọng', 'May mắn'],
    strengths: ['Tầm nhìn xa', 'Khả năng lãnh đạo', 'Sự tự tin', 'Tính sáng tạo', 'Vận may tốt'],
    weaknesses: ['Kiêu ngạo', 'Thiếu thực tế', 'Nóng tính', 'Đòi hỏi cao', 'Có thể độc đoán'],
    compatibility: {
      best: ['Tý', 'Thân'],
      good: ['Dần', 'Mão'],
      challenging: ['Sửu', 'Mùi'],
      conflict: ['Tuất']
    },
    careerPaths: ['Lãnh đạo cao cấp', 'Chính trị', 'Nghệ thuật', 'Khởi nghiệp', 'Giải trí', 'Tôn giáo'],
    relationships: 'Đam mê và lãng mạn, thích được ngưỡng mộ và tôn thờ trong tình yêu.',
    moneyAttitude: 'Có khả năng kiếm tiền lớn và thích chi tiêu cho những thứ đẳng cấp cao.',
    healthTendencies: ['Dạ dày', 'Lách', 'Da', 'Huyết áp'],
    luckyNumbers: [1, 6, 7, 8],
    luckyColors: ['Vàng', 'Cam', 'Đỏ', 'Bạc'],
    favorableDirections: ['Đông', 'Đông Nam', 'Tây Bắc'],
    lifeStages: {
      childhood: 'Thông minh xuất sắc, có khí chất lãnh đạo',
      youth: 'Thành công rực rỡ, được nhiều người ngưỡng mộ',
      middleAge: 'Đạt được địa vị cao, tài chính dồi dào',
      oldAge: 'Được tôn kính như một nhân vật có uy tín'
    },
    monthlyLuck: {
      1: 'Khởi đầu rực rỡ', 2: 'Tình yêu đẳng cấp', 3: 'Sự nghiệp thăng tiến',
      4: 'Sức khỏe cần chú ý', 5: 'Đầu tư có lãi', 6: 'Gia đình vinh hiển',
      7: 'Du lịch cao cấp', 8: 'Thu nhập khủng', 9: 'Học hỏi kiến thức mới',
      10: 'Mở rộng ảnh hưởng', 11: 'Đầu tư lớn', 12: 'Thành tựu vĩ đại'
    }
  },
  'Tị': {
    chi: 'Tị',
    animal: 'Rắn',
    element: 'Hỏa',
    chineseCharacter: '巳',
    time: '09:00 - 11:00',
    season: 'Đầu hạ',
    meaning: 'Khôn ngoan, bí ẩn',
    detailedMeaning: 'Rắn tượng trưng cho trí tuệ, sự bí ẩn và khả năng tái sinh. Có tư duy sâu sắc và trực giác tốt.',
    personality: ['Khôn ngoan', 'Bí ẩn', 'Trực giác', 'Sâu sắc', 'Quyến rũ'],
    strengths: ['Trí tuệ cao', 'Trực giác mạnh', 'Sự quyến rũ', 'Tư duy sâu sắc', 'Khả năng tái sinh'],
    weaknesses: ['Hay nghi ngờ', 'Lạnh lùng', 'Tính toán', 'Ích kỷ', 'Khó tin tưởng'],
    compatibility: {
      best: ['Sửu', 'Dậu'],
      good: ['Thìn', 'Ngọ'],
      challenging: ['Dần', 'Hợi'],
      conflict: ['Hợi']
    },
    careerPaths: ['Nghiên cứu', 'Tâm lý học', 'Y học', 'Triết học', 'Tài chính', 'Thám tử'],
    relationships: 'Sâu sắc và đam mê trong tình yêu, nhưng cần thời gian để mở lòng hoàn toàn.',
    moneyAttitude: 'Rất giỏi trong việc quản lý và đầu tư tiền bạc. Có khả năng tạo ra tài sản lớn.',
    healthTendencies: ['Tim mạch', 'Tuần hoàn', 'Mắt', 'Hệ thần kinh'],
    luckyNumbers: [2, 8, 9, 10],
    luckyColors: ['Đỏ', 'Vàng', 'Đen'],
    favorableDirections: ['Nam', 'Tây Nam', 'Đông Bắc'],
    lifeStages: {
      childhood: 'Thông minh sớm, có phần bí ẩn',
      youth: 'Học giỏi, có tài nghệ đặc biệt',
      middleAge: 'Thành công lớn, tài chính dồi dào',
      oldAge: 'Được kính trọng vì trí tuệ và kinh nghiệm'
    },
    monthlyLuck: {
      1: 'Kế hoạch thông minh', 2: 'Tình yêu sâu sắc', 3: 'Công việc phức tạp',
      4: 'Cần giữ sức khỏe', 5: 'Đầu tư sinh lời', 6: 'Gia đình hài hòa',
      7: 'Nghiên cứu sâu', 8: 'Thu nhập cao', 9: 'Học hỏi triết lý',
      10: 'Mở rộng hiểu biết', 11: 'Đầu tư dài hạn', 12: 'Hoàn thiện kế hoạch'
    }
  },
  'Ngọ': {
    chi: 'Ngọ',
    animal: 'Ngựa',
    element: 'Hỏa',
    chineseCharacter: '午',
    time: '11:00 - 13:00',
    season: 'Giữa hạ',
    meaning: 'Tự do, năng động',
    detailedMeaning: 'Ngựa biểu tượng của sự tự do, năng động và khát vọng phiêu lưu. Có tinh thần độc lập và yêu tự do.',
    personality: ['Tự do', 'Năng động', 'Phiêu lưu', 'Độc lập', 'Nhiệt tình'],
    strengths: ['Tinh thần tự do', 'Sự năng động', 'Khát vọng phiêu lưu', 'Tính độc lập', 'Nhiệt huyết'],
    weaknesses: ['Thiếu kiên nhẫn', 'Khó cam kết', 'Bốc đồng', 'Không thích ràng buộc', 'Dễ chán nản'],
    compatibility: {
      best: ['Dần', 'Tuất'],
      good: ['Mùi', 'Tị'],
      challenging: ['Tý', 'Sửu'],
      conflict: ['Tý']
    },
    careerPaths: ['Du lịch', 'Thể thao', 'Vận tải', 'Báo chí', 'Kinh doanh tự do', 'Nghệ thuật'],
    relationships: 'Đam mê và tự do trong tình yêu, cần không gian cá nhân và sự hiểu biết từ đối phương.',
    moneyAttitude: 'Chi tiêu tự do và thích đầu tư vào những trải nghiệm và du lịch.',
    healthTendencies: ['Tim mạch', 'Cột sống', 'Chân', 'Stress'],
    luckyNumbers: [2, 3, 7, 8],
    luckyColors: ['Đỏ', 'Cam', 'Tím', 'Nâu'],
    favorableDirections: ['Nam', 'Tây', 'Đông Bắc'],
    lifeStages: {
      childhood: 'Hiếu động, thích khám phá và tự do',
      youth: 'Phiêu lưu nhiều, có nhiều trải nghiệm thú vị',
      middleAge: 'Thành công trong nghề nghiệp tự do',
      oldAge: 'Sống thoải mái với nhiều kỷ niệm đẹp'
    },
    monthlyLuck: {
      1: 'Khởi đầu năng động', 2: 'Tình yêu tự do', 3: 'Công việc phát triển',
      4: 'Cần chú ý an toàn', 5: 'Chi tiêu du lịch', 6: 'Gia đình hòa thuận',
      7: 'Mùa du lịch', 8: 'Thu nhập từ sở thích', 9: 'Học kỹ năng mới',
      10: 'Mở rộng hoạt động', 11: 'Đầu tư vào đam mê', 12: 'Chuẩn bị hành trình mới'
    }
  },
  'Mùi': {
    chi: 'Mùi',
    animal: 'Dê',
    element: 'Thổ',
    chineseCharacter: '未',
    time: '13:00 - 15:00',
    season: 'Cuối hạ',
    meaning: 'Hòa thuận, nghệ thuật',
    detailedMeaning: 'Dê tượng trưng cho sự hòa thuận, nghệ thuật và tình cảm gia đình. Có tính cách hiền lành và yêu cái đẹp.',
    personality: ['Hòa thuận', 'Nghệ thuật', 'Nhân từ', 'Tình cảm', 'Tinh tế'],
    strengths: ['Tính hòa thuận', 'Tài nghệ thuật', 'Lòng nhân từ', 'Tình cảm gia đình', 'Óc thẩm mỹ'],
    weaknesses: ['Thiếu quyết đoán', 'Dễ bị ảnh hưởng', 'Hay lo lắng', 'Phụ thuộc', 'Bi quan'],
    compatibility: {
      best: ['Mão', 'Hợi'],
      good: ['Ngọ', 'Thân'],
      challenging: ['Sửu', 'Thìn'],
      conflict: ['Sửu']
    },
    careerPaths: ['Nghệ thuật', 'Thiết kế', 'Chăm sóc sức khỏe', 'Giáo dục', 'Tôn giáo', 'Làm đẹp'],
    relationships: 'Rất tình cảm và chăm sóc trong tình yêu, cần được yêu thương và bảo vệ.',
    moneyAttitude: 'Thích chi tiêu cho gia đình và những món đồ đẹp. Cần học cách quản lý tài chính.',
    healthTendencies: ['Dạ dày', 'Lách', 'Phụ khoa', 'Stress'],
    luckyNumbers: [2, 7, 8, 9],
    luckyColors: ['Xanh lá', 'Đỏ', 'Tím'],
    favorableDirections: ['Đông', 'Nam', 'Tây Nam'],
    lifeStages: {
      childhood: 'Dễ thương, được gia đình yêu thương',
      youth: 'Có tài nghệ, thành công trong nghệ thuật',
      middleAge: 'Gia đình hạnh phúc, cuộc sống ổn định',
      oldAge: 'Được con cháu hiếu thảo, sống an nhàn'
    },
    monthlyLuck: {
      1: 'Gia đình sum vầy', 2: 'Tình yêu ngọt ngào', 3: 'Công việc nghệ thuật',
      4: 'Sức khỏe cần chú ý', 5: 'Chi tiêu gia đình', 6: 'Gia đình vui vẻ',
      7: 'Nghỉ ngơi thư giãn', 8: 'Thu nhập từ tài năng', 9: 'Học nghệ thuật',
      10: 'Hoạt động cộng đồng', 11: 'Đầu tư cho gia đình', 12: 'Tết đoàn viên'
    }
  },
  'Thân': {
    chi: 'Thân',
    animal: 'Khỉ',
    element: 'Kim',
    chineseCharacter: '申',
    time: '15:00 - 17:00',
    season: 'Đầu thu',
    meaning: 'Thông minh, linh hoạt',
    detailedMeaning: 'Khỉ biểu tượng của trí thông minh, sự linh hoạt và khả năng học hỏi nhanh. Có tính cách hoạt bát và thích đổi mới.',
    personality: ['Thông minh', 'Linh hoạt', 'Hoạt bát', 'Sáng tạo', 'Thích thay đổi'],
    strengths: ['Trí thông minh', 'Sự linh hoạt', 'Khả năng học hỏi', 'Tính sáng tạo', 'Kỹ năng giao tiếp'],
    weaknesses: ['Hay thay đổi', 'Thiếu kiên trì', 'Phù phiếm', 'Khó tập trung', 'Đôi khi láu cá'],
    compatibility: {
      best: ['Tý', 'Thìn'],
      good: ['Mùi', 'Dậu'],
      challenging: ['Dần', 'Hợi'],
      conflict: ['Dần']
    },
    careerPaths: ['Công nghệ', 'Truyền thông', 'Giải trí', 'Kinh doanh', 'Giáo dục', 'Nghiên cứu'],
    relationships: 'Thông minh và hài hước trong tình yêu, luôn mang lại niềm vui cho đối phương.',
    moneyAttitude: 'Có khả năng kiếm tiền từ nhiều nguồn khác nhau nhờ sự thông minh và linh hoạt.',
    healthTendencies: ['Phổi', 'Ruột già', 'Hệ thần kinh', 'Stress'],
    luckyNumbers: [4, 5, 9, 10],
    luckyColors: ['Vàng', 'Trắng', 'Xanh dương'],
    favorableDirections: ['Tây', 'Đông Bắc', 'Nam'],
    lifeStages: {
      childhood: 'Thông minh sớm, học giỏi, được yêu thích',
      youth: 'Thành công trong học tập và công việc',
      middleAge: 'Sự nghiệp phát đạt, có nhiều cơ hội',
      oldAge: 'Sống vui vẻ với trí tuệ và kinh nghiệm phong phú'
    },
    monthlyLuck: {
      1: 'Ý tưởng sáng tạo', 2: 'Tình yêu thông minh', 3: 'Công việc đổi mới',
      4: 'Cần chú ý sức khỏe', 5: 'Đầu tư công nghệ', 6: 'Gia đình vui vẻ',
      7: 'Học hỏi mới', 8: 'Thu nhập từ trí tuệ', 9: 'Nâng cao kỹ năng',
      10: 'Mở rộng mạng lưới', 11: 'Đầu tư thông minh', 12: 'Tổng kết và lập kế hoạch'
    }
  },
  'Dậu': {
    chi: 'Dậu',
    animal: 'Gà',
    element: 'Kim',
    chineseCharacter: '酉',
    time: '17:00 - 19:00',
    season: 'Giữa thu',
    meaning: 'Cần mẫn, chính xác',
    detailedMeaning: 'Gà tượng trưng cho sự cần mẫn, chính xác và kỷ luật. Có tính cách nghiêm túc và luôn hoàn thành tốt công việc.',
    personality: ['Cần mẫn', 'Chính xác', 'Kỷ luật', 'Nghiêm túc', 'Có trách nhiệm'],
    strengths: ['Tính cần mẫn', 'Sự chính xác', 'Kỷ luật cao', 'Tinh thần trách nhiệm', 'Tổ chức tốt'],
    weaknesses: ['Cầu toàn', 'Khó tính', 'Lo lắng nhiều', 'Cứng nhắc', 'Thiếu linh hoạt'],
    compatibility: {
      best: ['Sửu', 'Tị'],
      good: ['Thân', 'Thìn'],
      challenging: ['Mão', 'Tuất'],
      conflict: ['Mão']
    },
    careerPaths: ['Kế toán', 'Quản lý', 'Y tế', 'Giáo dục', 'Luật pháp', 'Hành chính'],
    relationships: 'Nghiêm túc và chung thủy trong tình yêu, luôn quan tâm chăm sóc đối phương một cách tỉ mỉ.',
    moneyAttitude: 'Rất cẩn thận và có kế hoạch trong việc quản lý tài chính. Thích tiết kiệm và đầu tư an toàn.',
    healthTendencies: ['Phổi', 'Da', 'Tiêu hóa', 'Stress'],
    luckyNumbers: [5, 7, 8, 9],
    luckyColors: ['Vàng', 'Nâu', 'Đỏ'],
    favorableDirections: ['Tây', 'Tây Nam', 'Đông Bắc'],
    lifeStages: {
      childhood: 'Ngoan ngoãn, học hành chăm chỉ',
      youth: 'Thành công nhờ sự cần mẫn và kỷ luật',
      middleAge: 'Sự nghiệp ổn định, gia đình hạnh phúc',
      oldAge: 'Cuộc sống yên bình, được tôn trọng'
    },
    monthlyLuck: {
      1: 'Kế hoạch chi tiết', 2: 'Tình yêu chung thủy', 3: 'Công việc chính xác',
      4: 'Sức khỏe ổn định', 5: 'Tài chính được kiểm soát', 6: 'Gia đình hòa thuận',
      7: 'Nghỉ ngơi có kế hoạch', 8: 'Thu nhập từ công việc', 9: 'Học hỏi chuyên môn',
      10: 'Hoàn thiện kỹ năng', 11: 'Đầu tư an toàn', 12: 'Tổng kết năm thành công'
    }
  },
  'Tuất': {
    chi: 'Tuất',
    animal: 'Chó',
    element: 'Thổ',
    chineseCharacter: '戌',
    time: '19:00 - 21:00',
    season: 'Cuối thu',
    meaning: 'Trung thành, bảo vệ',
    detailedMeaning: 'Chó biểu tượng của lòng trung thành, tinh thần bảo vệ và công lý. Có tính cách thẳng thắn và đáng tin cậy.',
    personality: ['Trung thành', 'Thẳng thắn', 'Công bằng', 'Bảo vệ', 'Đáng tin cậy'],
    strengths: ['Lòng trung thành', 'Tính thẳng thắn', 'Tinh thần công lý', 'Sự đáng tin cậy', 'Khả năng bảo vệ'],
    weaknesses: ['Cố chấp', 'Bi quan', 'Lo lắng nhiều', 'Khó tin tưởng', 'Đôi khi tiêu cực'],
    compatibility: {
      best: ['Dần', 'Ngọ'],
      good: ['Mão', 'Hợi'],
      challenging: ['Thìn', 'Dậu'],
      conflict: ['Thìn']
    },
    careerPaths: ['Luật pháp', 'An ninh', 'Xã hội', 'Tôn giáo', 'Y tế', 'Giáo dục'],
    relationships: 'Rất trung thành và bảo vệ trong tình yêu, luôn đặt lợi ích của người yêu lên hàng đầu.',
    moneyAttitude: 'Thận trọng trong chi tiêu và thích đầu tư vào những việc có ý nghĩa xã hội.',
    healthTendencies: ['Dạ dày', 'Lách', 'Xương khớp', 'Stress'],
    luckyNumbers: [3, 4, 9, 10],
    luckyColors: ['Đỏ', 'Xanh lá', 'Tím'],
    favorableDirections: ['Đông', 'Nam', 'Tây Bắc'],
    lifeStages: {
      childhood: 'Trung thực, được gia đình và bạn bè tin tưởng',
      youth: 'Thành công nhờ lòng trung thành và công bằng',
      middleAge: 'Có địa vị trong xã hội, được tôn trọng',
      oldAge: 'Sống có ý nghĩa, được mọi người kính trọng'
    },
    monthlyLuck: {
      1: 'Khởi đầu trung thực', 2: 'Tình yêu chân thành', 3: 'Công việc công bằng',
      4: 'Cần chú ý sức khỏe', 5: 'Tài chính cẩn thận', 6: 'Gia đình hòa thuận',
      7: 'Hoạt động xã hội', 8: 'Thu nhập từ công lý', 9: 'Học hỏi đạo đức',
      10: 'Bảo vệ người khác', 11: 'Đầu tư có ý nghĩa', 12: 'Hoàn thành sứ mệnh'
    }
  },
  'Hợi': {
    chi: 'Hợi',
    animal: 'Heo',
    element: 'Thủy',
    chineseCharacter: '亥',
    time: '21:00 - 23:00',
    season: 'Đầu đông',
    meaning: 'Hòa nhã, thịnh vượng',
    detailedMeaning: 'Heo tượng trưng cho sự hòa nhã, thịnh vượng và may mắn. Có tính cách tốt bụng và luôn mang lại hạnh phúc cho người khác.',
    personality: ['Hòa nhã', 'Tốt bụng', 'Hào phóng', 'May mắn', 'Chân thành'],
    strengths: ['Tính hòa nhã', 'Lòng tốt bụng', 'Sự hào phóng', 'Vận may tốt', 'Tình cảm chân thành'],
    weaknesses: ['Dễ tin người', 'Lười biếng', 'Thiếu quyết đoán', 'Dễ bị lợi dụng', 'Quá lạc quan'],
    compatibility: {
      best: ['Mão', 'Mùi'],
      good: ['Dần', 'Tuất'],
      challenging: ['Tị', 'Thân'],
      conflict: ['Tị']
    },
    careerPaths: ['Kinh doanh', 'Dịch vụ', 'Giải trí', 'Ẩm thực', 'Từ thiện', 'Nghệ thuật'],
    relationships: 'Rất chân thành và hào phóng trong tình yêu, luôn mang lại hạnh phúc và ấm áp.',
    moneyAttitude: 'Hào phóng trong chi tiêu và thích chia sẻ với người khác. May mắn trong tài chính.',
    healthTendencies: ['Thận', 'Bàng quang', 'Béo phì', 'Tiểu đường'],
    luckyNumbers: [2, 5, 8, 11],
    luckyColors: ['Đen', 'Xanh dương', 'Vàng'],
    favorableDirections: ['Bắc', 'Đông', 'Tây Nam'],
    lifeStages: {
      childhood: 'Vui vẻ, được mọi người yêu thương',
      youth: 'May mắn trong học tập và tình cảm',
      middleAge: 'Thịnh vượng, gia đình hạnh phúc',
      oldAge: 'Sống sung túc, con cháu đầy đủ'
    },
    monthlyLuck: {
      1: 'Khởi đầu may mắn', 2: 'Tình yêu hạnh phúc', 3: 'Công việc thuận lợi',
      4: 'Cần chú ý sức khỏe', 5: 'Tài chính thịnh vượng', 6: 'Gia đình sum vầy',
      7: 'Nghỉ ngơi vui vẻ', 8: 'Thu nhập dồi dào', 9: 'Học hỏi văn hóa',
      10: 'Giao lưu bạn bè', 11: 'Đầu tư may mắn', 12: 'Đón năm mới thịnh vượng'
    }
  }
};

export default enhancedChiData;
