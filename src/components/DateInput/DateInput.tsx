import React, { useState } from 'react';
import { ZodiacSign } from '../../types';
import { getZodiacSign, validateDate } from '../../utils/zodiacUtils';
import styles from './DateInput.module.css';

interface DateInputProps {
  onSignChange: (sign: ZodiacSign | null) => void;
  initialDay?: number;
  initialMonth?: number;
  className?: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  onSignChange,
  initialDay,
  initialMonth,
  className = ''
}) => {
  const [day, setDay] = useState(initialDay || '');
  const [month, setMonth] = useState(initialMonth || '');
  const [error, setError] = useState<string>('');

  const calculateZodiacSign = () => {
    setError('');
    
    // Check if both day and month are selected
    if (!day || !month) {
      setError('Vui lòng chọn đầy đủ ngày và tháng sinh');
      onSignChange(null);
      return;
    }

    const dayNum = typeof day === 'string' ? parseInt(day) : day;
    const monthNum = typeof month === 'string' ? parseInt(month) : month;
    
    if (!validateDate(dayNum, monthNum)) {
      setError('Ngày sinh không hợp lệ');
      onSignChange(null);
      return;
    }

    const sign = getZodiacSign(dayNum, monthNum);
    onSignChange(sign);
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDay = e.target.value;
    setDay(newDay);
    setError(''); // Clear error when user makes changes
    onSignChange(null); // Clear previous result
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value;
    setMonth(newMonth);
    setError(''); // Clear error when user makes changes
    onSignChange(null); // Clear previous result
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4',
    'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 
    'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.inputGroup}>
        <div className={styles.selectWrapper}>
          <label htmlFor="day-select" className={styles.label}>
            Ngày sinh:
          </label>
          <select
            id="day-select"
            value={day}
            onChange={handleDayChange}
            className={styles.select}
            aria-describedby={error ? "date-error" : undefined}
          >
            <option value="">-- Chọn ngày --</option>
            {days.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <label htmlFor="month-select" className={styles.label}>
            Tháng sinh:
          </label>
          <select
            id="month-select"
            value={month}
            onChange={handleMonthChange}
            className={styles.select}
            aria-describedby={error ? "date-error" : undefined}
          >
            <option value="">-- Chọn tháng --</option>
            {months.map((monthName, index) => (
              <option key={index + 1} value={index + 1}>
                {monthName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={calculateZodiacSign}
          className={styles.calculateButton}
          disabled={!day || !month}
        >
          Xem cung hoàng đạo
        </button>
      </div>

      {error && (
        <div 
          id="date-error"
          className={styles.error}
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}
    </div>
  );
};
