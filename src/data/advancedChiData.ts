// Advanced Earthly Branches (Địa Chi) Analysis - Part 2
import { DiaChi } from './canChiData';
import { AdvancedChiAnalysis } from './advancedAstrologyData';

// 🐲 ENHANCED ĐỊA CHI DATA (12 Earthly Branches)
export const advancedChiData: Record<DiaChi, AdvancedChiAnalysis> = {
  'Tý': {
    element: 'Thủy',
    hiddenElements: ['Thủy'],
    animal: 'Chuột',
    timeFrame: '23:00-01:00',
    season: 'Đông giữa',
    direction: 'Chính Bắc',
    cosmicEnergy: 'Âm cực, bắt đầu chu kỳ mới',
    
    animalWisdom: {
      core: ['Thông minh lanh lợi', 'Nhạy bén cơ hội', 'Sống sót trong khó khăn'],
      instincts: ['Dự cảm nguy hiểm', 'Tìm kiếm cơ hội', 'Thích nghi nhanh'],
      survival: ['Tiết kiệm tích trữ', 'Tìm đường thoát', 'Kết bạn để bảo vệ'],
      social: ['Xây dựng mạng lưới', 'Hỗ trợ lẫn nhau', 'Giao tiếp linh hoạt']
    },
    
    lifeCycles: {
      childhood: 'Trẻ thông minh sớm, hiếu động, thích khám phá và học hỏi',
      youth: 'Năng động tìm kiếm cơ hội, dễ thành công sớm trong sự nghiệp',
      midlife: 'Ổn định tài chính, có khả năng quản lý và đầu tư tốt',
      elderhood: 'Tuổi già khỏe mạnh, được con cháu kính trọng và chăm sóc'
    },
    
    monthlyInfluence: {
      1: { energy: 'Khởi đầu', focus: 'Lập kế hoạch', advice: 'Đặt mục tiêu rõ ràng', caution: 'Tránh vội vàng' },
      2: { energy: 'Phát triển', focus: 'Học hỏi', advice: 'Đầu tư vào kiến thức', caution: 'Không nên quá tham' },
      3: { energy: 'Mở rộng', focus: 'Kết nối', advice: 'Xây dựng mối quan hệ', caution: 'Chọn lọc bạn bè' },
      4: { energy: 'Ổn định', focus: 'Xây dựng', advice: 'Tích lũy từ từ', caution: 'Tránh đầu tư mạo hiểm' },
      5: { energy: 'Thịnh vượng', focus: 'Thu hoạch', advice: 'Tận dụng cơ hội', caution: 'Đừng quá tự tin' },
      6: { energy: 'Cân bằng', focus: 'Điều chỉnh', advice: 'Đánh giá lại kế hoạch', caution: 'Tránh thay đổi đột ngột' },
      7: { energy: 'Chuyển hướng', focus: 'Đổi mới', advice: 'Tìm hướng mới', caution: 'Không nên bỏ cuộc' },
      8: { energy: 'Thu thập', focus: 'Chuẩn bị', advice: 'Tích trữ tài nguyên', caution: 'Tránh chi tiêu hoang phí' },
      9: { energy: 'Hoàn thành', focus: 'Kết thúc', advice: 'Hoàn thiện dự án', caution: 'Không vội khởi đầu mới' },
      10: { energy: 'Chuyển đổi', focus: 'Thích nghi', advice: 'Chuẩn bị thay đổi', caution: 'Tránh quyết định vội vàng' },
      11: { energy: 'Tích lũy', focus: 'Chuẩn bị', advice: 'Đầu tư dài hạn', caution: 'Không nên nghỉ ngơi quá nhiều' },
      12: { energy: 'Kết thúc', focus: 'Tổng kết', advice: 'Nhìn lại và rút kinh nghiệm', caution: 'Tránh bi quan' }
    },
    
    harmonyWith: ['Thìn', 'Thân'],
    conflictWith: ['Ngọ'],
    triangleGroups: [['Tý', 'Thìn', 'Thân'], ['Sửu', 'Tị', 'Dậu']]
  },
  
  'Sửu': {
    element: 'Thổ',
    hiddenElements: ['Kỷ', 'Quý', 'Tân'],
    animal: 'Trâu',
    timeFrame: '01:00-03:00',
    season: 'Đông cuối',
    direction: 'Đông Bắc',
    cosmicEnergy: 'Thổ khố, tích lũy và bảo tồn',
    
    animalWisdom: {
      core: ['Chăm chỉ kiên trì', 'Đáng tin cậy', 'Sức mạnh bền bỉ'],
      instincts: ['Làm việc từng bước', 'Bảo vệ gia đình', 'Tích lũy của cải'],
      survival: ['Chuẩn bị chu đáo', 'Tiết kiệm thông minh', 'Hỗ trợ cộng đồng'],
      social: ['Trung thành bạn bè', 'Chăm sóc gia đình', 'Xây dựng niềm tin']
    },
    
    lifeCycles: {
      childhood: 'Trẻ ngoan ngoãn, học chậm nhưng nhớ lâu, thích môi trường ổn định',
      youth: 'Phát triển sự nghiệp từ từ nhưng vững chắc, kết hôn muộn nhưng bền vững',
      midlife: 'Thành công trong kinh doanh hoặc quản lý, có tài sản ổn định',
      elderhood: 'Cuộc sống thịnh vượng, được con cháu tôn kính và noi gương'
    },
    
    monthlyInfluence: {
      1: { energy: 'Khởi động', focus: 'Lập nền móng', advice: 'Bắt đầu từ cơ bản', caution: 'Đừng vội vàng' },
      2: { energy: 'Xây dựng', focus: 'Tích lũy', advice: 'Làm việc chăm chỉ', caution: 'Tránh quá tải' },
      3: { energy: 'Phát triển', focus: 'Mở rộng', advice: 'Đầu tư thêm', caution: 'Không mạo hiểm' },
      4: { energy: 'Vững chắc', focus: 'Củng cố', advice: 'Tăng cường nền móng', caution: 'Tránh thay đổi lớn' },
      5: { energy: 'Thịnh vượng', focus: 'Thu hoạch', advice: 'Tận hưởng thành quả', caution: 'Đừng ngừng nỗ lực' },
      6: { energy: 'Ổn định', focus: 'Duy trì', advice: 'Giữ vững thành tích', caution: 'Tránh tự mãn' },
      7: { energy: 'Điều chỉnh', focus: 'Cải thiện', advice: 'Nâng cao chất lượng', caution: 'Không thay đổi toàn bộ' },
      8: { energy: 'Chuẩn bị', focus: 'Tích trữ', advice: 'Dự trữ cho tương lai', caution: 'Tránh bảo thủ quá mức' },
      9: { energy: 'Hoàn thành', focus: 'Tổng kết', advice: 'Đánh giá kết quả', caution: 'Không ngừng học hỏi' },
      10: { energy: 'Chuyển giai đoạn', focus: 'Thích nghi', advice: 'Chuẩn bị cho mới', caution: 'Đừng quá lo lắng' },
      11: { energy: 'Tăng cường', focus: 'Đầu tư', advice: 'Mở rộng kinh doanh', caution: 'Tránh vay nợ nhiều' },
      12: { energy: 'Nghỉ ngơi', focus: 'Phục hồi', advice: 'Chăm sóc sức khỏe', caution: 'Không lười biếng' }
    },
    
    harmonyWith: ['Tị', 'Dậu'],
    conflictWith: ['Mùi'],
    triangleGroups: [['Sửu', 'Tị', 'Dậu'], ['Dần', 'Ngọ', 'Tuất']]
  },
  
  'Dần': {
    element: 'Mộc',
    hiddenElements: ['Giáp', 'Bính', 'Mậu'],
    animal: 'Hổ',
    timeFrame: '03:00-05:00',
    season: 'Xuân đầu',
    direction: 'Đông Đông Bắc',
    cosmicEnergy: 'Mộc sinh, sức sống bùng nổ',
    
    animalWisdom: {
      core: ['Dũng cảm mạnh mẽ', 'Bảo vệ kẻ yếu', 'Lãnh đạo tự nhiên'],
      instincts: ['Săn mồi chiến lược', 'Bảo vệ lãnh thổ', 'Độc lập tự chủ'],
      survival: ['Sức mạnh thể chất', 'Tính cảnh giác cao', 'Quyết đoán nhanh chóng'],
      social: ['Lãnh đạo nhóm', 'Bảo vệ gia đình', 'Tạo sự an toàn']
    },
    
    lifeCycles: {
      childhood: 'Trẻ năng động, thích phiêu lưu, cần được hướng dẫn kỷ luật',
      youth: 'Thành công sớm trong sự nghiệp, có khả năng lãnh đạo xuất sắc',
      midlife: 'Đạt được vị trí cao trong xã hội, có ảnh hưởng lớn',
      elderhood: 'Được tôn kính như bậc trưởng lão, để lại di sản quý báu'
    },
    
    monthlyInfluence: {
      1: { energy: 'Bùng nổ', focus: 'Hành động', advice: 'Khởi động mạnh mẽ', caution: 'Tránh hấp tấp' },
      2: { energy: 'Phát triển', focus: 'Mở rộng', advice: 'Tăng cường sức mạnh', caution: 'Không quá độc đoán' },
      3: { energy: 'Thịnh vượng', focus: 'Thành công', advice: 'Tận dụng cơ hội', caution: 'Đừng quá tự tin' },
      4: { energy: 'Ổn định', focus: 'Củng cố', advice: 'Xây dựng nền móng', caution: 'Tránh bảo thủ' },
      5: { energy: 'Rực rỡ', focus: 'Tỏa sáng', advice: 'Thể hiện tài năng', caution: 'Không khoe khoang' },
      6: { energy: 'Cân bằng', focus: 'Điều hòa', advice: 'Lắng nghe ý kiến', caution: 'Tránh cố chấp' },
      7: { energy: 'Thách thức', focus: 'Vượt khó', advice: 'Dùng sức mạnh nội tại', caution: 'Không bạo lực' },
      8: { energy: 'Chiến thắng', focus: 'Thành tựu', advice: 'Gặt hái thành công', caution: 'Đừng kiêu ngạo' },
      9: { energy: 'Hoàn thiện', focus: 'Tổng kết', advice: 'Rút kinh nghiệm', caution: 'Không dừng lại' },
      10: { energy: 'Chuyển đổi', focus: 'Thích nghi', advice: 'Học cách linh hoạt', caution: 'Tránh cứng nhắc' },
      11: { energy: 'Chuẩn bị', focus: 'Tích lũy', advice: 'Đầu tư sức mạnh', caution: 'Không nóng vội' },
      12: { energy: 'Nghỉ ngơi', focus: 'Phục hồi', advice: 'Bảo tồn năng lượng', caution: 'Đừng lười biếng' }
    },
    
    harmonyWith: ['Ngọ', 'Tuất'],
    conflictWith: ['Thân'],
    triangleGroups: [['Dần', 'Ngọ', 'Tuất'], ['Mão', 'Mùi', 'Hợi']]
  },
  
  'Mão': {
    element: 'Mộc',
    hiddenElements: ['Ất'],
    animal: 'Mèo/Thỏ',
    timeFrame: '05:00-07:00',
    season: 'Xuân giữa',
    direction: 'Chính Đông',
    cosmicEnergy: 'Mộc thuần, sinh sôi nảy nở',
    
    animalWisdom: {
      core: ['Nhạy bén tinh tế', 'Thẩm mỹ cao', 'Hòa hợp yêu thương'],
      instincts: ['Tránh nguy hiểm', 'Tìm kiếm an toàn', 'Quan sát kỹ lưỡng'],
      survival: ['Nhanh nhẹn linh hoạt', 'Biết ẩn nấp', 'Tìm kiếm bảo vệ'],
      social: ['Hòa đồng thân thiện', 'Tạo không khí vui vẻ', 'Quan tâm người khác']
    },
    
    lifeCycles: {
      childhood: 'Trẻ hiền lành, thông minh, thích nghệ thuật và học tốt',
      youth: 'Thành công trong các lĩnh vực sáng tạo, có nhiều mối quan hệ tốt',
      midlife: 'Cuộc sống ổn định, hạnh phúc với gia đình và sự nghiệp',
      elderhood: 'Tuổi già an nhiên, được yêu thương và tôn trọng'
    },
    
    monthlyInfluence: {
      1: { energy: 'Tươi mới', focus: 'Khởi đầu', advice: 'Bắt đầu nhẹ nhàng', caution: 'Tránh vội vàng' },
      2: { energy: 'Phát triển', focus: 'Sáng tạo', advice: 'Thể hiện tài năng', caution: 'Không quá nhạy cảm' },
      3: { energy: 'Thịnh vượng', focus: 'Nghệ thuật', advice: 'Tận hưởng vẻ đẹp', caution: 'Đừng quá mơ mộng' },
      4: { energy: 'Hòa hợp', focus: 'Kết nối', advice: 'Xây dựng mối quan hệ', caution: 'Tránh phụ thuộc' },
      5: { energy: 'Rực rỡ', focus: 'Tỏa sáng', advice: 'Chia sẻ tài năng', caution: 'Không thu mình' },
      6: { energy: 'Cân bằng', focus: 'Hài hòa', advice: 'Tạo sự cân bằng', caution: 'Tránh lưỡng lự' },
      7: { energy: 'Thử thách', focus: 'Thích nghi', advice: 'Học cách mạnh mẽ', caution: 'Không tránh né' },
      8: { energy: 'Thu hoạch', focus: 'Thành tựu', advice: 'Gặt hái kết quả', caution: 'Đừng ngừng nỗ lực' },
      9: { energy: 'Hoàn thiện', focus: 'Tinh tế', advice: 'Hoàn thiện tác phẩm', caution: 'Không cầu toàn quá mức' },
      10: { energy: 'Chuyển hóa', focus: 'Thay đổi', advice: 'Thích nghi linh hoạt', caution: 'Tránh thay đổi đột ngột' },
      11: { energy: 'Tích lũy', focus: 'Học hỏi', advice: 'Đầu tư kiến thức', caution: 'Không quá thụ động' },
      12: { energy: 'Yên tĩnh', focus: 'Suy ngẫm', advice: 'Tìm kiếm bình an', caution: 'Đừng cô lập bản thân' }
    },
    
    harmonyWith: ['Mùi', 'Hợi'],
    conflictWith: ['Dậu'],
    triangleGroups: [['Mão', 'Mùi', 'Hợi'], ['Tý', 'Thìn', 'Thân']]
  },
  
  'Thìn': {
    element: 'Thổ',
    hiddenElements: ['Mậu', 'Ất', 'Quý'],
    animal: 'Rồng',
    timeFrame: '07:00-09:00',
    season: 'Xuân cuối',
    direction: 'Đông Nam',
    cosmicEnergy: 'Thổ khố, quyền lực và biến hóa',
    
    animalWisdom: {
      core: ['Quyền lực tối thượng', 'Biến hóa khôn lường', 'Trí tuệ siêu phàm'],
      instincts: ['Bay cao nhìn xa', 'Kiểm soát tình huống', 'Tạo ra phép màu'],
      survival: ['Sức mạnh vô song', 'Khả năng thích nghi', 'Thu hút nguồn lực'],
      social: ['Lãnh đạo tối cao', 'Truyền cảm hứng', 'Bảo vệ cộng đồng']
    },
    
    lifeCycles: {
      childhood: 'Trẻ đặc biệt, có tài năng nổi bật, cần được nuôi dưỡng đúng cách',
      youth: 'Thành công vượt trội, có cơ hội phát triển sự nghiệp rực rỡ',
      midlife: 'Đạt được vị thế cao nhất, có ảnh hưởng lớn đến xã hội',
      elderhood: 'Trở thành huyền thoại, để lại di sản vĩ đại cho hậu thế'
    },
    
    monthlyInfluence: {
      1: { energy: 'Thức tỉnh', focus: 'Khởi động', advice: 'Bắt đầu với tham vọng lớn', caution: 'Tránh quá khích' },
      2: { energy: 'Bay cao', focus: 'Tầm nhìn', advice: 'Mở rộng tầm nhìn', caution: 'Không xa rời thực tế' },
      3: { energy: 'Quyền lực', focus: 'Lãnh đạo', advice: 'Thể hiện khả năng lãnh đạo', caution: 'Đừng áp đảo' },
      4: { energy: 'Xây dựng', focus: 'Tạo dựng', advice: 'Xây dựng đế chế', caution: 'Tránh độc tài' },
      5: { energy: 'Tỏa sáng', focus: 'Thành công', advice: 'Tận hưởng vinh quang', caution: 'Không kiêu căng' },
      6: { energy: 'Cân bằng', focus: 'Điều hòa', advice: 'Cân bằng sức mạnh', caution: 'Tránh lạm quyền' },
      7: { energy: 'Biến hóa', focus: 'Thay đổi', advice: 'Thích nghi và đổi mới', caution: 'Không thay đổi liên tục' },
      8: { energy: 'Thu hoạch', focus: 'Thành tựu', advice: 'Gặt hái thành quả', caution: 'Đừng ngừng phát triển' },
      9: { energy: 'Hoàn thiện', focus: 'Tinh thần', advice: 'Nâng cao tâm linh', caution: 'Không tách khỏi hiện thực' },
      10: { energy: 'Chuyển hóa', focus: 'Tiến hóa', advice: 'Nâng tầm bản thân', caution: 'Tránh quá phức tạp' },
      11: { energy: 'Tích lũy', focus: 'Chuẩn bị', advice: 'Chuẩn bị cho bước tiếp', caution: 'Không ngừng nghỉ quá lâu' },
      12: { energy: 'Ẩn cư', focus: 'Suy ngẫm', advice: 'Tìm kiếm trí tuệ sâu xa', caution: 'Đừng tách khỏi thế giới' }
    },
    
    harmonyWith: ['Tý', 'Thân'],
    conflictWith: ['Tuất'],
    triangleGroups: [['Tý', 'Thìn', 'Thân'], ['Sửu', 'Tị', 'Dậu']]
  },
  
  'Tị': {
    element: 'Hỏa',
    hiddenElements: ['Bính', 'Mậu', 'Canh'],
    animal: 'Rắn',
    timeFrame: '09:00-11:00',
    season: 'Hạ đầu',
    direction: 'Nam Đông Nam',
    cosmicEnergy: 'Hỏa sinh, trí tuệ và bí ẩn',
    
    animalWisdom: {
      core: ['Trí tuệ sâu sắc', 'Bí ẩn khó đoán', 'Quyến rũ mê hoặc'],
      instincts: ['Quan sát thầm lặng', 'Tấn công chính xác', 'Biết thời cơ'],
      survival: ['Kiên nhẫn chờ đợi', 'Tập trung tuyệt đối', 'Thích nghi môi trường'],
      social: ['Thu hút bí ẩn', 'Tạo ảnh hưởng sâu xa', 'Bảo vệ bí mật']
    },
    
    lifeCycles: {
      childhood: 'Trẻ thông minh, quan sát tốt, có xu hướng hướng nội',
      youth: 'Thành công trong các lĩnh vực cần trí tuệ và kiên nhẫn',
      midlife: 'Đạt được thành tựu lớn, có ảnh hưởng sâu rộng',
      elderhood: 'Trở thành người cố vấn thông thái, được kính trọng'
    },
    
    monthlyInfluence: {
      1: { energy: 'Thức tỉnh', focus: 'Quan sát', advice: 'Quan sát và học hỏi', caution: 'Tránh quá thụ động' },
      2: { energy: 'Phát triển', focus: 'Tích lũy', advice: 'Tích lũy kiến thức', caution: 'Không quá bí hiểm' },
      3: { energy: 'Tỏa sáng', focus: 'Thể hiện', advice: 'Thể hiện trí tuệ', caution: 'Đừng khoe khoang' },
      4: { energy: 'Ổn định', focus: 'Xây dựng', advice: 'Xây dựng uy tín', caution: 'Tránh bí mật quá mức' },
      5: { energy: 'Thịnh vượng', focus: 'Thành công', advice: 'Thu hoạch kết quả', caution: 'Không tự mãn' },
      6: { energy: 'Cân bằng', focus: 'Điều hòa', advice: 'Cân bằng lý trí và cảm xúc', caution: 'Tránh lạnh lùng' },
      7: { energy: 'Thách thức', focus: 'Vượt khó', advice: 'Dùng trí tuệ vượt qua', caution: 'Không quá tính toán' },
      8: { energy: 'Thu hoạch', focus: 'Thành tựu', advice: 'Gặt hái thành quả', caution: 'Đừng ngừng học hỏi' },
      9: { energy: 'Hoàn thiện', focus: 'Tinh thần', advice: 'Nâng cao tâm linh', caution: 'Không tách khỏi đời thường' },
      10: { energy: 'Biến đổi', focus: 'Thay đổi', advice: 'Thích nghi khôn ngoan', caution: 'Tránh biến hóa liên tục' },
      11: { energy: 'Chuẩn bị', focus: 'Tích trữ', advice: 'Chuẩn bị cho tương lai', caution: 'Không quá cẩn thận' },
      12: { energy: 'Nghỉ ngơi', focus: 'Suy ngẫm', advice: 'Tìm kiếm trí tuệ sâu xa', caution: 'Đừng cô lập hoàn toàn' }
    },
    
    harmonyWith: ['Sửu', 'Dậu'],
    conflictWith: ['Hợi'],
    triangleGroups: [['Sửu', 'Tị', 'Dậu'], ['Dần', 'Ngọ', 'Tuất']]
  },
  
  'Ngọ': {
    element: 'Hỏa',
    hiddenElements: ['Đinh', 'Kỷ'],
    animal: 'Ngựa',
    timeFrame: '11:00-13:00',
    season: 'Hạ giữa',
    direction: 'Chính Nam',
    cosmicEnergy: 'Hỏa cực, năng lượng đỉnh cao',
    
    animalWisdom: {
      core: ['Tự do bất cứ', 'Năng lượng dồi dào', 'Tinh thần phiêu lưu'],
      instincts: ['Chạy thật nhanh', 'Tìm kiếm tự do', 'Khám phá mới lạ'],
      survival: ['Sức mạnh thể chất', 'Tốc độ vượt trội', 'Bản năng báo động'],
      social: ['Dẫn dắt đàn', 'Bảo vệ lãnh thổ', 'Chia sẻ năng lượng']
    },
    
    lifeCycles: {
      childhood: 'Trẻ năng động, thích vận động, cần được hướng dẫn kỷ luật',
      youth: 'Thành công sớm, có nhiều cơ hội du lịch và phiêu lưu',
      midlife: 'Sự nghiệp thành đạt, có ảnh hưởng lớn trong cộng đồng',
      elderhood: 'Tuổi già vẫn khỏe mạnh, tích cực tham gia hoạt động xã hội'
    },
    
    monthlyInfluence: {
      1: { energy: 'Khởi động', focus: 'Hành động', advice: 'Bắt đầu với nhiệt huyết', caution: 'Tránh vội vàng' },
      2: { energy: 'Tăng tốc', focus: 'Phát triển', advice: 'Tăng cường nỗ lực', caution: 'Không quá nóng vội' },
      3: { energy: 'Đỉnh cao', focus: 'Thành công', advice: 'Tận dụng cơ hội tốt nhất', caution: 'Đừng quá tự tin' },
      4: { energy: 'Ổn định', focus: 'Duy trì', advice: 'Giữ vững thành tích', caution: 'Tránh chủ quan' },
      5: { energy: 'Rực rỡ', focus: 'Tỏa sáng', advice: 'Thể hiện hết khả năng', caution: 'Không khoe khoang' },
      6: { energy: 'Cân bằng', focus: 'Điều chỉnh', advice: 'Cân bằng việc và nghỉ', caution: 'Tránh kiệt sức' },
      7: { energy: 'Thách thức', focus: 'Vượt qua', advice: 'Dùng sức mạnh vượt khó', caution: 'Không bán sức' },
      8: { energy: 'Thu hoạch', focus: 'Kết quả', advice: 'Gặt hái thành công', caution: 'Đừng ngừng cố gắng' },
      9: { energy: 'Hoàn thiện', focus: 'Tinh thần', advice: 'Nâng cao ý thức', caution: 'Không lơ là thể chất' },
      10: { energy: 'Chuyển hướng', focus: 'Thay đổi', advice: 'Tìm hướng đi mới', caution: 'Tránh thay đổi đột ngột' },
      11: { energy: 'Tích lũy', focus: 'Chuẩn bị', advice: 'Chuẩn bị năng lượng', caution: 'Không nghỉ ngơi quá nhiều' },
      12: { energy: 'Nghỉ ngơi', focus: 'Phục hồi', advice: 'Bảo tồn sức khỏe', caution: 'Đừng lười biếng' }
    },
    
    harmonyWith: ['Dần', 'Tuất'],
    conflictWith: ['Tý'],
    triangleGroups: [['Dần', 'Ngọ', 'Tuất'], ['Mão', 'Mùi', 'Hợi']]
  },
  
  'Mùi': {
    element: 'Thổ',
    hiddenElements: ['Kỷ', 'Đinh', 'Ất'],
    animal: 'Dê',
    timeFrame: '13:00-15:00',
    season: 'Hạ cuối',
    direction: 'Tây Nam',
    cosmicEnergy: 'Thổ khố, nuôi dưỡng và sáng tạo',
    
    animalWisdom: {
      core: ['Nghệ thuật sáng tạo', 'Hòa hợp yêu thương', 'Thẩm mỹ tinh tế'],
      instincts: ['Tìm kiếm vẻ đẹp', 'Tạo ra nghệ thuật', 'Quan tâm người khác'],
      survival: ['Sống trong đàn', 'Chia sẻ tài nguyên', 'Tạo môi trường an toàn'],
      social: ['Xây dựng hòa hợp', 'Chăm sóc cộng đồng', 'Tạo không khí vui vẻ']
    },
    
    lifeCycles: {
      childhood: 'Trẻ ngoan hiền, thích nghệ thuật, cần được nuôi dưỡng tài năng',
      youth: 'Thành công trong các lĩnh vực sáng tạo và chăm sóc',
      midlife: 'Cuộc sống hạnh phúc, có gia đình ấm cúng và sự nghiệp ổn định',
      elderhood: 'Tuổi già an nhiên, được con cháu yêu thương và kính trọng'
    },
    
    monthlyInfluence: {
      1: { energy: 'Khởi nguồn', focus: 'Sáng tạo', advice: 'Bắt đầu dự án nghệ thuật', caution: 'Tránh quá mơ mộng' },
      2: { energy: 'Phát triển', focus: 'Xây dựng', advice: 'Phát triển tài năng', caution: 'Không quá nhạy cảm' },
      3: { energy: 'Thịnh vượng', focus: 'Thành công', advice: 'Thu hoạch thành quả', caution: 'Đừng tự mãn' },
      4: { energy: 'Hòa hợp', focus: 'Kết nối', advice: 'Tạo mối quan hệ tốt', caution: 'Tránh phụ thuộc' },
      5: { energy: 'Tỏa sáng', focus: 'Nghệ thuật', advice: 'Thể hiện tài năng', caution: 'Không thu mình' },
      6: { energy: 'Cân bằng', focus: 'Hài hòa', advice: 'Cân bằng cuộc sống', caution: 'Tránh lưỡng lự' },
      7: { energy: 'Thách thức', focus: 'Vượt khó', advice: 'Kiên trì với ước mơ', caution: 'Không bỏ cuộc dễ dàng' },
      8: { energy: 'Thu hoạch', focus: 'Kết quả', advice: 'Gặt hái thành tích', caution: 'Đừng ngừng sáng tạo' },
      9: { energy: 'Hoàn thiện', focus: 'Tinh thần', advice: 'Hoàn thiện tác phẩm', caution: 'Không cầu toàn quá mức' },
      10: { energy: 'Chuyển hóa', focus: 'Thay đổi', advice: 'Đổi mới phong cách', caution: 'Tránh thay đổi liên tục' },
      11: { energy: 'Chuẩn bị', focus: 'Tích lũy', advice: 'Đầu tư cho nghệ thuật', caution: 'Không quá thụ động' },
      12: { energy: 'Yên tĩnh', focus: 'Suy ngẫm', advice: 'Tìm cảm hứng mới', caution: 'Đừng cô lập bản thân' }
    },
    
    harmonyWith: ['Mão', 'Hợi'],
    conflictWith: ['Sửu'],
    triangleGroups: [['Mão', 'Mùi', 'Hợi'], ['Tý', 'Thìn', 'Thân']]
  },
  
  'Thân': {
    element: 'Kim',
    hiddenElements: ['Canh', 'Nhâm', 'Mậu'],
    animal: 'Khỉ',
    timeFrame: '15:00-17:00',
    season: 'Thu đầu',
    direction: 'Tây Tây Nam',
    cosmicEnergy: 'Kim sinh, thông minh và linh hoạt',
    
    animalWisdom: {
      core: ['Thông minh khôn ngoan', 'Linh hoạt thích nghi', 'Vui vẻ hài hước'],
      instincts: ['Tò mò khám phá', 'Học hỏi nhanh chóng', 'Giải quyết vấn đề'],
      survival: ['Thích nghi môi trường', 'Sử dụng công cụ', 'Hợp tác nhóm'],
      social: ['Giao tiếp xuất sắc', 'Tạo niềm vui', 'Kết nối mọi người']
    },
    
    lifeCycles: {
      childhood: 'Trẻ thông minh, hiếu động, học giỏi và có nhiều bạn bè',
      youth: 'Thành công trong nhiều lĩnh vực, có khả năng thích nghi cao',
      midlife: 'Sự nghiệp đa dạng, có nhiều cơ hội phát triển',
      elderhood: 'Tuổi già vẫn minh mẫn, là nguồn trí tuệ cho con cháu'
    },
    
    monthlyInfluence: {
      1: { energy: 'Tò mò', focus: 'Khám phá', advice: 'Tìm hiểu cơ hội mới', caution: 'Tránh tán mạn' },
      2: { energy: 'Học hỏi', focus: 'Phát triển', advice: 'Nâng cao kỹ năng', caution: 'Không học qua loa' },
      3: { energy: 'Sáng tạo', focus: 'Đổi mới', advice: 'Tạo ra ý tưởng mới', caution: 'Đừng quá phức tạp' },
      4: { energy: 'Xây dựng', focus: 'Thực hiện', advice: 'Biến ý tưởng thành hiện thực', caution: 'Tránh nửa vời' },
      5: { energy: 'Thành công', focus: 'Thu hoạch', advice: 'Tận hưởng thành quả', caution: 'Không khoe khoang' },
      6: { energy: 'Cân bằng', focus: 'Điều chỉnh', advice: 'Cân bằng các hoạt động', caution: 'Tránh làm quá nhiều việc' },
      7: { energy: 'Thách thức', focus: 'Giải quyết', advice: 'Dùng trí thông minh', caution: 'Không quá tự tin' },
      8: { energy: 'Kết quả', focus: 'Thành tích', advice: 'Đánh giá kết quả', caution: 'Đừng ngừng học hỏi' },
      9: { energy: 'Hoàn thiện', focus: 'Nâng cao', advice: 'Tinh chỉnh kỹ năng', caution: 'Không cầu toàn quá mức' },
      10: { energy: 'Thích nghi', focus: 'Thay đổi', advice: 'Linh hoạt thích nghi', caution: 'Tránh thay đổi liên tục' },
      11: { energy: 'Chuẩn bị', focus: 'Tích lũy', advice: 'Chuẩn bị kiến thức mới', caution: 'Không quá tham' },
      12: { energy: 'Nghỉ ngơi', focus: 'Phục hồi', advice: 'Nghỉ ngơi để nạp năng lượng', caution: 'Đừng lười biếng' }
    },
    
    harmonyWith: ['Tý', 'Thìn'],
    conflictWith: ['Dần'],
    triangleGroups: [['Tý', 'Thìn', 'Thân'], ['Sửu', 'Tị', 'Dậu']]
  },
  
  'Dậu': {
    element: 'Kim',
    hiddenElements: ['Tân'],
    animal: 'Gà',
    timeFrame: '17:00-19:00',
    season: 'Thu giữa',
    direction: 'Chính Tây',
    cosmicEnergy: 'Kim thuần, kỷ luật và hoàn hảo',
    
    animalWisdom: {
      core: ['Kỷ luật nghiêm khắc', 'Cần cù chăm chỉ', 'Tinh thần trách nhiệm'],
      instincts: ['Thức dậy sớm', 'Làm việc có kế hoạch', 'Cảnh báo nguy hiểm'],
      survival: ['Tổ chức có thứ tự', 'Chuẩn bị chu đáo', 'Bảo vệ gia đình'],
      social: ['Tạo kỷ luật nhóm', 'Nhắc nhở mọi người', 'Chăm sóc con cái']
    },
    
    lifeCycles: {
      childhood: 'Trẻ có kỷ luật, học tốt, thích môi trường có quy tắc rõ ràng',
      youth: 'Thành công sớm nhờ sự cần cù và kỷ luật',
      midlife: 'Sự nghiệp vững chắc, có vị thế trong xã hội',
      elderhood: 'Tuổi già được tôn trọng, là tấm gương cho thế hệ sau'
    },
    
    monthlyInfluence: {
      1: { energy: 'Khởi đầu', focus: 'Kỷ luật', advice: 'Lập kế hoạch chi tiết', caution: 'Tránh quá cứng nhắc' },
      2: { energy: 'Xây dựng', focus: 'Phát triển', advice: 'Làm việc có phương pháp', caution: 'Không quá khắt khe' },
      3: { energy: 'Thành công', focus: 'Thu hoạch', advice: 'Gặt hái kết quả', caution: 'Đừng tự mãn' },
      4: { energy: 'Ổn định', focus: 'Duy trì', advice: 'Giữ vững thành tích', caution: 'Tránh bảo thủ' },
      5: { energy: 'Tỏa sáng', focus: 'Thể hiện', advice: 'Thể hiện năng lực', caution: 'Không khoe khoang' },
      6: { energy: 'Cân bằng', focus: 'Điều chỉnh', advice: 'Cân bằng việc và nghỉ', caution: 'Tránh làm việc quá sức' },
      7: { energy: 'Thách thức', focus: 'Kiên trì', advice: 'Duy trì kỷ luật', caution: 'Không quá cứng rắn' },
      8: { energy: 'Kết quả', focus: 'Đánh giá', advice: 'Đánh giá thành tích', caution: 'Đừng quá khắt khe với bản thân' },
      9: { energy: 'Hoàn thiện', focus: 'Tinh chỉnh', advice: 'Hoàn thiện quy trình', caution: 'Không cầu toàn quá mức' },
      10: { energy: 'Thích nghi', focus: 'Thay đổi', advice: 'Điều chỉnh kế hoạch', caution: 'Tránh thay đổi đột ngột' },
      11: { energy: 'Chuẩn bị', focus: 'Tích lũy', advice: 'Chuẩn bị cho tương lai', caution: 'Không quá lo lắng' },
      12: { energy: 'Nghỉ ngơi', focus: 'Phục hồi', advice: 'Nghỉ ngơi có kế hoạch', caution: 'Đừng nghỉ quá lâu' }
    },
    
    harmonyWith: ['Sửu', 'Tị'],
    conflictWith: ['Mão'],
    triangleGroups: [['Sửu', 'Tị', 'Dậu'], ['Dần', 'Ngọ', 'Tuất']]
  },
  
  'Tuất': {
    element: 'Thổ',
    hiddenElements: ['Mậu', 'Tân', 'Đinh'],
    animal: 'Chó',
    timeFrame: '19:00-21:00',
    season: 'Thu cuối',
    direction: 'Tây Bắc',
    cosmicEnergy: 'Thổ khố, trung thành và bảo vệ',
    
    animalWisdom: {
      core: ['Trung thành tuyệt đối', 'Bảo vệ gia đình', 'Tinh thần công lý'],
      instincts: ['Canh gác bảo vệ', 'Nhận biết nguy hiểm', 'Trung thành chủ nhân'],
      survival: ['Sống theo đàn', 'Bảo vệ lãnh thổ', 'Hợp tác săn mồi'],
      social: ['Xây dựng lòng tin', 'Bảo vệ người yếu', 'Tạo an toàn cộng đồng']
    },
    
    lifeCycles: {
      childhood: 'Trẻ ngoan ngoãn, trung thực, thích môi trường gia đình ấm cúng',
      youth: 'Thành công nhờ sự trung thành và cần cù trong công việc',
      midlife: 'Có vị thế ổn định, được mọi người tin tưởng và kính trọng',
      elderhood: 'Tuổi già an nhàn, được gia đình và bạn bè yêu mến'
    },
    
    monthlyInfluence: {
      1: { energy: 'Bảo vệ', focus: 'An toàn', advice: 'Tạo môi trường an toàn', caution: 'Tránh quá lo lắng' },
      2: { energy: 'Xây dựng', focus: 'Phát triển', advice: 'Xây dựng nền móng vững', caution: 'Không quá bảo thủ' },
      3: { energy: 'Thành công', focus: 'Thu hoạch', advice: 'Gặt hái thành quả', caution: 'Đừng ngừng nỗ lực' },
      4: { energy: 'Ổn định', focus: 'Duy trì', advice: 'Bảo vệ thành tích', caution: 'Tránh thỏa mãn hiện tại' },
      5: { energy: 'Phục vụ', focus: 'Giúp đỡ', advice: 'Giúp đỡ người khác', caution: 'Không quên bản thân' },
      6: { energy: 'Cân bằng', focus: 'Hài hòa', advice: 'Cân bằng cuộc sống', caution: 'Tránh hy sinh quá nhiều' },
      7: { energy: 'Thách thức', focus: 'Bảo vệ', advice: 'Bảo vệ những gì quan trọng', caution: 'Không quá cứng rắn' },
      8: { energy: 'Kết quả', focus: 'Đánh giá', advice: 'Đánh giá mức độ an toàn', caution: 'Đừng quá lo lắng' },
      9: { energy: 'Hoàn thiện', focus: 'Tinh thần', advice: 'Nâng cao ý thức trách nhiệm', caution: 'Không áp lực bản thân' },
      10: { energy: 'Thích nghi', focus: 'Thay đổi', advice: 'Thích nghi với hoàn cảnh mới', caution: 'Tránh thay đổi quá nhanh' },
      11: { energy: 'Chuẩn bị', focus: 'Tích lũy', advice: 'Chuẩn bị cho mùa đông', caution: 'Không quá căng thẳng' },
      12: { energy: 'Nghỉ ngơi', focus: 'Phục hồi', advice: 'Nghỉ ngơi bên gia đình', caution: 'Đừng lười biếng' }
    },
    
    harmonyWith: ['Dần', 'Ngọ'],
    conflictWith: ['Thìn'],
    triangleGroups: [['Dần', 'Ngọ', 'Tuất'], ['Mão', 'Mùi', 'Hợi']]
  },
  
  'Hợi': {
    element: 'Thủy',
    hiddenElements: ['Nhâm', 'Giáp'],
    animal: 'Lợn/Heo',
    timeFrame: '21:00-23:00',
    season: 'Đông đầu',
    direction: 'Bắc Tây Bắc',
    cosmicEnergy: 'Thủy sinh, phúc đức và hưởng thụ',
    
    animalWisdom: {
      core: ['Phúc đức dồi dào', 'Hưởng thụ cuộc sống', 'Tâm hồn rộng mở'],
      instincts: ['Tận hưởng thức ăn', 'Nghỉ ngơi đầy đủ', 'Tích trữ năng lượng'],
      survival: ['Sống theo bầy', 'Chia sẻ tài nguyên', 'Tạo môi trường thoải mái'],
      social: ['Mang lại niềm vui', 'Chia sẻ hạnh phúc', 'Tạo không khí ấm áp']
    },
    
    lifeCycles: {
      childhood: 'Trẻ vui vẻ, hiền lành, thích môi trường yên bình và ấm cúng',
      youth: 'Có nhiều cơ hội tốt, cuộc sống thoải mái và hạnh phúc',
      midlife: 'Thành công trong kinh doanh hoặc công việc liên quan đến phúc lợi',
      elderhood: 'Tuổi già an nhàn, phúc đức, được con cháu hiếu thảo chăm sóc'
    },
    
    monthlyInfluence: {
      1: { energy: 'Khởi đầu', focus: 'Hạnh phúc', advice: 'Bắt đầu với niềm vui', caution: 'Tránh lười biếng' },
      2: { energy: 'Phát triển', focus: 'Tích lũy', advice: 'Tích lũy phúc đức', caution: 'Không quá tham ăn' },
      3: { energy: 'Thịnh vượng', focus: 'Thành công', advice: 'Tận hưởng thành quả', caution: 'Đừng quá xa hoa' },
      4: { energy: 'Ổn định', focus: 'Duy trì', advice: 'Giữ gìn hạnh phúc', caution: 'Tránh an phận' },
      5: { energy: 'Hưởng thụ', focus: 'Tận hưởng', advice: 'Tận hưởng cuộc sống', caution: 'Không quá phung phí' },
      6: { energy: 'Cân bằng', focus: 'Điều hòa', advice: 'Cân bằng hưởng thụ', caution: 'Tránh thái quá' },
      7: { energy: 'Thử thách', focus: 'Kiên trì', advice: 'Giữ vững tinh thần', caution: 'Không bỏ cuộc dễ dàng' },
      8: { energy: 'Thu hoạch', focus: 'Kết quả', advice: 'Thu hoạch phúc đức', caution: 'Đừng ngừng nỗ lực' },
      9: { energy: 'Hoàn thiện', focus: 'Tâm linh', advice: 'Nâng cao tâm linh', caution: 'Không tách khỏi đời thường' },
      10: { energy: 'Chuyển hóa', focus: 'Thay đổi', advice: 'Thích nghi tích cực', caution: 'Tránh thay đổi đột ngột' },
      11: { energy: 'Chuẩn bị', focus: 'Tích trữ', advice: 'Chuẩn bị cho tương lai', caution: 'Không quá tham lam' },
      12: { energy: 'Nghỉ ngơi', focus: 'Thư giãn', advice: 'Nghỉ ngơi đầy đủ', caution: 'Đừng lười biếng quá mức' }
    },
    
    harmonyWith: ['Mão', 'Mùi'],
    conflictWith: ['Tị'],
    triangleGroups: [['Mão', 'Mùi', 'Hợi'], ['Tý', 'Thìn', 'Thân']]
  }
};

export default advancedChiData;
