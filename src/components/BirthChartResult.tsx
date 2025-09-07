import React, { useState } from 'react';
import { BirthChart } from '../data/canChiData';
import EnhancedAnalysis from './EnhancedAnalysis';
import EnhancedSummary from './EnhancedSummary';
import QuickTips from './QuickTips';
import styles from './BirthChartResult.module.css';

interface BirthChartResultProps {
  birthChart: BirthChart;
  onBack: () => void;
  currentAge?: number;
}

const BirthChartResult: React.FC<BirthChartResultProps> = ({ birthChart, onBack, currentAge }) => {
  const [showEnhancedAnalysis, setShowEnhancedAnalysis] = useState(false);
  const formatDate = (date: { year: number; month: number; day: number; hour: number; minute: number }) => {
    return `${date.day}/${date.month}/${date.year} lúc ${date.hour.toString().padStart(2, '0')}:${date.minute.toString().padStart(2, '0')}`;
  };

  const getElementColor = (element: string) => {
    const colors: Record<string, string> = {
      'Kim': '#C0C0C0',
      'Mộc': '#228B22',
      'Thủy': '#4169E1',
      'Hỏa': '#DC143C',
      'Thổ': '#DAA520'
    };
    return colors[element] || '#666';
  };

  const getFortuneColor = (fortune: string) => {
    const colors: Record<string, string> = {
      'Tốt': '#28a745',
      'Trung bình': '#ffc107',
      'Khó khăn': '#dc3545'
    };
    return colors[fortune] || '#6c757d';
  };

  return (
    <div className={styles.birthChartResult}>
      {/* Header */}
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          ← Tính lại
        </button>
        <h2>Lá Số Tử Vi</h2>
        <p className={styles.birthInfo}>
          Sinh ngày: {formatDate(birthChart.birthDate)}
        </p>
      </div>

      {/* Four Pillars */}
      <div className={styles.fourPillars}>
        <h3>Tứ Trụ (Bát Tự)</h3>
        <div className={styles.pillarsGrid}>
          <div className={styles.pillar}>
            <h4>Năm</h4>
            <div className={styles.canChi}>
              <span className={styles.can}>{birthChart.year.can}</span>
              <span className={styles.chi}>{birthChart.year.chi}</span>
            </div>
            <span 
              className={styles.element}
              style={{ color: getElementColor(birthChart.year.element) }}
            >
              {birthChart.year.element}
            </span>
          </div>
          
          <div className={styles.pillar}>
            <h4>Tháng</h4>
            <div className={styles.canChi}>
              <span className={styles.can}>{birthChart.month.can}</span>
              <span className={styles.chi}>{birthChart.month.chi}</span>
            </div>
            <span 
              className={styles.element}
              style={{ color: getElementColor(birthChart.month.element) }}
            >
              {birthChart.month.element}
            </span>
          </div>
          
          <div className={styles.pillar}>
            <h4>Ngày</h4>
            <div className={styles.canChi}>
              <span className={styles.can}>{birthChart.day.can}</span>
              <span className={styles.chi}>{birthChart.day.chi}</span>
            </div>
            <span 
              className={styles.element}
              style={{ color: getElementColor(birthChart.day.element) }}
            >
              {birthChart.day.element}
            </span>
          </div>
          
          <div className={styles.pillar}>
            <h4>Giờ</h4>
            <div className={styles.canChi}>
              <span className={styles.can}>{birthChart.hour.can}</span>
              <span className={styles.chi}>{birthChart.hour.chi}</span>
            </div>
            <span 
              className={styles.element}
              style={{ color: getElementColor(birthChart.hour.element) }}
            >
              {birthChart.hour.element}
            </span>
          </div>
        </div>
      </div>

      {/* Day Master */}
      <div className={styles.dayMaster}>
        <h3>Nhật Chủ</h3>
        <div className={styles.dayMasterInfo}>
          <span className={styles.dayMasterCan}>{birthChart.dayMaster}</span>
          <p>Nhật chủ là {birthChart.dayMaster}, đại diện cho bản thân và tính cách cốt lõi của bạn.</p>
        </div>
      </div>

      {/* Enhanced Summary */}
      <EnhancedSummary birthChart={birthChart} />

      {/* Quick Tips */}
      <QuickTips birthChart={birthChart} />

      {/* Element Analysis */}
      <div className={styles.elementAnalysis}>
        <h3>Phân Tích Ngũ Hành</h3>
        <div className={styles.elementGrid}>
          <div className={styles.elementSection}>
            <h4>Ngũ Hành Mạnh</h4>
            <div className={styles.elementList}>
              {birthChart.strongElements.map((element, index) => (
                <span 
                  key={index} 
                  className={styles.elementTag}
                  style={{ backgroundColor: getElementColor(element), color: 'white' }}
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
          
          <div className={styles.elementSection}>
            <h4>Ngũ Hành Yếu</h4>
            <div className={styles.elementList}>
              {birthChart.weakElements.map((element, index) => (
                <span 
                  key={index} 
                  className={styles.elementTag}
                  style={{ backgroundColor: '#f8f9fa', color: getElementColor(element), border: `2px solid ${getElementColor(element)}` }}
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.luckyElements}>
          <div className={styles.elementSection}>
            <h4>🍀 Ngũ Hành Tốt</h4>
            <div className={styles.elementList}>
              {birthChart.luckyElements.map((element, index) => (
                <span 
                  key={index} 
                  className={`${styles.elementTag} ${styles.lucky}`}
                  style={{ backgroundColor: getElementColor(element), color: 'white' }}
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
          
          <div className={styles.elementSection}>
            <h4>⚠️ Ngũ Hành Xấu</h4>
            <div className={styles.elementList}>
              {birthChart.unluckyElements.map((element, index) => (
                <span 
                  key={index} 
                  className={`${styles.elementTag} ${styles.unlucky}`}
                  style={{ backgroundColor: '#dc3545', color: 'white' }}
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Current Life Phase */}
      {birthChart.currentPhase && (
        <div className={styles.currentPhase}>
          <h3>Đại Vận Hiện Tại</h3>
          <div className={styles.phaseCard}>
            <div className={styles.phaseHeader}>
              <span className={styles.phaseCanChi}>
                {birthChart.currentPhase.can} {birthChart.currentPhase.chi}
              </span>
              <span className={styles.phaseAge}>
                Tuổi {birthChart.currentPhase.startAge} - {birthChart.currentPhase.endAge}
              </span>
              <span 
                className={styles.phaseFortune}
                style={{ color: getFortuneColor(birthChart.currentPhase.fortune) }}
              >
                {birthChart.currentPhase.fortune}
              </span>
            </div>
            <p className={styles.phaseDescription}>{birthChart.currentPhase.description}</p>
            <p className={styles.phaseAdvice}>{birthChart.currentPhase.advice}</p>
          </div>
        </div>
      )}

      {/* Personality Analysis */}
      <div className={styles.personality}>
        <h3>Phân Tích Tính Cách</h3>
        <div className={styles.personalityGrid}>
          <div className={styles.personalitySection}>
            <h4>🌟 Điểm Mạnh</h4>
            <ul>
              {birthChart.personality.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.personalitySection}>
            <h4>⚡ Điểm Yếu</h4>
            <ul>
              {birthChart.personality.weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.personalityDetails}>
          <div className={styles.detailSection}>
            <h4>💼 Nghề Nghiệp Phù Hợp</h4>
            <div className={styles.careerList}>
              {birthChart.personality.careerSuggestions.map((career, index) => (
                <span key={index} className={styles.careerTag}>{career}</span>
              ))}
            </div>
          </div>

          <div className={styles.detailSection}>
            <h4>❤️ Tình Cảm</h4>
            <p>{birthChart.personality.relationshipStyle}</p>
          </div>

          <div className={styles.detailSection}>
            <h4>💰 Tài Chính</h4>
            <p>{birthChart.personality.moneyManagement}</p>
          </div>

          <div className={styles.detailSection}>
            <h4>🏥 Sức Khỏe</h4>
            <div className={styles.healthList}>
              <span>Cần chú ý: </span>
              {birthChart.personality.healthTendencies.map((health, index) => (
                <span key={index} className={styles.healthTag}>{health}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Life Phases */}
      <div className={styles.lifePhases}>
        <h3>Đại Vận Cả Đời</h3>
        <div className={styles.phasesTimeline}>
          {birthChart.lifePhases.map((phase, index) => (
            <div 
              key={index} 
              className={`${styles.phaseItem} ${birthChart.currentPhase?.startAge === phase.startAge ? styles.current : ''}`}
            >
              <div className={styles.phaseTime}>
                <span className={styles.phaseAgeRange}>
                  {phase.startAge} - {phase.endAge} tuổi
                </span>
                <span className={styles.phaseCanChiSmall}>
                  {phase.can} {phase.chi}
                </span>
              </div>
              <div className={styles.phaseInfo}>
                <span 
                  className={styles.phaseFortuneSmall}
                  style={{ color: getFortuneColor(phase.fortune) }}
                >
                  {phase.fortune}
                </span>
                <span 
                  className={styles.phaseElementSmall}
                  style={{ color: getElementColor(phase.element) }}
                >
                  {phase.element}
                </span>
              </div>
              <p className={styles.phaseAdviceSmall}>{phase.advice}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compatibility */}
      <div className={styles.compatibility}>
        <h3>Hợp Tuổi</h3>
        <div className={styles.compatibilityGrid}>
          <div className={styles.compatibilitySection}>
            <h4>💕 Hợp Nhất</h4>
            <div className={styles.matchList}>
              {birthChart.compatibility.bestMatches.map((match, index) => (
                <span key={index} className={`${styles.matchTag} ${styles.bestMatch}`}>
                  {match}
                </span>
              ))}
            </div>
          </div>
          
          <div className={styles.compatibilitySection}>
            <h4>⚔️ Xung Khắc</h4>
            <div className={styles.matchList}>
              {birthChart.compatibility.challengingMatches.map((match, index) => (
                <span key={index} className={`${styles.matchTag} ${styles.challengingMatch}`}>
                  {match}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Analysis Toggle */}
      <div className={styles.enhancedToggle}>
        <button 
          onClick={() => setShowEnhancedAnalysis(!showEnhancedAnalysis)}
          className={styles.enhancedButton}
        >
          {showEnhancedAnalysis ? '📊 Ẩn phân tích chi tiết' : '✨ Xem phân tích nâng cao'}
        </button>
      </div>

      {/* Enhanced Analysis Section */}
      {showEnhancedAnalysis && (
        <div className={styles.enhancedSection}>
          <h3 className={styles.enhancedTitle}>📈 Phân Tích Nâng Cao</h3>
          <EnhancedAnalysis 
            birthChart={birthChart} 
            currentAge={currentAge || 25}
          />
        </div>
      )}

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.disclaimer}>
          ⚠️ Lưu ý: Tử vi chỉ mang tính chất tham khảo. Vận mệnh do chính bạn tạo ra bằng nỗ lực và hành động của mình.
        </p>
        <button onClick={onBack} className={styles.backButtonBottom}>
          Tính lá số khác
        </button>
      </div>
    </div>
  );
};

export default BirthChartResult;
