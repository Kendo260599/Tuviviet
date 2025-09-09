import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.hero}>
            <h1 className={styles.title}>
              Tử Vi Việt
              <span className={styles.subtitle}>Khám phá vận mệnh của bạn</span>
            </h1>
            <p className={styles.description}>
              Phân tích lá số tử vi chi tiết theo giờ sinh chính xác. Khám phá tính cách, vận mệnh và đại vận cả đời.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content - Lá Số Tử Vi only */}
      <section className={styles.systemSelection}>
        <div className="container">
          <h2 className={styles.systemTitle}>Lá Số Tử Vi</h2>
          <p className={styles.systemDescription}>
            Khám phá vận mệnh của bạn thông qua lá số tử vi
          </p>
          
          <div className={styles.systemGrid}>
            <Link to="/birth-chart" className={`${styles.systemCard} ${styles.singleCard}`}>
              <div className={styles.systemIcon}>🔮</div>
              <h3 className={styles.systemName}>Lá Số Tử Vi</h3>
              <p className={styles.systemInfo}>
                Tử vi truyền thống Việt Nam theo Tứ Trụ (Bát Tự). Phân tích chi tiết tính cách, vận mệnh, Đại vận cả đời.
              </p>
              <div className={styles.systemFeatures}>
                <span>⏰ Theo giờ sinh chính xác</span>
                <span>🎯 Phân tích Tứ Trụ</span>
                <span>💫 Đại vận cả đời</span>
              </div>
              <div className={styles.systemAction}>
                Tính lá số tử vi →
              </div>
            </Link>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className="container">
          <section className={styles.featureSection}>
            <h2>Đặc điểm nổi bật</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📊</div>
                <h3>Phân tích chi tiết</h3>
                <p>Phân tích chuyên sâu về các yếu tố trong lá số tử vi của bạn.</p>
              </div>
              
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🧠</div>
                <h3>Khoa học và truyền thống</h3>
                <p>Kết hợp giữa khoa học hiện đại và kiến thức truyền thống.</p>
              </div>
              
              <div className={styles.feature}>
                <div className={styles.featureIcon}>�</div>
                <h3>Dễ dàng sử dụng</h3>
                <p>Giao diện thân thiện, dễ sử dụng trên mọi thiết bị.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
