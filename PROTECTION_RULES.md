# 🛡️ PROTECTION RULES - ĐẢM BẢO AN TOÀN LOGIC

## 🚫 CẤM TUYỆT ĐỐI - DO NOT TOUCH

### Core Calculation Functions (PROTECTED)
```
❌ KHÔNG BAO GIỜ SỬA:
- src/utils/birthChartUtils.ts (functions: calculateBirthChart, getYearCanChi, getMonthCanChi, getDayCanChi, getHourCanChi)
- src/data/canChiData.ts (core data structures)
- src/utils/vietnameseZodiacUtils.ts (zodiac calculations)
- src/utils/zodiacUtils.ts (western zodiac logic)
```

### Core Data Files (PROTECTED)
```
❌ KHÔNG BAO GIỜ SỬA:
- src/data/zodiacData.ts
- src/data/vietnameseZodiacData.ts 
- src/data/compatibilityData.ts
- src/data/horoscopeData.ts
```

## ✅ AN TOÀN - CÓ THỂ NÂNG CẤP

### UI Components (SAFE TO ENHANCE)
```
✅ CÓ THỂ SỬA/THÊM:
- src/components/*.tsx (UI components)
- src/pages/*.tsx (page components)
- src/styles/*.css (styling)
- src/components/*/*.module.css (component styles)
```

### Enhanced Features (SAFE TO ADD)
```
✅ CÓ THỂ THÊM:
- src/data/enhanced*.ts (enhanced data - đã có sẵn)
- src/components/Enhanced*.tsx (enhanced UI - đã có sẵn)
- src/utils/enhanced*.ts (new utility functions)
- src/hooks/*.ts (new custom hooks)
```

### New Features (SAFE TO CREATE)
```
✅ CÓ THỂ TẠO MỚI:
- PWA configuration
- Dark mode toggle  
- Save/Load functionality
- Export features
- New UI improvements
- Performance optimizations
```

## 🧪 QUY TRÌNH TESTING BẮT BUỘC

### Before Any Change
1. ✅ Test manual trên browser
2. ✅ Verify core functions still work
3. ✅ Check TypeScript compilation
4. ✅ Test edge cases

### After Any Change  
1. ✅ Re-test all core functions
2. ✅ Verify no breaking changes
3. ✅ Test on multiple browsers
4. ✅ Performance check

## 🎯 SAFE UPGRADE PLAN

### Phase 1: UI/UX Only (100% Safe)
- Responsive design improvements
- Loading states enhancement
- Error message improvements
- Dark mode implementation

### Phase 2: Feature Addition (95% Safe)
- Save/Load birth charts
- Export to PDF/Image
- History management
- PWA setup

### Phase 3: Advanced Features (90% Safe)
- Social sharing
- Performance optimization
- Advanced UI components
- Analytics integration

## 🚨 EMERGENCY ROLLBACK

If ANYTHING goes wrong:
```bash
git checkout backup-stable-logic
git checkout -b fix-emergency
# Copy working files back
git add -A && git commit -m "🚨 EMERGENCY ROLLBACK"
```

## 📊 VALIDATION CHECKLIST

Before declaring "SAFE":
- [ ] Core birth chart calculation works
- [ ] Vietnamese zodiac calculation works  
- [ ] Western zodiac calculation works
- [ ] All existing features functional
- [ ] No TypeScript errors
- [ ] No runtime errors
- [ ] Performance maintained

---
**COMMIT: Logic protection rules established - Ready for safe upgrades**
