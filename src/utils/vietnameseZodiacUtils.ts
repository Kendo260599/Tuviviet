import { VietnameseZodiacSign } from '../types';

/**
 * Calculate Vietnamese zodiac sign based on birth year
 * Vietnamese zodiac follows a 12-year cycle starting from specific base years
 */
export function getVietnameseZodiacSign(year: number): VietnameseZodiacSign {
  // Base year for calculation (1900 was a Tý year)
  const baseYear = 1900;
  const cycle = (year - baseYear) % 12;
  
  const signs: VietnameseZodiacSign[] = [
    'ty',    // 0: 1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020
    'suu',   // 1: 1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021
    'dan',   // 2: 1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022
    'mao',   // 3: 1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023
    'thin',  // 4: 1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024
    'ti',    // 5: 1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025
    'ngo',   // 6: 1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026
    'mui',   // 7: 1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027
    'than',  // 8: 1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028
    'dau',   // 9: 1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029
    'tuat',  // 10: 1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030
    'hoi'    // 11: 1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031
  ];
  
  return signs[cycle];
}

/**
 * Get Vietnamese zodiac info by animal name for easy lookup
 */
export function getVietnameseZodiacByAnimal(animal: string): VietnameseZodiacSign | null {
  const animalMap: Record<string, VietnameseZodiacSign> = {
    'chuột': 'ty',
    'trâu': 'suu', 
    'hổ': 'dan',
    'mèo': 'mao',
    'rồng': 'thin',
    'rắn': 'ti',
    'ngựa': 'ngo',
    'dê': 'mui',
    'khỉ': 'than',
    'gà': 'dau',
    'chó': 'tuat',
    'heo': 'hoi',
    'lợn': 'hoi' // Alternative name for pig
  };
  
  return animalMap[animal.toLowerCase()] || null;
}

/**
 * Calculate element compatibility based on Five Elements theory
 * Kim (Metal) -> Thủy (Water) -> Mộc (Wood) -> Hỏa (Fire) -> Thổ (Earth) -> Kim
 */
export function calculateElementCompatibility(element1: string, element2: string): {
  compatible: boolean;
  relationship: 'generates' | 'destroys' | 'neutral' | 'same';
  description: string;
} {
  const elements = ['Kim', 'Thủy', 'Mộc', 'Hỏa', 'Thổ'];
  const index1 = elements.indexOf(element1);
  const index2 = elements.indexOf(element2);
  
  if (index1 === -1 || index2 === -1) {
    return {
      compatible: false,
      relationship: 'neutral',
      description: 'Không xác định được mối quan hệ ngũ hành'
    };
  }
  
  if (element1 === element2) {
    return {
      compatible: true,
      relationship: 'same',
      description: 'Cùng hành, hỗ trợ lẫn nhau'
    };
  }
  
  // Check if element1 generates element2 (sequential in cycle)
  const nextIndex = (index1 + 1) % 5;
  if (nextIndex === index2) {
    return {
      compatible: true,
      relationship: 'generates',
      description: `${element1} sinh ${element2} - Mối quan hệ hỗ trợ mạnh mẽ`
    };
  }
  
  // Check if element1 destroys element2 (skip one in cycle)
  const destroyIndex = (index1 + 2) % 5;
  if (destroyIndex === index2) {
    return {
      compatible: false,
      relationship: 'destroys',
      description: `${element1} khắc ${element2} - Mối quan hệ xung đột`
    };
  }
  
  return {
    compatible: true,
    relationship: 'neutral',
    description: 'Mối quan hệ trung tính, có thể cùng tồn tại'
  };
}

/**
 * Get current year's Vietnamese zodiac
 */
export function getCurrentVietnameseZodiac(): {
  year: number;
  sign: VietnameseZodiacSign;
  name: string;
} {
  const currentYear = new Date().getFullYear();
  const sign = getVietnameseZodiacSign(currentYear);
  
  const nameMap: Record<VietnameseZodiacSign, string> = {
    'ty': 'Tý - Chuột',
    'suu': 'Sửu - Trâu',
    'dan': 'Dần - Hổ',
    'mao': 'Mão - Mèo',
    'thin': 'Thìn - Rồng',
    'ti': 'Tị - Rắn',
    'ngo': 'Ngọ - Ngựa',
    'mui': 'Mùi - Dê',
    'than': 'Thân - Khỉ',
    'dau': 'Dậu - Gà',
    'tuat': 'Tuất - Chó',
    'hoi': 'Hợi - Heo'
  };
  
  return {
    year: currentYear,
    sign,
    name: nameMap[sign]
  };
}

/**
 * Validate Vietnamese year input
 */
export function validateVietnameseYear(year: number): boolean {
  const currentYear = new Date().getFullYear();
  return year >= 1900 && year <= currentYear + 10; // Allow future predictions
}

/**
 * Get zodiac years for a specific animal
 */
export function getZodiacYears(sign: VietnameseZodiacSign, count: number = 5): number[] {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  
  // Find the most recent year for this sign
  let year = currentYear;
  while (getVietnameseZodiacSign(year) !== sign && year > currentYear - 12) {
    year--;
  }
  
  // Generate years backwards and forwards
  for (let i = -count + 1; i <= count; i++) {
    const targetYear = year + (i * 12);
    if (targetYear >= 1900 && targetYear <= currentYear + 50) {
      years.push(targetYear);
    }
  }
  
  return years.sort((a, b) => a - b);
}
