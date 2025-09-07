import React, { useState } from 'react';
import { ZodiacSign } from '../types';
import { ZodiacCard } from '../components/ZodiacCard/ZodiacCard';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { getAllZodiacSigns, getZodiacInfo } from '../utils/zodiacUtils';
import { findCompatibility, getMostCompatibleSigns } from '../data/compatibilityData';
import styles from './CompatibilityPage.module.css';

export const CompatibilityPage: React.FC = () => {
  const [selectedSign1, setSelectedSign1] = useState<ZodiacSign | null>(null);
  const [selectedSign2, setSelectedSign2] = useState<ZodiacSign | null>(null);

  const allZodiacs = getAllZodiacSigns();
  const compatibility = selectedSign1 && selectedSign2 
    ? findCompatibility(selectedSign1, selectedSign2) 
    : null;
  
  const mostCompatible = selectedSign1 ? getMostCompatibleSigns(selectedSign1) : [];

  const getCompatibilityColor = (score: number) => {
    if (score >= 9) return '#22c55e'; // green
    if (score >= 7) return '#3b82f6'; // blue
    if (score >= 5) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  const getCompatibilityLabel = (score: number) => {
    if (score >= 9) return 'Xuất sắc';
    if (score >= 7) return 'Tốt';
    if (score >= 5) return 'Trung bình';
    return 'Thách thức';
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <header className={styles.header}>
          <h1>Tương Hợp Cung Hoàng Đạo</h1>
          <p>Khám phá mức độ tương hợp giữa các cung hoàng đạo trong tình yêu và mối quan hệ</p>
        </header>

        <section className={styles.selectionSection}>
          <div className={styles.selectorGrid}>
            <div className={styles.selector}>
              <h3>Cung hoàng đạo thứ nhất</h3>
              <div className={styles.searchWrapper}>
                <SearchBox
                  onSignSelect={setSelectedSign1}
                  placeholder="Tìm cung hoàng đạo..."
                />
              </div>
              {selectedSign1 && (
                <div className={styles.selectedCard}>
                  <ZodiacCard
                    zodiac={getZodiacInfo(selectedSign1)}
                    size="medium"
                  />
                  <button 
                    className={styles.clearButton}
                    onClick={() => setSelectedSign1(null)}
                  >
                    Xóa lựa chọn
                  </button>
                </div>
              )}
            </div>

            <div className={styles.vsSymbol}>
              <span>VS</span>
            </div>

            <div className={styles.selector}>
              <h3>Cung hoàng đạo thứ hai</h3>
              <div className={styles.searchWrapper}>
                <SearchBox
                  onSignSelect={setSelectedSign2}
                  placeholder="Tìm cung hoàng đạo..."
                />
              </div>
              {selectedSign2 && (
                <div className={styles.selectedCard}>
                  <ZodiacCard
                    zodiac={getZodiacInfo(selectedSign2)}
                    size="medium"
                  />
                  <button 
                    className={styles.clearButton}
                    onClick={() => setSelectedSign2(null)}
                  >
                    Xóa lựa chọn
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {compatibility && (
          <section className={styles.resultSection}>
            <div className={styles.compatibilityResult}>
              <div className={styles.scoreCard}>
                <div 
                  className={styles.scoreCircle}
                  style={{ borderColor: getCompatibilityColor(compatibility.score) }}
                >
                  <span className={styles.scoreNumber}>{compatibility.score}</span>
                  <span className={styles.scoreMax}>/10</span>
                </div>
                <div className={styles.scoreLabel}>
                  <span 
                    className={styles.compatibilityType}
                    style={{ color: getCompatibilityColor(compatibility.score) }}
                  >
                    {getCompatibilityLabel(compatibility.score)}
                  </span>
                </div>
              </div>

              <div className={styles.compatibilityDetails}>
                <h3>Đánh giá tương hợp</h3>
                <p className={styles.description}>{compatibility.description}</p>

                <div className={styles.detailsGrid}>
                  <div className={styles.strengthsCard}>
                    <h4>
                      <span className={styles.icon}>✅</span>
                      Điểm mạnh
                    </h4>
                    <ul>
                      {compatibility.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.challengesCard}>
                    <h4>
                      <span className={styles.icon}>⚠️</span>
                      Thách thức
                    </h4>
                    <ul>
                      {compatibility.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {selectedSign1 && !selectedSign2 && (
          <section className={styles.suggestionsSection}>
            <h3>Các cung tương hợp nhất với {getZodiacInfo(selectedSign1).name}</h3>
            <div className={styles.suggestionsGrid}>
              {mostCompatible.map((comp, index) => {
                const otherSign = comp.sign1 === selectedSign1 ? comp.sign2 : comp.sign1;
                const otherZodiac = getZodiacInfo(otherSign);
                
                return (
                  <div key={index} className={styles.suggestionCard}>
                    <ZodiacCard
                      zodiac={otherZodiac}
                      size="small"
                      onClick={() => setSelectedSign2(otherSign)}
                    />
                    <div className={styles.suggestionScore}>
                      <span 
                        className={styles.score}
                        style={{ color: getCompatibilityColor(comp.score) }}
                      >
                        {comp.score}/10
                      </span>
                      <span className={styles.type}>{getCompatibilityLabel(comp.score)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <section className={styles.allSignsSection}>
          <h3>Chọn từ tất cả cung hoàng đạo</h3>
          <div className={styles.allSignsGrid}>
            {allZodiacs.map(zodiac => (
              <ZodiacCard
                key={zodiac.id}
                zodiac={zodiac}
                size="small"
                onClick={() => {
                  if (!selectedSign1) {
                    setSelectedSign1(zodiac.id);
                  } else if (!selectedSign2) {
                    setSelectedSign2(zodiac.id);
                  } else {
                    setSelectedSign1(zodiac.id);
                    setSelectedSign2(null);
                  }
                }}
                className={
                  selectedSign1 === zodiac.id || selectedSign2 === zodiac.id 
                    ? styles.selectedZodiac 
                    : ''
                }
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
