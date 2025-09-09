import React from 'react';
import { BirthChart } from '../data/canChiData';
import styles from './DetailedPersonalityAnalysis.module.css';

interface DetailedPersonalityAnalysisProps {
  birthChart: BirthChart;
}

const DetailedPersonalityAnalysis: React.FC<DetailedPersonalityAnalysisProps> = ({ birthChart }) => {
  // Detailed personality mapping based on Day Master
  const personalityMapping: Record<string, any> = {
    'Giáp': {
      element: 'Mộc Dương',
      nature: 'Cây lớn, vững chắc',
      coreTraits: ['Mạnh mẽ', 'Kiên định', 'Lãnh đạo tự nhiên', 'Có tầm nhìn'],
      strengths: ['Quyết đoán', 'Bảo vệ người khác', 'Có khả năng tổ chức', 'Sáng tạo'],
      weaknesses: ['Cứng đầu', 'Khó thay đổi', 'Đôi khi độc đoán', 'Thiếu linh hoạt'],
      career: ['CEO/Giám đốc', 'Chính trị gia', 'Kiến trúc sư', 'Quản lý dự án'],
      love: 'Tình yêu mãnh liệt, bảo vệ, đôi khi hơi kiểm soát',
      color: '#22c55e'
    },
    'Ất': {
      element: 'Mộc Âm',
      nature: 'Cây nhỏ, mềm mại',
      coreTraits: ['Nhẹ nhàng', 'Thích nghi', 'Khéo léo', 'Tinh tế'],
      strengths: ['Linh hoạt', 'Khéo ăn nói', 'Sáng tạo nghệ thuật', 'Cảm thông'],
      weaknesses: ['Thiếu quyết đoán', 'Dễ bị ảnh hưởng', 'Đôi khi thiếu tự tin'],
      career: ['Nghệ sĩ', 'Nhà thiết kế', 'Tư vấn', 'Giáo viên'],
      love: 'Tình yêu dịu dàng, lãng mạn, cần được bảo vệ',
      color: '#16a34a'
    },
    'Bính': {
      element: 'Hỏa Dương',
      nature: 'Mặt trời, rực rỡ',
      coreTraits: ['Nhiệt tình', 'Lạc quan', 'Cuốn hút', 'Năng động'],
      strengths: ['Truyền cảm hứng', 'Giao tiếp tốt', 'Tự tin', 'Sáng tạo'],
      weaknesses: ['Nóng tính', 'Thiếu kiên nhẫn', 'Đôi khi hời hợt'],
      career: ['Diễn viên', 'MC/Host', 'Marketing', 'Sales'],
      love: 'Tình yêu nồng cháy, lãng mạn, cần ngưỡng mộ',
      color: '#ef4444'
    },
    'Đinh': {
      element: 'Hỏa Âm',
      nature: 'Ngọn nến, ấm áp',
      coreTraits: ['Ấm áp', 'Chu đáo', 'Kiên nhẫn', 'Sâu sắc'],
      strengths: ['Chăm sóc người khác', 'Tỉ mỉ', 'Trung thành', 'Có trí tuệ'],
      weaknesses: ['Lo lắng quá mức', 'Dễ stress', 'Thiếu quyết đoán'],
      career: ['Y tá/Bác sĩ', 'Giáo viên', 'Tư vấn tâm lý', 'Nội thất'],
      love: 'Tình yêu ấm áp, chăm sóc, lâu dài',
      color: '#dc2626'
    },
    'Mậu': {
      element: 'Thổ Dương',
      nature: 'Núi đá, vững chắc',
      coreTraits: ['Đáng tin cậy', 'Thực tế', 'Kiên định', 'Bảo thủ'],
      strengths: ['Chăm chỉ', 'Có trách nhiệm', 'Ổn định', 'Bảo vệ'],
      weaknesses: ['Cứng nhắc', 'Chậm thay đổi', 'Đôi khi quá thận trọng'],
      career: ['Ngân hàng', 'Bất động sản', 'Kế toán', 'Quản lý'],
      love: 'Tình yêu ổn định, lâu dài, truyền thống',
      color: '#f59e0b'
    },
    'Kỷ': {
      element: 'Thổ Âm',
      nature: 'Đất màu mỡ, nuôi dưỡng',
      coreTraits: ['Nhân hậu', 'Kiên nhẫn', 'Hỗ trợ', 'Khiêm tốn'],
      strengths: ['Nuôi dưỡng', 'Chăm sóc', 'Kiên trì', 'Thông cảm'],
      weaknesses: ['Thiếu tự tin', 'Dễ hy sinh bản thân', 'Lo lắng'],
      career: ['Giáo dục', 'Xã hội', 'Nông nghiệp', 'Chăm sóc'],
      love: 'Tình yêu hy sinh, nuôi dưỡng, chân thành',
      color: '#d97706'
    },
    'Canh': {
      element: 'Kim Dương',
      nature: 'Thanh kiếm, sắc bén',
      coreTraits: ['Quyết đoán', 'Công bằng', 'Trực tiếp', 'Có nguyên tắc'],
      strengths: ['Lãnh đạo', 'Công bằng', 'Dũng cảm', 'Có tổ chức'],
      weaknesses: ['Cứng rắn', 'Thiếu cảm tình', 'Đôi khi khắc nghiệt'],
      career: ['Luật sư', 'Quân đội', 'Cảnh sát', 'Tài chính'],
      love: 'Tình yêu chân thành, trung thành, có nguyên tắc',
      color: '#6b7280'
    },
    'Tân': {
      element: 'Kim Âm',
      nature: 'Trang sức, tinh tế',
      coreTraits: ['Tinh tế', 'Thẩm mỹ cao', 'Khéo léo', 'Nhạy cảm'],
      strengths: ['Nghệ thuật', 'Thời trang', 'Giao tiếp', 'Tỉ mỉ'],
      weaknesses: ['Hay thay đổi', 'Dễ bị tổn thương', 'Phân vân'],
      career: ['Thiết kế', 'Thời trang', 'Trang sức', 'Nghệ thuật'],
      love: 'Tình yêu tinh tế, lãng mạn, cần được trân trọng',
      color: '#9ca3af'
    },
    'Nhâm': {
      element: 'Thủy Dương',
      nature: 'Đại dương, bao la',
      coreTraits: ['Thông minh', 'Linh hoạt', 'Có tầm nhìn', 'Bao dung'],
      strengths: ['Thích nghi', 'Học hỏi nhanh', 'Sáng tạo', 'Lãnh đạo'],
      weaknesses: ['Thiếu ổn định', 'Dễ thay đổi', 'Đôi khi thiếu kiên trì'],
      career: ['Nghiên cứu', 'Công nghệ', 'Du lịch', 'Truyền thông'],
      love: 'Tình yêu sâu sắc, bao dung, đôi khi không ổn định',
      color: '#3b82f6'
    },
    'Quý': {
      element: 'Thủy Âm',
      nature: 'Giọt sương, nhẹ nhàng',
      coreTraits: ['Nhạy cảm', 'Trực giác', 'Dịu dàng', 'Thông minh'],
      strengths: ['Cảm thông', 'Sáng tạo', 'Thích nghi', 'Tinh tế'],
      weaknesses: ['Dễ bị tổn thương', 'Thiếu quyết đoán', 'Lo lắng'],
      career: ['Tâm lý học', 'Nghệ thuật', 'Y học', 'Tư vấn'],
      love: 'Tình yêu sâu sắc, tinh tế, cần được hiểu',
      color: '#1d4ed8'
    }
  };

  const dayMaster = birthChart.dayMaster;
  const personality = personalityMapping[dayMaster] || personalityMapping['Giáp'];

  // Calculate compatibility with other pillars
  const getElementCompatibility = (element1: string, element2: string) => {
    const compatibility = {
      'Mộc': { supports: ['Hỏa'], conflicts: ['Kim'], neutral: ['Thủy', 'Thổ', 'Mộc'] },
      'Hỏa': { supports: ['Thổ'], conflicts: ['Thủy'], neutral: ['Kim', 'Mộc', 'Hỏa'] },
      'Thổ': { supports: ['Kim'], conflicts: ['Mộc'], neutral: ['Thủy', 'Hỏa', 'Thổ'] },
      'Kim': { supports: ['Thủy'], conflicts: ['Hỏa'], neutral: ['Thổ', 'Mộc', 'Kim'] },
      'Thủy': { supports: ['Mộc'], conflicts: ['Thổ'], neutral: ['Kim', 'Hỏa', 'Thủy'] }
    };
    
    const comp = compatibility[element1 as keyof typeof compatibility];
    if (comp.supports.includes(element2)) return 'support';
    if (comp.conflicts.includes(element2)) return 'conflict';
    return 'neutral';
  };

  return (
    <div className={styles.detailedPersonality}>
      <h3 className={styles.title}>🧠 Phân Tích Tính Cách Chi Tiết</h3>
      
      {/* Core Personality */}
      <div className={styles.corePersonality}>
        <div className={styles.personalityHeader} style={{ borderColor: personality.color }}>
          <div className={styles.dayMasterInfo}>
            <span className={styles.dayMasterCan} style={{ color: personality.color }}>
              {dayMaster}
            </span>
            <div className={styles.elementInfo}>
              <span className={styles.element}>{personality.element}</span>
              <span className={styles.nature}>{personality.nature}</span>
            </div>
          </div>
        </div>

        <div className={styles.traitsGrid}>
          <div className={styles.traitCard}>
            <h4>✨ Đặc điểm cốt lõi</h4>
            <ul>
              {personality.coreTraits.map((trait: string, index: number) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </div>

          <div className={styles.traitCard}>
            <h4>💪 Điểm mạnh</h4>
            <ul>
              {personality.strengths.map((strength: string, index: number) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className={styles.traitCard}>
            <h4>⚠️ Điểm cần cải thiện</h4>
            <ul>
              {personality.weaknesses.map((weakness: string, index: number) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </div>

          <div className={styles.traitCard}>
            <h4>💼 Nghề nghiệp phù hợp</h4>
            <ul>
              {personality.career.map((job: string, index: number) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pillar Harmony Analysis */}
      <div className={styles.harmonyAnalysis}>
        <h4>🔗 Phân Tích Hòa Hợp Tứ Trụ</h4>
        <div className={styles.harmonyGrid}>
          {[
            { name: 'Năm', element: birthChart.year.element, pillar: birthChart.year },
            { name: 'Tháng', element: birthChart.month.element, pillar: birthChart.month },
            { name: 'Ngày', element: birthChart.day.element, pillar: birthChart.day },
            { name: 'Giờ', element: birthChart.hour.element, pillar: birthChart.hour }
          ].map((item, index) => {
            const compatibility = getElementCompatibility(
              birthChart.day.element, 
              item.element
            );
            
            return (
              <div key={index} className={`${styles.harmonyCard} ${styles[compatibility]}`}>
                <div className={styles.harmonyHeader}>
                  <span className={styles.pillarName}>{item.name}</span>
                  <span className={styles.pillarCanChi}>
                    {item.pillar.can} {item.pillar.chi}
                  </span>
                </div>
                <div className={styles.harmonyElement}>{item.element}</div>
                <div className={styles.harmonyStatus}>
                  {compatibility === 'support' && '🟢 Hỗ trợ tích cực'}
                  {compatibility === 'conflict' && '🔴 Xung khắc cần cân bằng'}
                  {compatibility === 'neutral' && '🟡 Trung tính'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Love & Relationship */}
      <div className={styles.loveAnalysis}>
        <h4>💕 Phong Cách Tình Yêu & Mối Quan Hệ</h4>
        <div className={styles.loveCard}>
          <div className={styles.loveContent}>
            <p>{personality.love}</p>
            <div className={styles.loveTraits}>
              <div className={styles.loveTrait}>
                <span className={styles.loveLabel}>Phong cách yêu:</span>
                <span>{personality.coreTraits[0]} và {personality.coreTraits[1]}</span>
              </div>
              <div className={styles.loveTrait}>
                <span className={styles.loveLabel}>Cần từ đối phương:</span>
                <span>
                  {dayMaster.includes('Dương') ? 'Sự hiểu biết và không gian' : 'Sự bảo vệ và chăm sóc'}
                </span>
              </div>
              <div className={styles.loveTrait}>
                <span className={styles.loveLabel}>Thách thức trong tình yêu:</span>
                <span>{personality.weaknesses[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Life Advice */}
      <div className={styles.lifeAdvice}>
        <h4>🎯 Lời Khuyên Phát Triển Bản Thân</h4>
        <div className={styles.adviceGrid}>
          <div className={styles.adviceCard}>
            <h5>🌟 Phát huy điểm mạnh</h5>
            <p>Tận dụng khả năng <strong>{personality.strengths[0].toLowerCase()}</strong> và <strong>{personality.strengths[1].toLowerCase()}</strong> để đạt được thành công trong sự nghiệp và cuộc sống.</p>
          </div>
          
          <div className={styles.adviceCard}>
            <h5>⚖️ Cân bằng điểm yếu</h5>
            <p>Chú ý khắc phục tính <strong>{personality.weaknesses[0].toLowerCase()}</strong>. Hãy luyện tập sự kiên nhẫn và mở rộng tư duy.</p>
          </div>
          
          <div className={styles.adviceCard}>
            <h5>🎨 Phong cách sống</h5>
            <p>Sử dụng màu <span style={{ color: personality.color, fontWeight: 'bold' }}>{personality.element}</span> trong trang phục và không gian sống để tăng cường năng lượng tích cực.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPersonalityAnalysis;
