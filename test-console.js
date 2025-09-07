// Test logic tử vi trực tiếp trên console của browser
// Paste code này vào DevTools Console để kiểm tra

console.log('🧪 TESTING TỬ VI LOGIC...\n');

// Test validation function
function testValidation() {
  console.log('📋 Testing validation...');
  
  // Test cases
  const tests = [
    { input: [1990, 8, 25, 10, 15], expected: true, desc: 'Valid date' },
    { input: [1800, 1, 1, 0, 0], expected: false, desc: 'Too early year' },
    { input: [1990, 13, 1, 0, 0], expected: false, desc: 'Invalid month' },
    { input: [1990, 2, 30, 0, 0], expected: false, desc: 'Invalid day' },
    { input: [2000, 2, 29, 0, 0], expected: true, desc: 'Valid leap year' }
  ];
  
  tests.forEach(test => {
    try {
      // Assuming validateBirthDateTime is available globally or through modules
      const result = true; // Placeholder - replace with actual function call
      const status = result === test.expected ? '✅' : '❌';
      console.log(`${status} ${test.desc}: ${test.input.join('/')}`);
    } catch (error) {
      console.log(`❌ ${test.desc}: Error - ${error.message}`);
    }
  });
}

// Test birth chart calculation
function testBirthChart() {
  console.log('\n🔮 Testing birth chart calculation...');
  
  const testCase = {
    year: 1990, month: 8, day: 25, hour: 10, minute: 15
  };
  
  console.log(`Input: ${testCase.day}/${testCase.month}/${testCase.year} ${testCase.hour}:${testCase.minute}`);
  
  // Expected results based on Can Chi calculation
  // 1990 = Canh Ngọ year
  console.log('Expected year Can Chi: Canh Ngọ (Kim Dương)');
  console.log('Testing...');
  
  // This would be replaced with actual function calls in browser console
  console.log('✅ Calculation functions ready for testing');
}

// Instructions for manual testing
console.log(`
🎯 MANUAL TESTING INSTRUCTIONS:

1. Mở trang tính lá số tử vi
2. Nhập thông tin: 25/8/1990, 10:15
3. Click "Tính Lá Số"
4. Kiểm tra kết quả:
   - Năm: Canh Ngọ (Kim)
   - Tháng: Giáp Thân (Mộc) 
   - Ngày: [Cần kiểm tra]
   - Giờ: [Cần kiểm tra]

5. Thử các test cases khác:
   - 1/1/2000, 0:00 (Canh Thìn year)
   - 31/12/1985, 23:59 (Ất Sửu year)

6. Test error cases:
   - 30/2/1990 (invalid date)
   - 32/1/1990 (invalid day)
   - 1/13/1990 (invalid month)

✅ Nếu tất cả test cases hoạt động chính xác
   → Logic tử vi đáng tin cậy
   → Có thể tiến hành nâng cấp

❌ Nếu có lỗi logic
   → Cần fix trước khi nâng cấp
`);

testValidation();
testBirthChart();

console.log('\n🎉 Test script loaded! Follow manual testing instructions above.');
