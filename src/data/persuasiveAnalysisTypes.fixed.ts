// Persuasive Analysis Interface - Core Types
import { ThienCan, DiaChi } from './canChiData';

// 🔮 THUYẾT PHỤC & CHI TIẾT NÂNG CAO
export interface PersuasiveAnalysis {
  // Phân tích có dẫn chứng
  evidenceBasedInsights: {
    statisticalData: string;
    realWorldExamples: string[];
    psychologicalBasis: string;
    historicalEvidence: string;
  };
  
  // Câu chuyện thuyết phục
  persuasiveStories: {
    successStory: string;
    challengeStory: string;
    transformationStory: string;
    inspirationalQuote: string;
  };
  
  // Phân tích tâm lý sâu
  deepPsychology: {
    unconsciousPatterns: string[];
    defenseMechanisms: string[];
    coreNeeds: string[];
    shadowAspects: string[];
    integrationPath: string;
  };
  
  // Hướng dẫn thực tế
  practicalGuidance: {
    dailyPractices: string[];
    weeklyGoals: string[];
    monthlyReflections: string[];
    yearlyMilestones: string[];
    lifeTimeMission: string;
  };
  
  // Dự đoán có căn cứ
  scientificPredictions: {
    next3Months: string;
    next6Months: string;
    nextYear: string;
    next3Years: string;
    probabilityScore: number; // 0-100%
  };
}

// 🔮 HỆ THỐNG PHÂN TÍCH TỔNG HỢP - The renamed type to avoid conflicts
export interface FullPersuasiveAnalysisData {
  can: Record<ThienCan, PersuasiveAnalysis>;
  chi: Record<DiaChi, PersuasiveAnalysis>;
}
