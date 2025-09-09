// Advanced Analysis System - Integration of Enhanced Data
import { BirthChart, FiveElement } from '../data/canChiData';
import { advancedCanData, AdvancedCanAnalysis, AdvancedChiAnalysis } from '../data/advancedAstrologyData';
import advancedChiData from '../data/advancedChiData'; // Re-enabled

// 🔮 COMPREHENSIVE PERSONALITY ANALYSIS
export interface ComprehensivePersonality {
  // Core Identity
  essence: {
    dayMasterEssence: string;
    naturalForm: string;
    symbolicMeaning: string;
    cosmicEnergy: string;
  };
  
  // Multi-layered Personality
  personalityLayers: {
    surface: string[];      // Obvious traits
    core: string[];         // Deep personality
    hidden: string[];       // Shadow aspects
    potential: string[];    // Growth potential
  };
  
  // Life Patterns
  lifePhilosophy: string;
  decisionMaking: string;
  stressResponse: string;
  
  // Enhanced Career Analysis
  careerAnalysis: {
    naturalPath: string[];
    leadershipStyle: string[];
    creativeExpression: string[];
    serviceOrientation: string[];
    entrepreneurialPotential: string;
  };
  
  // Relationship Dynamics
  relationshipPatterns: {
    romantic: {
      style: string;
      needs: string[];
      challenges: string[];
      growth: string;
    };
    friendship: {
      style: string;
      role: string;
      compatibility: string[];
    };
    family: {
      role: string;
      contribution: string;
      dynamics: string;
    };
    workplace: {
      style: string;
      leadership: string;
      teamwork: string;
    };
  };
  
  // Health & Wellness
  healthProfile: {
    strengths: string[];
    vulnerabilities: string[];
    recommendations: string[];
    spiritualHealth: string;
  };
  
  // Wealth & Prosperity
  wealthPattern: {
    earningStyle: string;
    spendingPattern: string;
    investmentApproach: string;
    riskProfile: string;
    wealthBuilding: string[];
  };
  
  // Spiritual Development
  spiritualPath: {
    journey: string;
    challenges: string[];
    opportunities: string[];
    practices: string[];
  };
}

// 🌟 ENHANCED ELEMENT COMPATIBILITY SYSTEM
export interface ElementCompatibilitySystem {
  dayMasterElement: FiveElement;
  
  // Four Pillars Interaction
  pillarHarmony: {
    yearDayRelation: {
      relationship: string;
      effect: string;
      advice: string;
    };
    monthDayRelation: {
      relationship: string;
      effect: string;
      advice: string;
    };
    hourDayRelation: {
      relationship: string;
      effect: string;
      advice: string;
    };
  };
  
  // Overall Element Balance
  elementBalance: {
    strong: FiveElement[];
    weak: FiveElement[];
    missing: FiveElement[];
    excessive: FiveElement[];
  };
  
  // Remedial Measures
  balancingStrategies: {
    colors: string[];
    directions: string[];
    activities: string[];
    foods: string[];
    gemstones: string[];
    timing: string[];
  };
}

// 🎯 LIFE PHASE EVOLUTION SYSTEM
export interface LifePhaseEvolution {
  currentAge: number;
  currentPhase: {
    name: string;
    characteristics: string[];
    opportunities: string[];
    challenges: string[];
    focus: string[];
  };
  
  // Detailed Life Stages
  lifeStages: {
    childhood: {
      patterns: string[];
      development: string[];
      challenges: string[];
    };
    youth: {
      opportunities: string[];
      focus: string[];
      cautions: string[];
    };
    midlife: {
      achievements: string[];
      responsibilities: string[];
      transformation: string[];
    };
    elderhood: {
      wisdom: string[];
      legacy: string[];
      fulfillment: string[];
    };
  };
  
  // Monthly Guidance (12-month cycle)
  monthlyGuidance: Record<number, {
    energy: string;
    focus: string;
    opportunities: string[];
    cautions: string[];
    activities: string[];
  }>;
}

// 🔥 MASTER ANALYSIS FUNCTION
export const getComprehensiveAnalysis = (birthChart: BirthChart, currentAge: number = 25): {
  personality: ComprehensivePersonality;
  elementSystem: ElementCompatibilitySystem;
  lifeEvolution: LifePhaseEvolution;
} => {
  
  const dayMasterCan = birthChart.day.can;
  const dayMasterChi = birthChart.day.chi;
  
  const canData = advancedCanData[dayMasterCan];
  const chiData = advancedChiData[dayMasterChi]; // Re-enabled
  
  // COMPREHENSIVE PERSONALITY ANALYSIS
  const personality: ComprehensivePersonality = {
    essence: {
      dayMasterEssence: canData.essence,
      naturalForm: canData.naturalForm,
      symbolicMeaning: canData.symbolicMeaning,
      cosmicEnergy: chiData.cosmicEnergy
    },
    
    personalityLayers: {
      surface: [...canData.corePersonality.primary, ...chiData.animalWisdom.core.slice(0, 2)],
      core: [...canData.corePersonality.secondary, ...chiData.animalWisdom.instincts],
      hidden: [...canData.corePersonality.hidden, ...chiData.animalWisdom.survival.slice(0, 2)],
      potential: [canData.growthOpportunity, `Phát triển khả năng ${chiData.animal}`, 'Cân bằng âm dương']
    },
    
    lifePhilosophy: canData.lifePhilosophy,
    decisionMaking: canData.decisionMaking,
    stressResponse: canData.stressResponse,
    
    careerAnalysis: {
      naturalPath: canData.careerAnalysis.natural,
      leadershipStyle: canData.careerAnalysis.leadership,
      creativeExpression: canData.careerAnalysis.creative,
      serviceOrientation: canData.careerAnalysis.service,
      entrepreneurialPotential: `Kết hợp tài năng ${canData.essence} với tinh thần ${chiData.animal}`
    },
    
    relationshipPatterns: {
      romantic: {
        style: canData.relationshipPatterns.romantic,
        needs: [`Cần được hiểu về bản chất ${canData.essence}`, `Trân trọng đặc điểm ${chiData.animal}`],
        challenges: [`Khắc phục ${canData.corePersonality.hidden[0]}`, 'Học cách cân bằng'],
        growth: canData.growthOpportunity
      },
      friendship: {
        style: canData.relationshipPatterns.friendship,
        role: `Người bạn như ${canData.naturalForm}`,
        compatibility: canData.bestSynergy
      },
      family: {
        role: canData.relationshipPatterns.family,
        contribution: `Đóng góp sức mạnh ${canData.element}`,
        dynamics: chiData.animalWisdom.social[0]
      },
      workplace: {
        style: canData.relationshipPatterns.workplace,
        leadership: canData.careerAnalysis.leadership[0] || 'Phong cách lãnh đạo độc đáo',
        teamwork: chiData.animalWisdom.social[1] || 'Làm việc nhóm tốt'
      }
    },
    
    healthProfile: {
      strengths: canData.healthTendencies.physical,
      vulnerabilities: canData.healthTendencies.vulnerable,
      recommendations: canData.healthTendencies.strengthening,
      spiritualHealth: canData.spiritualPath
    },
    
    wealthPattern: {
      earningStyle: canData.wealthPattern.earning,
      spendingPattern: canData.wealthPattern.spending,
      investmentApproach: canData.wealthPattern.investment,
      riskProfile: canData.wealthPattern.risk,
      wealthBuilding: [`Tận dụng năng lượng ${chiData.timeFrame}`, `Theo chu kỳ ${chiData.season}`]
    },
    
    spiritualPath: {
      journey: canData.spiritualPath,
      challenges: [canData.lifeChallenge],
      opportunities: [canData.growthOpportunity],
      practices: canData.healthTendencies.strengthening.slice(0, 2)
    }
  };
  
  // ELEMENT COMPATIBILITY SYSTEM
  const elementSystem: ElementCompatibilitySystem = {
    dayMasterElement: canData.element,
    
    pillarHarmony: {
      yearDayRelation: analyzeElementRelation(birthChart.year.element, canData.element),
      monthDayRelation: analyzeElementRelation(birthChart.month.element, canData.element),
      hourDayRelation: analyzeElementRelation(birthChart.hour.element, canData.element)
    },
    
    elementBalance: {
      strong: birthChart.strongElements,
      weak: birthChart.weakElements,
      missing: getMissingElements(birthChart),
      excessive: getExcessiveElements(birthChart)
    },
    
    balancingStrategies: getBalancingStrategies(canData.element, birthChart.weakElements)
  };
  
  // LIFE PHASE EVOLUTION
  const lifeEvolution: LifePhaseEvolution = {
    currentAge,
    currentPhase: getCurrentLifePhase(currentAge, chiData),
    lifeStages: {
      childhood: {
        patterns: [chiData.lifeCycles.childhood],
        development: canData.corePersonality.primary.slice(0, 2),
        challenges: canData.corePersonality.hidden.slice(0, 1)
      },
      youth: {
        opportunities: [chiData.lifeCycles.youth],
        focus: canData.careerAnalysis.natural.slice(0, 2),
        cautions: [canData.lifeChallenge]
      },
      midlife: {
        achievements: [chiData.lifeCycles.midlife],
        responsibilities: canData.careerAnalysis.leadership.slice(0, 2),
        transformation: [canData.growthOpportunity]
      },
      elderhood: {
        wisdom: [chiData.lifeCycles.elderhood],
        legacy: [canData.spiritualPath],
        fulfillment: canData.healthTendencies.strengthening.slice(0, 2)
      }
    },
    monthlyGuidance: generateMonthlyGuidance(chiData, canData)
  };
  
  return {
    personality,
    elementSystem,
    lifeEvolution
  };
};

// HELPER FUNCTIONS
const analyzeElementRelation = (element1: FiveElement, element2: FiveElement) => {
  // Cycle relationships
  const generateCycle: Record<FiveElement, FiveElement> = {
    'Mộc': 'Hỏa', 'Hỏa': 'Thổ', 'Thổ': 'Kim', 'Kim': 'Thủy', 'Thủy': 'Mộc'
  };
  
  const destructCycle: Record<FiveElement, FiveElement> = {
    'Mộc': 'Thổ', 'Hỏa': 'Kim', 'Thổ': 'Thủy', 'Kim': 'Mộc', 'Thủy': 'Hỏa'
  };
  
  if (element1 === element2) {
    return {
      relationship: 'Cùng ngũ hành',
      effect: 'Tăng cường lẫn nhau, tạo sự đồng điệu',
      advice: 'Phát huy tối đa sức mạnh của ngũ hành này'
    };
  }
  
  if (generateCycle[element1] === element2) {
    return {
      relationship: 'Tương sinh',
      effect: `${element1} sinh ${element2}, tạo năng lượng tích cực`,
      advice: 'Tận dụng sự hỗ trợ này để phát triển'
    };
  }
  
  if (destructCycle[element1] === element2) {
    return {
      relationship: 'Tương khắc',
      effect: `${element1} khắc ${element2}, tạo thách thức`,
      advice: 'Cần cân bằng và điều hòa để giảm xung đột'
    };
  }
  
  return {
    relationship: 'Trung hòa',
    effect: 'Ít tác động trực tiếp',
    advice: 'Tạo cầu nối để tăng cường tương tác'
  };
};

const getMissingElements = (birthChart: BirthChart): FiveElement[] => {
  const allElements: FiveElement[] = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
  const presentElements = [
    birthChart.year.element,
    birthChart.month.element,
    birthChart.day.element,
    birthChart.hour.element
  ];
  
  return allElements.filter(element => !presentElements.includes(element));
};

const getExcessiveElements = (birthChart: BirthChart): FiveElement[] => {
  const elementCount: Record<FiveElement, number> = {
    'Mộc': 0, 'Hỏa': 0, 'Thổ': 0, 'Kim': 0, 'Thủy': 0
  };
  
  [birthChart.year.element, birthChart.month.element, 
   birthChart.day.element, birthChart.hour.element].forEach(element => {
    elementCount[element]++;
  });
  
  return Object.entries(elementCount)
    .filter(([_, count]) => count >= 3)
    .map(([element, _]) => element as FiveElement);
};

const getBalancingStrategies = (_dayMasterElement: FiveElement, weakElements: FiveElement[]) => {
  const strategies = {
    colors: [] as string[],
    directions: [] as string[],
    activities: [] as string[],
    foods: [] as string[],
    gemstones: [] as string[],
    timing: [] as string[]
  };
  
  // Add strategies based on weak elements
  weakElements.forEach(element => {
    switch(element) {
      case 'Mộc':
        strategies.colors.push('Xanh lá', 'Xanh lục');
        strategies.directions.push('Đông', 'Đông Nam');
        strategies.activities.push('Trồng cây', 'Đi bộ trong rừng');
        strategies.foods.push('Rau xanh', 'Trái cây');
        strategies.gemstones.push('Ngọc bích', 'Malachite');
        strategies.timing.push('Buổi sáng', 'Mùa xuân');
        break;
      case 'Hỏa':
        strategies.colors.push('Đỏ', 'Cam', 'Tím');
        strategies.directions.push('Nam');
        strategies.activities.push('Tập thể dục', 'Hoạt động ngoài trời');
        strategies.foods.push('Gia vị cay', 'Thức ăn nóng');
        strategies.gemstones.push('Ruby', 'Garnet');
        strategies.timing.push('Buổi trưa', 'Mùa hè');
        break;
      case 'Thổ':
        strategies.colors.push('Vàng', 'Nâu', 'Be');
        strategies.directions.push('Trung tâm', 'Tây Nam');
        strategies.activities.push('Làm vườn', 'Thiền định');
        strategies.foods.push('Ngũ cốc', 'Khoai củ');
        strategies.gemstones.push('Topaz', 'Citrine');
        strategies.timing.push('Cuối mùa', 'Giữa ngày');
        break;
      case 'Kim':
        strategies.colors.push('Trắng', 'Bạc', 'Vàng kim');
        strategies.directions.push('Tây', 'Tây Bắc');
        strategies.activities.push('Thiền', 'Luyện võ');
        strategies.foods.push('Thực phẩm trắng', 'Hạt');
        strategies.gemstones.push('Kim cương', 'Thạch anh trắng');
        strategies.timing.push('Buổi chiều', 'Mùa thu');
        break;
      case 'Thủy':
        strategies.colors.push('Đen', 'Xanh đậm');
        strategies.directions.push('Bắc');
        strategies.activities.push('Bơi lội', 'Thiền gần nước');
        strategies.foods.push('Hải sản', 'Nước');
        strategies.gemstones.push('Sapphire đen', 'Obsidian');
        strategies.timing.push('Buổi tối', 'Mùa đông');
        break;
    }
  });
  
  return strategies;
};

const getCurrentLifePhase = (age: number, chiData: AdvancedChiAnalysis) => {
  if (age <= 18) {
    return {
      name: 'Thời thơ ấu',
      characteristics: [chiData.lifeCycles.childhood],
      opportunities: ['Học hỏi', 'Phát triển tài năng'],
      challenges: ['Tìm hướng đi', 'Xây dựng tính cách'],
      focus: ['Giáo dục', 'Sức khỏe', 'Gia đình']
    };
  } else if (age <= 35) {
    return {
      name: 'Tuổi trẻ',
      characteristics: [chiData.lifeCycles.youth],
      opportunities: ['Sự nghiệp', 'Tình yêu', 'Khám phá'],
      challenges: ['Áp lực xã hội', 'Quyết định lớn'],
      focus: ['Phát triển nghề nghiệp', 'Mối quan hệ', 'Tự lập']
    };
  } else if (age <= 60) {
    return {
      name: 'Tuổi trung niên',
      characteristics: [chiData.lifeCycles.midlife],
      opportunities: ['Thành tựu', 'Lãnh đạo', 'Di sản'],
      challenges: ['Trách nhiệm', 'Cân bằng', 'Thay đổi'],
      focus: ['Gia đình', 'Sự nghiệp ổn định', 'Đóng góp xã hội']
    };
  } else {
    return {
      name: 'Tuổi già',
      characteristics: [chiData.lifeCycles.elderhood],
      opportunities: ['Trí tuệ', 'Hướng dẫn', 'Bình an'],
      challenges: ['Sức khỏe', 'Chấp nhận', 'Buông bỏ'],
      focus: ['Tâm linh', 'Con cháu', 'Để lại di sản']
    };
  }
};

const generateMonthlyGuidance = (chiData: AdvancedChiAnalysis, canData: AdvancedCanAnalysis) => {
  const guidance: Record<number, any> = {};
  
  for (let month = 1; month <= 12; month++) {
    const monthlyData = chiData.monthlyInfluence[month];
    guidance[month] = {
      energy: monthlyData.energy,
      focus: monthlyData.focus,
      opportunities: [monthlyData.advice, `Tận dụng năng lượng ${canData.element}`],
      cautions: [monthlyData.caution, 'Cân bằng âm dương'],
      activities: canData.healthTendencies.strengthening.slice(0, 2)
    };
  }
  
  return guidance;
};

export default getComprehensiveAnalysis;
