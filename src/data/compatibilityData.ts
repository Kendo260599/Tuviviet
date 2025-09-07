import { Compatibility, ZodiacSign } from '../types';

export const compatibilityData: Compatibility[] = [
  // Bạch Dương compatibility
  {
    sign1: 'bac-duong',
    sign2: 'su-tu',
    score: 9,
    type: 'excellent',
    description: 'Đây là cặp đôi lý tưởng với cùng yếu tố Hỏa, mang lại năng lượng mạnh mẽ và đam mê.',
    strengths: ['Cùng tính cách năng động', 'Hiểu và ủng hộ nhau', 'Tình yêu đam mê'],
    challenges: ['Đôi khi quá cạnh tranh', 'Cả hai đều muốn dẫn dắt']
  },
  {
    sign1: 'bac-duong',
    sign2: 'nhan-ma',
    score: 8,
    type: 'excellent',
    description: 'Cặp đôi phiêu lưu và tự do, luôn tìm kiếm những trải nghiệm mới.',
    strengths: ['Yêu thích phiêu lưu', 'Tôn trọng tự do cá nhân', 'Năng động và vui vẻ'],
    challenges: ['Thiếu tính ổn định', 'Khó cam kết lâu dài']
  },
  {
    sign1: 'bac-duong',
    sign2: 'song-tu',
    score: 7,
    type: 'good',
    description: 'Mối quan hệ thú vị với nhiều cuộc trò chuyện sôi nổi và ý tưởng sáng tạo.',
    strengths: ['Giao tiếp tốt', 'Luôn có chuyện để nói', 'Kích thích trí tuệ nhau'],
    challenges: ['Bạch Dương thiếu kiên nhẫn với Song Tử thay đổi', 'Khác nhau về cách tiếp cận']
  },
  {
    sign1: 'bac-duong',
    sign2: 'thien-binh',
    score: 6,
    type: 'average',
    description: 'Hai đối cực hấp dẫn nhau nhưng cần thời gian để hiểu và thích nghi.',
    strengths: ['Bổ sung cho nhau', 'Học hỏi từ quan điểm khác nhau'],
    challenges: ['Bạch Dương quá nóng nảy cho Thiên Bình', 'Thiên Bình quá do dự cho Bạch Dương']
  },

  // Kim Ngưu compatibility  
  {
    sign1: 'kim-nguu',
    sign2: 'xu-nu',
    score: 9,
    type: 'excellent',
    description: 'Cặp đôi hoàn hảo với cùng yếu tố Thổ, mang lại sự ổn định và tin cậy.',
    strengths: ['Cùng tính thực tế', 'Ổn định và đáng tin cậy', 'Mục tiêu chung về tương lai'],
    challenges: ['Đôi khi quá cứng nhắc', 'Thiếu sự bất ngờ']
  },
  {
    sign1: 'kim-nguu',
    sign2: 'ma-ket',
    score: 8,
    type: 'excellent',
    description: 'Mối quan hệ bền vững với cùng tầm nhìn về công việc và gia đình.',
    strengths: ['Cùng giá trị về gia đình', 'Hỗ trợ nhau trong sự nghiệp', 'Tính thực tế cao'],
    challenges: ['Có thể thiếu lãng mạn', 'Quá tập trung vào công việc']
  },

  // Song Tử compatibility
  {
    sign1: 'song-tu',
    sign2: 'thien-binh',
    score: 8,
    type: 'excellent',
    description: 'Hai cung Khí hòa hợp, tạo nên mối quan hệ thú vị và cân bằng.',
    strengths: ['Giao tiếp xuất sắc', 'Hiểu nhau về mặt trí tuệ', 'Quan hệ xã hội tốt'],
    challenges: ['Đôi khi thiếu chiều sâu cảm xúc', 'Khó đưa ra quyết định chung']
  },
  {
    sign1: 'song-tu',
    sign2: 'bao-binh',
    score: 8,
    type: 'excellent',
    description: 'Cặp đôi độc đáo với những ý tưởng sáng tạo và quan điểm tiến bộ.',
    strengths: ['Tư duy sáng tạo', 'Tôn trọng tự do cá nhân', 'Luôn có điều mới mẻ'],
    challenges: ['Thiếu sự ổn định cảm xúc', 'Khó dự đoán']
  },

  // Cự Giải compatibility
  {
    sign1: 'cu-giai',
    sign2: 'bo-cap',
    score: 9,
    type: 'excellent',
    description: 'Hai cung Thủy tạo nên mối liên kết cảm xúc sâu sắc và bền chặt.',
    strengths: ['Hiểu nhau về mặt cảm xúc', 'Trung thành và tận tụy', 'Kết nối tâm linh'],
    challenges: ['Đôi khi quá nhạy cảm', 'Dễ bị tổn thương']
  },
  {
    sign1: 'cu-giai',
    sign2: 'song-ngu',
    score: 8,
    type: 'excellent',
    description: 'Mối quan hệ đầy cảm xúc và sự thấu hiểu lẫn nhau.',
    strengths: ['Cảm xúc phong phú', 'Chăm sóc nhau tận tình', 'Trực giác tốt'],
    challenges: ['Dễ bị tình cảm chi phối', 'Thiếu tính thực tế']
  },

  // Sư Tử compatibility
  {
    sign1: 'su-tu',
    sign2: 'nhan-ma',
    score: 8,
    type: 'excellent',
    description: 'Cặp đôi năng động và vui vẻ, luôn tràn đầy năng lượng tích cực.',
    strengths: ['Năng động và vui vẻ', 'Ủng hộ nhau', 'Yêu thích phiêu lưu'],
    challenges: ['Sư Tử muốn được chú ý hơn', 'Nhân Mã quá tự do']
  },

  // Xử Nữ compatibility  
  {
    sign1: 'xu-nu',
    sign2: 'ma-ket',
    score: 9,
    type: 'excellent',
    description: 'Hai cung Thổ tạo nên mối quan hệ thực tế và bền vững.',
    strengths: ['Cùng tính thực tế', 'Mục tiêu rõ ràng', 'Hỗ trợ nhau phát triển'],
    challenges: ['Thiếu sự lãng mạn', 'Quá tập trung vào chi tiết']
  },

  // Thiên Bình compatibility
  {
    sign1: 'thien-binh',
    sign2: 'bao-binh',
    score: 8,
    type: 'excellent',
    description: 'Hai cung Khí tạo nên mối quan hệ hài hòa và trí tuệ.',
    strengths: ['Hài hòa trong giao tiếp', 'Tôn trọng quan điểm nhau', 'Quan hệ xã hội tốt'],
    challenges: ['Khó đưa ra quyết định', 'Thiếu sự quyết đoán']
  },

  // Bò Cạp compatibility
  {
    sign1: 'bo-cap',
    sign2: 'song-ngu',
    score: 8,
    type: 'excellent',
    description: 'Mối liên kết cảm xúc sâu sắc giữa hai cung Thủy.',
    strengths: ['Kết nối cảm xúc sâu sắc', 'Hiểu nhau không cần lời', 'Trung thành'],
    challenges: ['Quá nhạy cảm', 'Dễ bị cảm xúc chi phối']
  },

  // Nhân Mã compatibility
  {
    sign1: 'nhan-ma',
    sign2: 'bao-binh',
    score: 7,
    type: 'good',
    description: 'Cặp đôi tự do và độc lập, luôn khám phá những điều mới mẻ.',
    strengths: ['Tôn trọng tự do', 'Luôn học hỏi', 'Không gò bó nhau'],
    challenges: ['Thiếu cam kết', 'Khó tạo sự ổn định']
  },

  // Ma Kết compatibility
  {
    sign1: 'ma-ket',
    sign2: 'kim-nguu',
    score: 9,
    type: 'excellent',
    description: 'Hai cung Thổ tạo nên nền tảng vững chắc cho tương lai.',
    strengths: ['Mục tiêu chung', 'Ổn định tài chính', 'Xây dựng tương lai vững chắc'],
    challenges: ['Thiếu sự lãng mạn', 'Quá tập trung vào công việc']
  },

  // Bảo Bình compatibility
  {
    sign1: 'bao-binh',
    sign2: 'song-tu',
    score: 8,
    type: 'excellent',
    description: 'Hai cung Khí tạo nên mối quan hệ thú vị và đầy sáng tạo.',
    strengths: ['Trí tuệ và sáng tạo', 'Tự do cá nhân', 'Luôn có điều mới'],
    challenges: ['Thiếu ổn định cảm xúc', 'Khó cam kết sâu sắc']
  },

  // Song Ngư compatibility
  {
    sign1: 'song-ngu',
    sign2: 'cu-giai',
    score: 8,
    type: 'excellent',
    description: 'Hai cung Thủy tạo nên mối liên kết cảm xúc đặc biệt.',
    strengths: ['Cảm xúc phong phú', 'Chăm sóc nhau', 'Kết nối tâm linh'],
    challenges: ['Quá nhạy cảm', 'Thiếu tính thực tế']
  }
];

// Hàm tìm độ tương hợp giữa hai cung
export function findCompatibility(sign1: ZodiacSign, sign2: ZodiacSign): Compatibility | null {
  return compatibilityData.find(
    comp => (comp.sign1 === sign1 && comp.sign2 === sign2) ||
            (comp.sign1 === sign2 && comp.sign2 === sign1)
  ) || null;
}

// Hàm lấy danh sách cung tương hợp nhất
export function getMostCompatibleSigns(sign: ZodiacSign): Compatibility[] {
  return compatibilityData
    .filter(comp => comp.sign1 === sign || comp.sign2 === sign)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}
