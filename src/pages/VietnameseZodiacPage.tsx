import React, { useState, useEffect } from 'react';
import { VietnameseZodiacSign } from '../types';
import { VietnameseZodiacInput } from '../components/VietnameseZodiacInput/VietnameseZodiacInput';
import { VietnameseZodiacCard } from '../components/VietnameseZodiacCard/VietnameseZodiacCard';
import { vietnameseZodiacSigns } from '../data/vietnameseZodiacData';
import { getCurrentVietnameseZodiac } from '../utils/vietnameseZodiacUtils';
import styles from './VietnameseZodiacPage.module.css';

export const VietnameseZodiacPage: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<VietnameseZodiacSign | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load current year's zodiac on mount
  useEffect(() => {
    const current = getCurrentVietnameseZodiac();
    setSelectedSign(current.sign);
    setSelectedYear(current.year);
    setIsLoading(false);
  }, []);

  const handleSignSelect = (sign: VietnameseZodiacSign | null, year: number | null) => {
    setSelectedSign(sign);
    setSelectedYear(year);
  };

  const selectedZodiacInfo = selectedSign ? vietnameseZodiacSigns[selectedSign] : null;
  const currentZodiac = getCurrentVietnameseZodiac();

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}>🐉</div>
        <p>Đang tải tử vi Việt Nam...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            🏮 Tử Vi Việt Nam - 12 Con Giáp 
          </h1>
          <p className={styles.subtitle}>
            Khám phá vận mệnh qua hệ thống tử vi truyền thống Việt Nam với 12 con giáp và ngũ hành phong thủy
          </p>
          
          <div className={styles.currentYearInfo}>
            <h2 className={styles.currentYearTitle}>
              Năm {currentZodiac.year} - {currentZodiac.name}
            </h2>
            <div className={styles.currentYearSymbol}>
              {vietnameseZodiacSigns[currentZodiac.sign].symbol}
            </div>
          </div>
        </div>
      </section>

      {/* Input Section */}
      <section className={styles.inputSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Tra Cứu Tử Vi</h2>
          <p className={styles.sectionDescription}>
            Nhập năm sinh để xem thông tin chi tiết về con giáp và vận mệnh của bạn
          </p>
        </div>
        
        <VietnameseZodiacInput
          onSignChange={handleSignSelect}
          initialYear={selectedYear || undefined}
          className={styles.zodiacInput}
        />
      </section>

      {/* Result Section */}
      {selectedZodiacInfo && (
        <section className={styles.resultSection}>
          <VietnameseZodiacCard 
            zodiacInfo={selectedZodiacInfo}
            year={selectedYear || undefined}
            className={styles.zodiacCard}
          />
        </section>
      )}

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>Về Hệ Thống Tử Vi Việt Nam</h2>
          
          <div className={styles.aboutGrid}>
            <div className={styles.aboutItem}>
              <div className={styles.aboutIcon}>🐭</div>
              <h3>12 Con Giáp</h3>
              <p>Hệ thống 12 con vật theo chu kỳ 12 năm: Tý, Sửu, Dần, Mão, Thìn, Tị, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi</p>
            </div>
            
            <div className={styles.aboutItem}>
              <div className={styles.aboutIcon}>⚡</div>
              <h3>Ngũ Hành</h3>
              <p>Kim, Mộc, Thủy, Hỏa, Thổ - năm yếu tố cơ bản tạo nên vận mệnh và tính cách con người</p>
            </div>
            
            <div className={styles.aboutItem}>
              <div className={styles.aboutIcon}>🧭</div>
              <h3>Phong Thủy</h3>
              <p>Phương vị, số học và màu sắc may mắn dựa trên các nguyên lý phong thủy cổ truyền</p>
            </div>
            
            <div className={styles.aboutItem}>
              <div className={styles.aboutIcon}>🌟</div>
              <h3>Vận Mệnh</h3>
              <p>Dự đoán tính cách, tài lộc, tình duyên và sức khỏe dựa trên năm sinh và con giáp</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Signs Overview */}
      <section className={styles.allSignsSection}>
        <h2 className={styles.sectionTitle}>Tổng Quan 12 Con Giáp</h2>
        
        <div className={styles.signsGrid}>
          {(Object.entries(vietnameseZodiacSigns) as [VietnameseZodiacSign, typeof vietnameseZodiacSigns[VietnameseZodiacSign]][]).map(([signId, info]) => (
            <button
              key={signId}
              onClick={() => {
                setSelectedSign(signId);
                setSelectedYear(getCurrentVietnameseZodiac().year);
              }}
              className={`${styles.signCard} ${selectedSign === signId ? styles.active : ''}`}
            >
              <div className={styles.signSymbol}>{info.symbol}</div>
              <div className={styles.signInfo}>
                <div className={styles.signName}>{info.name}</div>
                <div className={styles.signAnimal}>{info.animalName}</div>
                <div className={styles.signElement} style={{ color: getElementColor(info.element) }}>
                  {info.element}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

// Helper function to get element colors
function getElementColor(element: string): string {
  const colorMap: Record<string, string> = {
    'Kim': '#FFD700',
    'Mộc': '#32CD32',
    'Thủy': '#1E90FF', 
    'Hỏa': '#FF4500',
    'Thổ': '#D2B48C'
  };
  return colorMap[element] || '#666';
}
