import { ThienCan, DiaChi, CanChiInfo, BirthChart, LifePhase, PersonalityAnalysis, FiveElement } from '../data/canChiData';
import { thienCanData, diaChiData } from '../data/canChiData';
import { enhancedCanData, elementInteractions } from '../data/enhancedCanChiData';
import { enhancedChiData } from '../data/enhancedChiData';

/**
 * Calculate Can Chi for a given year
 * Base year 1924 = Giáp Tý (first year of cycle)
 */
export function getYearCanChi(year: number): CanChiInfo {
  const baseYear = 1924; // Giáp Tý year
  const yearOffset = (year - baseYear) % 60;
  
  const canIndex = yearOffset % 10;
  const chiIndex = yearOffset % 12;
  
  const canArray: ThienCan[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  const chiArray: DiaChi[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  
  const can = canArray[canIndex];
  const chi = chiArray[chiIndex];
  
  return createCanChiInfo(can, chi);
}

/**
 * Calculate Can Chi for a given month
 * Month Can depends on year Can and month number
 */
export function getMonthCanChi(year: number, month: number): CanChiInfo {
  const yearCan = getYearCanChi(year).can;
  
  // Month Can calculation based on year Can
  const monthCanMap: Record<ThienCan, ThienCan[]> = {
    'Giáp': ['Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh'],
    'Kỷ': ['Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh'],
    'Ất': ['Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'],
    'Canh': ['Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'],
    'Bính': ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân'],
    'Tân': ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân'],
    'Đinh': ['Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'],
    'Nhâm': ['Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'],
    'Mậu': ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất'],
    'Quý': ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất']
  };
  
  const monthCan = monthCanMap[yearCan][month - 1];
  
  // Month Chi is fixed
  const monthChiArray: DiaChi[] = ['Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu'];
  const monthChi = monthChiArray[month - 1];
  
  return createCanChiInfo(monthCan, monthChi);
}

/**
 * Calculate Can Chi for a given day
 * Day calculation is complex and uses Julian day number
 */
export function getDayCanChi(year: number, month: number, day: number): CanChiInfo {
  // Convert to Julian day number for accurate calculation
  const a = Math.floor((14 - month) / 12);
  const y = year - a;
  const m = month + 12 * a - 3;
  
  const jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1721119;
  
  // Day Can Chi cycle (60-day cycle)
  const dayOffset = (jd - 1) % 60;
  const canIndex = dayOffset % 10;
  const chiIndex = dayOffset % 12;
  
  const canArray: ThienCan[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  const chiArray: DiaChi[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  
  const can = canArray[canIndex];
  const chi = chiArray[chiIndex];
  
  return createCanChiInfo(can, chi);
}

/**
 * Calculate Can Chi for a given hour
 * Hour Can depends on day Can and hour number
 */
export function getHourCanChi(year: number, month: number, day: number, hour: number): CanChiInfo {
  const dayCan = getDayCanChi(year, month, day).can;
  
  // Convert to Vietnamese hour system (12 periods of 2 hours each)
  const hourIndex = Math.floor((hour + 1) / 2) % 12;
  
  // Hour Can calculation based on day Can
  const hourCanMap: Record<ThienCan, ThienCan[]> = {
    'Giáp': ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất'],
    'Kỷ': ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất'],
    'Ất': ['Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh'],
    'Canh': ['Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh'],
    'Bính': ['Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'],
    'Tân': ['Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'],
    'Đinh': ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân'],
    'Nhâm': ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân'],
    'Mậu': ['Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'],
    'Quý': ['Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý']
  };
  
  const hourCan = hourCanMap[dayCan][hourIndex];
  
  // Hour Chi is fixed based on hour
  const hourChiArray: DiaChi[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  const hourChi = hourChiArray[hourIndex];
  
  return createCanChiInfo(hourCan, hourChi);
}

/**
 * Create CanChiInfo object from Can and Chi
 */
function createCanChiInfo(can: ThienCan, chi: DiaChi): CanChiInfo {
  const canInfo = thienCanData[can];
  const chiInfo = diaChiData[chi];
  
  // Determine combined element (Can element is primary)
  const element = canInfo.element;
  
  return {
    can,
    chi,
    element,
    yinYang: canInfo.yinYang,
    meaning: `${canInfo.meaning} + ${chiInfo.animal} (${chiInfo.time})`,
    characteristics: [...canInfo.characteristics, ...chiInfo.characteristics]
  };
}

/**
 * Calculate complete birth chart (Lá số tử vi)
 */
export function calculateBirthChart(
  year: number, 
  month: number, 
  day: number, 
  hour: number, 
  minute: number = 0
): BirthChart {
  const yearCanChi = getYearCanChi(year);
  const monthCanChi = getMonthCanChi(year, month);
  const dayCanChi = getDayCanChi(year, month, day);
  const hourCanChi = getHourCanChi(year, month, day, hour);
  
  const dayMaster = dayCanChi.can; // Nhật chủ - most important
  
  // Analyze element strength
  const elements = [yearCanChi.element, monthCanChi.element, dayCanChi.element, hourCanChi.element];
  const elementCount = elements.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
  }, {} as Record<FiveElement, number>);
  
  const strongElements = Object.entries(elementCount)
    .filter(([, count]) => count >= 2)
    .map(([element]) => element as FiveElement);
    
  const weakElements = (['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'] as FiveElement[])
    .filter(element => !elementCount[element] || elementCount[element] < 2);
  
  // Calculate lucky/unlucky elements based on day master
  const { luckyElements, unluckyElements } = calculateLuckyElements(dayMaster, strongElements, weakElements);
  
  // Calculate life phases (Đại vận)
  const lifePhases = calculateLifePhases(yearCanChi, monthCanChi, dayCanChi);
  const currentAge = new Date().getFullYear() - year;
  const currentPhase = lifePhases.find(phase => currentAge >= phase.startAge && currentAge <= phase.endAge) || null;
  
  // Personality analysis
  const personality = analyzePersonality(dayMaster, yearCanChi, monthCanChi, hourCanChi);
  
  // Compatibility
  const compatibility = calculateCompatibility(dayMaster);
  
  return {
    year: yearCanChi,
    month: monthCanChi,
    day: dayCanChi,
    hour: hourCanChi,
    birthDate: { year, month, day, hour, minute },
    dayMaster,
    strongElements,
    weakElements,
    luckyElements,
    unluckyElements,
    lifePhases,
    currentPhase,
    personality,
    compatibility
  };
}

/**
 * Calculate lucky and unlucky elements based on day master and element balance
 */
function calculateLuckyElements(
  dayMaster: ThienCan, 
  strongElements: FiveElement[], 
  weakElements: FiveElement[]
): { luckyElements: FiveElement[]; unluckyElements: FiveElement[] } {
  const dayMasterElement = thienCanData[dayMaster].element;
  
  // Element generation cycle: Mộc -> Hỏa -> Thổ -> Kim -> Thủy -> Mộc
  const elementCycle: Record<FiveElement, { generates: FiveElement; generatedBy: FiveElement; destroys: FiveElement; destroyedBy: FiveElement }> = {
    'Mộc': { generates: 'Hỏa', generatedBy: 'Thủy', destroys: 'Thổ', destroyedBy: 'Kim' },
    'Hỏa': { generates: 'Thổ', generatedBy: 'Mộc', destroys: 'Kim', destroyedBy: 'Thủy' },
    'Thổ': { generates: 'Kim', generatedBy: 'Hỏa', destroys: 'Thủy', destroyedBy: 'Mộc' },
    'Kim': { generates: 'Thủy', generatedBy: 'Thổ', destroys: 'Mộc', destroyedBy: 'Hỏa' },
    'Thủy': { generates: 'Mộc', generatedBy: 'Kim', destroys: 'Hỏa', destroyedBy: 'Thổ' }
  };
  
  const luckyElements: FiveElement[] = [];
  const unluckyElements: FiveElement[] = [];
  
  // If day master element is weak, elements that support it are lucky
  if (weakElements.includes(dayMasterElement)) {
    luckyElements.push(elementCycle[dayMasterElement].generatedBy); // Element that generates day master
    luckyElements.push(dayMasterElement); // Same element for support
    unluckyElements.push(elementCycle[dayMasterElement].destroyedBy); // Element that destroys day master
    unluckyElements.push(elementCycle[dayMasterElement].generates); // Element that day master generates (drains energy)
  } else if (strongElements.includes(dayMasterElement)) {
    // If day master element is strong, elements that control it are lucky
    luckyElements.push(elementCycle[dayMasterElement].destroyedBy); // Element that controls day master
    luckyElements.push(elementCycle[dayMasterElement].generates); // Element that day master generates
    unluckyElements.push(elementCycle[dayMasterElement].generatedBy); // Element that generates day master (too much)
    unluckyElements.push(dayMasterElement); // Same element (too much)
  } else {
    // Balanced case
    luckyElements.push(elementCycle[dayMasterElement].generatedBy);
    luckyElements.push(elementCycle[dayMasterElement].generates);
    unluckyElements.push(elementCycle[dayMasterElement].destroyedBy);
  }
  
  return { luckyElements, unluckyElements };
}

/**
 * Calculate life phases (Đại vận)
 */
function calculateLifePhases(_yearCanChi: CanChiInfo, monthCanChi: CanChiInfo, dayCanChi: CanChiInfo): LifePhase[] {
  const phases: LifePhase[] = [];
  
  // Start from age 8, each phase lasts 10 years
  const canArray: ThienCan[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  const chiArray: DiaChi[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  
  // Base phase calculation (simplified)
  let baseCanIndex = canArray.indexOf(monthCanChi.can);
  let baseChiIndex = chiArray.indexOf(monthCanChi.chi);
  
  for (let i = 0; i < 8; i++) {
    const startAge = 8 + (i * 10);
    const endAge = startAge + 9;
    
    const canIndex = (baseCanIndex + i + 1) % 10;
    const chiIndex = (baseChiIndex + i + 1) % 12;
    
    const can = canArray[canIndex];
    const chi = chiArray[chiIndex];
    const element = thienCanData[can].element;
    
    // Simplified fortune calculation
    const fortune = calculatePhaseFortune(can, chi, dayCanChi.can);
    
    phases.push({
      startAge,
      endAge,
      can,
      chi,
      element,
      description: `Đại vận ${can} ${chi} - ${thienCanData[can].meaning}`,
      fortune,
      advice: generatePhaseAdvice(fortune, element)
    });
  }
  
  return phases;
}

/**
 * Calculate fortune for a life phase
 */
function calculatePhaseFortune(phaseCan: ThienCan, _phaseChi: DiaChi, dayMaster: ThienCan): 'Tốt' | 'Trung bình' | 'Khó khăn' {
  const phaseElement = thienCanData[phaseCan].element;
  const dayMasterElement = thienCanData[dayMaster].element;
  
  // Simplified calculation - in real implementation this would be much more complex
  if (phaseElement === dayMasterElement) {
    return 'Tốt';
  } else if (elementSupports(phaseElement, dayMasterElement)) {
    return 'Tốt';
  } else if (elementConflicts(phaseElement, dayMasterElement)) {
    return 'Khó khăn';
  } else {
    return 'Trung bình';
  }
}

/**
 * Check if element1 supports element2
 */
function elementSupports(element1: FiveElement, element2: FiveElement): boolean {
  const supportMap: Record<FiveElement, FiveElement> = {
    'Mộc': 'Hỏa',
    'Hỏa': 'Thổ',
    'Thổ': 'Kim',
    'Kim': 'Thủy',
    'Thủy': 'Mộc'
  };
  return supportMap[element1] === element2;
}

/**
 * Check if element1 conflicts with element2
 */
function elementConflicts(element1: FiveElement, element2: FiveElement): boolean {
  const conflictMap: Record<FiveElement, FiveElement> = {
    'Mộc': 'Thổ',
    'Hỏa': 'Kim',
    'Thổ': 'Thủy',
    'Kim': 'Mộc',
    'Thủy': 'Hỏa'
  };
  return conflictMap[element1] === element2;
}

/**
 * Generate advice for a life phase
 */
function generatePhaseAdvice(fortune: 'Tốt' | 'Trung bình' | 'Khó khăn', element: FiveElement): string {
  const fortuneAdvice = {
    'Tốt': 'Thời kỳ thuận lợi, nên tích cực phát triển sự nghiệp và mở rộng quan hệ.',
    'Trung bình': 'Thời kỳ ổn định, nên tập trung vào việc học hỏi và tích lũy kinh nghiệm.',
    'Khó khăn': 'Thời kỳ thử thách, nên kiên nhẫn và tránh những quyết định lớn.'
  };
  
  const elementAdvice: Record<FiveElement, string> = {
    'Mộc': 'Tập trung phát triển sáng tạo và học hỏi.',
    'Hỏa': 'Thời điểm tốt cho giao tiếp và mở rộng mạng lưới.',
    'Thổ': 'Nên đầu tư vào bất động sản và xây dựng nền tảng.',
    'Kim': 'Thích hợp cho các hoạt động tài chính và kinh doanh.',
    'Thủy': 'Thời kỳ tốt cho nghiên cứu và phát triển tâm linh.'
  };
  
  return `${fortuneAdvice[fortune]} ${elementAdvice[element]}`;
}

/**
 * Analyze personality based on four pillars
 */
function analyzePersonality(
  dayMaster: ThienCan, 
  _yearCanChi: CanChiInfo, 
  _monthCanChi: CanChiInfo, 
  _hourCanChi: CanChiInfo
): PersonalityAnalysis {
  const dayMasterData = thienCanData[dayMaster];
  
  // Base traits from day master
  let mainTraits = [...dayMasterData.characteristics];
  let strengths = [...dayMasterData.characteristics.slice(0, 3)];
  
  // Note: Future enhancement could use yearAnimal, monthElement, hourElement for more detailed analysis
  
  // Career suggestions based on day master element
  const careerSuggestions: Record<FiveElement, string[]> = {
    'Mộc': ['Giáo dục', 'Nông nghiệp', 'Văn hóa nghệ thuật', 'Thiết kế', 'Xuất bản'],
    'Hỏa': ['Truyền thông', 'Điện tử', 'Năng lượng', 'Giải trí', 'Nhà hàng'],
    'Thổ': ['Bất động sản', 'Xây dựng', 'Nông nghiệp', 'Y tế', 'Dịch vụ'],
    'Kim': ['Tài chính', 'Ngân hàng', 'Kỹ thuật', 'Luật', 'Quân đội'],
    'Thủy': ['Vận tải', 'Du lịch', 'Nghiên cứu', 'Y học', 'Tâm linh']
  };
  
  // Health tendencies
  const healthTendencies: Record<FiveElement, string[]> = {
    'Mộc': ['Gan mật', 'Thần kinh', 'Cơ xương khớp'],
    'Hỏa': ['Tim mạch', 'Tuần hoàn', 'Tinh thần'],
    'Thổ': ['Dạ dày', 'Lách', 'Tiêu hóa'],
    'Kim': ['Phổi', 'Da', 'Hô hấp'],
    'Thủy': ['Thận', 'Tiết niệu', 'Sinh dục']
  };
  
  return {
    mainTraits,
    strengths,
    weaknesses: generateWeaknesses(dayMaster),
    careerSuggestions: careerSuggestions[dayMasterData.element],
    healthTendencies: healthTendencies[dayMasterData.element],
    relationshipStyle: generateRelationshipStyle(dayMaster),
    moneyManagement: generateMoneyManagement(dayMaster)
  };
}

/**
 * Generate weaknesses based on day master
 */
function generateWeaknesses(dayMaster: ThienCan): string[] {
  const weaknessMap: Record<ThienCan, string[]> = {
    'Giáp': ['Cứng đầu', 'Khó thay đổi', 'Thiếu linh hoạt'],
    'Ất': ['Yếu đuối', 'Thiếu quyết đoán', 'Dễ bị tổn thương'],
    'Bính': ['Nóng tính', 'Thiếu kiên nhẫn', 'Dễ bốc đồng'],
    'Đinh': ['Nhạy cảm quá mức', 'Hay lo lắng', 'Thiếu tự tin'],
    'Mậu': ['Bảo thủ', 'Chậm chạp', 'Khó chấp nhận mới'],
    'Kỷ': ['Quá hy sinh', 'Thiếu chủ kiến', 'Dễ bị lợi dụng'],
    'Canh': ['Cứng nhắc', 'Thiếu cảm xúc', 'Quá nghiêm khắc'],
    'Tân': ['Kén chọn', 'Hoàn hảo chủ nghĩa', 'Tốn kém'],
    'Nhâm': ['Thất thường', 'Khó đoán', 'Thiếu ổn định'],
    'Quý': ['Thiếu quyết đoán', 'Dễ bị ảnh hưởng', 'Quá mềm lòng']
  };
  
  return weaknessMap[dayMaster];
}

/**
 * Generate relationship style based on day master
 */
function generateRelationshipStyle(dayMaster: ThienCan): string {
  const styleMap: Record<ThienCan, string> = {
    'Giáp': 'Chung thủy, bảo vệ gia đình, thích sự ổn định và lâu dài.',
    'Ất': 'Dịu dàng, thấu hiểu, cần được chăm sóc và bảo vệ.',
    'Bính': 'Nhiệt tình, hào phóng, thích thể hiện tình cảm một cách công khai.',
    'Đinh': 'Ấm áp, chu đáo, chăm sóc đối phương một cách tinh tế.',
    'Mậu': 'Đáng tin cậy, có trách nhiệm, xây dựng mối quan hệ vững chắc.',
    'Kỷ': 'Hy sinh, tận tụy, luôn đặt gia đình lên hàng đầu.',
    'Canh': 'Trung thực, công bằng, thích sự rõ ràng trong mối quan hệ.',
    'Tân': 'Tinh tế, lãng mạn, có gu thẩm mỹ cao trong tình yêu.',
    'Nhâm': 'Sâu sắc, bí ẩn, cần thời gian để mở lòng với ai đó.',
    'Quý': 'Dịu dàng, thấu hiểu, có khả năng cảm thông cao với đối phương.'
  };
  
  return styleMap[dayMaster];
}

/**
 * Generate money management style based on day master
 */
function generateMoneyManagement(dayMaster: ThienCan): string {
  const moneyMap: Record<ThienCan, string> = {
    'Giáp': 'Đầu tư dài hạn, thích bất động sản và tài sản cố định.',
    'Ất': 'Chi tiêu linh hoạt, cần học cách tiết kiệm và đầu tư.',
    'Bính': 'Hào phóng, dễ chi tiêu, cần học cách quản lý tài chính.',
    'Đinh': 'Cẩn thận, có kế hoạch chi tiêu rõ ràng và tiết kiệm.',
    'Mậu': 'Bảo thủ, thích tích lũy, đầu tư an toàn và ít rủi ro.',
    'Kỷ': 'Tiết kiệm, biết đầu tư cho gia đình và tương lai.',
    'Canh': 'Quản lý chặt chẽ, có khả năng kinh doanh và làm giàu.',
    'Tân': 'Thích đồ đẹp đắt tiền, cần học cách cân bằng thu chi.',
    'Nhâm': 'Có khả năng kiếm tiền tốt nhưng chi tiêu không ổn định.',
    'Quý': 'Thu nhập ổn định nhưng ít, cần học cách đầu tư thông minh.'
  };
  
  return moneyMap[dayMaster];
}

/**
 * Calculate compatibility based on day master
 */
function calculateCompatibility(dayMaster: ThienCan): { bestMatches: ThienCan[]; challengingMatches: ThienCan[] } {
  const compatibilityMap: Record<ThienCan, { best: ThienCan[]; challenging: ThienCan[] }> = {
    'Giáp': { best: ['Ất', 'Bính', 'Đinh'], challenging: ['Canh', 'Tân'] },
    'Ất': { best: ['Giáp', 'Bính', 'Đinh'], challenging: ['Canh', 'Tân'] },
    'Bính': { best: ['Giáp', 'Ất', 'Mậu', 'Kỷ'], challenging: ['Nhâm', 'Quý'] },
    'Đinh': { best: ['Giáp', 'Ất', 'Mậu', 'Kỷ'], challenging: ['Nhâm', 'Quý'] },
    'Mậu': { best: ['Bính', 'Đinh', 'Canh', 'Tân'], challenging: ['Giáp', 'Ất'] },
    'Kỷ': { best: ['Bính', 'Đinh', 'Canh', 'Tân'], challenging: ['Giáp', 'Ất'] },
    'Canh': { best: ['Mậu', 'Kỷ', 'Nhâm', 'Quý'], challenging: ['Bính', 'Đinh'] },
    'Tân': { best: ['Mậu', 'Kỷ', 'Nhâm', 'Quý'], challenging: ['Bính', 'Đinh'] },
    'Nhâm': { best: ['Canh', 'Tân', 'Giáp', 'Ất'], challenging: ['Mậu', 'Kỷ'] },
    'Quý': { best: ['Canh', 'Tân', 'Giáp', 'Ất'], challenging: ['Mậu', 'Kỷ'] }
  };
  
  return {
    bestMatches: compatibilityMap[dayMaster].best,
    challengingMatches: compatibilityMap[dayMaster].challenging
  };
}

/**
 * Validate birth date and time
 */
export function validateBirthDateTime(year: number, month: number, day: number, hour: number, minute: number): boolean {
  // Basic validation
  if (year < 1900 || year > 2100) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;
  if (hour < 0 || hour > 23) return false;
  if (minute < 0 || minute > 59) return false;
  
  // Month-specific day validation
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // Leap year check
  if (month === 2) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeapYear && day > 29) return false;
    if (!isLeapYear && day > 28) return false;
  } else {
    if (day > daysInMonth[month - 1]) return false;
  }
  
  return true;
}

// Phân tích nâng cao dựa trên dữ liệu chi tiết
export const getEnhancedPersonalityAnalysis = (birthChart: BirthChart) => {
  const dayCanData = enhancedCanData[birthChart.day.can];
  const dayChiData = enhancedChiData[birthChart.day.chi];
  
  return {
    mainPersonality: dayCanData.personality,
    zodiacTraits: dayChiData.personality,
    strengthsAndWeaknesses: {
      strengths: [...dayCanData.strengths, ...dayChiData.strengths],
      weaknesses: [...dayCanData.weaknesses, ...dayChiData.weaknesses]
    },
    careerGuidance: {
      canCareer: dayCanData.careerPaths,
      chiCareer: dayChiData.careerPaths,
      compatibility: dayCanData.relationships
    },
    healthTendencies: {
      canHealth: dayCanData.healthTendencies,
      chiHealth: dayChiData.healthTendencies
    },
    relationships: {
      can: dayCanData.relationships,
      chi: dayChiData.relationships
    }
  };
};

// Phân tích tương hợp ngũ hành
export const getElementCompatibilityAnalysis = (birthChart: BirthChart) => {
  const dayElement = thienCanData[birthChart.day.can].element;
  const yearElement = diaChiData[birthChart.year.chi].element;
  const monthElement = diaChiData[birthChart.month.chi].element;
  const hourElement = diaChiData[birthChart.hour.chi].element;
  
  // Tạo function helper để lấy element relationship
  const getElementRelation = (elem1: FiveElement, elem2: FiveElement) => {
    const elem1Data = elementInteractions[elem1];
    if (elem1Data.generates === elem2) return { type: 'tương sinh', meaning: `${elem1} sinh ${elem2}` };
    if (elem1Data.destroys === elem2) return { type: 'tương khắc', meaning: `${elem1} khắc ${elem2}` };
    if (elem1Data.generatedBy === elem2) return { type: 'được sinh', meaning: `${elem2} sinh ${elem1}` };
    if (elem1Data.destroyedBy === elem2) return { type: 'bị khắc', meaning: `${elem2} khắc ${elem1}` };
    return { type: 'trung hòa', meaning: `${elem1} và ${elem2} trung hòa` };
  };
  
  const interactions = {
    dayYear: getElementRelation(dayElement, yearElement),
    dayMonth: getElementRelation(dayElement, monthElement),
    dayHour: getElementRelation(dayElement, hourElement)
  };
  
  const overallHarmony = Object.values(interactions).reduce((acc, curr) => {
    if (curr.type === 'tương sinh') acc += 2;
    else if (curr.type === 'tương khắc') acc -= 1;
    else acc += 1;
    return acc;
  }, 0);
  
  return {
    interactions,
    overallHarmony,
    harmonyLevel: overallHarmony > 3 ? 'Rất tốt' : 
                  overallHarmony > 0 ? 'Tốt' : 
                  overallHarmony > -2 ? 'Trung bình' : 'Cần cân bằng'
  };
};

// Dự đoán vận số theo tháng
export const getMonthlyFortunePrediction = (birthChart: BirthChart, month: number) => {
  const dayCanData = enhancedCanData[birthChart.day.can];
  const dayChiData = enhancedChiData[birthChart.day.chi];
  
  return {
    canPersonality: dayCanData.personality,
    chiFortune: dayChiData.monthlyLuck[month] || 'Thông tin chưa có sẵn',
    combinedAdvice: `Tháng ${month}: Kết hợp sức mạnh của ${dayCanData.meaning} (${birthChart.day.can}) và ${dayChiData.animal} (${birthChart.day.chi}) để tối ưu hóa cơ hội.`
  };
};

// Phân tích giai đoạn cuộc đời
export const getLifeStageAnalysis = (birthChart: BirthChart, currentAge: number) => {
  const dayChiData = enhancedChiData[birthChart.day.chi];
  
  let currentStage;
  if (currentAge <= 18) currentStage = dayChiData.lifeStages.childhood;
  else if (currentAge <= 35) currentStage = dayChiData.lifeStages.youth;
  else if (currentAge <= 60) currentStage = dayChiData.lifeStages.middleAge;
  else currentStage = dayChiData.lifeStages.oldAge;
  
  const stageNames = {
    childhood: 'Thời thơ ấu',
    youth: 'Thanh niên', 
    middleAge: 'Trung niên',
    oldAge: 'Tuổi già'
  };
  
  const stageName = currentAge <= 18 ? 'childhood' : 
                   currentAge <= 35 ? 'youth' : 
                   currentAge <= 60 ? 'middleAge' : 'oldAge';
  
  return {
    currentStage,
    ageGroup: stageNames[stageName as keyof typeof stageNames],
    guidance: `Ở tuổi ${currentAge}, bạn đang trong giai đoạn ${stageNames[stageName as keyof typeof stageNames].toLowerCase()}: ${currentStage}`
  };
};
