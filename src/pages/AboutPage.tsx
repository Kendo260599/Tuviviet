import React from 'react';
import { shareContent, createGeneralShareData } from '../utils/shareUtils';
import styles from './AboutPage.module.css';

export const AboutPage: React.FC = () => {
  const handleShare = async () => {
    const baseUrl = window.location.origin + window.location.pathname.replace('/about', '');
    const shareData = createGeneralShareData(baseUrl);
    
    const success = await shareContent(shareData);
    if (success) {
      console.log('Shared successfully');
    }
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <header className={styles.header}>
          <h1>Về Tử Vi Việt</h1>
          <p>Khám phá thế giới cung hoàng đạo và tử vi một cách hiện đại</p>
        </header>

        <main className={styles.main}>
          <section className={styles.introSection}>
            <div className={styles.card}>
              <h2>🌟 Tử Vi Việt là gì?</h2>
              <p>
                Tử Vi Việt là ứng dụng web hiện đại giúp bạn khám phá thế giới cung hoàng đạo và tử vi 
                một cách dễ dàng, tiện lợi. Chúng tôi mang đến cho bạn những thông tin chi tiết về 
                12 cung hoàng đạo, tử vi hàng ngày và độ tương hợp trong các mối quan hệ.
              </p>
            </div>
          </section>

          <section className={styles.featuresSection}>
            <h2>✨ Tính năng nổi bật</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📅</div>
                <h3>Tử vi hàng ngày</h3>
                <p>Cập nhật tử vi mới nhất cho từng cung hoàng đạo theo ngày, tuần và tháng</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💝</div>
                <h3>Tương hợp cung hoàng đạo</h3>
                <p>Khám phá mức độ tương hợp giữa các cung trong tình yêu và mối quan hệ</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3>Tìm kiếm thông minh</h3>
                <p>Dễ dàng tìm kiếm và khám phá thông tin về bất kỳ cung hoàng đạo nào</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3>Thiết kế responsive</h3>
                <p>Hoạt động mượt mà trên mọi thiết bị từ điện thoại đến máy tính</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Tải nhanh</h3>
                <p>Ứng dụng được tối ưu hóa để tải nhanh và tiết kiệm dữ liệu</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌙</div>
                <h3>Giao diện thân thiện</h3>
                <p>Thiết kế đẹp mắt với màu sắc hài hòa và dễ sử dụng</p>
              </div>
            </div>
          </section>

          <section className={styles.zodiacSection}>
            <div className={styles.card}>
              <h2>🌌 12 Cung Hoàng Đạo</h2>
              <p>
                Cung hoàng đạo được chia thành 12 cung dựa trên vị trí của mặt trời tại thời điểm sinh. 
                Mỗi cung có những đặc điểm, tính cách và vận mệnh riêng biệt.
              </p>
              
              <div className={styles.elementsGrid}>
                <div className={styles.elementCard}>
                  <h3>🔥 Hỏa</h3>
                  <p>Bạch Dương, Sư Tử, Nhân Mã</p>
                  <span>Năng động, nhiệt huyết, dũng cảm</span>
                </div>
                
                <div className={styles.elementCard}>
                  <h3>🌍 Thổ</h3>
                  <p>Kim Ngưu, Xử Nữ, Ma Kết</p>
                  <span>Thực tế, ổn định, kiên nhẫn</span>
                </div>
                
                <div className={styles.elementCard}>
                  <h3>💨 Khí</h3>
                  <p>Song Tử, Thiên Bình, Bảo Bình</p>
                  <span>Thông minh, giao tiếp, sáng tạo</span>
                </div>
                
                <div className={styles.elementCard}>
                  <h3>💧 Thủy</h3>
                  <p>Cự Giải, Bò Cạp, Song Ngư</p>
                  <span>Cảm xúc, trực giác, nhạy cảm</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.techSection}>
            <div className={styles.card}>
              <h2>⚙️ Công nghệ</h2>
              <p>
                Tử Vi Việt được xây dựng bằng các công nghệ web hiện đại nhất để đảm bảo 
                hiệu suất tối ưu và trải nghiệm người dùng tuyệt vời.
              </p>
              
              <div className={styles.techGrid}>
                <div className={styles.techItem}>
                  <strong>Frontend:</strong> React + TypeScript + Vite
                </div>
                <div className={styles.techItem}>
                  <strong>Styling:</strong> CSS Modules + Custom Properties
                </div>
                <div className={styles.techItem}>
                  <strong>Deployment:</strong> GitHub Pages
                </div>
                <div className={styles.techItem}>
                  <strong>PWA:</strong> Service Worker + Web App Manifest
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <h2>🚀 Bắt đầu ngay</h2>
              <p>
                Khám phá cung hoàng đạo của bạn và xem tử vi hàng ngày cùng với Tử Vi Việt!
              </p>
              
              <div className={styles.ctaButtons}>
                <a href="/" className={styles.primaryButton}>
                  Xem Tử Vi Ngay
                </a>
                <button 
                  onClick={handleShare}
                  className={styles.secondaryButton}
                >
                  <span className={styles.shareIcon}>📤</span>
                  Chia Sẻ App
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>&copy; 2025 Tử Vi Việt. Được tạo với ❤️ cho cộng đồng yêu tử vi Việt Nam.</p>
            <p className={styles.disclaimer}>
              * Thông tin tử vi chỉ mang tính chất tham khảo và giải trí. 
              Hãy sử dụng trí tuệ của bạn để đưa ra các quyết định quan trọng.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
