import React, { useState } from 'react';
import BirthChartInput from '../components/BirthChartInput';
import BirthChartResult from '../components/BirthChartResult';
import { EnhancedLoadingWrapper } from '../components/LoadingStates';
import { calculateBirthChart, validateBirthDateTime } from '../utils/birthChartUtils';
import { BirthChart } from '../data/canChiData';
import styles from './BirthChartPage.module.css';

const BirthChartPage: React.FC = () => {
  const [birthChart, setBirthChart] = useState<BirthChart | null>(null);
  const [currentAge, setCurrentAge] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleCalculate = async (year: number, month: number, day: number, hour: number, minute: number, age?: number) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Validate input
      if (!validateBirthDateTime(year, month, day, hour, minute)) {
        throw new Error('Thông tin ngày giờ sinh không hợp lệ');
      }

      // Simulate calculation delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Calculate birth chart - CORE LOGIC UNCHANGED
      const chart = calculateBirthChart(year, month, day, hour, minute);
      setBirthChart(chart);
      setCurrentAge(age);
      setSuccess('Lá số tử vi đã được tính toán thành công!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tính toán');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setBirthChart(null);
    setCurrentAge(undefined);
    setError(null);
    setSuccess(null);
  };

  const handleRetry = () => {
    setError(null);
    setSuccess(null);
  };

  if (birthChart) {
    return <BirthChartResult birthChart={birthChart} onBack={handleBack} currentAge={currentAge} />;
  }

  return (
    <div className={styles.birthChartPage}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Lá Số Tử Vi</h1>
          <p className={styles.description}>
            Khám phá vận mệnh và tính cách của bạn thông qua hệ thống tử vi truyền thống Việt Nam. 
            Dựa trên ngày giờ sinh chính xác, chúng tôi sẽ tính toán Tứ Trụ (Bát Tự) và phân tích 
            chi tiết về tính cách, sự nghiệp, tình cảm, tài chính và vận mệnh cả đời của bạn.
          </p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔮</div>
              <h3>Tứ Trụ Chính Xác</h3>
              <p>Tính toán Can Chi của năm, tháng, ngày, giờ sinh</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌟</div>
              <h3>Phân Tích Tính Cách</h3>
              <p>Điểm mạnh, điểm yếu, phong cách sống và làm việc</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Đại Vận Cả Đời</h3>
              <p>Dự đoán vận mệnh từng giai đoạn 10 năm</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💫</div>
              <h3>Ngũ Hành Cân Bằng</h3>
              <p>Phân tích sức mạnh các ngũ hành trong bát tự</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>❤️</div>
              <h3>Hợp Tuổi Tương Sinh</h3>
              <p>Khả năng tương hợp trong tình cảm và hôn nhân</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💼</div>
              <h3>Hướng Nghiệp</h3>
              <p>Gợi ý nghề nghiệp phù hợp với tính cách</p>
            </div>
          </div>
        </div>

                <div className={styles.inputSection}>
          <EnhancedLoadingWrapper
            isLoading={loading}
            error={error}
            success={success}
            loadingText="Đang tính toán lá số tử vi của bạn..."
            onRetry={handleRetry}
          >
            <BirthChartInput 
              onCalculate={handleCalculate}
              loading={loading}
            />
          </EnhancedLoadingWrapper>
        </div>

        <div className={styles.info}>
          <div className={styles.infoCard}>
            <h3>🏮 Tử Vi Là Gì?</h3>
            <p>
              Tử vi là một hệ thống chiêm tinh truyền thống của Việt Nam, dựa trên thuyết Can Chi 
              và Ngũ Hành để phân tích tính cách, vận mệnh con người. Hệ thống này sử dụng 
              10 Thiên Can và 12 Địa Chi để tạo thành 60 năm một chu kỳ.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>⚡ Tầm Quan Trọng Của Giờ Sinh</h3>
            <p>
              Trong tử vi, giờ sinh rất quan trọng vì nó quyết định cột thứ 4 trong Tứ Trụ. 
              Giờ sinh ảnh hưởng đến tính cách, khả năng giao tiếp và mối quan hệ xã hội của bạn. 
              Vì vậy, hãy cố gắng nhập thông tin giờ sinh chính xác nhất có thể.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>🎨 Ngũ Hành Tương Sinh Tương Khắc</h3>
            <p>
              Ngũ hành gồm Kim, Mộc, Thủy, Hỏa, Thổ. Chúng có mối quan hệ tương sinh 
              (Thủy sinh Mộc, Mộc sinh Hỏa, Hỏa sinh Thổ, Thổ sinh Kim, Kim sinh Thủy) 
              và tương khắc (Thủy khắc Hỏa, Hỏa khắc Kim, Kim khắc Mộc, Mộc khắc Thổ, Thổ khắc Thủy).
            </p>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <h4>⚠️ Tuyên Bố Miễn Trừ Trách Nhiệm</h4>
          <p>
            Kết quả tử vi chỉ mang tính chất tham khảo và giải trí. Chúng không thể thay thế 
            cho các quyết định thực tế trong cuộc sống. Vận mệnh của mỗi người phụ thuộc vào 
            nhiều yếu tố khác nhau, bao gồm nỗ lực cá nhân, hoàn cảnh xã hội và các lựa chọn 
            trong cuộc sống. Hãy sử dụng thông tin này một cách khôn ngoan và có trách nhiệm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthChartPage;
