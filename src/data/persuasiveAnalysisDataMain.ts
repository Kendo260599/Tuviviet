// Main Entry Point for Persuasive Analysis Data
import { persuasiveCanData } from './persuasiveCanData';
import { persuasiveChiData } from './persuasiveChiData';
import type { PersuasiveAnalysis, ComprehensivePersuasiveAnalysis } from './persuasiveAnalysisTypes';

// Re-export types
export type { PersuasiveAnalysis, ComprehensivePersuasiveAnalysis };

// 🌟 COMBINED PERSUASIVE ANALYSIS DATA
export const persuasiveAnalysisData = {
  can: persuasiveCanData,
  chi: persuasiveChiData
};

// Đối tượng phân tích đầy đủ theo yêu cầu interface
export const fullAnalysisData: ComprehensivePersuasiveAnalysis = {
  can: persuasiveCanData,
  chi: persuasiveChiData,
  personalityDepth: persuasiveCanData['Giáp'], // Mẫu dữ liệu
  animalWisdom: persuasiveChiData['Tý'], // Mẫu dữ liệu
  elementalBalance: {
    currentState: "Cân bằng",
    imbalances: ["Thiếu Hỏa", "Thừa Thủy"],
    healingApproach: ["Bổ sung màu đỏ", "Giảm tiếp xúc với nước"],
    optimalStates: ["Cân bằng Ngũ hành", "Hòa hợp Âm Dương"]
  },
  lifePhaseGuidance: {
    currentPhase: "Phát triển",
    challenges: ["Áp lực công việc", "Thiếu thời gian"],
    opportunities: ["Cơ hội thăng tiến", "Gặp quý nhân"],
    actionSteps: ["Tập trung học hỏi", "Mở rộng quan hệ"],
    nextPhasePreparation: "Chuẩn bị tài chính"
  },
  overallPrediction: {
    next90Days: "Thuận lợi",
    nextYear: "Phát triển mạnh",
    next5Years: "Ổn định và thành công",
    confidenceLevel: 85
  }
};

// Export individual data objects
export { persuasiveCanData, persuasiveChiData };
