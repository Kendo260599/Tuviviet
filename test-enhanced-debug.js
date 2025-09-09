// Test enhanced analysis functions
import { calculateBirthChart } from '../utils/birthChartUtils';
import { 
  getEnhancedPersonalityAnalysis,
  getElementCompatibilityAnalysis,
  getMonthlyFortunePrediction,
  getLifeStageAnalysis
} from '../utils/birthChartUtils';

// Test case
const testChart = calculateBirthChart(1990, 8, 25, 10, 15);

console.log('Test Chart:', testChart);

try {
  const personality = getEnhancedPersonalityAnalysis(testChart);
  console.log('Personality Analysis:', personality);
  
  const elements = getElementCompatibilityAnalysis(testChart);
  console.log('Element Analysis:', elements);
  
  const fortune = getMonthlyFortunePrediction(testChart, 8);
  console.log('Monthly Fortune:', fortune);
  
  const lifestage = getLifeStageAnalysis(testChart, 33);
  console.log('Life Stage:', lifestage);
  
  console.log('✅ All functions work correctly');
} catch (error) {
  console.error('❌ Error:', error);
}
