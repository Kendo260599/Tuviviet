## 🧪 MANUAL TEST PROTOCOL - VERIFY LOGIC SAFETY

### ✅ PRE-UPGRADE TESTS (Chạy trước khi nâng cấp)

**Test Case 1: Core Birth Chart Calculation**
1. Vào: http://localhost:3000/Tuviviet/birth-chart
2. Nhập: `25/8/1990, 10:15`
3. Click "Tính Lá Số"
4. **Expected Results:**
   - Năm: `Canh Ngọ` (Kim Dương)
   - Tháng: Phải hiển thị Can Chi hợp lệ
   - Ngày: Phải hiển thị Can Chi hợp lệ  
   - Giờ: Phải hiển thị Can Chi hợp lệ
   - Tabs enhanced analysis hoạt động
   - Không có lỗi JavaScript

**Test Case 2: Edge Cases**
1. Nhập ngày không hợp lệ: `30/2/1990`
2. **Expected:** Hiển thị lỗi validation
3. Nhập năm quá sớm: `1/1/1800`
4. **Expected:** Hiển thị lỗi validation
5. Nhập giờ không hợp lệ: `25:00`
6. **Expected:** Hiển thị lỗi validation

**Test Case 3: Enhanced Features**
1. Tính lá số hợp lệ
2. Click qua các tabs: Tính cách, Ngũ hành, Vận may, Giai đoạn đời
3. **Expected:** Tất cả tabs load được data
4. Thay đổi tháng trong "Dự báo vận may"
5. **Expected:** Data cập nhật theo tháng

**Test Case 4: Other Pages**
1. Trang chủ: http://localhost:3000/Tuviviet/
2. Vietnamese Zodiac: http://localhost:3000/Tuviviet/vietnamese-zodiac
3. Your Sign: http://localhost:3000/Tuviviet/your-sign
4. Compatibility: http://localhost:3000/Tuviviet/compatibility
5. **Expected:** Tất cả pages load và hoạt động bình thường

### ✅ POST-UPGRADE TESTS (Chạy sau mỗi thay đổi)

**Repeat all Pre-upgrade tests** + thêm:

**Test Case 5: Performance Check**
1. Mở DevTools → Network
2. Refresh trang birth-chart
3. **Expected:** Load time < 3 seconds
4. Check console errors: **Expected:** No errors

**Test Case 6: Responsive Test**  
1. Toggle device mode (mobile/tablet)
2. Test all functions trên mobile
3. **Expected:** UI responsive và functional

### 🚨 FAILURE PROTOCOL

Nếu BẤT KỲ test nào fail:

```bash
# IMMEDIATE ROLLBACK
git checkout backup-stable-logic
git checkout -b emergency-fix
# Verify working state
# Fix issues 
# Re-test before proceeding
```

### ✅ SUCCESS CRITERIA

**Chỉ proceed khi:**
- [ ] Tất cả 6 test cases PASS
- [ ] Không có JavaScript errors
- [ ] Performance maintained
- [ ] Core functions identical results
- [ ] Enhanced features working
- [ ] All pages functional

### 📊 VALIDATION LOG

**Date:** ___________  
**Tester:** ___________  
**Pre-upgrade Status:**
- [ ] Test Case 1: ✅/❌
- [ ] Test Case 2: ✅/❌  
- [ ] Test Case 3: ✅/❌
- [ ] Test Case 4: ✅/❌

**Post-upgrade Status:**
- [ ] Test Case 1: ✅/❌
- [ ] Test Case 2: ✅/❌
- [ ] Test Case 3: ✅/❌  
- [ ] Test Case 4: ✅/❌
- [ ] Test Case 5: ✅/❌
- [ ] Test Case 6: ✅/❌

**Overall Result:** ✅ SAFE TO PROCEED / ❌ ROLLBACK REQUIRED

---
**Note:** Chỉ khi TẤT CẢ tests pass mới được tiến hành nâng cấp tiếp theo!
