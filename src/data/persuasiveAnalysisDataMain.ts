// Main Entry Point for Persuasive Analysis Data
import { persuasiveCanData } from './persuasiveCanData';
import { persuasiveChiData } from './persuasiveChiData';
import type { PersuasiveAnalysis, ComprehensivePersuasiveAnalysis } from './persuasiveAnalysisTypes';

// Re-export types
export type { PersuasiveAnalysis, ComprehensivePersuasiveAnalysis };

// 🌟 COMBINED PERSUASIVE ANALYSIS DATA
export const persuasiveAnalysisData: ComprehensivePersuasiveAnalysis = {
  can: persuasiveCanData,
  chi: persuasiveChiData
};

// Export individual data objects
export { persuasiveCanData, persuasiveChiData };
