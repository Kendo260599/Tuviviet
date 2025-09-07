import { HoroscopeEntry, ZodiacSign } from '../types';

export const sampleHoroscopes: HoroscopeEntry[] = [
  // Bạch Dương
  {
    id: 'bac-duong-today',
    sign: 'bac-duong',
    date: '2025-09-07',
    period: 'today',
    general: 'Hôm nay là ngày tốt để bạn khởi động những dự án mới. Năng lượng tích cực từ sao Hỏa sẽ mang lại động lực mạnh mẽ cho mọi hoạt động.',
    love: 'Tình yêu khá thuận lợi. Những cặp đôi sẽ có những khoảnh khắc ngọt ngào. Người độc thân có thể gặp được người ấy qua bạn bè.',
    career: 'Công việc tiến triển tốt. Đây là thời điểm thích hợp để thể hiện khả năng lãnh đạo và sự sáng tạo của bạn trong dự án.',
    health: 'Sức khỏe ổn định. Tuy nhiên, hãy chú ý không làm việc quá sức và dành thời gian thư giãn hợp lý.',
    finance: 'Tài chính có dấu hiệu cải thiện. Có thể có những khoản thu bất ngờ từ công việc phụ hoặc đầu tư cũ.',
    lucky: {
      number: 8,
      color: 'Đỏ',
      time: '10:00 - 12:00'
    },
    rating: {
      general: 8,
      love: 7,
      career: 9,
      health: 7,
      finance: 8
    }
  },
  {
    id: 'bac-duong-week',
    sign: 'bac-duong',
    date: '2025-09-07',
    period: 'week',
    general: 'Tuần này đầy năng lượng và cơ hội. Bạn sẽ cảm thấy động lực mạnh mẽ để theo đuổi những mục tiêu dài hạn.',
    love: 'Mối quan hệ tình cảm có nhiều tiến triển tích cực. Hãy mở lòng và thể hiện tình cảm chân thành.',
    career: 'Sự nghiệp phát triển vượt bậc. Có thể có cơ hội thăng tiến hoặc chuyển công tác tốt hơn.',
    health: 'Cần chú ý đến việc cân bằng giữa làm việc và nghỉ ngơi để tránh stress.',
    finance: 'Thu nhập ổn định và có xu hướng tăng. Đây là thời điểm tốt để lập kế hoạch đầu tư dài hạn.',
    lucky: {
      number: 17,
      color: 'Cam',
      time: 'Sáng sớm'
    },
    rating: {
      general: 9,
      love: 8,
      career: 9,
      health: 6,
      finance: 8
    }
  },
  // Kim Ngưu
  {
    id: 'kim-nguu-today',
    sign: 'kim-nguu',
    date: '2025-09-07',
    period: 'today',
    general: 'Hôm nay bạn cảm thấy ổn định và thoải mái với những kế hoạch đã định. Hãy tận dụng sự kiên nhẫn để hoàn thành công việc.',
    love: 'Tình yêu êm ấm và bình yên. Những khoảnh khắc giản đơn bên người yêu sẽ mang lại nhiều ý nghĩa.',
    career: 'Công việc tiến triển chậm nhưng chắc chắn. Sự kiên trì sẽ được đền đáp xứng đang.',
    health: 'Sức khỏe tốt, đặc biệt là hệ tiêu hóa. Hãy duy trì chế độ ăn uống lành mạnh.',
    finance: 'Tình hình tài chính ổn định. Đây là thời điểm phù hợp để tiết kiệm cho tương lai.',
    lucky: {
      number: 6,
      color: 'Xanh lá',
      time: '14:00 - 16:00'
    },
    rating: {
      general: 7,
      love: 8,
      career: 7,
      health: 8,
      finance: 8
    }
  },
  // Song Tử
  {
    id: 'song-tu-today',
    sign: 'song-tu',
    date: '2025-09-07',
    period: 'today',
    general: 'Hôm nay đầu óc bạn rất linh hoạt và sáng tạo. Đây là ngày tốt để giao tiếp và học hỏi những điều mới.',
    love: 'Tình yêu có nhiều màu sắc thú vị. Hãy dành thời gian trò chuyện và tìm hiểu sâu hơn về người ấy.',
    career: 'Khả năng giao tiếp xuất sắc sẽ giúp bạn thành công trong các cuộc họp và đàm phán.',
    health: 'Cần chú ý đến hệ thần kinh. Hãy tránh căng thẳng và dành thời gian thư giãn.',
    finance: 'Có thể có những giao dịch nhỏ mang lại lợi nhuận. Hãy cân nhắc kỹ trước khi quyết định.',
    lucky: {
      number: 5,
      color: 'Vàng',
      time: '09:00 - 11:00'
    },
    rating: {
      general: 8,
      love: 7,
      career: 8,
      health: 6,
      finance: 7
    }
  }
];

// Hàm tạo dữ liệu tử vi mẫu cho tất cả các cung
export function generateSampleHoroscope(sign: ZodiacSign, period: 'today' | 'week' | 'month'): HoroscopeEntry {
  const today = new Date();
  const dateString = today.toISOString().split('T')[0];
  
  const templates = {
    today: {
      general: 'Hôm nay mang đến nhiều cơ hội tốt đẹp cho bạn. Hãy tận dụng năng lượng tích cực để thực hiện những kế hoạch đã định.',
      love: 'Tình yêu có những chuyển biến tích cực. Hãy mở lòng và thể hiện tình cảm chân thành với người mình yêu.',
      career: 'Công việc tiến triển thuận lợi. Đây là thời điểm tốt để thể hiện khả năng và tài năng của bạn.',
      health: 'Sức khỏe ổn định. Hãy duy trì lối sống lành mạnh và tập thể dục đều đặn.',
      finance: 'Tình hình tài chính khá tốt. Có thể có những khoản thu bất ngờ hoặc cơ hội đầu tư.'
    },
    week: {
      general: 'Tuần này đầy tiềm năng và cơ hội phát triển. Bạn sẽ cảm thấy tự tin hơn trong mọi quyết định.',
      love: 'Mối quan hệ tình cảm có nhiều tiến triển đáng kể. Hãy dành thời gian chất lượng bên người yêu.',
      career: 'Sự nghiệp có bước tiến vượt bậc. Có thể có cơ hội thăng tiến hoặc mở rộng công việc.',
      health: 'Cần cân bằng giữa công việc và nghỉ ngơi để duy trì sức khỏe tốt nhất.',
      finance: 'Thu nhập tăng dần và ổn định. Đây là thời điểm tốt để lập kế hoạch tài chính dài hạn.'
    },
    month: {
      general: 'Tháng này mang lại nhiều thay đổi tích cực trong cuộc sống. Hãy chuẩn bị tinh thần cho những bước ngoặt mới.',
      love: 'Tình yêu trải qua giai đoạn phát triển mạnh mẽ. Những mối quan hệ sẽ trở nên sâu sắc hơn.',
      career: 'Sự nghiệp có những breakthrough quan trọng. Đây là thời điểm để theo đuổi những mục tiêu lớn.',
      health: 'Sức khỏe tổng thể tốt nhưng cần chú ý đến việc quản lý stress hiệu quả.',
      finance: 'Tài chính có xu hướng phát triển tích cực với nhiều cơ hội đầu tư hấp dẫn.'
    }
  };

  return {
    id: `${sign}-${period}`,
    sign,
    date: dateString,
    period,
    general: templates[period].general,
    love: templates[period].love,
    career: templates[period].career,
    health: templates[period].health,
    finance: templates[period].finance,
    lucky: {
      number: Math.floor(Math.random() * 30) + 1,
      color: ['Đỏ', 'Xanh', 'Vàng', 'Tím', 'Hồng'][Math.floor(Math.random() * 5)],
      time: ['Sáng sớm', '10:00-12:00', '14:00-16:00', '18:00-20:00'][Math.floor(Math.random() * 4)]
    },
    rating: {
      general: Math.floor(Math.random() * 3) + 7, // 7-9
      love: Math.floor(Math.random() * 3) + 7,
      career: Math.floor(Math.random() * 3) + 7,
      health: Math.floor(Math.random() * 3) + 7,
      finance: Math.floor(Math.random() * 3) + 7
    }
  };
}
