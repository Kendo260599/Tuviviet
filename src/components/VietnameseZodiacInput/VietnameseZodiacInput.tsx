import React, { useState } from 'react';
import { VietnameseZodiacSign } from '../../types';
import { getVietnameseZodiacSign, validateVietnameseYear } from '../../utils/vietnameseZodiacUtils';
import styles from './VietnameseZodiacInput.module.css';

interface VietnameseZodiacInputProps {
  onSignChange: (sign: VietnameseZodiacSign | null, year: number | null) => void;
  initialYear?: number;
  className?: string;
}

export const VietnameseZodiacInput: React.FC<VietnameseZodiacInputProps> = ({
  onSignChange,
  initialYear,
  className = ''
}) => {
  const [year, setYear] = useState<string>(initialYear ? initialYear.toString() : '');
  const [error, setError] = useState<string>('');

  const calculateVietnameseZodiac = () => {
    setError('');
    
    if (!year) {
      setError('Vui lòng nhập năm sinh');
      onSignChange(null, null);
      return;
    }

    const yearNum = parseInt(year);
    
    if (!validateVietnameseYear(yearNum)) {
      setError('Năm sinh không hợp lệ (1900-2035)');
      onSignChange(null, null);
      return;
    }

    const sign = getVietnameseZodiacSign(yearNum);
    onSignChange(sign, yearNum);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = e.target.value;
    setYear(newYear);
    setError('');
    onSignChange(null, null); // Clear previous result
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateVietnameseZodiac();
    }
  };

  // Generate some example years for current zodiac cycle
  const currentYear = new Date().getFullYear();
  const exampleYears: number[] = [];
  for (let i = 0; i < 12; i++) {
    exampleYears.push(currentYear - i);
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <label htmlFor="year-input" className={styles.label}>
            Năm sinh (dương lịch):
          </label>
          <input
            id="year-input"
            type="number"
            value={year}
            onChange={handleYearChange}
            onKeyPress={handleKeyPress}
            placeholder="Ví dụ: 1990"
            min="1900"
            max="2035"
            className={styles.input}
            aria-describedby={error ? "year-error" : "year-hint"}
          />
          <div id="year-hint" className={styles.hint}>
            Nhập năm sinh từ 1900 đến 2035
          </div>
        </div>

        <button
          type="button"
          onClick={calculateVietnameseZodiac}
          className={styles.calculateButton}
          disabled={!year}
        >
          Xem tử vi Việt Nam
        </button>
      </div>

      {error && (
        <div 
          id="year-error"
          className={styles.error}
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}

      <div className={styles.examples}>
        <h4 className={styles.examplesTitle}>Ví dụ một số năm:</h4>
        <div className={styles.yearGrid}>
          {exampleYears.slice(0, 6).map(exampleYear => {
            const sign = getVietnameseZodiacSign(exampleYear);
            return (
              <button
                key={exampleYear}
                onClick={() => {
                  setYear(exampleYear.toString());
                  setError('');
                }}
                className={styles.exampleYear}
                type="button"
              >
                {exampleYear}
                <span className={styles.exampleAnimal}>
                  {sign === 'ty' && '🐭 Tý'}
                  {sign === 'suu' && '🐃 Sửu'}
                  {sign === 'dan' && '🐅 Dần'}
                  {sign === 'mao' && '🐱 Mão'}
                  {sign === 'thin' && '🐉 Thìn'}
                  {sign === 'ti' && '🐍 Tị'}
                  {sign === 'ngo' && '🐴 Ngọ'}
                  {sign === 'mui' && '🐐 Mùi'}
                  {sign === 'than' && '🐵 Thân'}
                  {sign === 'dau' && '🐓 Dậu'}
                  {sign === 'tuat' && '🐶 Tuất'}
                  {sign === 'hoi' && '🐷 Hợi'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
