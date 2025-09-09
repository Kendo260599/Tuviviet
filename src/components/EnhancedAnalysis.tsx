import React, { useState } from 'react';
import { BirthChart } from '../data/canChiData';
import {
  getEnhancedPersonalityAnalysis,
  getElementCompatibilityAnalysis,
  getMonthlyFortunePrediction,
  getLifeStageAnalysis
} from '../utils/birthChartUtils';
import styles from './EnhancedAnalysis.module.css';

interface EnhancedAnalysisProps {
  birthChart: BirthChart;
  currentAge?: number;
}

export const EnhancedAnalysis: React.FC<EnhancedAnalysisProps> = ({
  birthChart,
  currentAge = 25
}) => {
  const [selectedTab, setSelectedTab] = useState<'personality' | 'elements' | 'fortune' | 'lifestage'>('personality');
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);

  const personalityAnalysis = getEnhancedPersonalityAnalysis(birthChart);
  const elementAnalysis = getElementCompatibilityAnalysis(birthChart);
  const monthlyFortune = getMonthlyFortunePrediction(birthChart, selectedMonth);
  const lifeStageAnalysis = getLifeStageAnalysis(birthChart, currentAge);

  const tabs = [
    { id: 'personality', label: 'Tính cách chi tiết', icon: '👤' },
    { id: 'elements', label: 'Tương hợp ngũ hành', icon: '⚡' },
    { id: 'fortune', label: 'Vận số hàng tháng', icon: '🗓️' },
    { id: 'lifestage', label: 'Giai đoạn cuộc đời', icon: '🌱' }
  ];

  const renderPersonalityTab = () => (
    <div className="space-y-6">
      {/* Tính cách chính từ Thiên Can */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-3">
          Tính cách từ Thiên Can ({birthChart.day.can})
        </h4>
        <div className="grid gap-2">
          {personalityAnalysis.mainPersonality.map((trait, index) => (
            <span key={index} className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Đặc điểm từ Địa Chi */}
      <div className="bg-green-50 rounded-lg p-4">
        <h4 className="font-semibold text-green-800 mb-3">
          Đặc điểm từ Địa Chi ({birthChart.day.chi})
        </h4>
        <div className="grid gap-2">
          {personalityAnalysis.zodiacTraits.map((trait, index) => (
            <span key={index} className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Điểm mạnh và điểm yếu */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-800 mb-3">✨ Điểm mạnh</h4>
          <ul className="space-y-1">
            {personalityAnalysis.strengthsAndWeaknesses.strengths.map((strength, index) => (
              <li key={index} className="text-emerald-700 text-sm">• {strength}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-4">
          <h4 className="font-semibold text-amber-800 mb-3">⚠️ Cần cải thiện</h4>
          <ul className="space-y-1">
            {personalityAnalysis.strengthsAndWeaknesses.weaknesses.map((weakness, index) => (
              <li key={index} className="text-amber-700 text-sm">• {weakness}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hướng nghiệp và sức khỏe */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-purple-50 rounded-lg p-4">
          <h4 className="font-semibold text-purple-800 mb-3">💼 Hướng nghiệp phù hợp</h4>
          <div className="space-y-2">
            <div>
              <p className="text-sm font-medium text-purple-700">Từ Thiên Can:</p>
              <ul className="text-sm text-purple-600">
                {personalityAnalysis.careerGuidance.canCareer.map((career, index) => (
                  <li key={index}>• {career}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-purple-700">Từ Địa Chi:</p>
              <ul className="text-sm text-purple-600">
                {personalityAnalysis.careerGuidance.chiCareer.map((career, index) => (
                  <li key={index}>• {career}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-3">🏥 Xu hướng sức khỏe</h4>
          <div className="space-y-2">
            <div>
              <p className="text-sm font-medium text-red-700">Cần chú ý (Thiên Can):</p>
              <ul className="text-sm text-red-600">
                {personalityAnalysis.healthTendencies.canHealth.map((health, index) => (
                  <li key={index}>• {health}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-red-700">Cần chú ý (Địa Chi):</p>
              <ul className="text-sm text-red-600">
                {personalityAnalysis.healthTendencies.chiHealth.map((health, index) => (
                  <li key={index}>• {health}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderElementsTab = () => (
    <div className="space-y-6">
      <div className="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
        <h4 className="font-bold text-lg mb-2">Mức độ hòa hợp: {elementAnalysis.harmonyLevel}</h4>
        <p className="text-sm text-gray-600">Điểm tổng thể: {elementAnalysis.overallHarmony}</p>
      </div>

      <div className="grid gap-4">
        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3">🌟 Tương tác Ngày - Năm</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">Mối quan hệ: <strong>{elementAnalysis.interactions.dayYear.type}</strong></span>
            <span className={`px-2 py-1 rounded text-sm ${
              elementAnalysis.interactions.dayYear.type === 'tương sinh' ? 'bg-green-100 text-green-800' :
              elementAnalysis.interactions.dayYear.type === 'tương khắc' ? 'bg-red-100 text-red-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {elementAnalysis.interactions.dayYear.meaning}
            </span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3">🌙 Tương tác Ngày - Tháng</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">Mối quan hệ: <strong>{elementAnalysis.interactions.dayMonth.type}</strong></span>
            <span className={`px-2 py-1 rounded text-sm ${
              elementAnalysis.interactions.dayMonth.type === 'tương sinh' ? 'bg-green-100 text-green-800' :
              elementAnalysis.interactions.dayMonth.type === 'tương khắc' ? 'bg-red-100 text-red-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {elementAnalysis.interactions.dayMonth.meaning}
            </span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3">⏰ Tương tác Ngày - Giờ</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">Mối quan hệ: <strong>{elementAnalysis.interactions.dayHour.type}</strong></span>
            <span className={`px-2 py-1 rounded text-sm ${
              elementAnalysis.interactions.dayHour.type === 'tương sinh' ? 'bg-green-100 text-green-800' :
              elementAnalysis.interactions.dayHour.type === 'tương khắc' ? 'bg-red-100 text-red-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {elementAnalysis.interactions.dayHour.meaning}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-4">
        <h4 className="font-semibold text-indigo-800 mb-2">💡 Lời khuyên cân bằng ngũ hành</h4>
        <p className="text-indigo-700 text-sm">
          {elementAnalysis.harmonyLevel === 'Rất tốt' 
            ? 'Ngũ hành của bạn rất hòa hợp. Hãy duy trì trạng thái cân bằng này.'
            : elementAnalysis.harmonyLevel === 'Tốt'
            ? 'Ngũ hành tương đối hòa hợp. Chú ý những mối quan hệ tương khắc để cải thiện.'
            : elementAnalysis.harmonyLevel === 'Trung bình'
            ? 'Cần cân bằng lại ngũ hành. Tập trung vào việc tăng cường các yếu tố tương sinh.'
            : 'Cần điều chỉnh ngũ hành để tạo sự hài hòa. Tham khảo chuyên gia để có lời khuyên cụ thể.'
          }
        </p>
      </div>
    </div>
  );

  const renderFortuneTab = () => (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
              selectedMonth === month
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            T{month}
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
        <h4 className="font-bold text-lg text-orange-800 mb-4">
          🗓️ Vận số tháng {selectedMonth}
        </h4>
        
        <div className="space-y-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-2">Đặc điểm tính cách nổi bật:</h5>
            <div className="flex flex-wrap gap-2">
              {monthlyFortune.canPersonality.map((trait, index) => (
                <span key={index} className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/70 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-2">Vận may trong tháng:</h5>
            <p className="text-gray-700">{monthlyFortune.chiFortune}</p>
          </div>

          <div className="bg-white/70 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-2">Lời khuyên tổng hợp:</h5>
            <p className="text-gray-700">{monthlyFortune.combinedAdvice}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLifeStageTab = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-6 py-3 mb-4">
          <span className="text-lg font-bold">{lifeStageAnalysis.ageGroup} ({currentAge} tuổi)</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6">
        <h4 className="font-bold text-lg text-teal-800 mb-4">
          🌱 Đặc điểm giai đoạn hiện tại
        </h4>
        <div className="bg-white/70 rounded-lg p-4">
          <p className="text-teal-700 leading-relaxed">{lifeStageAnalysis.currentStage}</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h4 className="font-bold text-lg text-blue-800 mb-4">
          💡 Hướng dẫn cho giai đoạn này
        </h4>
        <div className="bg-white/70 rounded-lg p-4">
          <p className="text-blue-700 leading-relaxed">{lifeStageAnalysis.guidance}</p>
        </div>
      </div>

      {/* Hiển thị timeline giai đoạn cuộc đời */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-bold text-lg text-gray-800 mb-4">
          📊 Timeline cuộc đời
        </h4>
        <div className="space-y-3">
          <div className={`p-3 rounded ${currentAge <= 18 ? 'bg-yellow-200 border-2 border-yellow-400' : 'bg-gray-200'}`}>
            <span className="font-medium">0-18 tuổi: Thời thơ ấu</span>
            {currentAge <= 18 && <span className="ml-2 text-yellow-800 font-bold">← Hiện tại</span>}
          </div>
          <div className={`p-3 rounded ${currentAge > 18 && currentAge <= 35 ? 'bg-green-200 border-2 border-green-400' : 'bg-gray-200'}`}>
            <span className="font-medium">19-35 tuổi: Thanh niên</span>
            {currentAge > 18 && currentAge <= 35 && <span className="ml-2 text-green-800 font-bold">← Hiện tại</span>}
          </div>
          <div className={`p-3 rounded ${currentAge > 35 && currentAge <= 60 ? 'bg-blue-200 border-2 border-blue-400' : 'bg-gray-200'}`}>
            <span className="font-medium">36-60 tuổi: Trung niên</span>
            {currentAge > 35 && currentAge <= 60 && <span className="ml-2 text-blue-800 font-bold">← Hiện tại</span>}
          </div>
          <div className={`p-3 rounded ${currentAge > 60 ? 'bg-purple-200 border-2 border-purple-400' : 'bg-gray-200'}`}>
            <span className="font-medium">60+ tuổi: Tuổi già</span>
            {currentAge > 60 && <span className="ml-2 text-purple-800 font-bold">← Hiện tại</span>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="border-b bg-gray-50 rounded-t-lg">
        <nav className="flex space-x-1 p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {selectedTab === 'personality' && renderPersonalityTab()}
        {selectedTab === 'elements' && renderElementsTab()}
        {selectedTab === 'fortune' && renderFortuneTab()}
        {selectedTab === 'lifestage' && renderLifeStageTab()}
      </div>
    </div>
  );
};

export default EnhancedAnalysis;
