// Enhanced Vietnamese Astrology - Additional Data and Analysis
import { ThienCan, FiveElement } from './canChiData';

// Detailed element interactions and meanings
export interface ElementInteraction {
  element: FiveElement;
  generates: FiveElement;
  destroys: FiveElement;
  generatedBy: FiveElement;
  destroyedBy: FiveElement;
  strengthenedBy: FiveElement[];
  weakenedBy: FiveElement[];
  colors: string[];
  directions: string[];
  seasons: string[];
  emotions: string[];
  bodyParts: string[];
  personality: string[];
}

export const elementInteractions: Record<FiveElement, ElementInteraction> = {
  'Mộc': {
    element: 'Mộc',
    generates: 'Hỏa',
    destroys: 'Thổ',
    generatedBy: 'Thủy',
    destroyedBy: 'Kim',
    strengthenedBy: ['Thủy', 'Mộc'],
    weakenedBy: ['Kim', 'Hỏa'],
    colors: ['Xanh lá', 'Xanh lục', 'Xanh ngọc'],
    directions: ['Đông', 'Đông Nam'],
    seasons: ['Xuân'],
    emotions: ['Tức giận', 'Khoan dung', 'Sáng tạo'],
    bodyParts: ['Gan', 'Mật', 'Mắt', 'Gân', 'Móng tay'],
    personality: ['Nhân từ', 'Linh hoạt', 'Sáng tạo', 'Kiên trì', 'Phát triển']
  },
  'Hỏa': {
    element: 'Hỏa',
    generates: 'Thổ',
    destroys: 'Kim',
    generatedBy: 'Mộc',
    destroyedBy: 'Thủy',
    strengthenedBy: ['Mộc', 'Hỏa'],
    weakenedBy: ['Thủy', 'Thổ'],
    colors: ['Đỏ', 'Hồng', 'Cam', 'Tím'],
    directions: ['Nam'],
    seasons: ['Hạ'],
    emotions: ['Vui vẻ', 'Hào hứng', 'Bốc đồng'],
    bodyParts: ['Tim', 'Ruột non', 'Lưỡi', 'Mạch máu'],
    personality: ['Nhiệt tình', 'Hoạt bát', 'Thông minh', 'Nhanh nhẹn', 'Giao tiếp']
  },
  'Thổ': {
    element: 'Thổ',
    generates: 'Kim',
    destroys: 'Thủy',
    generatedBy: 'Hỏa',
    destroyedBy: 'Mộc',
    strengthenedBy: ['Hỏa', 'Thổ'],
    weakenedBy: ['Mộc', 'Kim'],
    colors: ['Vàng', 'Nâu', 'Be', 'Cam đất'],
    directions: ['Trung tâm', 'Tây Nam', 'Đông Bắc'],
    seasons: ['Cuối mùa'],
    emotions: ['Suy tư', 'Lo lắng', 'Trung thực'],
    bodyParts: ['Lách', 'Dạ dày', 'Miệng', 'Cơ bắp'],
    personality: ['Trung thực', 'Đáng tin cậy', 'Kiên nhẫn', 'Thực tế', 'Bảo thủ']
  },
  'Kim': {
    element: 'Kim',
    generates: 'Thủy',
    destroys: 'Mộc',
    generatedBy: 'Thổ',
    destroyedBy: 'Hỏa',
    strengthenedBy: ['Thổ', 'Kim'],
    weakenedBy: ['Hỏa', 'Thủy'],
    colors: ['Trắng', 'Bạc', 'Vàng kim', 'Xám'],
    directions: ['Tây', 'Tây Bắc'],
    seasons: ['Thu'],
    emotions: ['Buồn bã', 'Quyết đoán', 'Công lý'],
    bodyParts: ['Phổi', 'Ruột già', 'Mũi', 'Da'],
    personality: ['Công bằng', 'Quyết đoán', 'Có tổ chức', 'Nghiêm khắc', 'Trách nhiệm']
  },
  'Thủy': {
    element: 'Thủy',
    generates: 'Mộc',
    destroys: 'Hỏa',
    generatedBy: 'Kim',
    destroyedBy: 'Thổ',
    strengthenedBy: ['Kim', 'Thủy'],
    weakenedBy: ['Thổ', 'Mộc'],
    colors: ['Đen', 'Xanh đen', 'Xanh dương đậm'],
    directions: ['Bắc'],
    seasons: ['Đông'],
    emotions: ['Sợ hãi', 'Khôn ngoan', 'Thích ứng'],
    bodyParts: ['Thận', 'Bàng quang', 'Tai', 'Xương'],
    personality: ['Khôn ngoan', 'Linh hoạt', 'Kiên trì', 'Bí ẩn', 'Trực giác']
  }
};

// Detailed Can information with enhanced meanings
export interface EnhancedCanInfo {
  can: ThienCan;
  element: FiveElement;
  yinYang: 'Âm' | 'Dương';
  chineseCharacter: string;
  meaning: string;
  detailedMeaning: string;
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  careerPaths: string[];
  relationships: string;
  moneyAttitude: string;
  healthTendencies: string[];
  luckyNumbers: number[];
  luckyColors: string[];
  favorableDirections: string[];
}

export const enhancedCanData: Record<ThienCan, EnhancedCanInfo> = {
  'Giáp': {
    can: 'Giáp',
    element: 'Mộc',
    yinYang: 'Dương',
    chineseCharacter: '甲',
    meaning: 'Gỗ lớn, cây to',
    detailedMeaning: 'Như những cây gỗ lớn, vững chắc và kiên cường. Có khả năng lãnh đạo tự nhiên và sức mạnh nội tại.',
    personality: ['Lãnh đạo', 'Kiên cường', 'Bảo thủ', 'Có chính kiến', 'Trách nhiệm cao'],
    strengths: ['Ý chí mạnh mẽ', 'Khả năng lãnh đạo', 'Sự kiên trì', 'Tính nguyên tắc', 'Bảo vệ người khác'],
    weaknesses: ['Cứng đầu', 'Khó thay đổi', 'Thiếu linh hoạt', 'Đôi khi độc đoán', 'Áp lực cao'],
    careerPaths: ['CEO/Giám đốc', 'Chính trị gia', 'Quản lý cấp cao', 'Luật sư', 'Kiến trúc sư', 'Kỹ sư xây dựng'],
    relationships: 'Là người bảo vệ gia đình, chung thủy nhưng đôi khi hơi cứng nhắc trong cách thể hiện tình cảm.',
    moneyAttitude: 'Thích đầu tư bất động sản và tài sản cố định. Có xu hướng tiết kiệm và xây dựng tài sản lâu dài.',
    healthTendencies: ['Gan mật', 'Cơ xương khớp', 'Hệ thần kinh', 'Áp lực cao'],
    luckyNumbers: [1, 3, 8],
    luckyColors: ['Xanh lá', 'Nâu', 'Đen'],
    favorableDirections: ['Đông', 'Bắc']
  },
  'Ất': {
    can: 'Ất',
    element: 'Mộc',
    yinYang: 'Âm',
    chineseCharacter: '乙',
    meaning: 'Cây nhỏ, dây leo',
    detailedMeaning: 'Như những cây nhỏ dẻo dai, có khả năng thích nghi cao và tính linh hoạt trong mọi hoàn cảnh.',
    personality: ['Linh hoạt', 'Dịu dàng', 'Thích nghi', 'Nhạy cảm', 'Kiên trì thầm lặng'],
    strengths: ['Khả năng thích nghi', 'Tính kiên trì', 'Sự dịu dàng', 'Trực giác tốt', 'Khéo léo'],
    weaknesses: ['Thiếu quyết đoán', 'Dễ bị tổn thương', 'Phụ thuộc vào người khác', 'Hay lo lắng', 'Thiếu tự tin'],
    careerPaths: ['Thiết kế', 'Nghệ thuật', 'Y tá', 'Giáo viên', 'Tư vấn', 'Làm đẹp'],
    relationships: 'Rất dịu dàng và chu đáo trong tình yêu, cần được bảo vệ và chăm sóc từ đối phương.',
    moneyAttitude: 'Chi tiêu linh hoạt nhưng cần học cách quản lý tài chính tốt hơn. Thích đầu tư vào sắc đẹp và chất lượng cuộc sống.',
    healthTendencies: ['Hệ thần kinh', 'Tiêu hóa', 'Gan mật', 'Stress'],
    luckyNumbers: [2, 6, 9],
    luckyColors: ['Xanh lá nhạt', 'Hồng', 'Trắng'],
    favorableDirections: ['Đông', 'Tây Nam']
  },
  'Bính': {
    can: 'Bính',
    element: 'Hỏa',
    yinYang: 'Dương',
    chineseCharacter: '丙',
    meaning: 'Ánh sáng mặt trời',
    detailedMeaning: 'Như ánh sáng mặt trời, mang lại năng lượng tích cực, ấm áp và có khả năng truyền cảm hứng cho người khác.',
    personality: ['Nhiệt tình', 'Lạc quan', 'Hào phóng', 'Có tài lãnh đạo', 'Truyền cảm hứng'],
    strengths: ['Năng lượng tích cực', 'Khả năng truyền cảm hứng', 'Tính lạc quan', 'Sự hào phóng', 'Tài giao tiếp'],
    weaknesses: ['Nóng tính', 'Thiếu kiên nhẫn', 'Dễ bốc đồng', 'Có thể quá tự tin', 'Khó tập trung lâu'],
    careerPaths: ['Diễn viên', 'MC/Host', 'Nhà báo', 'Giám đốc marketing', 'Huấn luyện viên', 'Chính trị gia'],
    relationships: 'Rất nhiệt tình và lãng mạn trong tình yêu, thích thể hiện tình cảm một cách công khai và hoành tráng.',
    moneyAttitude: 'Hào phóng trong chi tiêu, thích đầu tư vào việc kinh doanh và các dự án mang tính sáng tạo.',
    healthTendencies: ['Tim mạch', 'Huyết áp', 'Mất ngủ', 'Stress'],
    luckyNumbers: [2, 7, 9],
    luckyColors: ['Đỏ', 'Cam', 'Vàng'],
    favorableDirections: ['Nam', 'Đông']
  },
  'Đinh': {
    can: 'Đinh',
    element: 'Hỏa',
    yinYang: 'Âm',
    chineseCharacter: '丁',
    meaning: 'Ngọn lửa nhỏ, ánh nến',
    detailedMeaning: 'Như ngọn lửa nhỏ ấm áp, mang lại sự ấm cúng và có khả năng thấu hiểu, chăm sóc người khác.',
    personality: ['Ấm áp', 'Chu đáo', 'Tinh tế', 'Nhạy cảm', 'Có trực giác'],
    strengths: ['Sự ấm áp', 'Khả năng thấu hiểu', 'Tính chu đáo', 'Trực giác tốt', 'Tài nghệ thuật'],
    weaknesses: ['Quá nhạy cảm', 'Hay lo lắng', 'Thiếu tự tin', 'Dễ bị tổn thương', 'Khó quyết định'],
    careerPaths: ['Nghệ sĩ', 'Nhà văn', 'Tâm lý học', 'Đầu bếp', 'Nhà thiết kế nội thất', 'Y tá'],
    relationships: 'Rất ấm áp và chu đáo, có khả năng tạo không gian ấm cúng và hạnh phúc cho gia đình.',
    moneyAttitude: 'Thận trọng trong chi tiêu, thích đầu tư vào việc trang trí nhà cửa và nâng cao chất lượng cuộc sống.',
    healthTendencies: ['Tim nhỏ', 'Tuần hoàn', 'Tinh thần', 'Mắt'],
    luckyNumbers: [4, 6, 7],
    luckyColors: ['Đỏ nhạt', 'Hồng', 'Tím'],
    favorableDirections: ['Nam', 'Tây Nam']
  },
  'Mậu': {
    can: 'Mậu',
    element: 'Thổ',
    yinYang: 'Dương',
    chineseCharacter: '戊',
    meaning: 'Núi đá, đất cứng',
    detailedMeaning: 'Như núi đá vững chắc, có tính kiên định và là chỗ dựa đáng tin cậy cho mọi người.',
    personality: ['Vững chắc', 'Đáng tin cậy', 'Thực tế', 'Kiên nhẫn', 'Bảo thủ'],
    strengths: ['Sự ổn định', 'Tính đáng tin cậy', 'Khả năng chịu đựng', 'Tư duy thực tế', 'Lòng trung thành'],
    weaknesses: ['Quá bảo thủ', 'Chậm thay đổi', 'Thiếu sáng tạo', 'Cứng nhắc', 'Khó thích nghi'],
    careerPaths: ['Bất động sản', 'Xây dựng', 'Nông nghiệp', 'Ngân hàng', 'Kế toán', 'Quản lý tài sản'],
    relationships: 'Rất trung thành và đáng tin cậy, là người bạn đời lý tưởng cho những ai cần sự ổn định.',
    moneyAttitude: 'Rất thận trọng và có kế hoạch trong việc tài chính, thích tích lũy và đầu tư an toàn.',
    healthTendencies: ['Dạ dày', 'Tiêu hóa', 'Cơ bắp', 'Xương khớp'],
    luckyNumbers: [5, 8, 10],
    luckyColors: ['Vàng', 'Nâu', 'Be'],
    favorableDirections: ['Trung tâm', 'Tây Nam']
  },
  'Kỷ': {
    can: 'Kỷ',
    element: 'Thổ',
    yinYang: 'Âm',
    chineseCharacter: '己',
    meaning: 'Đất mềm, ruộng đồng',
    detailedMeaning: 'Như đất ruộng màu mỡ, có khả năng nuôi dưỡng và chăm sóc, luôn đặt lợi ích của người khác lên hàng đầu.',
    personality: ['Nhân từ', 'Hy sinh', 'Chăm sóc', 'Khiêm tốn', 'Tận tụy'],
    strengths: ['Lòng nhân ái', 'Khả năng chăm sóc', 'Sự hy sinh', 'Tính khiêm tốn', 'Trách nhiệm'],
    weaknesses: ['Quá hy sinh', 'Thiếu chủ kiến', 'Dễ bị lợi dụng', 'Không biết từ chối', 'Stress cao'],
    careerPaths: ['Y tá', 'Giáo viên', 'Công tác xã hội', 'Nhân viên chăm sóc', 'Nông nghiệp', 'Dịch vụ'],
    relationships: 'Rất tận tụy và hy sinh cho gia đình, luôn đặt hạnh phúc của người khác lên trước bản thân.',
    moneyAttitude: 'Thường tiết kiệm để lo cho gia đình, ít khi chi tiêu cho bản thân và thích đầu tư vào giáo dục con em.',
    healthTendencies: ['Lách', 'Dạ dày', 'Stress', 'Mệt mỏi'],
    luckyNumbers: [6, 8, 9],
    luckyColors: ['Vàng nhạt', 'Nâu nhạt', 'Xanh lá'],
    favorableDirections: ['Tây Nam', 'Đông']
  },
  'Canh': {
    can: 'Canh',
    element: 'Kim',
    yinYang: 'Dương',
    chineseCharacter: '庚',
    meaning: 'Sắt thép, kim loại cứng',
    detailedMeaning: 'Như sắt thép cứng cáp, có tính cách mạnh mẽ, quyết đoán và không khoan nhượng với điều sai trái.',
    personality: ['Quyết đoán', 'Công bằng', 'Mạnh mẽ', 'Nghiêm khắc', 'Có nguyên tắc'],
    strengths: ['Tính quyết đoán', 'Lòng công bằng', 'Sức mạnh ý chí', 'Tính kỷ luật', 'Khả năng lãnh đạo'],
    weaknesses: ['Quá nghiêm khắc', 'Thiếu cảm xúc', 'Cứng nhắc', 'Khó thay đổi', 'Áp lực cao'],
    careerPaths: ['Quân đội', 'Cảnh sát', 'Luật sư', 'Thẩm phán', 'Kỹ sư', 'Quản lý chất lượng'],
    relationships: 'Rất trung thực và đáng tin cậy nhưng đôi khi thiếu sự lãng mạn và biểu đạt tình cảm.',
    moneyAttitude: 'Quản lý tài chính rất chặt chẽ và có kỷ luật, có khả năng tạo ra và bảo vệ tài sản hiệu quả.',
    healthTendencies: ['Phổi', 'Hô hấp', 'Da', 'Xương'],
    luckyNumbers: [4, 7, 9],
    luckyColors: ['Trắng', 'Bạc', 'Vàng kim'],
    favorableDirections: ['Tây', 'Tây Bắc']
  },
  'Tân': {
    can: 'Tân',
    element: 'Kim',
    yinYang: 'Âm',
    chineseCharacter: '辛',
    meaning: 'Vàng bạc, kim loại quý',
    detailedMeaning: 'Như vàng bạc tinh khiết, có gu thẩm mỹ cao, tinh tế và thích những điều đẹp đẽ trong cuộc sống.',
    personality: ['Tinh tế', 'Thẩm mỹ', 'Hoàn hảo', 'Nhạy cảm', 'Có gu'],
    strengths: ['Gu thẩm mỹ', 'Tính tinh tế', 'Sự hoàn hảo', 'Khả năng nghệ thuật', 'Tình cảm sâu sắc'],
    weaknesses: ['Kén chọn', 'Hoàn hảo chủ nghĩa', 'Tốn kém', 'Khó hài lòng', 'Nhạy cảm quá mức'],
    careerPaths: ['Thiết kế thời trang', 'Trang sức', 'Nghệ thuật', 'Làm đẹp', 'Kiến trúc', 'Nhiếp ảnh'],
    relationships: 'Rất lãng mạn và tinh tế trong tình yêu, thích những cử chỉ đẹp và không gian lãng mạn.',
    moneyAttitude: 'Thích chi tiêu cho những món đồ đẹp và chất lượng cao, cần học cách cân bằng giữa sở thích và tài chính.',
    healthTendencies: ['Phổi', 'Da', 'Dị ứng', 'Hệ miễn dịch'],
    luckyNumbers: [4, 6, 8],
    luckyColors: ['Trắng', 'Bạc', 'Vàng'],
    favorableDirections: ['Tây', 'Tây Bắc']
  },
  'Nhâm': {
    can: 'Nhâm',
    element: 'Thủy',
    yinYang: 'Dương',
    chineseCharacter: '壬',
    meaning: 'Đại dương, sông lớn',
    detailedMeaning: 'Như đại dương bao la, có tầm nhìn rộng lớn, khả năng thích ứng cao và sức mạnh tiềm ẩn lớn.',
    personality: ['Khôn ngoan', 'Linh hoạt', 'Có tầm nhìn', 'Bí ẩn', 'Thích phiêu lưu'],
    strengths: ['Trí tuệ', 'Khả năng thích ứng', 'Tầm nhìn xa', 'Sức mạnh tiềm ẩn', 'Tính linh hoạt'],
    weaknesses: ['Thất thường', 'Khó đoán', 'Thiếu ổn định', 'Dễ thay đổi', 'Có thể lạnh lùng'],
    careerPaths: ['Nghiên cứu', 'Công nghệ', 'Du lịch', 'Thương mại quốc tế', 'Tư vấn', 'Khoa học'],
    relationships: 'Sâu sắc và bí ẩn trong tình cảm, cần thời gian để mở lòng nhưng một khi yêu sẽ rất chân thành.',
    moneyAttitude: 'Có khả năng kiếm tiền tốt nhờ trí tuệ nhưng chi tiêu không ổn định, cần học cách quản lý.',
    healthTendencies: ['Thận', 'Bàng quang', 'Hệ tuần hoàn', 'Tai'],
    luckyNumbers: [1, 6, 9],
    luckyColors: ['Đen', 'Xanh đen', 'Xanh dương'],
    favorableDirections: ['Bắc', 'Tây']
  },
  'Quý': {
    can: 'Quý',
    element: 'Thủy',
    yinYang: 'Âm',
    chineseCharacter: '癸',
    meaning: 'Sương móc, nước trong',
    detailedMeaning: 'Như sương mai trong trẻo, có tâm hồn tinh khiết, trực giác tốt và khả năng cảm thông cao.',
    personality: ['Tinh khiết', 'Trực giác', 'Nhạy bén', 'Dịu dàng', 'Thấu hiểu'],
    strengths: ['Trực giác mạnh', 'Khả năng cảm thông', 'Tính tinh khiết', 'Sự dịu dàng', 'Thích nghi tốt'],
    weaknesses: ['Thiếu quyết đoán', 'Dễ bị ảnh hưởng', 'Quá mềm lòng', 'Thiếu tự tin', 'Hay lo lắng'],
    careerPaths: ['Tâm lý học', 'Tư vấn', 'Y học', 'Nghệ thuật', 'Giáo dục', 'Chăm sóc sức khỏe'],
    relationships: 'Rất dịu dàng và thấu hiểu, có khả năng cảm nhận được tâm trạng của đối phương và chăm sóc chu đáo.',
    moneyAttitude: 'Thu nhập thường ổn định nhưng không cao, cần học cách đầu tư thông minh để tăng tài sản.',
    healthTendencies: ['Thận', 'Hệ nội tiết', 'Sinh dục', 'Xương'],
    luckyNumbers: [3, 6, 10],
    luckyColors: ['Đen nhạt', 'Xanh dương nhạt', 'Trắng'],
    favorableDirections: ['Bắc', 'Đông']
  }
};

// Career compatibility matrix based on Can combinations
export interface CareerCompatibility {
  combination: [ThienCan, ThienCan];
  compatibility: 'Tuyệt vời' | 'Tốt' | 'Bình thường' | 'Cần cẩn thận';
  description: string;
  advice: string;
}

export const careerCompatibilityMatrix: CareerCompatibility[] = [
  {
    combination: ['Giáp', 'Ất'],
    compatibility: 'Tuyệt vời',
    description: 'Kết hợp giữa sự mạnh mẽ và linh hoạt tạo nên đội ngũ hoàn hảo',
    advice: 'Giáp nên đảm nhận vai trò lãnh đạo, Ất hỗ trợ với khả năng thích nghi'
  },
  {
    combination: ['Bính', 'Đinh'],
    compatibility: 'Tuyệt vời',
    description: 'Cả hai đều có ngọn lửa đam mê, tạo nên sự sáng tạo vô tận',
    advice: 'Hợp tác trong các dự án sáng tạo, marketing và truyền thông'
  },
  {
    combination: ['Mậu', 'Kỷ'],
    compatibility: 'Tốt',
    description: 'Sự kết hợp giữa ổn định và chăm sóc tạo nên môi trường làm việc tuyệt vời',
    advice: 'Phù hợp cho các ngành dịch vụ, chăm sóc khách hàng'
  },
  {
    combination: ['Canh', 'Tân'],
    compatibility: 'Bình thường',
    description: 'Cả hai đều có tính cách mạnh, cần học cách phối hợp',
    advice: 'Nên phân chia rõ trách nhiệm để tránh xung đột'
  },
  {
    combination: ['Nhâm', 'Quý'],
    compatibility: 'Tốt',
    description: 'Trí tuệ và trực giác kết hợp tạo nên những ý tưởng độc đáo',
    advice: 'Thích hợp cho nghiên cứu, phát triển sản phẩm mới'
  }
];

// Monthly fortune predictions based on Can
export interface MonthlyFortune {
  month: number;
  monthName: string;
  canFortune: Record<ThienCan, {
    overall: 'Xuất sắc' | 'Tốt' | 'Bình thường' | 'Cần cẩn thận';
    career: string;
    love: string;
    health: string;
    money: string;
    advice: string;
  }>;
}

export const monthlyFortuneData: MonthlyFortune[] = [
  {
    month: 1,
    monthName: 'Tháng Giêng',
    canFortune: {
      'Giáp': {
        overall: 'Tốt',
        career: 'Khởi đầu năm thuận lợi với nhiều cơ hội mới',
        love: 'Tình cảm ổn định, có thể có tin vui',
        health: 'Sức khỏe tốt, nên tập thể dục thường xuyên',
        money: 'Thu nhập ổn định, có cơ hội đầu tư',
        advice: 'Hãy lập kế hoạch rõ ràng cho cả năm'
      },
      'Ất': {
        overall: 'Bình thường',
        career: 'Cần kiên nhẫn và không nên vội vàng',
        love: 'Tình cảm có thể có những biến động nhỏ',
        health: 'Cần chú ý đến sức khỏe tinh thần',
        money: 'Chi tiêu cần có kế hoạch',
        advice: 'Tập trung vào việc học hỏi và phát triển bản thân'
      },
      'Bính': {
        overall: 'Xuất sắc',
        career: 'Năng lượng cao, nhiều dự án thành công',
        love: 'Tình cảm nồng nhiệt và hạnh phúc',
        health: 'Sức khỏe tuyệt vời, đầy năng lượng',
        money: 'Thu nhập tăng mạnh từ công việc',
        advice: 'Tận dụng momentum để đạt được mục tiêu lớn'
      },
      'Đinh': {
        overall: 'Tốt',
        career: 'Công việc sáng tạo được đánh giá cao',
        love: 'Tình cảm ấm áp và lãng mạn',
        health: 'Cần chú ý đến giấc ngủ',
        money: 'Thu nhập ổn định từ tài năng',
        advice: 'Phát huy khả năng nghệ thuật và sáng tạo'
      },
      'Mậu': {
        overall: 'Bình thường',
        career: 'Tiến độ chậm nhưng chắc chắn',
        love: 'Tình cảm cần thêm sự đổi mới',
        health: 'Sức khỏe ổn định',
        money: 'Nên tập trung vào tiết kiệm',
        advice: 'Kiên nhẫn và làm việc theo kế hoạch'
      },
      'Kỷ': {
        overall: 'Tốt',
        career: 'Được đồng nghiệp và cấp trên đánh giá cao',
        love: 'Tình cảm gia đình hòa thuận',
        health: 'Cần chú ý đến chế độ ăn uống',
        money: 'Thu nhập ổn định, có thể có thưởng',
        advice: 'Tiếp tục duy trì sự tận tâm trong công việc'
      },
      'Canh': {
        overall: 'Cần cẩn thận',
        career: 'Có thể gặp thử thách, cần kiên định',
        love: 'Tình cảm cần thêm sự thấu hiểu',
        health: 'Cần chú ý đến căng thẳng',
        money: 'Tránh các khoản đầu tư rủi ro',
        advice: 'Giữ bình tĩnh và không vội vàng quyết định'
      },
      'Tân': {
        overall: 'Bình thường',
        career: 'Cần tập trung vào chất lượng hơn số lượng',
        love: 'Tình cảm cần thêm sự chân thành',
        health: 'Sức khỏe tổng quát tốt',
        money: 'Chi tiêu cần được kiểm soát',
        advice: 'Đầu tư vào phát triển kỹ năng cá nhân'
      },
      'Nhâm': {
        overall: 'Tốt',
        career: 'Nhiều ý tưởng mới và cơ hội phát triển',
        love: 'Tình cảm có những bất ngờ thú vị',
        health: 'Sức khỏe tốt, tinh thần sảng khoái',
        money: 'Có cơ hội kiếm thêm thu nhập',
        advice: 'Mở rộng mạng lưới quan hệ'
      },
      'Quý': {
        overall: 'Bình thường',
        career: 'Cần kiên nhẫn chờ đợi cơ hội',
        love: 'Tình cảm dịu dàng và ổn định',
        health: 'Cần chú ý đến sức khỏe phụ nữ',
        money: 'Thu nhập ổn định nhưng cần tiết kiệm',
        advice: 'Tập trung vào việc học hỏi và phát triển nội tại'
      }
    }
  }
  // More months would be added here...
];

export default {
  elementInteractions,
  enhancedCanData,
  careerCompatibilityMatrix,
  monthlyFortuneData
};
