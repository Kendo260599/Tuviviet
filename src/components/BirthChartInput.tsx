import React, { useState } from 'react';
import styles from './BirthChartInput.module.css';

interface BirthChartInputProps {
  onCalculate: (year: number, month: number, day: number, hour: number, minute: number, currentAge?: number) => void;
  loading?: boolean;
}

const BirthChartInput: React.FC<BirthChartInputProps> = ({ onCalculate, loading = false }) => {
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  const [currentAge, setCurrentAge] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateInput = (): boolean => {
    const newErrors: Record<string, string> = {};

    const yearNum = parseInt(year);
    const monthNum = parseInt(month);
    const dayNum = parseInt(day);
    const hourNum = parseInt(hour);
    const minuteNum = parseInt(minute);

    // Validate year
    if (!year || isNaN(yearNum) || yearNum < 1900 || yearNum > 2100) {
      newErrors.year = 'Năm sinh phải từ 1900 đến 2100';
    }

    // Validate month
    if (!month || isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      newErrors.month = 'Tháng sinh phải từ 1 đến 12';
    }

    // Validate day
    if (!day || isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
      newErrors.day = 'Ngày sinh không hợp lệ';
    } else if (monthNum) {
      // More specific day validation based on month
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const isLeapYear = (yearNum % 4 === 0 && yearNum % 100 !== 0) || (yearNum % 400 === 0);
      
      if (monthNum === 2) {
        const maxDay = isLeapYear ? 29 : 28;
        if (dayNum > maxDay) {
          newErrors.day = `Tháng 2 ${isLeapYear ? 'năm nhuận' : ''} chỉ có ${maxDay} ngày`;
        }
      } else if (dayNum > daysInMonth[monthNum - 1]) {
        newErrors.day = `Tháng ${monthNum} chỉ có ${daysInMonth[monthNum - 1]} ngày`;
      }
    }

    // Validate hour
    if (!hour || isNaN(hourNum) || hourNum < 0 || hourNum > 23) {
      newErrors.hour = 'Giờ sinh phải từ 0 đến 23';
    }

    // Validate minute
    if (!minute || isNaN(minuteNum) || minuteNum < 0 || minuteNum > 59) {
      newErrors.minute = 'Phút sinh phải từ 0 đến 59';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🚀 Form submitted!');
    console.log('📝 Form data:', { year, month, day, hour, minute });
    
    if (validateInput()) {
      console.log('✅ Validation passed!');
      const ageNum = currentAge ? parseInt(currentAge) : undefined;
      console.log('📊 Calling onCalculate with:', {
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day),
        hour: parseInt(hour),
        minute: parseInt(minute),
        age: ageNum
      });
      
      onCalculate(
        parseInt(year),
        parseInt(month),
        parseInt(day),
        parseInt(hour),
        parseInt(minute),
        ageNum
      );
    } else {
      console.log('❌ Validation failed!', errors);
    }
  };

  const getHourName = (hour: number): string => {
    const hourNames = [
      'Tý (23:00-01:00)', 'Tý (23:00-01:00)', // 0, 1
      'Sửu (01:00-03:00)', 'Sửu (01:00-03:00)', // 2, 3
      'Dần (03:00-05:00)', 'Dần (03:00-05:00)', // 4, 5
      'Mão (05:00-07:00)', 'Mão (05:00-07:00)', // 6, 7
      'Thìn (07:00-09:00)', 'Thìn (07:00-09:00)', // 8, 9
      'Tị (09:00-11:00)', 'Tị (09:00-11:00)', // 10, 11
      'Ngọ (11:00-13:00)', 'Ngọ (11:00-13:00)', // 12, 13
      'Mùi (13:00-15:00)', 'Mùi (13:00-15:00)', // 14, 15
      'Thân (15:00-17:00)', 'Thân (15:00-17:00)', // 16, 17
      'Dậu (17:00-19:00)', 'Dậu (17:00-19:00)', // 18, 19
      'Tuất (19:00-21:00)', 'Tuất (19:00-21:00)', // 20, 21
      'Hợi (21:00-23:00)', 'Hợi (21:00-23:00)', // 22, 23
    ];
    return hourNames[hour] || '';
  };

  return (
    <div className={styles.birthChartInput}>
      <div className={styles.header}>
        <h3>Nhập thông tin sinh</h3>
        <p className={styles.subtitle}>
          Để tính toán lá số tử vi chính xác, vui lòng nhập đầy đủ thông tin ngày giờ sinh
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.dateSection}>
          <h4>Ngày sinh</h4>
          <div className={styles.dateRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="day">Ngày</label>
              <input
                id="day"
                type="number"
                min="1"
                max="31"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                placeholder="DD"
                className={errors.day ? styles.error : ''}
              />
              {errors.day && <span className={styles.errorMessage}>{errors.day}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="month">Tháng</label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className={errors.month ? styles.error : ''}
              >
                <option value="">Chọn tháng</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Tháng {i + 1}
                  </option>
                ))}
              </select>
              {errors.month && <span className={styles.errorMessage}>{errors.month}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="year">Năm</label>
              <input
                id="year"
                type="number"
                min="1900"
                max="2100"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="YYYY"
                className={errors.year ? styles.error : ''}
              />
              {errors.year && <span className={styles.errorMessage}>{errors.year}</span>}
            </div>
          </div>
        </div>

        <div className={styles.timeSection}>
          <h4>Giờ sinh</h4>
          <div className={styles.timeRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="hour">Giờ</label>
              <select
                id="hour"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className={errors.hour ? styles.error : ''}
              >
                <option value="">Chọn giờ</option>
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {i.toString().padStart(2, '0')}:00 - {getHourName(i)}
                  </option>
                ))}
              </select>
              {errors.hour && <span className={styles.errorMessage}>{errors.hour}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="minute">Phút</label>
              <select
                id="minute"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className={errors.minute ? styles.error : ''}
              >
                <option value="">Phút</option>
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={i}>
                    {i.toString().padStart(2, '0')}
                  </option>
                ))}
              </select>
              {errors.minute && <span className={styles.errorMessage}>{errors.minute}</span>}
            </div>
          </div>
        </div>

        <div className={styles.ageSection}>
          <h4>Tuổi hiện tại (tùy chọn)</h4>
          <div className={styles.inputGroup}>
            <label htmlFor="currentAge">Tuổi của bạn</label>
            <input
              id="currentAge"
              type="number"
              min="1"
              max="120"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              placeholder="Nhập tuổi hiện tại để có phân tích chi tiết hơn"
              className={styles.ageInput}
            />
            <small className={styles.ageNote}>
              Thông tin này giúp cung cấp phân tích phù hợp với giai đoạn cuộc đời hiện tại của bạn
            </small>
          </div>
        </div>

        <div className={styles.note}>
          <h5>📝 Lưu ý quan trọng:</h5>
          <ul>
            <li>Giờ sinh rất quan trọng trong tử vi, ảnh hưởng trực tiếp đến tính cách và vận mệnh</li>
            <li>Nếu không rõ giờ sinh chính xác, hãy hỏi gia đình hoặc kiểm tra giấy khai sinh</li>
            <li>Giờ tính theo múi giờ Việt Nam (UTC +7)</li>
            <li>Hệ thống sử dụng lịch dương (Gregorian Calendar)</li>
          </ul>
        </div>

        <button 
          type="submit" 
          className={styles.calculateButton}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className={styles.spinner}></span>
              Đang tính toán...
            </>
          ) : (
            '🔮 Tính lá số tử vi'
          )}
        </button>
      </form>
    </div>
  );
};

export default BirthChartInput;
