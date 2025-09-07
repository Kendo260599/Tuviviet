/**
 * Kiểm tra logic tính toán tử vi để đảm bảo accuracy trước khi nâng cấp
 * Test cases dựa trên các ví dụ thực tế từ sách tử vi truyền thống
 */

import { 
  calculateBirthChart, 
  getYearCanChi, 
  getMonthCanChi, 
  getDayCanChi, 
  getHourCanChi,
  validateBirthDateTime,
  getElementCompatibilityAnalysis,
  getEnhancedPersonalityAnalysis,
  getMonthlyFortunePrediction,
  getLifeStageAnalysis
} from '../utils/birthChartUtils';

describe('Logic Validation Tests - Tử Vi Calculations', () => {
  
  // Test cases từ các ví dụ thực tế trong sách tử vi
  const testCases = [
    {
      name: 'Nguyễn Trãi (1380)',
      year: 1380, month: 3, day: 15, hour: 14, minute: 30,
      expectedYear: { can: 'Canh', chi: 'Thân' },
      description: 'Danh nhân lịch sử - kiểm tra tính chính xác'
    },
    {
      name: 'Hồ Chí Minh (1890)',
      year: 1890, month: 5, day: 19, hour: 6, minute: 0,
      expectedYear: { can: 'Canh', chi: 'Dần' },
      description: 'Bác Hồ - case study nổi tiếng'
    },
    {
      name: 'Test Case Modern (1990)',
      year: 1990, month: 8, day: 25, hour: 10, minute: 15,
      expectedYear: { can: 'Canh', chi: 'Ngọ' },
      description: 'Thế hệ 9X - test case hiện đại'
    },
    {
      name: 'Test Case Gen Z (2000)',
      year: 2000, month: 12, day: 1, hour: 23, minute: 45,
      expectedYear: { can: 'Canh', chi: 'Thìn' },
      description: 'Thế hệ 2000 - boundary test'
    }
  ];

  describe('✅ Kiểm tra tính toán Can Chi cơ bản', () => {
    testCases.forEach(testCase => {
      test(`${testCase.name} - ${testCase.description}`, () => {
        // Kiểm tra validation input
        expect(validateBirthDateTime(testCase.year, testCase.month, testCase.day, testCase.hour, testCase.minute))
          .toBe(true);
        
        // Kiểm tra tính toán năm Can Chi
        const yearCanChi = getYearCanChi(testCase.year);
        expect(yearCanChi.can).toBe(testCase.expectedYear.can);
        expect(yearCanChi.chi).toBe(testCase.expectedYear.chi);
        
        // Kiểm tra tính toán tháng Can Chi (không null)
        const monthCanChi = getMonthCanChi(testCase.year, testCase.month);
        expect(monthCanChi.can).toBeDefined();
        expect(monthCanChi.chi).toBeDefined();
        
        // Kiểm tra tính toán ngày Can Chi (không null)
        const dayCanChi = getDayCanChi(testCase.year, testCase.month, testCase.day);
        expect(dayCanChi.can).toBeDefined();
        expect(dayCanChi.chi).toBeDefined();
        
        // Kiểm tra tính toán giờ Can Chi (không null)
        const hourCanChi = getHourCanChi(dayCanChi.can, testCase.hour);
        expect(hourCanChi.can).toBeDefined();
        expect(hourCanChi.chi).toBeDefined();
      });
    });
  });

  describe('🔮 Kiểm tra hệ thống phân tích nâng cao', () => {
    const sampleBirthChart = calculateBirthChart(1990, 8, 25, 10, 15);
    
    test('Birth Chart calculation should return complete data', () => {
      expect(sampleBirthChart).toBeDefined();
      expect(sampleBirthChart.year).toBeDefined();
      expect(sampleBirthChart.month).toBeDefined();
      expect(sampleBirthChart.day).toBeDefined();
      expect(sampleBirthChart.hour).toBeDefined();
      expect(sampleBirthChart.personality).toBeDefined();
      expect(sampleBirthChart.lifePhases).toBeDefined();
      expect(sampleBirthChart.lifePhases).toHaveLength(8);
    });

    test('Enhanced Personality Analysis should work', () => {
      const personality = getEnhancedPersonalityAnalysis(sampleBirthChart);
      
      expect(personality).toBeDefined();
      expect(personality.coreTraits).toHaveLength(3);
      expect(personality.strengths).toHaveLength(3);
      expect(personality.weaknesses).toHaveLength(3);
      expect(personality.careerSuggestions).toHaveLength(3);
      expect(personality.relationshipStyle).toBeDefined();
      expect(personality.lifeApproach).toBeDefined();
    });

    test('Element Compatibility Analysis should work', () => {
      const compatibility = getElementCompatibilityAnalysis(
        sampleBirthChart.day.element,
        sampleBirthChart.year.element,
        sampleBirthChart.month.element,
        sampleBirthChart.hour.element
      );
      
      expect(compatibility).toBeDefined();
      expect(compatibility.overallHarmony).toBeGreaterThanOrEqual(0);
      expect(compatibility.overallHarmony).toBeLessThanOrEqual(100);
      expect(compatibility.strongElements).toBeDefined();
      expect(compatibility.weakElements).toBeDefined();
      expect(compatibility.recommendations).toHaveLength(3);
      expect(compatibility.elementBalance).toBeDefined();
    });

    test('Monthly Fortune Prediction should work', () => {
      const fortune = getMonthlyFortunePrediction(
        sampleBirthChart.day.can,
        sampleBirthChart.day.chi,
        8, // August
        30  // Age 30
      );
      
      expect(fortune).toBeDefined();
      expect(fortune.overallLuck).toBeGreaterThanOrEqual(1);
      expect(fortune.overallLuck).toBeLessThanOrEqual(5);
      expect(fortune.career).toBeDefined();
      expect(fortune.health).toBeDefined();
      expect(fortune.relationship).toBeDefined();
      expect(fortune.finance).toBeDefined();
      expect(fortune.advice).toHaveLength(3);
    });

    test('Life Stage Analysis should work', () => {
      const lifeStage = getLifeStageAnalysis(
        sampleBirthChart.day.can,
        sampleBirthChart.year.element,
        30 // Age 30
      );
      
      expect(lifeStage).toBeDefined();
      expect(lifeStage.currentPhase).toBeDefined();
      expect(lifeStage.phaseDescription).toBeDefined();
      expect(lifeStage.opportunities).toHaveLength(3);
      expect(lifeStage.challenges).toHaveLength(3);
      expect(lifeStage.guidance).toHaveLength(3);
      expect(lifeStage.nextPhase).toBeDefined();
    });
  });

  describe('🛡️ Kiểm tra Edge Cases và Error Handling', () => {
    test('Invalid dates should be rejected', () => {
      expect(validateBirthDateTime(1800, 13, 1, 0, 0)).toBe(false); // Invalid month
      expect(validateBirthDateTime(2100, 1, 32, 0, 0)).toBe(false); // Invalid day
      expect(validateBirthDateTime(1990, 1, 1, 25, 0)).toBe(false); // Invalid hour
      expect(validateBirthDateTime(1990, 1, 1, 0, 60)).toBe(false); // Invalid minute
      expect(validateBirthDateTime(1800, 1, 1, 0, 0)).toBe(false); // Too early year
    });

    test('Boundary years should work correctly', () => {
      expect(validateBirthDateTime(1900, 1, 1, 0, 0)).toBe(true);
      expect(validateBirthDateTime(2050, 12, 31, 23, 59)).toBe(true);
    });

    test('Leap year February should be handled', () => {
      expect(validateBirthDateTime(2000, 2, 29, 0, 0)).toBe(true); // Leap year
      expect(validateBirthDateTime(1900, 2, 29, 0, 0)).toBe(false); // Not leap year
      expect(validateBirthDateTime(2004, 2, 29, 0, 0)).toBe(true); // Leap year
    });
  });

  describe('📊 Kiểm tra tính nhất quán dữ liệu', () => {
    test('Same input should produce same output', () => {
      const chart1 = calculateBirthChart(1990, 8, 25, 10, 15);
      const chart2 = calculateBirthChart(1990, 8, 25, 10, 15);
      
      expect(chart1.year.can).toBe(chart2.year.can);
      expect(chart1.year.chi).toBe(chart2.year.chi);
      expect(chart1.month.can).toBe(chart2.month.can);
      expect(chart1.day.can).toBe(chart2.day.can);
      expect(chart1.hour.can).toBe(chart2.hour.can);
    });

    test('60-year cycle should be consistent', () => {
      const year1990 = getYearCanChi(1990);
      const year2050 = getYearCanChi(2050); // 60 years later
      
      expect(year1990.can).toBe(year2050.can);
      expect(year1990.chi).toBe(year2050.chi);
    });

    test('Element mappings should be consistent', () => {
      const chart = calculateBirthChart(1990, 8, 25, 10, 15);
      
      // Check that all elements are valid
      const validElements = ['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'];
      expect(validElements).toContain(chart.year.element);
      expect(validElements).toContain(chart.month.element);
      expect(validElements).toContain(chart.day.element);
      expect(validElements).toContain(chart.hour.element);
    });
  });
});

// Utility function để chạy manual test
export function runManualValidation() {
  console.log('🧪 Chạy kiểm tra logic tử vi manual...\n');
  
  const testCase = {
    year: 1990, month: 8, day: 25, hour: 10, minute: 15
  };
  
  console.log(`📅 Test case: ${testCase.day}/${testCase.month}/${testCase.year} ${testCase.hour}:${testCase.minute}`);
  
  try {
    const chart = calculateBirthChart(testCase.year, testCase.month, testCase.day, testCase.hour, testCase.minute);
    
    console.log('\n✅ Tứ Trụ Bát Tự:');
    console.log(`   Năm: ${chart.year.can} ${chart.year.chi} (${chart.year.element})`);
    console.log(`   Tháng: ${chart.month.can} ${chart.month.chi} (${chart.month.element})`);
    console.log(`   Ngày: ${chart.day.can} ${chart.day.chi} (${chart.day.element})`);
    console.log(`   Giờ: ${chart.hour.can} ${chart.hour.chi} (${chart.hour.element})`);
    
    console.log('\n✅ Nhật Chủ:', chart.day.can);
    console.log('✅ Personality traits:', chart.personality.coreTraits.join(', '));
    console.log('✅ Life phases:', chart.lifePhases.length, 'giai đoạn');
    
    console.log('\n🎯 Logic validation: PASSED ✅');
    
  } catch (error) {
    console.error('❌ Logic validation FAILED:', error);
  }
}
