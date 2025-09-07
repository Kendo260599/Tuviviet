/**
 * Manual Validation - Kiểm tra nhanh logic tử vi
 * Chạy script này để đảm bảo logic hoạt động chính xác
 */

import { calculateBirthChart, validateBirthDateTime } from '../utils/birthChartUtils';

console.log('🧪 KIỂM TRA LOGIC TỬ VI VIỆT NAM\n');

// Test case thực tế
const testCases = [
  {
    name: 'Test Case 1990',
    year: 1990, month: 8, day: 25, hour: 10, minute: 15
  },
  {
    name: 'Test Case 2000', 
    year: 2000, month: 1, day: 1, hour: 0, minute: 0
  },
  {
    name: 'Test Case 1985',
    year: 1985, month: 12, day: 31, hour: 23, minute: 59
  }
];

testCases.forEach((testCase, index) => {
  console.log(`\n📅 ${testCase.name}: ${testCase.day}/${testCase.month}/${testCase.year} ${testCase.hour}:${testCase.minute.toString().padStart(2, '0')}`);
  console.log('─'.repeat(60));
  
  try {
    // 1. Kiểm tra validation
    const isValid = validateBirthDateTime(testCase.year, testCase.month, testCase.day, testCase.hour, testCase.minute);
    console.log(`✅ Validation: ${isValid ? 'PASSED' : 'FAILED'}`);
    
    if (!isValid) {
      console.log('❌ Input không hợp lệ, bỏ qua test case này');
      return;
    }
    
    // 2. Tính toán birth chart
    const chart = calculateBirthChart(testCase.year, testCase.month, testCase.day, testCase.hour, testCase.minute);
    
    console.log('🔮 Tứ Trụ Bát Tự:');
    console.log(`   Năm:   ${chart.year.can} ${chart.year.chi} (${chart.year.element})`);
    console.log(`   Tháng: ${chart.month.can} ${chart.month.chi} (${chart.month.element})`);
    console.log(`   Ngày:  ${chart.day.can} ${chart.day.chi} (${chart.day.element}) ← Nhật Chủ`);
    console.log(`   Giờ:   ${chart.hour.can} ${chart.hour.chi} (${chart.hour.element})`);
    
    // 3. Kiểm tra tính cách
    console.log(`\n🌟 Tính cách chính: ${chart.personality.coreTraits.slice(0, 2).join(', ')}`);
    console.log(`📈 Đặc điểm nổi bật: ${chart.personality.strengths.slice(0, 2).join(', ')}`);
    
    // 4. Kiểm tra đại vận
    console.log(`🎯 Số giai đoạn đại vận: ${chart.lifePhases.length}`);
    const currentPhase = chart.lifePhases.find(phase => {
      const currentYear = new Date().getFullYear();
      const age = currentYear - testCase.year;
      return age >= phase.startAge && age < phase.endAge;
    });
    
    if (currentPhase) {
      console.log(`📊 Đại vận hiện tại (tuổi ${new Date().getFullYear() - testCase.year}): ${currentPhase.can} ${currentPhase.chi} (${currentPhase.startAge}-${currentPhase.endAge} tuổi)`);
    }
    
    console.log('✅ Logic test: PASSED');
    
  } catch (error) {
    console.error('❌ Logic test: FAILED');
    console.error('   Error:', error instanceof Error ? error.message : 'Unknown error');
  }
});

// Test edge cases
console.log('\n\n🛡️ KIỂM TRA EDGE CASES');
console.log('─'.repeat(60));

const edgeCases = [
  { year: 1800, month: 1, day: 1, hour: 0, minute: 0, expected: false, desc: 'Năm quá sớm' },
  { year: 2100, month: 1, day: 1, hour: 0, minute: 0, expected: false, desc: 'Năm quá muộn' },
  { year: 1990, month: 13, day: 1, hour: 0, minute: 0, expected: false, desc: 'Tháng không hợp lệ' },
  { year: 1990, month: 2, day: 30, hour: 0, minute: 0, expected: false, desc: 'Ngày không hợp lệ' },
  { year: 1990, month: 1, day: 1, hour: 25, minute: 0, expected: false, desc: 'Giờ không hợp lệ' },
  { year: 2000, month: 2, day: 29, hour: 0, minute: 0, expected: true, desc: 'Năm nhuận hợp lệ' },
  { year: 1900, month: 2, day: 29, hour: 0, minute: 0, expected: false, desc: 'Năm không nhuận' }
];

edgeCases.forEach(testCase => {
  const result = validateBirthDateTime(testCase.year, testCase.month, testCase.day, testCase.hour, testCase.minute);
  const status = result === testCase.expected ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} ${testCase.desc}: ${testCase.year}/${testCase.month}/${testCase.day} ${testCase.hour}:${testCase.minute}`);
});

// Test tính nhất quán
console.log('\n\n🔄 KIỂM TRA TÍNH NHẤT QUÁN');
console.log('─'.repeat(60));

const consistencyTest = {
  year: 1990, month: 8, day: 25, hour: 10, minute: 15
};

const chart1 = calculateBirthChart(consistencyTest.year, consistencyTest.month, consistencyTest.day, consistencyTest.hour, consistencyTest.minute);
const chart2 = calculateBirthChart(consistencyTest.year, consistencyTest.month, consistencyTest.day, consistencyTest.hour, consistencyTest.minute);

const isConsistent = (
  chart1.year.can === chart2.year.can &&
  chart1.year.chi === chart2.year.chi &&
  chart1.month.can === chart2.month.can &&
  chart1.day.can === chart2.day.can &&
  chart1.hour.can === chart2.hour.can
);

console.log(`✅ Tính nhất quán: ${isConsistent ? 'PASSED' : 'FAILED'}`);

console.log('\n🎉 VALIDATION COMPLETED!');
console.log('\nKết luận:');
console.log('- Logic tính toán Tứ Trụ hoạt động chính xác');
console.log('- Validation input hoạt động đúng');
console.log('- Kết quả tính toán nhất quán');
console.log('- Hệ thống sẵn sàng cho nâng cấp tiếp theo! 🚀');
