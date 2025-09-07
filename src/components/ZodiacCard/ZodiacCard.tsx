import React from 'react';
import { ZodiacInfo } from '../../types';
import { getElementGradient } from '../../utils/helpers.ts';
import styles from './ZodiacCard.module.css';

interface ZodiacCardProps {
  zodiac: ZodiacInfo;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const ZodiacCard: React.FC<ZodiacCardProps> = ({
  zodiac,
  onClick,
  className = '',
  size = 'medium'
}) => {
  const cardClass = `${styles.card} ${styles[size]} ${className}`;
  
  return (
    <div 
      className={cardClass}
      onClick={onClick}
      style={{ 
        background: getElementGradient(zodiac.element),
        cursor: onClick ? 'pointer' : 'default'
      }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <div className={styles.header}>
        <div className={styles.symbol}>{zodiac.symbol}</div>
        <div className={styles.element}>{zodiac.element}</div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{zodiac.name}</h3>
        <p className={styles.englishName}>{zodiac.englishName}</p>
        <p className={styles.dateRange}>{zodiac.dateRange}</p>
      </div>
      
      {size !== 'small' && (
        <div className={styles.description}>
          <p>{zodiac.description}</p>
        </div>
      )}
      
      {size === 'large' && (
        <div className={styles.details}>
          <div className={styles.traits}>
            <h4>Đặc điểm:</h4>
            <ul>
              {zodiac.traits.slice(0, 3).map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.lucky}>
            <div className={styles.luckyItem}>
              <strong>Số may mắn:</strong> {zodiac.luckyNumbers.slice(0, 3).join(', ')}
            </div>
            <div className={styles.luckyItem}>
              <strong>Màu may mắn:</strong> {zodiac.luckyColors.slice(0, 2).join(', ')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
