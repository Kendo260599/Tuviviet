// Enhanced Vietnamese Astrology System - Main Export File
// This file exports all enhanced utilities and components for the upgraded system

// Enhanced Data
export { enhancedCanData, elementInteractions } from '../data/enhancedCanChiData';
export { enhancedChiData } from '../data/enhancedChiData';

// Enhanced Analysis Functions
export {
  getEnhancedPersonalityAnalysis,
  getElementCompatibilityAnalysis,
  getMonthlyFortunePrediction,
  getLifeStageAnalysis
} from '../utils/birthChartUtils';

// Enhanced Components
export { default as EnhancedAnalysis } from '../components/EnhancedAnalysis';
export { default as EnhancedSummary } from '../components/EnhancedSummary';
export { default as QuickTips } from '../components/QuickTips';

// Types for Enhanced System
export type {
  ElementInteraction,
  EnhancedCanInfo,
} from '../data/enhancedCanChiData';

export type {
  EnhancedChiInfo,
} from '../data/enhancedChiData';

// Enhanced Analysis Result Types
export interface EnhancedPersonalityResult {
  mainPersonality: string[];
  zodiacTraits: string[];
  strengthsAndWeaknesses: {
    strengths: string[];
    weaknesses: string[];
  };
  careerGuidance: {
    canCareer: string[];
    chiCareer: string[];
    compatibility: string;
  };
  healthTendencies: {
    canHealth: string[];
    chiHealth: string[];
  };
  relationships: {
    can: string;
    chi: string;
  };
}

export interface ElementCompatibilityResult {
  interactions: {
    dayYear: any;
    dayMonth: any;
    dayHour: any;
  };
  overallHarmony: number;
  harmonyLevel: string;
}

export interface MonthlyFortuneResult {
  canPersonality: string[];
  chiFortune: string;
  combinedAdvice: string;
}

export interface LifeStageResult {
  currentStage: string;
  ageGroup: string;
  guidance: string;
}

// Utility Functions for Enhanced Features
// These functions should be imported and used in components directly
// to avoid circular dependencies in the export file

// Version and Info
export const ENHANCED_SYSTEM_VERSION = '2.0.0';
export const ENHANCEMENT_DATE = '2024-12-19';
export const FEATURES_ADDED = [
  'Detailed personality analysis',
  'Element interaction system',
  'Monthly fortune predictions',
  'Life stage analysis',
  'Career compatibility matrix',
  'Health tendencies',
  'Lucky numbers and colors',
  'Quick daily tips',
  'Enhanced UI components'
];
