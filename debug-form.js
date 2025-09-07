// Test script to debug form submission issue
// Run this in browser console to test the form

console.log('Starting form submission test...');

// Fill form with test data
const testData = {
  year: '1990',
  month: '5', 
  day: '15',
  hour: '14',
  minute: '30',
  currentAge: '35'
};

console.log('Test data:', testData);

// Try to find and fill form fields
try {
  const yearInput = document.querySelector('input[placeholder="YYYY"]');
  const monthInput = document.querySelector('select[id*="month"], input[id*="month"]');
  const dayInput = document.querySelector('select[id*="day"], input[id*="day"]');
  const hourInput = document.querySelector('select[id*="hour"]');
  const minuteInput = document.querySelector('select[id*="minute"]');
  const ageInput = document.querySelector('input[id*="currentAge"], input[placeholder*="tuổi"]');
  
  console.log('Form elements found:', {
    yearInput: !!yearInput,
    monthInput: !!monthInput,
    dayInput: !!dayInput,
    hourInput: !!hourInput,
    minuteInput: !!minuteInput,
    ageInput: !!ageInput
  });
  
  // Fill form if elements exist
  if (yearInput) {
    yearInput.value = testData.year;
    yearInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
  
  if (monthInput) {
    monthInput.value = testData.month;
    monthInput.dispatchEvent(new Event('change', { bubbles: true }));
  }
  
  if (dayInput) {
    dayInput.value = testData.day;
    dayInput.dispatchEvent(new Event('change', { bubbles: true }));
  }
  
  if (hourInput) {
    hourInput.value = testData.hour;
    hourInput.dispatchEvent(new Event('change', { bubbles: true }));
  }
  
  if (minuteInput) {
    minuteInput.value = testData.minute;
    minuteInput.dispatchEvent(new Event('change', { bubbles: true }));
  }
  
  if (ageInput) {
    ageInput.value = testData.currentAge;
    ageInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
  
  console.log('Form filled successfully');
  
  // Find and click submit button
  const submitButton = document.querySelector('button[type="submit"]');
  if (submitButton) {
    console.log('Submit button found, clicking...');
    submitButton.click();
  } else {
    console.error('Submit button not found');
  }
  
} catch (error) {
  console.error('Error during form test:', error);
}
