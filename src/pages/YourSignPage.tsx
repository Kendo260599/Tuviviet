import React, { useState, useEffect } from 'react';
import { ZodiacSign } from '../types';
import { ZodiacCard } from '../components/ZodiacCard/ZodiacCard';
import { DateInput } from '../components/DateInput/DateInput';
import { HoroscopeCard } from '../components/HoroscopeCard/HoroscopeCard';
import { getZodiacInfo, getAllZodiacSigns } from '../utils/zodiacUtils';
import { generateSampleHoroscope } from '../data/horoscopeData';
import { getUserSign, saveUserSign } from '../utils/localStorage';
import styles from './YourSignPage.module.css';

export const YourSignPage: React.FC = () => {
  const [userSign, setUserSign] = useState<ZodiacSign | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedSign = getUserSign();
    if (savedSign) {
      setUserSign(savedSign);
    }
    setIsLoading(false);
  }, []);

  const handleSignChange = (sign: ZodiacSign | null) => {
    setUserSign(sign);
    if (sign) {
      saveUserSign(sign);
    }
  };

  const zodiacInfo = userSign ? getZodiacInfo(userSign) : null;
  const allZodiacs = getAllZodiacSigns();
  const todayHoroscope = userSign ? generateSampleHoroscope(userSign, 'today') : null;
  const weekHoroscope = userSign ? generateSampleHoroscope(userSign, 'week') : null;

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Đang tải...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className="container">
        <header className={styles.header}>
          <h1>Cung Hoàng Đạo Của Bạn</h1>
          <p>Khám phá chi tiết về cung hoàng đạo và tử vi cá nhân</p>
        </header>

        {!userSign ? (
          <section className={styles.setupSection}>
            <div className={styles.setupCard}>
              <h2>Chọn cung hoàng đạo của bạn</h2>
              <p>Nhập ngày sinh để xác định cung hoàng đạo và xem tử vi cá nhân</p>
              
              <div className={styles.dateInputSection}>
                <DateInput onSignChange={handleSignChange} />
              </div>
              
              <div className={styles.orDivider}>
                <span>hoặc chọn trực tiếp</span>
              </div>
              
              <div className={styles.zodiacGrid}>
                {allZodiacs.map(zodiac => (
                  <ZodiacCard
                    key={zodiac.id}
                    zodiac={zodiac}
                    onClick={() => handleSignChange(zodiac.id)}
                    size="small"
                  />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <main className={styles.main}>
            <section className={styles.signInfo}>
              <div className={styles.signCard}>
                {zodiacInfo && (
                  <ZodiacCard zodiac={zodiacInfo} size="large" />
                )}
              </div>
              
              <div className={styles.signDetails}>
                <button 
                  className={styles.changeButton}
                  onClick={() => setUserSign(null)}
                >
                  Đổi cung hoàng đạo
                </button>
                
                {zodiacInfo && (
                  <div className={styles.detailsContent}>
                    <h3>Chi tiết về {zodiacInfo.name}</h3>
                    
                    <div className={styles.infoGrid}>
                      <div className={styles.infoItem}>
                        <strong>Yếu tố:</strong> {zodiacInfo.element}
                      </div>
                      <div className={styles.infoItem}>
                        <strong>Thời gian:</strong> {zodiacInfo.dateRange}
                      </div>
                      <div className={styles.infoItem}>
                        <strong>Ký hiệu:</strong> {zodiacInfo.symbol}
                      </div>
                    </div>
                    
                    <div className={styles.traits}>
                      <h4>Đặc điểm nổi bật:</h4>
                      <ul>
                        {zodiacInfo.traits.map((trait, index) => (
                          <li key={index}>{trait}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.lucky}>
                      <div className={styles.luckySection}>
                        <h4>Số may mắn:</h4>
                        <div className={styles.luckyNumbers}>
                          {zodiacInfo.luckyNumbers.map((num, index) => (
                            <span key={index} className={styles.luckyNumber}>
                              {num}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className={styles.luckySection}>
                        <h4>Màu may mắn:</h4>
                        <div className={styles.luckyColors}>
                          {zodiacInfo.luckyColors.map((color, index) => (
                            <span key={index} className={styles.luckyColor}>
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
            
            <section className={styles.horoscopeSection}>
              <h2>Tử Vi Của Bạn</h2>
              <div className={styles.horoscopeGrid}>
                {todayHoroscope && (
                  <HoroscopeCard horoscope={todayHoroscope} />
                )}
                {weekHoroscope && (
                  <HoroscopeCard horoscope={weekHoroscope} />
                )}
              </div>
            </section>
          </main>
        )}
      </div>
    </div>
  );
};
