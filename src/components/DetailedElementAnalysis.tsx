import React from 'react';
import { BirthChart } from '../data/canChiData';
import styles from './DetailedElementAnalysis.module.css';

interface DetailedElementAnalysisProps {
  birthChart: BirthChart;
}

const DetailedElementAnalysis: React.FC<DetailedElementAnalysisProps> = ({ birthChart }) => {
  const elementCycle = {
    'Mộc': { 
      generates: 'Hỏa', 
      destroys: 'Thổ', 
      generatedBy: 'Thủy', 
      destroyedBy: 'Kim',
      season: 'Xuân',
      direction: 'Đông',
      organ: 'Gan',
      emotion: 'Giận dữ',
      color: '#22c55e'
    },
    'Hỏa': { 
      generates: 'Thổ', 
      destroys: 'Kim', 
      generatedBy: 'Mộc', 
      destroyedBy: 'Thủy',
      season: 'Hè',
      direction: 'Nam',
      organ: 'Tim',
      emotion: 'Vui vẻ',
      color: '#ef4444'
    },
    'Thổ': { 
      generates: 'Kim', 
      destroys: 'Thủy', 
      generatedBy: 'Hỏa', 
      destroyedBy: 'Mộc',
      season: 'Cuối mùa',
      direction: 'Trung',
      organ: 'Lách',
      emotion: 'Lo lắng',
      color: '#f59e0b'
    },
    'Kim': { 
      generates: 'Thủy', 
      destroys: 'Mộc', 
      generatedBy: 'Thổ', 
      destroyedBy: 'Hỏa',
      season: 'Thu',
      direction: 'Tây',
      organ: 'Phổi',
      emotion: 'Buồn bã',
      color: '#6b7280'
    },
    'Thủy': { 
      generates: 'Mộc', 
      destroys: 'Hỏa', 
      generatedBy: 'Kim', 
      destroyedBy: 'Thổ',
      season: 'Đông',
      direction: 'Bắc',
      organ: 'Thận',
      emotion: 'Sợ hãi',
      color: '#3b82f6'
    }
  };

  const getElementStrength = () => {
    const elements = [birthChart.year.element, birthChart.month.element, birthChart.day.element, birthChart.hour.element];
    const elementCount: Record<string, number> = {};
    
    elements.forEach(element => {
      elementCount[element] = (elementCount[element] || 0) + 1;
    });

    return Object.entries(elementCount)
      .sort(([,a], [,b]) => b - a)
      .map(([element, count]) => ({ element, count, percentage: (count / 4) * 100 }));
  };

  const elementStrength = getElementStrength();
  const dominantElement = elementStrength[0].element;
  const weakestElement = elementStrength[elementStrength.length - 1].element;

  return (
    <div className={styles.detailedAnalysis}>
      <h3 className={styles.title}>🌟 Phân Tích Ngũ Hành Chi Tiết</h3>
      
      {/* Element Strength Chart */}
      <div className={styles.strengthChart}>
        <h4>📊 Biểu Đồ Sức Mạnh Ngũ Hành</h4>
        <div className={styles.chartContainer}>
          {elementStrength.map(({ element, count, percentage }) => (
            <div key={element} className={styles.elementBar}>
              <div className={styles.elementLabel}>
                <span style={{ color: elementCycle[element as keyof typeof elementCycle]?.color }}>
                  {element}
                </span>
                <span className={styles.count}>({count}/4)</span>
              </div>
              <div className={styles.barTrack}>
                <div 
                  className={styles.barFill}
                  style={{ 
                    width: `${percentage}%`,
                    backgroundColor: elementCycle[element as keyof typeof elementCycle]?.color
                  }}
                />
              </div>
              <span className={styles.percentage}>{percentage.toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cycle Analysis */}
      <div className={styles.cycleAnalysis}>
        <h4>🔄 Phân Tích Chu Kỳ Tương Sinh Tương Khắc</h4>
        <div className={styles.cycleGrid}>
          <div className={styles.cycleCard}>
            <h5>🌟 Ngũ Hành Mạnh Nhất</h5>
            <div 
              className={styles.dominantElement}
              style={{ borderColor: elementCycle[dominantElement as keyof typeof elementCycle]?.color }}
            >
              <span className={styles.elementName}>{dominantElement}</span>
              <div className={styles.elementDetails}>
                <p><strong>Mùa:</strong> {elementCycle[dominantElement as keyof typeof elementCycle]?.season}</p>
                <p><strong>Hướng:</strong> {elementCycle[dominantElement as keyof typeof elementCycle]?.direction}</p>
                <p><strong>Cơ quan:</strong> {elementCycle[dominantElement as keyof typeof elementCycle]?.organ}</p>
              </div>
            </div>
          </div>

          <div className={styles.cycleCard}>
            <h5>⚡ Chu Kỳ Tương Sinh</h5>
            <div className={styles.generativeChain}>
              {Object.entries(elementCycle).map(([element, data]) => (
                <div key={element} className={styles.generativeLink}>
                  <span style={{ color: data.color }}>{element}</span>
                  <span className={styles.arrow}>→</span>
                  <span style={{ color: elementCycle[data.generates as keyof typeof elementCycle]?.color }}>
                    {data.generates}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cycleCard}>
            <h5>💥 Chu Kỳ Tương Khắc</h5>
            <div className={styles.destructiveChain}>
              {Object.entries(elementCycle).map(([element, data]) => (
                <div key={element} className={styles.destructiveLink}>
                  <span style={{ color: data.color }}>{element}</span>
                  <span className={styles.destroyArrow}>⚔️</span>
                  <span style={{ color: elementCycle[data.destroys as keyof typeof elementCycle]?.color }}>
                    {data.destroys}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Health & Emotional Analysis */}
      <div className={styles.healthAnalysis}>
        <h4>🏥 Phân Tích Sức Khỏe & Cảm Xúc</h4>
        <div className={styles.healthGrid}>
          {elementStrength.map(({ element, percentage }) => {
            const data = elementCycle[element as keyof typeof elementCycle];
            return (
              <div key={element} className={styles.healthCard}>
                <div className={styles.healthHeader} style={{ backgroundColor: data?.color }}>
                  <span>{element}</span>
                  <span>{percentage.toFixed(0)}%</span>
                </div>
                <div className={styles.healthContent}>
                  <p><strong>Cơ quan liên quan:</strong> {data?.organ}</p>
                  <p><strong>Cảm xúc:</strong> {data?.emotion}</p>
                  <div className={styles.healthRecommendation}>
                    {percentage > 50 ? (
                      <span className={styles.strong}>🟢 Mạnh - Cần điều hòa</span>
                    ) : percentage > 25 ? (
                      <span className={styles.balanced}>🟡 Cân bằng - Tốt</span>
                    ) : (
                      <span className={styles.weak}>🔴 Yếu - Cần bổ sung</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className={styles.recommendations}>
        <h4>💡 Lời Khuyên Cân Bằng Ngũ Hành</h4>
        <div className={styles.recommendationGrid}>
          <div className={styles.recommendationCard}>
            <h5>🍃 Tăng Cường Ngũ Hành Yếu</h5>
            <p>Ngũ hành <strong>{weakestElement}</strong> cần được bổ sung:</p>
            <ul>
              <li>Màu sắc: Sử dụng màu {elementCycle[weakestElement as keyof typeof elementCycle]?.color}</li>
              <li>Hướng: Hướng về phía {elementCycle[weakestElement as keyof typeof elementCycle]?.direction}</li>
              <li>Thời gian: Tập trung vào mùa {elementCycle[weakestElement as keyof typeof elementCycle]?.season}</li>
            </ul>
          </div>

          <div className={styles.recommendationCard}>
            <h5>⚖️ Điều Hòa Ngũ Hành Mạnh</h5>
            <p>Ngũ hành <strong>{dominantElement}</strong> cần được điều hòa:</p>
            <ul>
              <li>Tránh thái quá trong cảm xúc {elementCycle[dominantElement as keyof typeof elementCycle]?.emotion.toLowerCase()}</li>
              <li>Chú ý sức khỏe {elementCycle[dominantElement as keyof typeof elementCycle]?.organ}</li>
              <li>Cân bằng bằng ngũ hành {elementCycle[dominantElement as keyof typeof elementCycle]?.destroyedBy}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedElementAnalysis;
