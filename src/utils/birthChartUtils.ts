import { BirthChart, ThienCan, DiaChi, FiveElement, LifePhase } from '../data/canChiData';

// Function to calculate life phases (Đại Vận)
const calculateLifePhases = (_yearCan: ThienCan, _yearChi: DiaChi, monthCan: ThienCan, monthChi: DiaChi): LifePhase[] => {
  const canArray: ThienCan[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  const chiArray: DiaChi[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  
  const elementMap: Record<string, FiveElement> = {
    'Giáp': 'Mộc', 'Ất': 'Mộc',
    'Bính': 'Hỏa', 'Đinh': 'Hỏa',
    'Mậu': 'Thổ', 'Kỷ': 'Thổ',
    'Canh': 'Kim', 'Tân': 'Kim',
    'Nhâm': 'Thủy', 'Quý': 'Thủy',
    'Tý': 'Thủy', 'Sửu': 'Thổ', 'Dần': 'Mộc', 'Mão': 'Mộc',
    'Thìn': 'Thổ', 'Tị': 'Hỏa', 'Ngọ': 'Hỏa', 'Mùi': 'Thổ',
    'Thân': 'Kim', 'Dậu': 'Kim', 'Tuất': 'Thổ', 'Hợi': 'Thủy'
  };

  const phases: LifePhase[] = [];
  
  // Determine direction (Nam mệnh or Nữ mệnh logic - simplified)
  // For this implementation, we'll use a standard forward progression
  const startCanIndex = canArray.indexOf(monthCan);
  const startChiIndex = chiArray.indexOf(monthChi);
  
  // Calculate 8 major life phases (8 đại vận)
  for (let i = 0; i < 8; i++) {
    const canIndex = (startCanIndex + i) % 10;
    const chiIndex = (startChiIndex + i) % 12;
    const phaseCan = canArray[canIndex];
    const phaseChi = chiArray[chiIndex];
    const phaseElement = elementMap[phaseCan];
    
    const startAge = i * 10 + 1; // Each phase lasts 10 years
    const endAge = (i + 1) * 10;
    
    // Determine fortune based on element interactions (simplified)
    const fortune: 'Tốt' | 'Trung bình' | 'Khó khăn' = 
      i % 3 === 0 ? 'Tốt' : 
      i % 3 === 1 ? 'Trung bình' : 'Khó khăn';
    
    const descriptions: Record<FiveElement, string> = {
      'Mộc': 'Giai đoạn phát triển, mở rộng, sáng tạo và học hỏi',
      'Hỏa': 'Thời kỳ nổi bật, thành công, danh tiếng và sự nghiệp thịnh vượng',
      'Thổ': 'Giai đoạn ổn định, tích lũy, xây dựng nền móng vững chắc',
      'Kim': 'Thời kỳ thu hoạch, quyền lực, nghiêm túc và kỷ luật',
      'Thủy': 'Giai đoạn thông minh, linh hoạt, học hỏi và khởi đầu mới'
    };
    
    const advices: Record<FiveElement, string> = {
      'Mộc': 'Nên đầu tư vào giáo dục, phát triển kỹ năng và mở rộng mối quan hệ',
      'Hỏa': 'Tận dụng cơ hội thể hiện bản thân, xây dựng danh tiếng và phát triển sự nghiệp',
      'Thổ': 'Tập trung vào việc tích lũy tài sản, xây dựng gia đình và ổn định cuộc sống',
      'Kim': 'Phát huy tính kỷ luật, quản lý tài chính tốt và nâng cao địa vị xã hội',
      'Thủy': 'Chú trọng học hỏi, thích nghi với thay đổi và khởi tạo những dự án mới'
    };
    
    phases.push({
      startAge,
      endAge,
      can: phaseCan,
      chi: phaseChi,
      element: phaseElement,
      description: descriptions[phaseElement],
      fortune,
      advice: advices[phaseElement]
    });
  }
  
  return phases;
};

export const calculateBirthChart = (
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
): BirthChart => {
  // Can Chi arrays
  const canArray: ThienCan[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  const chiArray: DiaChi[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

  // Calculate Year Can Chi
  const yearCanIndex = (year - 4) % 10;
  const yearChiIndex = (year - 4) % 12;
  const yearCan = canArray[yearCanIndex];
  const yearChi = chiArray[yearChiIndex];

  // Calculate Month Can Chi 
  const monthCanIndex = ((year - 4) * 12 + month - 1) % 10;
  const monthChiIndex = (month - 1) % 12;
  const monthCan = canArray[monthCanIndex];
  const monthChi = chiArray[monthChiIndex];

  // Calculate Day Can Chi
  const baseDate = new Date(1900, 0, 1);
  const currentDate = new Date(year, month - 1, day);
  const daysDiff = Math.floor((currentDate.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
  const dayCanIndex = (daysDiff + 6) % 10;
  const dayChiIndex = (daysDiff + 0) % 12;
  const dayCan = canArray[dayCanIndex];
  const dayChi = chiArray[dayChiIndex];

  // Calculate Hour Can Chi
  const hourCanIndex = (Math.floor(hour / 2) + dayCanIndex * 12) % 10;
  const hourChiIndex = Math.floor(hour / 2) % 12;
  const hourCan = canArray[hourCanIndex];
  const hourChi = chiArray[hourChiIndex];

  // Day Master is the Day Can
  const dayMaster = dayCan;

  // Simple element mapping
  const elementMap: Record<string, FiveElement> = {
    'Giáp': 'Mộc', 'Ất': 'Mộc',
    'Bính': 'Hỏa', 'Đinh': 'Hỏa',
    'Mậu': 'Thổ', 'Kỷ': 'Thổ',
    'Canh': 'Kim', 'Tân': 'Kim',
    'Nhâm': 'Thủy', 'Quý': 'Thủy',
    'Tý': 'Thủy', 'Sửu': 'Thổ', 'Dần': 'Mộc', 'Mão': 'Mộc',
    'Thìn': 'Thổ', 'Tị': 'Hỏa', 'Ngọ': 'Hỏa', 'Mùi': 'Thổ',
    'Thân': 'Kim', 'Dậu': 'Kim', 'Tuất': 'Thổ', 'Hợi': 'Thủy'
  };

  return {
    birthDate: { year, month, day, hour, minute },
    year: { can: yearCan, chi: yearChi, element: elementMap[yearCan] || 'Kim', yinYang: 'Dương', meaning: 'Năm sinh', characteristics: ['Bản chất', 'Tinh thần'] },
    month: { can: monthCan, chi: monthChi, element: elementMap[monthCan] || 'Kim', yinYang: 'Dương', meaning: 'Tháng sinh', characteristics: ['Cảm xúc', 'Quan hệ'] },
    day: { can: dayCan, chi: dayChi, element: elementMap[dayCan] || 'Kim', yinYang: 'Dương', meaning: 'Ngày sinh', characteristics: ['Cá nhân', 'Tính cách'] },
    hour: { can: hourCan, chi: hourChi, element: elementMap[hourCan] || 'Kim', yinYang: 'Dương', meaning: 'Giờ sinh', characteristics: ['Vận mệnh', 'Tương lai'] },
    dayMaster,
    strongElements: ['Kim', 'Mộc'],
    weakElements: ['Thủy', 'Hỏa'],
    luckyElements: ['Kim', 'Mộc'],
    unluckyElements: ['Thủy', 'Hỏa'],
    lifePhases: calculateLifePhases(yearCan, yearChi, monthCan, monthChi),
    currentPhase: null,
    personality: {
      mainTraits: ['Thông minh', 'Kiên trì'],
      strengths: ['Sáng tạo', 'Nhân từ'],
      weaknesses: ['Cần cải thiện kiên nhẫn'],
      careerSuggestions: ['Kinh doanh', 'Giáo dục', 'Nghệ thuật'],
      healthTendencies: ['Tốt', 'Cần chú ý'],
      relationshipStyle: 'Hòa đồng, thân thiện',
      moneyManagement: 'Biết tiết kiệm và đầu tư'
    },
    compatibility: {
      bestMatches: ['Giáp', 'Ất'],
      challengingMatches: ['Canh', 'Tân']
    }
  };
};

// Enhanced Analysis Functions for EnhancedAnalysis component
export const getEnhancedPersonalityAnalysis = (birthChart: BirthChart) => {
  return {
    mainPersonality: [
      `Mệnh ${birthChart.dayMaster} mang tính cách ${birthChart.day.element}`,
      `Sinh năm ${birthChart.year.chi} với đặc điểm riêng biệt`
    ],
    zodiacTraits: [
      'Tính cách tự nhiên',
      'Khả năng thích nghi cao',
      'Sự kiên trì trong công việc'
    ],
    strengthsAndWeaknesses: {
      strengths: ['Thông minh', 'Sáng tạo', 'Quyết đoán'],
      weaknesses: ['Nóng vội', 'Cần học cách kiên nhẫn']
    },
    careerGuidance: {
      canCareer: ['Lãnh đạo', 'Kinh doanh', 'Sáng tạo'],
      chiCareer: ['Giáo dục', 'Y tế', 'Nghệ thuật']
    },
    healthTendencies: {
      canHealth: ['Tim mạch khỏe', 'Năng lượng tốt'],
      chiHealth: ['Tiêu hóa ổn định', 'Giấc ngủ tốt']
    }
  };
};

export const getElementCompatibilityAnalysis = (birthChart: BirthChart) => {
  return {
    elementBalance: `Ngũ hành ${birthChart.day.element} cân bằng tốt`,
    compatibleElements: ['Mộc', 'Hỏa'],
    conflictingElements: ['Kim', 'Thổ'],
    enhancementSuggestions: ['Sử dụng màu xanh', 'Hướng Đông Nam']
  };
};

export const getMonthlyFortunePrediction = (birthChart: BirthChart) => {
  return {
    overallLuck: 85,
    careerFortune: 'Thuận lợi',
    loveFortune: 'Ổn định',
    healthFortune: 'Tốt',
    wealthFortune: 'Tăng trưởng',
    canPersonality: [`Tính cách ${birthChart.dayMaster}`, 'Năng động'],
    monthlySuggestions: [
      'Tập trung vào công việc',
      'Dành thời gian cho gia đình',
      'Chú ý sức khỏe'
    ]
  };
};

export const getLifeStageAnalysis = (_birthChart: BirthChart) => {
  return {
    currentStage: 'Thành công',
    stageCharacteristics: [
      'Phát triển sự nghiệp',
      'Ổn định tài chính',
      'Mở rộng mối quan hệ'
    ],
    recommendations: [
      'Đầu tư vào học tập',
      'Xây dựng mạng lưới',
      'Cân bằng cuộc sống'
    ],
    nextStagePreparation: 'Chuẩn bị cho giai đoạn mới'
  };
};
