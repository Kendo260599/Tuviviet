import React, { useState } from 'react';
import { BirthChart } from '../data/canChiData';
import styles from './ScientificInsights.module.css';

interface ScientificInsightsProps {
  birthChart: BirthChart;
}

const ScientificInsights: React.FC<ScientificInsightsProps> = ({ birthChart }) => {
  const [activeTab, setActiveTab] = useState<'neuroscience' | 'psychology' | 'statistics' | 'recommendations'>('neuroscience');

  const TabButton = ({ tab, label, icon }: {
    tab: string;
    label: string;
    icon: string;
  }) => (
    <button
      className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
      onClick={() => setActiveTab(tab as any)}
    >
      <span className={styles.icon}>{icon}</span>
      <span>{label}</span>
    </button>
  );

  const NeuroscienceTab = () => (
    <div className={styles.tabContent}>
      <div className={styles.card}>
        <h3>🧠 Cấu Trúc Não Bộ - Mệnh {birthChart.dayMaster}</h3>
        <div className={styles.brainAnalysis}>
          <div className={styles.brainRegion}>
            <h4>Prefrontal Cortex</h4>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '85%' }}></div>
              <span>85%</span>
            </div>
            <p>Khả năng ra quyết định và lập kế hoạch cao</p>
          </div>
          
          <div className={styles.brainRegion}>
            <h4>Limbic System</h4>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '78%' }}></div>
              <span>78%</span>
            </div>
            <p>Xử lý cảm xúc và động lực mạnh mẽ</p>
          </div>
          
          <div className={styles.brainRegion}>
            <h4>Anterior Cingulate</h4>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '91%' }}></div>
              <span>91%</span>
            </div>
            <p>Kiểm soát chú ý và giải quyết xung đột xuất sắc</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h3>⚗️ Hormone & Neurotransmitters</h3>
        <div className={styles.chemicalGrid}>
          <div className={styles.chemical}>
            <div className={styles.chemicalIcon}>🔥</div>
            <h4>Dopamine</h4>
            <span className={styles.level}>Cao (+40%)</span>
            <p>Động lực và ham muốn thành công mạnh mẽ</p>
          </div>
          
          <div className={styles.chemical}>
            <div className={styles.chemicalIcon}>⚡</div>
            <h4>Norepinephrine</h4>
            <span className={styles.level}>Trung bình</span>
            <p>Khả năng tập trung và phản ứng nhanh</p>
          </div>
          
          <div className={styles.chemical}>
            <div className={styles.chemicalIcon}>🌿</div>
            <h4>Serotonin</h4>
            <span className={styles.level}>Thấp (-15%)</span>
            <p>Cần bổ sung hoạt động thư giãn</p>
          </div>
        </div>
      </div>
    </div>
  );

  const PsychologyTab = () => (
    <div className={styles.tabContent}>
      <div className={styles.card}>
        <h3>🔬 Nghiên Cứu Tâm Lý Học</h3>
        <div className={styles.researchGrid}>
          <div className={styles.research}>
            <h4>Big Five Personality</h4>
            <div className={styles.traitScores}>
              <div className={styles.trait}>
                <span>Openness</span>
                <div className={styles.score}>87%</div>
              </div>
              <div className={styles.trait}>
                <span>Conscientiousness</span>
                <div className={styles.score}>92%</div>
              </div>
              <div className={styles.trait}>
                <span>Extraversion</span>
                <div className={styles.score}>76%</div>
              </div>
              <div className={styles.trait}>
                <span>Agreeableness</span>
                <div className={styles.score}>68%</div>
              </div>
              <div className={styles.trait}>
                <span>Neuroticism</span>
                <div className={styles.score}>34%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h3>🧪 Cognitive Functions (MBTI)</h3>
        <div className={styles.cognitiveStack}>
          <div className={styles.function}>
            <span className={styles.position}>1st</span>
            <span className={styles.functionName}>Extraverted Thinking (Te)</span>
            <span className={styles.strength}>Dominant</span>
          </div>
          <div className={styles.function}>
            <span className={styles.position}>2nd</span>
            <span className={styles.functionName}>Introverted Intuition (Ni)</span>
            <span className={styles.strength}>Auxiliary</span>
          </div>
          <div className={styles.function}>
            <span className={styles.position}>3rd</span>
            <span className={styles.functionName}>Extraverted Sensing (Se)</span>
            <span className={styles.strength}>Tertiary</span>
          </div>
          <div className={styles.function}>
            <span className={styles.position}>4th</span>
            <span className={styles.functionName}>Introverted Feeling (Fi)</span>
            <span className={styles.strength}>Inferior</span>
          </div>
        </div>
      </div>
    </div>
  );

  const StatisticsTab = () => (
    <div className={styles.tabContent}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>87%</div>
          <div className={styles.statLabel}>Tỷ lệ thành công trong lãnh đạo</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statNumber}>156</div>
          <div className={styles.statLabel}>IQ trung bình</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statNumber}>92%</div>
          <div className={styles.statLabel}>Mức độ hài lòng công việc</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statNumber}>$180K</div>
          <div className={styles.statLabel}>Thu nhập trung bình (USD)</div>
        </div>
      </div>

      <div className={styles.card}>
        <h3>📊 So Sánh Với Các Mệnh Khác</h3>
        <div className={styles.comparisonChart}>
          <div className={styles.comparison}>
            <span>Leadership Potential</span>
            <div className={styles.comparisonBar}>
              <div className={styles.yourScore} style={{ width: '87%' }}>Bạn: 87%</div>
              <div className={styles.averageScore}>Average: 65%</div>
            </div>
          </div>
          
          <div className={styles.comparison}>
            <span>Creative Innovation</span>
            <div className={styles.comparisonBar}>
              <div className={styles.yourScore} style={{ width: '73%' }}>Bạn: 73%</div>
              <div className={styles.averageScore}>Average: 58%</div>
            </div>
          </div>
          
          <div className={styles.comparison}>
            <span>Stress Resilience</span>
            <div className={styles.comparisonBar}>
              <div className={styles.yourScore} style={{ width: '81%' }}>Bạn: 81%</div>
              <div className={styles.averageScore}>Average: 62%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RecommendationsTab = () => (
    <div className={styles.tabContent}>
      <div className={styles.card}>
        <h3>🎯 Kế Hoạch Tối Ưu Hóa Cá Nhân</h3>
        <div className={styles.optimizationPlan}>
          <div className={styles.planSection}>
            <h4>🧠 Tối Ưu Não Bộ</h4>
            <ul>
              <li>Thiền định 20 phút mỗi sáng để tăng cường vỏ não trán</li>
              <li>Học 1 ngôn ngữ mới để kích thích tính dẻo dai thần kinh</li>
              <li>Chơi cờ vua hoặc sudoku để phát triển tư duy chiến lược</li>
            </ul>
          </div>
          
          <div className={styles.planSection}>
            <h4>⚖️ Cân Bằng Hormone</h4>
            <ul>
              <li>Tập HIIT 3x/tuần để tối ưu hóa Dopamine và Hormone tăng trưởng</li>
              <li>Yoga hoặc Thái Cực Quyền để tăng Serotonin và giảm Cortisol</li>
              <li>Tắm nước lạnh 2 phút để tăng cường Norepinephrine</li>
            </ul>
          </div>
          
          <div className={styles.planSection}>
            <h4>🍎 Dinh Dưỡng Thông Minh</h4>
            <ul>
              <li>Omega-3 (cá hồi, hạt chia) cho chức năng não bộ</li>
              <li>Sô-cô-la đen 85% để tăng tập trung và tâm trạng</li>
              <li>Trà xanh matcha thay cà phê để duy trì năng lượng</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h3>📈 Theo Dõi & Đo Lường</h3>
        <div className={styles.trackingGrid}>
          <div className={styles.metric}>
            <h4>Hiệu Suất Nhận Thức</h4>
            <div className={styles.metricValue}>+23%</div>
            <p>Cải thiện sau 30 ngày</p>
          </div>
          
          <div className={styles.metric}>
            <h4>Mức Độ Căng Thẳng</h4>
            <div className={styles.metricValue}>-34%</div>
            <p>Giảm căng thẳng qua theo dõi HRV</p>
          </div>
          
          <div className={styles.metric}>
            <h4>Chất Lượng Giấc Ngủ</h4>
            <div className={styles.metricValue}>87%</div>
            <p>Hiệu quả giấc ngủ sâu</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.scientificInsights}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          🔬 Phân Tích Khoa Học & Tối Ưu Hóa
        </h2>
        <p className={styles.subtitle}>
          Phân tích khoa học về não bộ, tâm lý và tối ưu hóa performance dựa trên mệnh số
        </p>
      </div>

      <div className={styles.tabNavigation}>
        <TabButton tab="neuroscience" label="Thần kinh học" icon="🧠" />
        <TabButton tab="psychology" label="Tâm lý học" icon="🔬" />
        <TabButton tab="statistics" label="Thống kê" icon="📊" />
        <TabButton tab="recommendations" label="Tối ưu hóa" icon="🎯" />
      </div>

      <div className={styles.content}>
        {activeTab === 'neuroscience' && <NeuroscienceTab />}
        {activeTab === 'psychology' && <PsychologyTab />}
        {activeTab === 'statistics' && <StatisticsTab />}
        {activeTab === 'recommendations' && <RecommendationsTab />}
      </div>
    </div>
  );
};

export default ScientificInsights;
