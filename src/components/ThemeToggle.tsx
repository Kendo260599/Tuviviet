import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  className?: string;
}

type Theme = 'light' | 'dark';

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('tuviviet-theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('tuviviet-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#121212' : '#ffffff');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className={`${styles.themeToggle} ${className}`}
      onClick={toggleTheme}
      aria-label={`Chuyển sang chế độ ${theme === 'light' ? 'tối' : 'sáng'}`}
      title={`Chuyển sang chế độ ${theme === 'light' ? 'tối' : 'sáng'}`}
    >
      <div className={styles.toggleTrack}>
        <div className={`${styles.toggleThumb} ${theme === 'dark' ? styles.dark : styles.light}`}>
          {theme === 'light' ? (
            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z"/>
              <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"/>
            </svg>
          ) : (
            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
        </div>
      </div>
      <span className={styles.label}>
        {theme === 'light' ? 'Sáng' : 'Tối'}
      </span>
    </button>
  );
};

export default ThemeToggle;
