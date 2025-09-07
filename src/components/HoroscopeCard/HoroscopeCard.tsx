import React from 'react';
import { HoroscopeEntry } from '../../types';
import { formatStars, getRatingColor, formatDisplayDate } from '../../utils/helpers.ts';
import styles from './HoroscopeCard.module.css';

interface HoroscopeCardProps {
  horoscope: HoroscopeEntry;
  className?: string;
  showDate?: boolean;
}

export const HoroscopeCard: React.FC<HoroscopeCardProps> = ({
  horoscope,
  className = '',
  showDate = true
}) => {
  const periodLabels = {
    today: 'Hôm nay',
    week: 'Tuần này', 
    month: 'Tháng này'
  };

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        <div className={styles.period}>
          {periodLabels[horoscope.period]}
        </div>
        {showDate && (
          <div className={styles.date}>
            {formatDisplayDate(horoscope.date)}
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.icon}>🌟</span>
            Tổng quan
          </h3>
          <p className={styles.text}>{horoscope.general}</p>
          <div className={styles.rating}>
            <span 
              className={styles.ratingStars}
              style={{ color: getRatingColor(horoscope.rating.general) }}
            >
              {formatStars(horoscope.rating.general)}
            </span>
            <span className={styles.ratingScore}>
              {horoscope.rating.general}/10
            </span>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.icon}>💝</span>
            Tình yêu
          </h3>
          <p className={styles.text}>{horoscope.love}</p>
          <div className={styles.rating}>
            <span 
              className={styles.ratingStars}
              style={{ color: getRatingColor(horoscope.rating.love) }}
            >
              {formatStars(horoscope.rating.love)}
            </span>
            <span className={styles.ratingScore}>
              {horoscope.rating.love}/10
            </span>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.icon}>💼</span>
            Sự nghiệp
          </h3>
          <p className={styles.text}>{horoscope.career}</p>
          <div className={styles.rating}>
            <span 
              className={styles.ratingStars}
              style={{ color: getRatingColor(horoscope.rating.career) }}
            >
              {formatStars(horoscope.rating.career)}
            </span>
            <span className={styles.ratingScore}>
              {horoscope.rating.career}/10
            </span>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.icon}>💚</span>
            Sức khỏe
          </h3>
          <p className={styles.text}>{horoscope.health}</p>
          <div className={styles.rating}>
            <span 
              className={styles.ratingStars}
              style={{ color: getRatingColor(horoscope.rating.health) }}
            >
              {formatStars(horoscope.rating.health)}
            </span>
            <span className={styles.ratingScore}>
              {horoscope.rating.health}/10
            </span>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.icon}>💰</span>
            Tài chính
          </h3>
          <p className={styles.text}>{horoscope.finance}</p>
          <div className={styles.rating}>
            <span 
              className={styles.ratingStars}
              style={{ color: getRatingColor(horoscope.rating.finance) }}
            >
              {formatStars(horoscope.rating.finance)}
            </span>
            <span className={styles.ratingScore}>
              {horoscope.rating.finance}/10
            </span>
          </div>
        </div>
      </div>

      <div className={styles.lucky}>
        <h3 className={styles.luckyTitle}>May mắn {periodLabels[horoscope.period].toLowerCase()}</h3>
        <div className={styles.luckyGrid}>
          <div className={styles.luckyItem}>
            <span className={styles.luckyLabel}>Số may mắn:</span>
            <span className={styles.luckyValue}>{horoscope.lucky.number}</span>
          </div>
          <div className={styles.luckyItem}>
            <span className={styles.luckyLabel}>Màu may mắn:</span>
            <span className={styles.luckyValue}>{horoscope.lucky.color}</span>
          </div>
          <div className={styles.luckyItem}>
            <span className={styles.luckyLabel}>Thời gian tốt:</span>
            <span className={styles.luckyValue}>{horoscope.lucky.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
