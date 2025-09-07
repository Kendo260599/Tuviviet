/**
 * Enhanced Loading States Components - SAFE UI ADDITION
 * Không ảnh hưởng đến logic core, chỉ cải thiện UX
 */

import React from 'react';
import styles from './LoadingStates.module.css';

interface LoadingSpinnerProps {
  text?: string;
  subtext?: string;
  showProgress?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "Đang tính toán lá số tử vi...",
  subtext = "Vui lòng chờ trong giây lát",
  showProgress = false
}) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <div className={styles.loadingText}>{text}</div>
      <div className={styles.loadingSubtext}>{subtext}</div>
      {showProgress && (
        <div className={styles.loadingProgress}>
          <div className={styles.loadingProgressBar}></div>
        </div>
      )}
    </div>
  );
};

interface ErrorDisplayProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  onBack?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  title = "Có lỗi xảy ra",
  message,
  onRetry,
  onBack
}) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>⚠️</div>
      <div className={styles.errorTitle}>{title}</div>
      <div className={styles.errorMessage}>{message}</div>
      <div className={styles.errorActions}>
        {onRetry && (
          <button className={styles.retryButton} onClick={onRetry}>
            🔄 Thử lại
          </button>
        )}
        {onBack && (
          <button className={styles.retryButton} onClick={onBack}>
            ← Quay lại
          </button>
        )}
      </div>
    </div>
  );
};

interface SuccessNotificationProps {
  message: string;
  icon?: string;
}

export const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  message,
  icon = "✅"
}) => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.successIcon}>{icon}</div>
      <div className={styles.successMessage}>{message}</div>
    </div>
  );
};

// Safe enhancement cho existing loading state
interface EnhancedLoadingProps {
  isLoading: boolean;
  error?: string | null;
  success?: string | null;
  children: React.ReactNode;
  loadingText?: string;
  onRetry?: () => void;
}

export const EnhancedLoadingWrapper: React.FC<EnhancedLoadingProps> = ({
  isLoading,
  error,
  success,
  children,
  loadingText,
  onRetry
}) => {
  if (isLoading) {
    return <LoadingSpinner text={loadingText} showProgress={true} />;
  }
  
  if (error) {
    return (
      <ErrorDisplay 
        message={error} 
        onRetry={onRetry}
      />
    );
  }
  
  return (
    <>
      {success && <SuccessNotification message={success} />}
      {children}
    </>
  );
};
