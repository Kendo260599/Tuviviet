import React from 'react';
import { LifePhase } from '../data/canChiData';
import styles from './LifePhasesAnalysis.module.css';

interface LifePhasesAnalysisProps {
  lifePhases: LifePhase[];
  currentAge?: number;
}

const LifePhasesAnalysis: React.FC<LifePhasesAnalysisProps> = ({ 
  lifePhases, 
  currentAge = 25 
}) => {
  const getCurrentPhase = () => {
    return lifePhases.find(phase => 
      currentAge >= phase.startAge && currentAge <= phase.endAge
    );
  };

  const currentPhase = getCurrentPhase();

  const getPhaseStatusClass = (phase: LifePhase) => {
    if (currentAge < phase.startAge) return styles.futurePhase;
    if (currentAge >= phase.startAge && currentAge <= phase.endAge) return styles.currentPhase;
    return styles.pastPhase;
  };

  const getFortuneClass = (fortune: string) => {
    switch (fortune) {
      case 'Tốt': return styles.goodFortune;
      case 'Trung bình': return styles.averageFortune;
      case 'Khó khăn': return styles.difficultFortune;
      default: return styles.averageFortune;
    }
  };

  return (
    <div className={styles.lifePhasesContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <span className={styles.icon}>🔮</span>
          Đại Vận Tử Vi (Các Giai Đoạn Cuộc Đời)
        </h3>
        {currentPhase && (
          <div className={styles.currentPhaseInfo}>
            <p className={styles.currentAgeText}>
              Tuổi hiện tại: <strong>{currentAge}</strong>
            </p>
            <p className={styles.currentPhaseText}>
              Đang trong đại vận: <strong>{currentPhase.can} {currentPhase.chi}</strong>
            </p>
          </div>
        )}
      </div>

      <div className={styles.phasesTimeline}>
        {lifePhases.map((phase, index) => (
          <div 
            key={`${phase.can}-${phase.chi}-${index}`}
            className={`${styles.phaseCard} ${getPhaseStatusClass(phase)}`}
          >
            <div className={styles.phaseHeader}>
              <div className={styles.phaseTitle}>
                <h4>{phase.can} {phase.chi}</h4>
                <span className={styles.ageRange}>
                  {phase.startAge} - {phase.endAge} tuổi
                </span>
              </div>
              <div className={`${styles.fortuneTag} ${getFortuneClass(phase.fortune)}`}>
                {phase.fortune}
              </div>
            </div>

            <div className={styles.phaseContent}>
              <div className={styles.elementInfo}>
                <span className={styles.elementLabel}>Ngũ hành:</span>
                <span className={`${styles.elementValue} ${styles[phase.element.toLowerCase()]}`}>
                  {phase.element}
                </span>
              </div>

              <p className={styles.description}>
                <strong>Đặc điểm:</strong> {phase.description}
              </p>

              <div className={styles.advice}>
                <strong>Lời khuyên:</strong>
                <p>{phase.advice}</p>
              </div>
            </div>

            {currentAge >= phase.startAge && currentAge <= phase.endAge && (
              <div className={styles.currentIndicator}>
                <span className={styles.currentBadge}>Đang diễn ra</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {currentPhase && (
        <div className={styles.currentPhaseDetail}>
          <h4>🎯 Phân Tích Đại Vận Hiện Tại</h4>
          <div className={styles.currentPhaseContent}>
            <div className={styles.phaseHighlight}>
              <h5>{currentPhase.can} {currentPhase.chi} - Ngũ hành {currentPhase.element}</h5>
              <p className={`${styles.fortuneStatus} ${getFortuneClass(currentPhase.fortune)}`}>
                Vận số: {currentPhase.fortune}
              </p>
            </div>
            
            <div className={styles.detailedAdvice}>
              <p><strong>Mô tả giai đoạn:</strong> {currentPhase.description}</p>
              <p><strong>Hướng dẫn hành động:</strong> {currentPhase.advice}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifePhasesAnalysis;
