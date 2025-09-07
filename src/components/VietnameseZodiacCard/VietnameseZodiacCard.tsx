import React from 'react';
import { VietnameseZodiacInfo } from '../../types';
import { calculateElementCompatibility } from '../../utils/vietnameseZodiacUtils';
import { shareContent } from '../../utils/shareUtils';
import styles from './VietnameseZodiacCard.module.css';

interface VietnameseZodiacCardProps {
  zodiacInfo: VietnameseZodiacInfo;
  year?: number;
  className?: string;
}

export const VietnameseZodiacCard: React.FC<VietnameseZodiacCardProps> = ({
  zodiacInfo,
  year,
  className = ''
}) => {
  const handleShare = async () => {
    const shareData = {
      title: `Tử vi ${zodiacInfo.name} - ${zodiacInfo.animalName}`,
      text: `Tôi là tuổi ${zodiacInfo.name} (${zodiacInfo.animalName})${year ? ` sinh năm ${year}` : ''}. ${zodiacInfo.description}`,
      url: window.location.href
    };
    
    await shareContent(shareData);
  };

  const getElementColor = (element: string): string => {
    const colorMap: Record<string, string> = {
      'Kim': '#FFD700', // Gold
      'Mộc': '#32CD32', // LimeGreen  
      'Thủy': '#1E90FF', // DodgerBlue
      'Hỏa': '#FF4500', // OrangeRed
      'Thổ': '#D2B48C'  // Tan
    };
    return colorMap[element] || '#666';
  };

  const getDirectionIcon = (direction: string): string => {
    const iconMap: Record<string, string> = {
      'Chính Bắc': '⬆️',
      'Đông Bắc': '↗️', 
      'Chánh Đông': '➡️',
      'Đông Nam': '↘️',
      'Chính Nam': '⬇️',
      'Tây Nam': '↙️',
      'Chánh Tây': '⬅️',
      'Tây Bắc': '↖️'
    };
    return iconMap[direction] || '🧭';
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.animalSymbol}>{zodiacInfo.symbol}</div>
          <div className={styles.titleInfo}>
            <h2 className={styles.title}>
              {zodiacInfo.name} - {zodiacInfo.animalName}
            </h2>
            {year && (
              <div className={styles.yearInfo}>Sinh năm {year}</div>
            )}
            <div className={styles.englishName}>{zodiacInfo.englishName}</div>
          </div>
        </div>
        
        <button onClick={handleShare} className={styles.shareButton} type="button">
          📱 Chia sẻ
        </button>
      </div>

      {/* Main Info */}
      <div className={styles.mainInfo}>
        <div className={styles.elementSection}>
          <div className={styles.element} style={{ color: getElementColor(zodiacInfo.element) }}>
            <span className={styles.elementLabel}>Ngũ hành chính:</span>
            <span className={styles.elementValue}>{zodiacInfo.element}</span>
          </div>
          
          {zodiacInfo.secondaryElement && (
            <div className={styles.secondaryElement}>
              <span className={styles.elementLabel}>Quan hệ ngũ hành:</span>
              <span className={styles.elementValue}>{zodiacInfo.elementRelation}</span>
            </div>
          )}
        </div>

        <div className={styles.positionSection}>
          <div className={styles.direction}>
            <span className={styles.directionIcon}>{getDirectionIcon(zodiacInfo.direction)}</span>
            <span className={styles.directionLabel}>Phương vị:</span>
            <span className={styles.directionValue}>{zodiacInfo.direction}</span>
          </div>
          
          <div className={styles.number}>
            <span className={styles.numberLabel}>Số thứ tự:</span>
            <span className={styles.numberValue}>{zodiacInfo.number} {zodiacInfo.sign}</span>
          </div>

          {zodiacInfo.position && (
            <div className={styles.specialPosition}>
              <span className={styles.positionLabel}>Vị trí đặc biệt:</span>
              <span className={styles.positionValue}>{zodiacInfo.position}</span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className={styles.description}>
        <p>{zodiacInfo.description}</p>
      </div>

      {/* Traits */}
      <div className={styles.traits}>
        <h3 className={styles.sectionTitle}>Đặc điểm tính cách</h3>
        <div className={styles.traitsList}>
          {zodiacInfo.traits.map((trait, index) => (
            <span key={index} className={styles.trait}>
              ✨ {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Lucky Info */}
      <div className={styles.luckySection}>
        <div className={styles.luckyItem}>
          <h4 className={styles.luckyTitle}>🍀 Số may mắn</h4>
          <div className={styles.luckyNumbers}>
            {zodiacInfo.luckyNumbers.map(num => (
              <span key={num} className={styles.luckyNumber}>{num}</span>
            ))}
          </div>
        </div>

        <div className={styles.luckyItem}>
          <h4 className={styles.luckyTitle}>🌈 Màu may mắn</h4>
          <div className={styles.luckyColors}>
            {zodiacInfo.luckyColors.map(color => (
              <span key={color} className={styles.luckyColor}>{color}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Unlucky Info */}
      {(zodiacInfo.unluckyNumbers || zodiacInfo.unluckyColors) && (
        <div className={styles.unluckySection}>
          {zodiacInfo.unluckyNumbers && (
            <div className={styles.unluckyItem}>
              <h4 className={styles.unluckyTitle}>⚠️ Số nên tránh</h4>
              <div className={styles.unluckyNumbers}>
                {zodiacInfo.unluckyNumbers.map(num => (
                  <span key={num} className={styles.unluckyNumber}>{num}</span>
                ))}
              </div>
            </div>
          )}

          {zodiacInfo.unluckyColors && (
            <div className={styles.unluckyItem}>
              <h4 className={styles.unluckyTitle}>🚫 Màu nên tránh</h4>
              <div className={styles.unluckyColors}>
                {zodiacInfo.unluckyColors.map(color => (
                  <span key={color} className={styles.unluckyColor}>{color}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Element Compatibility */}
      <div className={styles.compatibility}>
        <h3 className={styles.sectionTitle}>Tương hợp ngũ hành</h3>
        <div className={styles.compatibilityGrid}>
          {['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'].map(element => {
            const compatibility = calculateElementCompatibility(zodiacInfo.element, element);
            return (
              <div key={element} className={`${styles.compatibilityItem} ${styles[compatibility.relationship]}`}>
                <div className={styles.compatibilityElement} style={{ color: getElementColor(element) }}>
                  {element}
                </div>
                <div className={styles.compatibilityStatus}>
                  {compatibility.relationship === 'same' && '🤝'}
                  {compatibility.relationship === 'generates' && '💪'}
                  {compatibility.relationship === 'destroys' && '⚡'}
                  {compatibility.relationship === 'neutral' && '😐'}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.compatibilityLegend}>
          <span>🤝 Cùng hành</span>
          <span>💪 Tương sinh</span>  
          <span>⚡ Tương khắc</span>
          <span>😐 Trung tính</span>
        </div>
      </div>
    </div>
  );
};
