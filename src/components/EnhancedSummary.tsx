import React from 'react';
import { BirthChart } from '../data/canChiData';
import { getEnhancedPersonalityAnalysis, getElementCompatibilityAnalysis } from '../utils/birthChartUtils';
import { enhancedCanData } from '../data/enhancedCanChiData';
import { enhancedChiData } from '../data/enhancedChiData';

interface EnhancedSummaryProps {
  birthChart: BirthChart;
}

export const EnhancedSummary: React.FC<EnhancedSummaryProps> = ({ birthChart }) => {
  const personalityAnalysis = getEnhancedPersonalityAnalysis(birthChart);
  const elementAnalysis = getElementCompatibilityAnalysis(birthChart);
  const dayCanData = enhancedCanData[birthChart.day.can];
  const dayChiData = enhancedChiData[birthChart.day.chi];

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 rounded-2xl p-6 border border-indigo-100 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          ✨ Tóm Tắt Phân Tích Nâng Cao
        </h3>
        <p className="text-gray-600 text-sm">Đặc điểm nổi bật từ Thiên Can và Địa Chi</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Thiên Can Summary */}
        <div className="bg-white/70 rounded-xl p-4 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {birthChart.day.can}
            </div>
            <h4 className="font-semibold text-blue-800">Thiên Can - {dayCanData.meaning}</h4>
          </div>
          
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-blue-700">Đặc điểm:</span>
              <span className="ml-2 text-blue-600">{dayCanData.detailedMeaning}</span>
            </div>
            <div>
              <span className="font-medium text-blue-700">Màu sắc may mắn:</span>
              <div className="flex gap-1 mt-1">
                {dayCanData.luckyColors.map((color, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Địa Chi Summary */}
        <div className="bg-white/70 rounded-xl p-4 border border-green-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              {birthChart.day.chi}
            </div>
            <h4 className="font-semibold text-green-800">Địa Chi - {dayChiData.animal}</h4>
          </div>
          
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-green-700">Đặc điểm:</span>
              <span className="ml-2 text-green-600">{dayChiData.detailedMeaning}</span>
            </div>
            <div>
              <span className="font-medium text-green-700">Giờ hoạt động:</span>
              <span className="ml-2 text-green-600">{dayChiData.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Element Harmony */}
      <div className="bg-white/70 rounded-xl p-4 border border-purple-100 mb-6">
        <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
          ⚡ Hòa hợp ngũ hành
        </h4>
        <div className="flex items-center justify-between">
          <span className="text-sm text-purple-700">Mức độ hài hòa tổng thể:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            elementAnalysis.harmonyLevel === 'Rất tốt' ? 'bg-green-100 text-green-800' :
            elementAnalysis.harmonyLevel === 'Tốt' ? 'bg-blue-100 text-blue-800' :
            elementAnalysis.harmonyLevel === 'Trung bình' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {elementAnalysis.harmonyLevel}
          </span>
        </div>
      </div>

      {/* Quick Insights */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/70 rounded-lg p-3 border border-orange-100 text-center">
          <div className="text-orange-500 text-2xl mb-1">💼</div>
          <div className="text-xs font-medium text-orange-800">Nghề nghiệp phù hợp</div>
          <div className="text-xs text-orange-600 mt-1">
            {personalityAnalysis.careerGuidance.canCareer[0] || 'Đa dạng lĩnh vực'}
          </div>
        </div>

        <div className="bg-white/70 rounded-lg p-3 border border-red-100 text-center">
          <div className="text-red-500 text-2xl mb-1">❤️</div>
          <div className="text-xs font-medium text-red-800">Sức khỏe cần chú ý</div>
          <div className="text-xs text-red-600 mt-1">
            {personalityAnalysis.healthTendencies.canHealth[0] || 'Cân bằng tổng thể'}
          </div>
        </div>

        <div className="bg-white/70 rounded-lg p-3 border border-indigo-100 text-center">
          <div className="text-indigo-500 text-2xl mb-1">🌟</div>
          <div className="text-xs font-medium text-indigo-800">Điểm mạnh nổi bật</div>
          <div className="text-xs text-indigo-600 mt-1">
            {personalityAnalysis.strengthsAndWeaknesses.strengths[0] || 'Cá tính đặc biệt'}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 italic">
          💡 Nhấn vào "Xem phân tích nâng cao" bên dưới để có thông tin chi tiết hơn
        </p>
      </div>
    </div>
  );
};

export default EnhancedSummary;
