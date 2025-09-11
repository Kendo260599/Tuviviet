import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { YourSignPage } from './pages/YourSignPage';
import { CompatibilityPage } from './pages/CompatibilityPage';
import { AboutPage } from './pages/AboutPage';
import { VietnameseZodiacPage } from './pages/VietnameseZodiacPage';
import BirthChartPage from './pages/BirthChartPage';
import './styles/globals.css';
import styles from './App.module.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: '🏠' },
    { path: '/birth-chart', label: 'Lá số tử vi', icon: '🔮' },
    { path: '/about', label: 'Giới thiệu', icon: 'ℹ️' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoIcon}>🌟</span>
            <span className={styles.logoText}>Tử Vi Việt</span>
          </Link>

          <button 
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${
                  location.pathname === item.path ? styles.active : ''
                }`}
                onClick={closeMenu}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Service worker registration temporarily disabled
    // if ('serviceWorker' in navigator) {
    //   window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //       .then((registration) => {
    //         console.log('SW registered: ', registration);
    //       })
    //       .catch((registrationError) => {
    //         console.log('SW registration failed: ', registrationError);
    //       });
    //   });
    // }
  }, []);

  return (
    <Router>
      <div className={styles.app}>
        <ScrollToTop />
        <Navigation />
        
        <main className={styles.main} role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/birth-chart" element={<BirthChartPage />} />
            <Route path="/vietnamese-zodiac" element={<VietnameseZodiacPage />} />
            <Route path="/your-sign" element={<YourSignPage />} />
            <Route path="/compatibility" element={<CompatibilityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={
              <div className={styles.notFound}>
                <div className="container">
                  <h1>404 - Không tìm thấy trang</h1>
                  <p>Trang bạn tìm kiếm không tồn tại.</p>
                  <Link to="/" className={styles.homeLink}>
                    Về trang chủ
                  </Link>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
