// Advanced Vietnamese Astrology Data - Enhanced Research-Based Analysis
import { ThienCan, DiaChi, FiveElement } from './canChiData';

// 🔮 ADVANCED THIÊN CAN ANALYSIS (10 Heavenly Stems)
export interface AdvancedCanAnalysis {
  element: FiveElement;
  yinYang: 'Âm' | 'Dương';
  chineseCharacter: string;
  
  // Core Nature
  essence: string;
  naturalForm: string;
  symbolicMeaning: string;
  
  // Deep Personality Traits
  corePersonality: {
    primary: string[];
    secondary: string[];
    hidden: string[];
  };
  
  // Life Patterns
  lifePhilosophy: string;
  decisionMaking: string;
  stressResponse: string;
  
  // Enhanced Analysis
  careerAnalysis: {
    natural: string[];
    leadership: string[];
    creative: string[];
    service: string[];
  };
  
  relationshipPatterns: {
    romantic: string;
    friendship: string;
    family: string;
    workplace: string;
  };
  
  healthTendencies: {
    physical: string[];
    mental: string[];
    vulnerable: string[];
    strengthening: string[];
  };
  
  wealthPattern: {
    earning: string;
    spending: string;
    investment: string;
    risk: string;
  };
  
  // Spiritual & Growth
  spiritualPath: string;
  lifeChallenge: string;
  growthOpportunity: string;
  
  // Compatibility Factors
  bestSynergy: ThienCan[];
  challenging: ThienCan[];
  karmic: ThienCan[];
}

// 🐉 ENHANCED ĐỊA CHI ANALYSIS (12 Earthly Branches)
export interface AdvancedChiAnalysis {
  element: FiveElement;
  hiddenElements: FiveElement[];
  animal: string;
  
  // Time & Space
  timeFrame: string;
  season: string;
  direction: string;
  cosmicEnergy: string;
  
  // Animal Spirit Characteristics
  animalWisdom: {
    core: string[];
    instincts: string[];
    survival: string[];
    social: string[];
  };
  
  // Life Cycle Analysis
  lifeCycles: {
    childhood: string;
    youth: string;
    midlife: string;
    elderhood: string;
  };
  
  // Monthly Energy Patterns (12 months)
  monthlyInfluence: Record<number, {
    energy: string;
    focus: string;
    advice: string;
    caution: string;
  }>;
  
  // Compatibility with other Chi
  harmonyWith: DiaChi[];
  conflictWith: DiaChi[];
  triangleGroups: DiaChi[][];
}

// 🌟 DETAILED THIÊN CAN DATA
export const advancedCanData: Record<ThienCan, AdvancedCanAnalysis> = {
  'Giáp': {
    element: 'Mộc',
    yinYang: 'Dương',
    chineseCharacter: '甲',
    essence: 'Cây lớn trong rừng',
    naturalForm: 'Sồi, thông cổ thụ',
    symbolicMeaning: 'Sức mạnh kiên cường, bảo vệ và che chở',
    
    corePersonality: {
      primary: ['Lãnh đạo tự nhiên', 'Mạnh mẽ vững chắc', 'Bảo vệ người khác'],
      secondary: ['Có tầm nhìn xa', 'Kiên định bền bỉ', 'Tự tin cao'],
      hidden: ['Sợ thay đổi', 'Cần được tôn trọng', 'Đôi khi cô độc']
    },
    
    lifePhilosophy: 'Sống để bảo vệ và dẫn dắt, tạo ra sự ổn định cho cộng đồng',
    decisionMaking: 'Quyết định dựa trên kinh nghiệm và nguyên tắc đã được chứng minh',
    stressResponse: 'Trở nên cứng nhắc, khó thích nghi, có thể trở nên độc đoán',
    
    careerAnalysis: {
      natural: ['CEO/Giám đốc điều hành', 'Chính trị gia', 'Luật sư', 'Bác sĩ phẫu thuật'],
      leadership: ['Quản lý cấp cao', 'Hiệu trưởng', 'Thẩm phán', 'Tướng quân'],
      creative: ['Kiến trúc sư', 'Đạo diễn phim', 'Nhà văn sử thi', 'Nhà thiết kế cảnh quan'],
      service: ['Bảo vệ môi trường', 'Cứu hộ cấp cứu', 'Giáo viên đại học', 'Cố vấn chiến lược']
    },
    
    relationshipPatterns: {
      romantic: 'Tìm kiếm đối tác ổn định, muốn bảo vệ và chăm sóc người yêu như một cái cây che bóng mát',
      friendship: 'Bạn bè tin tưởng tuyệt đối, sẵn sàng hỗ trợ trong lúc khó khăn nhưng ít khi chia sẻ tâm tư',
      family: 'Trụ cột gia đình, chịu trách nhiệm tài chính và quyết định quan trọng',
      workplace: 'Lãnh đạo tự nhiên, được đồng nghiệp tôn trọng nhưng đôi khi tạo khoảng cách'
    },
    
    healthTendencies: {
      physical: ['Cơ xương khỏe mạnh', 'Sức đề kháng tốt', 'Tuổi thọ cao'],
      mental: ['Ít stress', 'Tự tin ổn định', 'Khả năng tập trung cao'],
      vulnerable: ['Gan và mật', 'Cột sống', 'Hệ thần kinh do căng thẳng'],
      strengthening: ['Tập yoga', 'Thiền định', 'Vận động ngoài trời', 'Ăn nhiều rau xanh']
    },
    
    wealthPattern: {
      earning: 'Thu nhập ổn định từ vị trí lãnh đạo, đầu tư dài hạn',
      spending: 'Chi tiêu thận trọng, ưu tiên chất lượng hơn số lượng',
      investment: 'Bất động sản, cổ phiếu blue-chip, vàng',
      risk: 'Thích đầu tư an toàn, ít mạo hiểm nhưng lợi nhuận ổn định'
    },
    
    spiritualPath: 'Con đường phục vụ và bảo vệ cộng đồng, tìm hiểu về trách nhiệm lãnh đạo',
    lifeChallenge: 'Học cách linh hoạt thích nghi với thay đổi và lắng nghe ý kiến khác',
    growthOpportunity: 'Phát triển khả năng đồng cảm và giao tiếp để trở thành lãnh đạo toàn diện hơn',
    
    bestSynergy: ['Ất', 'Đinh', 'Kỷ'],
    challenging: ['Canh', 'Tân'],
    karmic: ['Nhâm', 'Quý']
  },
  
  'Ất': {
    element: 'Mộc',
    yinYang: 'Âm',
    chineseCharacter: '乙',
    essence: 'Cây con mềm mại',
    naturalForm: 'Hoa, cỏ, cây bụi',
    symbolicMeaning: 'Sự dẻo dai, thích nghi và vẻ đẹp tự nhiên',
    
    corePersonality: {
      primary: ['Linh hoạt thích nghi', 'Sáng tạo nghệ thuật', 'Nhạy cảm tinh tế'],
      secondary: ['Kiên nhẫn bền bỉ', 'Quan tâm đến người khác', 'Thẩm mỹ cao'],
      hidden: ['Dễ bị tổn thương', 'Cần sự công nhận', 'Sợ xung đột']
    },
    
    lifePhilosophy: 'Sống để tạo ra vẻ đẹp và hòa hợp, thích nghi để sinh tồn và phát triển',
    decisionMaking: 'Quyết định dựa trên cảm xúc và trực giác, cân nhắc tác động đến người khác',
    stressResponse: 'Rút lui vào thế giới nội tâm, trở nên nhạy cảm quá mức, cần thời gian phục hồi',
    
    careerAnalysis: {
      natural: ['Nghệ sĩ', 'Nhà thiết kế', 'Nhà văn', 'Nhạc sĩ', 'Nhiếp ảnh gia'],
      leadership: ['Giám đốc sáng tạo', 'Chỉ đạo nghệ thuật', 'Trưởng phòng thiết kế'],
      creative: ['Họa sĩ', 'Điêu khắc gia', 'Kiến trúc sư cảnh quan', 'Nhà trang trí nội thất'],
      service: ['Tư vấn tâm lý', 'Giáo viên mầm non', 'Điều dưỡng', 'Chuyên viên chăm sóc sức khỏe']
    },
    
    relationshipPatterns: {
      romantic: 'Đầy lãng mạn và chu đáo, cần được yêu thương và trân trọng, tạo ra không gian tình cảm ấm áp',
      friendship: 'Bạn bè thân thiết, luôn lắng nghe và chia sẻ, là người bạn tâm giao đáng tin cậy',
      family: 'Người tạo không khí ấm cúng trong gia đình, chăm sóc tỉ mỉ nhưng cần được cảm ơn',
      workplace: 'Hợp tác tốt, sáng tạo nhưng cần môi trường hỗ trợ và ghi nhận công sức'
    },
    
    healthTendencies: {
      physical: ['Linh hoạt và dẻo dai', 'Phục hồi tốt', 'Ít bệnh nặng'],
      mental: ['Cảm xúc phong phú', 'Trực giác nhạy bén', 'Khả năng sáng tạo'],
      vulnerable: ['Gan và thần kinh', 'Dạ dày do căng thẳng', 'Dị ứng'],
      strengthening: ['Thiền định', 'Yoga', 'Nghệ thuật trị liệu', 'Massage thư giãn']
    },
    
    wealthPattern: {
      earning: 'Thu nhập từ tài năng sáng tạo, có thể không ổn định nhưng đột biến',
      spending: 'Chi tiêu theo cảm xúc, ưa thẩm mỹ và trải nghiệm',
      investment: 'Nghệ thuật, trang sức, bất động sản có tính thẩm mỹ',
      risk: 'Đầu tư theo trực giác, cần người tư vấn tài chính'
    },
    
    spiritualPath: 'Con đường nghệ thuật và chữa lành, tìm hiểu về vẻ đẹp và sự hài hòa trong vũ trụ',
    lifeChallenge: 'Học cách tự tin và đứng vững trước thử thách mà không mất đi sự nhạy cảm',
    growthOpportunity: 'Phát triển sức mạnh nội tâm để có thể chia sẻ tài năng một cách tự tin hơn',
    
    bestSynergy: ['Giáp', 'Bính', 'Nhâm'],
    challenging: ['Tân', 'Canh'],
    karmic: ['Đinh', 'Kỷ']
  },
  
  'Bính': {
    element: 'Hỏa',
    yinYang: 'Dương',
    chineseCharacter: '丙',
    essence: 'Mặt trời rực rỡ',
    naturalForm: 'Ánh sáng, lửa lớn, năng lượng',
    symbolicMeaning: 'Sự sống động, nhiệt huyết và sức mạnh truyền cảm hứng',
    
    corePersonality: {
      primary: ['Nhiệt tình năng động', 'Lạc quan tích cực', 'Truyền cảm hứng'],
      secondary: ['Hào phóng rộng rãi', 'Chính trực thẳng thắn', 'Có khả năng lãnh đạo'],
      hidden: ['Nóng tính', 'Thiếu kiên nhẫn', 'Cần được chú ý']
    },
    
    lifePhilosophy: 'Sống để lan tỏa ánh sáng và năng lượng tích cực cho mọi người xung quanh',
    decisionMaking: 'Quyết định nhanh chóng dựa trên bản năng và cảm hứng thời điểm',
    stressResponse: 'Bùng nổ cảm xúc, có thể nóng giận nhưng nguôi ngoai nhanh, cần không gian riêng',
    
    careerAnalysis: {
      natural: ['Diễn viên', 'MC/Host', 'Giáo viên', 'Huấn luyện viên', 'Sales Manager'],
      leadership: ['CEO startup', 'Giám đốc marketing', 'Trưởng nhóm dự án', 'Chính trị gia'],
      creative: ['Đạo diễn', 'Nhà sản xuất', 'Blogger/Influencer', 'Nghệ sĩ biểu diễn'],
      service: ['Bác sĩ cấp cứu', 'Lính cứu hỏa', 'Tư vấn động lực', 'Nhà trị liệu']
    },
    
    relationshipPatterns: {
      romantic: 'Đam mê mãnh liệt, biểu đạt tình cảm rõ ràng, cần đối tác có thể chia sẻ nhiệt huyết',
      friendship: 'Bạn bè đông đảo, là trung tâm của nhóm, luôn tổ chức hoạt động vui vẻ',
      family: 'Nguồn năng lượng của gia đình, tạo không khí vui vẻ nhưng đôi khi quá áp đảo',
      workplace: 'Đồng nghiệp yêu thích, có khả năng thúc đẩy tinh thần làm việc nhóm'
    },
    
    healthTendencies: {
      physical: ['Tim mạch khỏe', 'Năng lượng dồi dào', 'Hệ tuần hoàn tốt'],
      mental: ['Tinh thần lạc quan', 'Khả năng phục hồi nhanh', 'Tư duy tích cực'],
      vulnerable: ['Tim mạch khi căng thẳng', 'Huyết áp', 'Mắt do ánh sáng mạnh'],
      strengthening: ['Aerobic', 'Bơi lội', 'Thiền chuyển động', 'Tắm nắng vừa phải']
    },
    
    wealthPattern: {
      earning: 'Thu nhập cao từ khả năng bán hàng và thu hút đầu tư',
      spending: 'Chi tiêu hào phóng, ưa trải nghiệm và chia sẻ',
      investment: 'Cổ phiếu năng lượng, công nghệ, khách sạn du lịch',
      risk: 'Sẵn sàng mạo hiểm đầu tư để có lợi nhuận cao'
    },
    
    spiritualPath: 'Con đường phục vụ và truyền cảm hứng, tìm hiểu về sức mạnh của lòng từ bi',
    lifeChallenge: 'Học cách kiểm soát năng lượng để không làm người khác choáng ngợp',
    growthOpportunity: 'Phát triển sự kiên nhẫn và khả năng lắng nghe để trở thành lãnh đạo cân bằng hơn',
    
    bestSynergy: ['Giáp', 'Ất', 'Mậu'],
    challenging: ['Nhâm', 'Quý'],
    karmic: ['Canh', 'Tân']
  },
  
  'Đinh': {
    element: 'Hỏa',
    yinYang: 'Âm',
    chineseCharacter: '丁',
    essence: 'Ngọn nến ấm áp',
    naturalForm: 'Lửa nhỏ, ánh đèn, sao',
    symbolicMeaning: 'Sự tinh tế, trí tuệ và ánh sáng dịu dàng',
    
    corePersonality: {
      primary: ['Thông minh tinh tế', 'Ấm áp chu đáo', 'Trực giác sắc bén'],
      secondary: ['Cẩn thận tỉ mỉ', 'Có khiếu thẩm mỹ', 'Tâm hồn nhạy cảm'],
      hidden: ['Dễ lo lắng', 'Hoàn hảo chủ nghĩa', 'Tự ti khi so sánh']
    },
    
    lifePhilosophy: 'Sống để soi sáng và ấm lại cuộc sống của người khác một cách tinh tế',
    decisionMaking: 'Suy nghĩ kỹ lưỡng, cân nhắc nhiều yếu tố trước khi quyết định',
    stressResponse: 'Lo lắng quá mức, mất ngủ, cần thời gian yên tĩnh để suy ngẫm',
    
    careerAnalysis: {
      natural: ['Nhà khoa học', 'Nghiên cứu viên', 'Bác sĩ nội khoa', 'Nhà văn'],
      leadership: ['Giám đốc R&D', 'Hiệu trưởng', 'Chủ tịch hội đồng quản trị'],
      creative: ['Nhà thiết kế nữ trang', 'Thầy thuốc y học cổ truyền', 'Nghệ nhân'],
      service: ['Tâm lý học gia', 'Cố vấn giáo dục', 'Chuyên gia dinh dưỡng']
    },
    
    relationshipPatterns: {
      romantic: 'Yêu sâu sắc và lâu dài, thể hiện tình cảm qua hành động chu đáo và quan tâm tỉ mỉ',
      friendship: 'Số lượng bạn ít nhưng rất thân thiết, là người tư vấn và lắng nghe tốt',
      family: 'Chăm sóc gia đình tận tụy, am hiểu nhu cầu của từng thành viên',
      workplace: 'Đồng nghiệp tin tưởng, làm việc chính xác và có trách nhiệm cao'
    },
    
    healthTendencies: {
      physical: ['Cơ thể nhỏ nhắn nhưng bền bỉ', 'Khả năng tập trung cao', 'Ít ốm vặt'],
      mental: ['Trí nhớ tốt', 'Tư duy logic', 'Khả năng phân tích cao'],
      vulnerable: ['Tim nhẹ', 'Mắt do làm việc quá sức', 'Đau đầu căng thẳng'],
      strengthening: ['Đọc sách', 'Cờ vua', 'Thiền tĩnh', 'Ngắm hoàng hôn']
    },
    
    wealthPattern: {
      earning: 'Thu nhập ổn định từ chuyên môn và kinh nghiệm sâu',
      spending: 'Chi tiêu cẩn thận, ưu tiên giá trị thực tế và chất lượng',
      investment: 'Giáo dục, sách vở, nghiên cứu, đầu tư dài hạn',
      risk: 'Thận trọng trong đầu tư, cần nghiên cứu kỹ trước khi quyết định'
    },
    
    spiritualPath: 'Con đường tri thức và trí tuệ, tìm hiểu về ánh sáng nội tại và sự giác ngộ',
    lifeChallenge: 'Học cách tự tin vào khả năng của mình và không so sánh với người khác',
    growthOpportunity: 'Phát triển khả năng giao tiếp để chia sẻ kiến thức một cách hiệu quả hơn',
    
    bestSynergy: ['Ất', 'Kỷ', 'Tân'],
    challenging: ['Quý', 'Nhâm'],
    karmic: ['Giáp', 'Mậu']
  },
  
  'Mậu': {
    element: 'Thổ',
    yinYang: 'Dương',
    chineseCharacter: '戊',
    essence: 'Núi cao vững chắc',
    naturalForm: 'Đá, núi, tường thành',
    symbolicMeaning: 'Sự vững chắc, bảo vệ và sức mạnh đáng tin cậy',
    
    corePersonality: {
      primary: ['Vững chắc đáng tin', 'Có trách nhiệm cao', 'Bảo vệ người khác'],
      secondary: ['Thực tế hiện thực', 'Kiên trì bền bỉ', 'Có nguyên tắc rõ ràng'],
      hidden: ['Cứng nhắc', 'Khó thay đổi', 'Áp lực hoàn hảo']
    },
    
    lifePhilosophy: 'Sống để tạo nền móng vững chắc và bảo vệ những giá trị quan trọng',
    decisionMaking: 'Quyết định dựa trên kinh nghiệm thực tế và những gì đã được chứng minh',
    stressResponse: 'Trở nên cứng nhắc hơn, khép kín, cần thời gian để xử lý cảm xúc',
    
    careerAnalysis: {
      natural: ['Kỹ sư xây dựng', 'Quản lý dự án', 'Ngân hàng', 'Bất động sản'],
      leadership: ['COO', 'Giám đốc vận hành', 'Tư lệnh quân đội', 'Thẩm phán'],
      creative: ['Kiến trúc sư', 'Nhà điêu khắc', 'Thiết kế công nghiệp'],
      service: ['An ninh', 'Cứu hộ', 'Giáo viên dạy nghề', 'Tư vấn tài chính']
    },
    
    relationshipPatterns: {
      romantic: 'Tình yêu vững chắc và lâu dài, thể hiện qua việc bảo vệ và chăm sóc thiết thực',
      friendship: 'Bạn bè ít nhưng thân thiết suốt đời, luôn có thể dựa vào trong lúc khó khăn',
      family: 'Trụ cột kinh tế và tinh thần của gia đình, chịu trách nhiệm về mọi quyết định lớn',
      workplace: 'Đồng nghiệp tin tưởng tuyệt đối, được giao những nhiệm vụ quan trọng nhất'
    },
    
    healthTendencies: {
      physical: ['Cơ thể khỏe mạnh', 'Sức bền tốt', 'Ít bệnh tật'],
      mental: ['Tinh thần ổn định', 'Khả năng chịu áp lực cao', 'Ít thay đổi tâm trạng'],
      vulnerable: ['Dạ dày do căng thẳng', 'Cột sống', 'Da khô'],
      strengthening: ['Tập gym', 'Leo núi', 'Làm vườn', 'Massage đá nóng']
    },
    
    wealthPattern: {
      earning: 'Thu nhập ổn định từ vị trí quản lý hoặc kinh doanh lâu năm',
      spending: 'Chi tiêu thận trọng, đầu tư vào những thứ bền vững',
      investment: 'Bất động sản, vàng, ngân hàng, cổ phiếu ổn định',
      risk: 'Rất thận trọng, chỉ đầu tư vào những gì hiểu rõ và có bảo đảm'
    },
    
    spiritualPath: 'Con đường phục vụ và bảo vệ, tìm hiểu về trách nhiệm và sự hy sinh',
    lifeChallenge: 'Học cách linh hoạt và mở lòng với những ý tưởng mới',
    growthOpportunity: 'Phát triển khả năng đồng cảm để hiểu được nhu cầu cảm xúc của người khác',
    
    bestSynergy: ['Bính', 'Đinh', 'Canh'],
    challenging: ['Giáp', 'Ất'],
    karmic: ['Nhâm', 'Quý']
  },
  
  'Kỷ': {
    element: 'Thổ',
    yinYang: 'Âm',
    chineseCharacter: '己',
    essence: 'Đất màu mỡ',
    naturalForm: 'Ruông đồng, vườn tược',
    symbolicMeaning: 'Sự nuôi dưỡng, sinh sôi và tình yêu thương',
    
    corePersonality: {
      primary: ['Nuôi dưỡng yêu thương', 'Kiên nhẫn bao dung', 'Chu đáo tận tâm'],
      secondary: ['Thực tế nhưng ấm áp', 'Có khả năng tổ chức', 'Giàu cảm xúc'],
      hidden: ['Hay hy sinh thái quá', 'Giữ trong lòng nỗi buồn', 'Cần được trân trọng']
    },
    
    lifePhilosophy: 'Sống để nuôi dưỡng và giúp đỡ người khác phát triển',
    decisionMaking: 'Quyết định dựa trên lợi ích chung và tình cảm gia đình',
    stressResponse: 'Âm thầm gánh chịu, có thể trầm cảm nếu không được quan tâm',
    
    careerAnalysis: {
      natural: ['Giáo viên', 'Y tá', 'Nhân viên xã hội', 'Nông nghiệp'],
      leadership: ['Giám đốc nhân sự', 'Hiệu trưởng trường mầm non', 'Quản lý bệnh viện'],
      creative: ['Đầu bếp', 'Nhà thiết kế thời trang trẻ em', 'Nhà văn thiếu nhi'],
      service: ['Tư vấn gia đình', 'Chăm sóc người già', 'Công tác xã hội']
    },
    
    relationshipPatterns: {
      romantic: 'Yêu bằng cả trái tim, chăm sóc tận tụy và mong được yêu thương đáp lại',
      friendship: 'Người bạn tâm giao, luôn lắng nghe và hỗ trợ mà không đòi hỏi gì',
      family: 'Linh hồn của gia đình, tạo không khí ấm cúng và nuôi dưỡng tình yêu thương',
      workplace: 'Đồng nghiệp tin yêu, làm việc chăm chỉ nhưng cần được ghi nhận công sức'
    },
    
    healthTendencies: {
      physical: ['Khả năng phục hồi tốt', 'Sức khỏe ổn định', 'Ít căng thẳng vật lý'],
      mental: ['Cảm xúc sâu sắc', 'Khả năng đồng cảm cao', 'Tâm hồn phong phú'],
      vulnerable: ['Dạ dày do lo lắng', 'Tiểu đường', 'Trầm cảm sau sinh'],
      strengthening: ['Nấu ăn', 'Làm vườn', 'Yoga nhẹ nhàng', 'Tắm thảo dược']
    },
    
    wealthPattern: {
      earning: 'Thu nhập từ công việc chăm sóc, phục vụ, thường không cao nhưng ổn định',
      spending: 'Chi tiêu cho gia đình và người thân nhiều hơn cho bản thân',
      investment: 'Giáo dục con cái, bảo hiểm, đầu tư an toàn cho tương lai',
      risk: 'Rất thận trọng, ưu tiên an toàn tài chính cho gia đình'
    },
    
    spiritualPath: 'Con đường từ bi và nuôi dưỡng, tìm hiểu về tình yêu thương vô điều kiện',
    lifeChallenge: 'Học cách yêu thương bản thân và đặt ranh giới lành mạnh',
    growthOpportunity: 'Phát triển sự tự tin để có thể nhận được tình yêu thương mà mình xứng đáng',
    
    bestSynergy: ['Đinh', 'Tân', 'Quý'],
    challenging: ['Ất', 'Giáp'],
    karmic: ['Bính', 'Mậu']
  },
  
  'Canh': {
    element: 'Kim',
    yinYang: 'Dương',
    chineseCharacter: '庚',
    essence: 'Kim loại cứng',
    naturalForm: 'Sắt, đao kiếm, máy móc',
    symbolicMeaning: 'Sự cắt đứt, quyết đoán và công lý',
    
    corePersonality: {
      primary: ['Quyết đoán cứng rắn', 'Công bằng chính trực', 'Có nguyên tắc'],
      secondary: ['Hiệu quả thực tế', 'Lãnh đạo mạnh mẽ', 'Không ngại xung đột'],
      hidden: ['Khó bộc lộ cảm xúc', 'Sợ bị phụ thuộc', 'Cô độc nội tâm']
    },
    
    lifePhilosophy: 'Sống để duy trì công lý và trật tự, cắt bỏ những gì không cần thiết',
    decisionMaking: 'Quyết định nhanh chóng dựa trên logic và hiệu quả',
    stressResponse: 'Trở nên lạnh lùng và xa cách, có thể nổi giận bùng nổ',
    
    careerAnalysis: {
      natural: ['Luật sư', 'Thẩm phán', 'Quản lý', 'Kỹ sư cơ khí'],
      leadership: ['CEO', 'Giám đốc điều hành', 'Tư lệnh', 'Giám đốc tài chính'],
      creative: ['Kiến trúc sư công nghiệp', 'Nhà thiết kế sản phẩm', 'Đạo diễn action'],
      service: ['Cảnh sát', 'Quân đội', 'Bác sĩ phẫu thuật', 'Chuyên gia tư vấn']
    },
    
    relationshipPatterns: {
      romantic: 'Tình yêu sâu sắc nhưng khó thể hiện, thể hiện qua việc bảo vệ và lo lắng thực tế',
      friendship: 'Bạn bè ít nhưng trung thành, sẵn sàng chiến đấu vì bạn bè',
      family: 'Bảo vệ gia đình mạnh mẽ, đưa ra quyết định quan trọng một cách quyết đoán',
      workplace: 'Lãnh đạo được tôn trọng, có thể tạo ra quyết định khó khăn nhưng cần thiết'
    },
    
    healthTendencies: {
      physical: ['Cơ bắp khỏe mạnh', 'Xương khớp tốt', 'Sức bền cao'],
      mental: ['Ý chí mạnh mẽ', 'Tập trung cao độ', 'Khả năng chịu áp lực'],
      vulnerable: ['Phổi và da', 'Căng thẳng cơ bắp', 'Hệ hô hấp'],
      strengthening: ['Boxing', 'Võ thuật', 'Chạy bộ', 'Hít thở sâu']
    },
    
    wealthPattern: {
      earning: 'Thu nhập cao từ vị trí lãnh đạo và ra quyết định',
      spending: 'Chi tiêu hiệu quả, đầu tư vào công nghệ và thiết bị',
      investment: 'Cổ phiếu công nghệ, kim loại quý, máy móc',
      risk: 'Sẵn sàng mạo hiểm có tính toán để đạt lợi nhuận cao'
    },
    
    spiritualPath: 'Con đường công lý và kỷ luật, tìm hiểu về sự cân bằng giữa sức mạnh và từ bi',
    lifeChallenge: 'Học cách mềm mại và thể hiện cảm xúc một cách lành mạnh',
    growthOpportunity: 'Phát triển khả năng đồng cảm để trở thành lãnh đạo có trái tim',
    
    bestSynergy: ['Mậu', 'Kỷ', 'Nhâm'],
    challenging: ['Giáp', 'Ất'],
    karmic: ['Đinh', 'Bính']
  },
  
  'Tân': {
    element: 'Kim',
    yinYang: 'Âm',
    chineseCharacter: '辛',
    essence: 'Kim loại quý',
    naturalForm: 'Vàng, bạc, đá quý',
    symbolicMeaning: 'Sự tinh khiết, quý phái và hoàn hảo',
    
    corePersonality: {
      primary: ['Tinh tế quý phái', 'Hoàn hảo chủ nghĩa', 'Thẩm mỹ cao'],
      secondary: ['Cẩn thận tỉ mỉ', 'Có gu thời trang', 'Trí tuệ sắc sảo'],
      hidden: ['Tự ti về ngoại hình', 'Sợ bị chỉ trích', 'Cần được công nhận']
    },
    
    lifePhilosophy: 'Sống để tạo ra và trải nghiệm vẻ đẹp hoàn hảo trong cuộc sống',
    decisionMaking: 'Quyết định sau khi cân nhắc kỹ lưỡng về mọi khía cạnh',
    stressResponse: 'Trở nên khắt khe với bản thân và người khác, cần thời gian riêng tư',
    
    careerAnalysis: {
      natural: ['Thiết kế thời trang', 'Trang sức', 'Thẩm mỹ viện', 'Nghệ thuật'],
      leadership: ['Giám đốc sáng tạo', 'Brand Manager', 'Giám đốc marketing'],
      creative: ['Nhiếp ảnh gia', 'Họa sĩ', 'Nhạc sĩ', 'Kiến trúc sư nội thất'],
      service: ['Tư vấn hình ảnh', 'Chuyên viên làm đẹp', 'Giáo viên nghệ thuật']
    },
    
    relationshipPatterns: {
      romantic: 'Yêu lãng mạn và tinh tế, cần đối tác hiểu và trân trọng tính cách hoàn hảo chủ nghĩa',
      friendship: 'Bạn bè có gu thẩm mỹ, thích chia sẻ về nghệ thuật và vẻ đẹp',
      family: 'Tạo không gian sống đẹp, chăm sóc gia đình một cách tinh tế',
      workplace: 'Đồng nghiệp đánh giá cao về chất lượng công việc và sự cầu toàn'
    },
    
    healthTendencies: {
      physical: ['Vóc dáng cân đối', 'Da đẹp', 'Khả năng phục hồi tốt'],
      mental: ['Tính thẩm mỹ cao', 'Trực giác nhạy bén', 'Khả năng sáng tạo'],
      vulnerable: ['Phổi và da nhạy cảm', 'Dị ứng', 'Căng thẳng do áp lực hoàn hảo'],
      strengthening: ['Yoga', 'Pilates', 'Spa', 'Thiền định với nhạc']
    },
    
    wealthPattern: {
      earning: 'Thu nhập từ tài năng nghệ thuật hoặc công việc liên quan đến vẻ đẹp',
      spending: 'Chi tiêu cho thời trang, làm đẹp và những trải nghiệm cao cấp',
      investment: 'Nghệ thuật, trang sức, thời trang, mỹ phẩm cao cấp',
      risk: 'Đầu tư theo xu hướng và thẩm mỹ, cần tư vấn tài chính'
    },
    
    spiritualPath: 'Con đường nghệ thuật và vẻ đẹp, tìm hiểu về sự hoàn hảo và tinh khiết nội tâm',
    lifeChallenge: 'Học cách chấp nhận sự không hoàn hảo và yêu thương bản thân thật',
    growthOpportunity: 'Phát triển lòng tự tin để có thể chia sẻ tài năng mà không sợ bị phán xét',
    
    bestSynergy: ['Kỷ', 'Đinh', 'Quý'],
    challenging: ['Ất', 'Giáp'],
    karmic: ['Mậu', 'Bính']
  },
  
  'Nhâm': {
    element: 'Thủy',
    yinYang: 'Dương',
    chineseCharacter: '壬',
    essence: 'Đại dương bao la',
    naturalForm: 'Sông, biển, thác nước',
    symbolicMeaning: 'Sự bao dung, thông thái và sức mạnh tiềm ẩn',
    
    corePersonality: {
      primary: ['Thông minh sâu sắc', 'Bao dung rộng lượng', 'Linh hoạt thích nghi'],
      secondary: ['Trực giác mạnh mẽ', 'Có khiếu giao tiếp', 'Tư duy chiến lược'],
      hidden: ['Thay đổi thất thường', 'Khó nắm bắt', 'Đôi khi lạnh lùng']
    },
    
    lifePhilosophy: 'Sống để tìm hiểu và chia sẻ tri thức, thích nghi với mọi hoàn cảnh',
    decisionMaking: 'Quyết định dựa trên trực giác và phân tích thông tin sâu sắc',
    stressResponse: 'Rút lui để suy ngẫm, có thể trở nên xa cách và khó tiếp cận',
    
    careerAnalysis: {
      natural: ['Nhà nghiên cứu', 'Tâm lý học gia', 'Nhà báo', 'Trader tài chính'],
      leadership: ['CEO công nghệ', 'Giám đốc chiến lược', 'Nhà ngoại giao'],
      creative: ['Nhà văn', 'Đạo diễn phim', 'Game developer', 'Nhà triết học'],
      service: ['Tư vấn tâm lý', 'Giáo sư đại học', 'Nhà trị liệu', 'Chuyên gia IT']
    },
    
    relationshipPatterns: {
      romantic: 'Tình yêu sâu sắc như đại dương, có thể bao dung nhưng cũng có thể sóng gió',
      friendship: 'Bạn bè đa dạng từ nhiều lĩnh vực, thích thảo luận về triết lý và ý tưởng',
      family: 'Người cố vấn thông thái trong gia đình, hiểu tâm lý từng thành viên',
      workplace: 'Đồng nghiệp tìm đến để xin lời khuyên, có khả năng giải quyết vấn đề phức tạp'
    },
    
    healthTendencies: {
      physical: ['Hệ tuần hoàn tốt', 'Khả năng thích nghi cao', 'Cơ thể linh hoạt'],
      mental: ['Trí thông minh cao', 'Trí nhớ tốt', 'Tư duy sáng tạo'],
      vulnerable: ['Thận và bàng quang', 'Hệ sinh dục', 'Trầm cảm do cô đơn'],
      strengthening: ['Bơi lội', 'Thiền gần nước', 'Uống nhiều nước', 'Tắm biển']
    },
    
    wealthPattern: {
      earning: 'Thu nhập từ tri thức và thông tin, có thể thay đổi theo chu kỳ',
      spending: 'Chi tiêu cho sách vở, công nghệ, du lịch và trải nghiệm',
      investment: 'Công nghệ, cryptocurrency, cổ phiếu công ty khởi nghiệp',
      risk: 'Sẵn sàng đầu tư vào những ý tưởng mới và có tiềm năng'
    },
    
    spiritualPath: 'Con đường tri thức và thông thái, tìm hiểu về bản chất của vũ trụ',
    lifeChallenge: 'Học cách ổn định và cam kết lâu dài thay vì luôn thay đổi',
    growthOpportunity: 'Phát triển khả năng kết nối cảm xúc để có thể chia sẻ tri thức một cách ấm áp hơn',
    
    bestSynergy: ['Canh', 'Tân', 'Giáp'],
    challenging: ['Bính', 'Đinh'],
    karmic: ['Mậu', 'Kỷ']
  },
  
  'Quý': {
    element: 'Thủy',
    yinYang: 'Âm',
    chineseCharacter: '癸',
    essence: 'Nước ngọt trong',
    naturalForm: 'Mưa, sương, suối',
    symbolicMeaning: 'Sự tinh khiết, nuôi dưỡng và trực giác sâu sắc',
    
    corePersonality: {
      primary: ['Nhạy cảm tinh tế', 'Trực giác mạnh mẽ', 'Tâm hồn trong sáng'],
      secondary: ['Dịu dàng nuôi dưỡng', 'Thông thái sâu sắc', 'Khiêm nhường'],
      hidden: ['Dễ bị tổn thương', 'Sợ xung đột', 'Cần được bảo vệ']
    },
    
    lifePhilosophy: 'Sống để nuôi dưỡng và thanh lọc, mang lại sự trong sáng cho thế giới',
    decisionMaking: 'Quyết định dựa trên trực giác và cảm xúc sâu sắc',
    stressResponse: 'Rút lui vào thế giới nội tâm, cần thời gian yên tĩnh để phục hồi',
    
    careerAnalysis: {
      natural: ['Nghệ sĩ', 'Nhà thơ', 'Nhạc sĩ', 'Thầy thuốc y học cổ truyền'],
      leadership: ['Giám đốc phi lợi nhuận', 'Hiệu trưởng mầm non', 'Chủ tịch hội từ thiện'],
      creative: ['Họa sĩ', 'Nhà văn thiếu nhi', 'Nhà thiết kế trang sức', 'Nghệ sĩ múa'],
      service: ['Tư vấn tâm linh', 'Y tá nhi khoa', 'Giáo viên mầm non', 'Nhà trị liệu']
    },
    
    relationshipPatterns: {
      romantic: 'Yêu trong sáng và sâu sắc, cần đối tác hiểu và bảo vệ tâm hồn nhạy cảm',
      friendship: 'Bạn bè thân thiết ít nhưng sâu sắc, là người tư vấn tâm linh tốt',
      family: 'Nguồn cảm hứng và sự ấm áp trong gia đình, tạo không khí hài hòa',
      workplace: 'Đồng nghiệp yêu quý, làm việc tốt trong môi trường hỗ trợ và thấu hiểu'
    },
    
    healthTendencies: {
      physical: ['Cơ thể mềm mại', 'Da đẹp', 'Khả năng phục hồi tốt'],
      mental: ['Trực giác mạnh mẽ', 'Cảm xúc phong phú', 'Khả năng sáng tạo'],
      vulnerable: ['Thận và hệ sinh dục', 'Trầm cảm', 'Dị ứng thức ăn'],
      strengthening: ['Yoga nhẹ nhàng', 'Thiền định', 'Tắm thảo dược', 'Nghe nhạc thiền']
    },
    
    wealthPattern: {
      earning: 'Thu nhập từ tài năng nghệ thuật hoặc công việc chăm sóc',
      spending: 'Chi tiêu cho nghệ thuật, sách vở và những trải nghiệm tâm linh',
      investment: 'Nghệ thuật, giáo dục, từ thiện, đầu tư có ý nghĩa xã hội',
      risk: 'Thận trọng trong đầu tư, ưu tiên ý nghĩa hơn lợi nhuận'
    },
    
    spiritualPath: 'Con đường tâm linh và nghệ thuật, tìm hiểu về sự thanh lọc nội tâm',
    lifeChallenge: 'Học cách bảo vệ bản thân mà không mất đi sự mở lòng',
    growthOpportunity: 'Phát triển sự tự tin để có thể chia sẻ tài năng với thế giới',
    
    bestSynergy: ['Tân', 'Kỷ', 'Ất'],
    challenging: ['Đinh', 'Bính'],
    karmic: ['Canh', 'Nhâm']
  }
};

// 🐲 ENHANCED ĐỊA CHI DATA - Coming in next part
// (Due to space constraints, I'll create the advanced Chi data in a separate file)

export default advancedCanData;
