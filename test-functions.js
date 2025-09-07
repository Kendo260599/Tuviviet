// Test individual functions trong birthChartUtils
import { 
  getYearCanChi, 
  getMonthCanChi, 
  getDayCanChi, 
  getHourCanChi,
  calculateBirthChart 
} from './utils/birthChartUtils';

console.log('=== Testing birthChartUtils functions ===');

try {
  console.log('1. Testing getYearCanChi...');
  const yearResult = getYearCanChi(1990);
  console.log('✅ getYearCanChi:', yearResult);
} catch (error) {
  console.error('❌ getYearCanChi failed:', error);
}

try {
  console.log('2. Testing getMonthCanChi...');
  const monthResult = getMonthCanChi(1990, 5);
  console.log('✅ getMonthCanChi:', monthResult);
} catch (error) {
  console.error('❌ getMonthCanChi failed:', error);
}

try {
  console.log('3. Testing getDayCanChi...');
  const dayResult = getDayCanChi(1990, 5, 15);
  console.log('✅ getDayCanChi:', dayResult);
} catch (error) {
  console.error('❌ getDayCanChi failed:', error);
}

try {
  console.log('4. Testing getHourCanChi...');
  const hourResult = getHourCanChi(1990, 5, 15, 14);
  console.log('✅ getHourCanChi:', hourResult);
} catch (error) {
  console.error('❌ getHourCanChi failed:', error);
}

try {
  console.log('5. Testing calculateBirthChart...');
  const fullResult = calculateBirthChart(1990, 5, 15, 14, 30);
  console.log('✅ calculateBirthChart success!');
  console.log('Result structure:', {
    hasYear: !!fullResult.year,
    hasMonth: !!fullResult.month,
    hasDay: !!fullResult.day,
    hasHour: !!fullResult.hour,
    yearCanExists: !!fullResult.year?.can,
    yearChiExists: !!fullResult.year?.chi
  });
} catch (error) {
  console.error('❌ calculateBirthChart failed:', error);
  console.error('Error details:', error.stack);
}
