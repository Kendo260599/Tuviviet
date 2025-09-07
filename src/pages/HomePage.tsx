import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ZodiacSign } from '../types';
import { DateInput } from '../components/DateInput/DateInput';
import { ZodiacCard } from '../components/ZodiacCard/ZodiacCard';
import { HoroscopeCard } from '../components/HoroscopeCard/HoroscopeCard';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { getZodiacInfo, getAllZodiacSigns } from '../utils/zodiacUtils';
import { generateSampleHoroscope } from '../data/horoscopeData';
import { getUserSign, saveUserSign } from '../utils/localStorage';
import { shareContent, createHoroscopeShareData } from '../utils/shareUtils';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [horoscopePeriod, setHoroscopePeriod] = useState<'today' | 'week' | 'month'>('today');
  const [isLoading, setIsLoading] = useState(true);

  // Load saved user sign on mount
  useEffect(() => {
    const savedSign = getUserSign();
    if (savedSign) {
      setSelectedSign(savedSign);
    }
    setIsLoading(false);
  }, []);

  const handleSignSelect = (sign: ZodiacSign | null) => {
    setSelectedSign(sign);
    if (sign) {
      saveUserSign(sign);
    }
  };

  const handleShare = async () => {
    if (!selectedSign) return;
    
    const zodiacInfo = getZodiacInfo(selectedSign);
    const baseUrl = window.location.origin + window.location.pathname;
    const shareData = createHoroscopeShareData(zodiacInfo.name, baseUrl);
    
    const success = await shareContent(shareData);
    if (success) {
      // Could show a toast notification here
      console.log('Shared successfully');
    }
  };

  const selectedZodiacInfo = selectedSign ? getZodiacInfo(selectedSign) : null;
  const horoscope = selectedSign ? generateSampleHoroscope(selectedSign, horoscopePeriod) : null;
  const allZodiacs = getAllZodiacSigns();

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
      <header className={styles.header}>
        <div className="container">
          <div className={styles.hero}>
            <h1 className={styles.title}>
              Tử Vi Việt
              <span className={styles.subtitle}>Khám phá vận mệnh của bạn</span>
            </h1>
            <p className={styles.description}>
              Xem tử vi hàng ngày miễn phí cho 12 cung hoàng đạo. Khám phá tình yêu, sự nghiệp, sức khỏe và tài chính.
            </p>
          </div>
        </div>
      </header>

      {/* Zodiac System Selection */}
      <section className={styles.systemSelection}>
        <div className="container">
          <h2 className={styles.systemTitle}>Chọn hệ thống tử vi</h2>
          <p className={styles.systemDescription}>
            Khám phá vận mệnh qua hai hệ thống tử vi truyền thống
          </p>
          
          <div className={styles.systemGrid}>
            <div className={styles.systemCard}>
              <div className={styles.systemIcon}>⭐</div>
              <h3 className={styles.systemName}>Tử Vi Phương Tây</h3>
              <p className={styles.systemInfo}>
                12 cung hoàng đạo theo ngày sinh. Xem tử vi hàng ngày, tuần, tháng với dự báo chi tiết về tình yêu, sự nghiệp, sức khỏe.
              </p>
              <div className={styles.systemFeatures}>
                <span>📅 Theo ngày sinh</span>
                <span>🔮 Tử vi hàng ngày</span>
                <span>💝 Tương hợp cung</span>
              </div>
            </div>

            <Link to="/birth-chart" className={styles.systemCard}>
              <div className={styles.systemIcon}>🔮</div>
              <h3 className={styles.systemName}>Lá Số Tử Vi</h3>
              <p className={styles.systemInfo}>
                Tử vi truyền thống Việt Nam theo Tứ Trụ (Bát Tự). Phân tích chi tiết tính cách, vận mệnh, Đại vận cả đời.
              </p>
              <div className={styles.systemFeatures}>
                <span>⏰ Theo giờ sinh chính xác</span>
                <span>🎯 Phân tích Tứ Trụ</span>
                <span>💫 Đại vận cả đời</span>
              </div>
              <div className={styles.systemAction}>
                Tính lá số tử vi →
              </div>
            </Link>
            
            <Link to="/vietnamese-zodiac" className={styles.systemCard}>
              <div className={styles.systemIcon}>🐉</div>
              <h3 className={styles.systemName}>Tử Vi Việt Nam</h3>
              <p className={styles.systemInfo}>
                12 con giáp theo năm sinh. Ngũ hành phong thủy, vận mệnh, tính cách dựa trên truyền thống Á Đông.
              </p>
              <div className={styles.systemFeatures}>
                <span>🗓️ Theo năm sinh</span>
                <span>⚡ Ngũ hành phong thủy</span>
                <span>🧭 Phương vị may mắn</span>
              </div>
              <div className={styles.systemAction}>
                Khám phá tử vi Việt Nam →
              </div>
            </Link>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className="container">
          {!selectedSign ? (
            <section className={styles.signSelection}>
              <div className={styles.selectionHeader}>
                <h2>Chọn cung hoàng đạo của bạn</h2>
                <p>Nhập ngày sinh hoặc tìm kiếm cung hoàng đạo</p>
              </div>

              <div className={styles.inputSection}>
                <div className={styles.dateInputWrapper}>
                  <h3>Nhập ngày sinh</h3>
                  <DateInput onSignChange={handleSignSelect} />
                </div>

                <div className={styles.divider}>
                  <span>hoặc</span>
                </div>

                <div className={styles.searchWrapper}>
                  <h3>Tìm kiếm nhanh</h3>
                  <SearchBox onSignSelect={handleSignSelect} />
                </div>
              </div>

              <div className={styles.zodiacGrid}>
                <h3>Tất cả cung hoàng đạo</h3>
                <div className={styles.grid}>
                  {allZodiacs.map(zodiac => (
                    <ZodiacCard
                      key={zodiac.id}
                      zodiac={zodiac}
                      onClick={() => handleSignSelect(zodiac.id)}
                      size="medium"
                    />
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className={styles.horoscopeSection}>
              <div className={styles.selectedSign}>
                {selectedZodiacInfo && (
                  <ZodiacCard zodiac={selectedZodiacInfo} size="large" />
                )}
                
                <div className={styles.actions}>
                  <button 
                    className={styles.changeSignButton}
                    onClick={() => handleSignSelect(null)}
                  >
                    Đổi cung hoàng đạo
                  </button>
                  <button 
                    className={styles.shareButton}
                    onClick={handleShare}
                  >
                    <span className={styles.shareIcon}>📤</span>
                    Chia sẻ
                  </button>
                </div>
              </div>

              <div className={styles.periodSelector}>
                <h3>Chọn khoảng thời gian</h3>
                <div className={styles.periodButtons}>
                  {[
                    { key: 'today' as const, label: 'Hôm nay' },
                    { key: 'week' as const, label: 'Tuần này' },
                    { key: 'month' as const, label: 'Tháng này' }
                  ].map(period => (
                    <button
                      key={period.key}
                      className={`${styles.periodButton} ${
                        horoscopePeriod === period.key ? styles.active : ''
                      }`}
                      onClick={() => setHoroscopePeriod(period.key)}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              </div>

              {horoscope && (
                <HoroscopeCard horoscope={horoscope} />
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  );
};
