import React from 'react';
import { BirthChart } from '../data/canChiData';
import { enhancedCanData } from '../data/enhancedCanChiData';
import { enhancedChiData } from '../data/enhancedChiData';

interface QuickTipsProps {
  birthChart: BirthChart;
}

export const QuickTips: React.FC<QuickTipsProps> = ({ birthChart }) => {
  const dayCanData = enhancedCanData[birthChart.day.can];
  const dayChiData = enhancedChiData[birthChart.day.chi];

  const tips = [
    {
      icon: '🎨',
      title: 'Màu sắc may mắn hôm nay',
      content: dayCanData.luckyColors.slice(0, 2).join(', '),
      action: 'Thử mặc hoặc sử dụng những màu này để tăng vận may'
    },
    {
      icon: '🧭',
      title: 'Hướng thuận lợi',
      content: dayCanData.favorableDirections[0] || 'Đông',
      action: 'Ngồi hoặc hướng về phía này khi làm việc quan trọng'
    },
    {
      icon: '🔢',
      title: 'Số may mắn',
      content: dayCanData.luckyNumbers.slice(0, 3).join(', '),
      action: 'Có thể sử dụng trong các quyết định hoặc lựa chọn'
    },
    {
      icon: '💰',
      title: 'Thái độ với tiền bạc',
      content: dayCanData.moneyAttitude,
      action: 'Hiểu rõ xu hướng tài chính của bản thân'
    },
    {
      icon: '🤝',
      title: 'Quan hệ xã hội',
      content: dayChiData.relationships,
      action: 'Cách tiếp cận tốt nhất trong các mối quan hệ'
    },
    {
      icon: '⏰',
      title: 'Thời điểm hoạt động tốt nhất',
      content: dayChiData.time,
      action: 'Lên kế hoạch công việc quan trọng trong khung giờ này'
    }
  ];

  const getRandomTips = (count: number) => {
    const shuffled = [...tips].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const dailyTips = getRandomTips(4);

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
          💡 Lời Khuyên Nhanh Hôm Nay
        </h3>
        <p className="text-gray-600 text-sm">Những tips hữu ích dựa trên lá số tử vi của bạn</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {dailyTips.map((tip, index) => (
          <div key={index} className="bg-white/80 rounded-xl p-4 border border-orange-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="text-2xl">{tip.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-orange-800 mb-1">{tip.title}</h4>
                <p className="text-orange-700 font-medium text-sm mb-2">{tip.content}</p>
                <p className="text-orange-600 text-xs italic">{tip.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Affirmation based on personality */}
      <div className="bg-white/80 rounded-xl p-4 border border-orange-100 text-center">
        <h4 className="font-semibold text-orange-800 mb-2">🌟 Khẩn nguyện hôm nay</h4>
        <p className="text-orange-700 italic font-medium">
          {dayCanData.personality.includes('Thông minh') && "\"Tôi sử dụng trí tuệ của mình để tạo ra những điều tích cực\""}
          {dayCanData.personality.includes('Kiên trì') && "\"Tôi có sức mạnh vượt qua mọi thử thách\""}
          {dayCanData.personality.includes('Sáng tạo') && "\"Tôi để cho sự sáng tạo dẫn lối cho mọi hành động\""}
          {dayCanData.personality.includes('Nhân từ') && "\"Tôi lan tỏa lòng tốt và nhận lại những điều tốt đẹp\""}
          {!dayCanData.personality.some(p => ['Thông minh', 'Kiên trì', 'Sáng tạo', 'Nhân từ'].includes(p)) && 
           "\"Tôi tin tưởng vào khả năng của mình và tạo ra vận may cho chính mình\""}
        </p>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          🔄 Làm mới trang để nhận những lời khuyên mới
        </p>
      </div>
    </div>
  );
};

export default QuickTips;
