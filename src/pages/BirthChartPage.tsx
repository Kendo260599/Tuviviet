import React, { useState } from 'react';
import BirthChartInput from '../components/BirthChartInput';
import BirthChartResult from '../components/BirthChartResult';
import LifePhasesAnalysis from '../components/LifePhasesAnalysis';
import ComprehensiveAnalysis from '../components/ComprehensiveAnalysis';
import PersuasiveAnalysisComponent from '../components/PersuasiveAnalysis';
import ScientificInsights from '../components/ScientificInsights';
import { BirthChart } from '../data/canChiData';
import { calculateBirthChart } from '../utils/birthChartUtils';
import styles from './BirthChartPage.module.css';

const BirthChartPage: React.FC = () => {
  const [birthChart, setBirthChart] = useState<BirthChart | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async (year: number, month: number, day: number, hour: number, minute: number) => {
    console.log('🎯 handleCalculate called with:', { year, month, day, hour, minute });
    setLoading(true);
    setError(null);
    
    try {
      // Simple validation
      if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31 || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        throw new Error('Thông tin ngày sinh không hợp lệ');
      }
      
      console.log('⏳ Starting calculation...');
      // Simulate calculation delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Calculate birth chart
      console.log('🧮 Calling calculateBirthChart...');
      const chart = calculateBirthChart(year, month, day, hour, minute);
      console.log('📊 Birth chart calculated:', chart);
      
      setBirthChart(chart);
      console.log('✅ Birth chart set successfully!');
    } catch (err) {
      console.error('❌ Error in handleCalculate:', err);
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tính toán');
    } finally {
      setLoading(false);
      console.log('🏁 Loading set to false');
    }
  };

  const handleBack = () => {
    setBirthChart(null);
    setError(null);
  };

  if (birthChart) {
    return (
      <div className={styles.birthChartPage}>
        <div className={styles.container}>
          <BirthChartResult birthChart={birthChart} onBack={handleBack} />
          <PersuasiveAnalysisComponent birthChart={birthChart} />
          <ScientificInsights birthChart={birthChart} />
          <LifePhasesAnalysis 
            lifePhases={birthChart.lifePhases}
            currentAge={new Date().getFullYear() - birthChart.birthDate.year}
          />
          <ComprehensiveAnalysis 
            birthChart={birthChart}
            currentAge={new Date().getFullYear() - birthChart.birthDate.year}
          />
        </div>
      </div>
    );
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

        {error && (
          <div className={styles.errorContainer}>
            <div className={styles.error}>
              <span className={styles.errorIcon}>⚠️</span>
              <span>{error}</span>
              <button onClick={() => setError(null)} className={styles.errorClose}>
                ×
              </button>
            </div>
          </div>
        )}

        <div className={styles.inputSection}>
          <BirthChartInput onCalculate={handleCalculate} loading={loading} />
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
