import React, { useState } from 'react';
import { BirthChart } from '../data/canChiData';
import { getComprehensiveAnalysis } from '../utils/advancedAnalysisSystem';
import styles from './ComprehensiveAnalysis.module.css';

interface ComprehensiveAnalysisProps {
  birthChart: BirthChart;
  currentAge?: number;
}

const ComprehensiveAnalysis: React.FC<ComprehensiveAnalysisProps> = ({ 
  birthChart, 
  currentAge = 25 
}) => {
  const [activeTab, setActiveTab] = useState<'personality' | 'elements' | 'life'>('personality');
  
  const analysis = getComprehensiveAnalysis(birthChart, currentAge);
  const { personality, elementSystem, lifeEvolution } = analysis;

  const TabButton = ({ label, isActive, onClick }: {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      className={`${styles.tabButton} ${isActive ? styles.activeTab : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return (
    <div className={styles.comprehensiveAnalysis}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <span className={styles.icon}>🔮</span>
          Phân Tích Tử Vi Chuyên Sâu
        </h3>
        <p className={styles.subtitle}>
          Dựa trên nghiên cứu tử vi truyền thống và hiện đại
        </p>
      </div>

      <div className={styles.tabNav}>
        <TabButton 
          label="🧠 Tính Cách Sâu"
          isActive={activeTab === 'personality'}
          onClick={() => setActiveTab('personality')}
        />
        <TabButton 
          label="⚡ Ngũ Hành"
          isActive={activeTab === 'elements'}
          onClick={() => setActiveTab('elements')}
        />
        <TabButton 
          label="🌱 Chu Kỳ Đời"
          isActive={activeTab === 'life'}
          onClick={() => setActiveTab('life')}
        />
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'personality' && (
          <div className={styles.personalityTab}>
            {/* Core Essence */}
            <div className={styles.essenceSection}>
              <h4>✨ Bản Chất Cốt Lõi</h4>
              <div className={styles.essenceGrid}>
                <div className={styles.essenceCard}>
                  <h5>Tinh Hoa</h5>
                  <p>{personality.essence.dayMasterEssence}</p>
                </div>
                <div className={styles.essenceCard}>
                  <h5>Hình Thái</h5>
                  <p>{personality.essence.naturalForm}</p>
                </div>
                <div className={styles.essenceCard}>
                  <h5>Ý Nghĩa</h5>
                  <p>{personality.essence.symbolicMeaning}</p>
                </div>
                <div className={styles.essenceCard}>
                  <h5>Năng Lượng</h5>
                  <p>{personality.essence.cosmicEnergy}</p>
                </div>
              </div>
            </div>

            {/* Personality Layers */}
            <div className={styles.layersSection}>
              <h4>🎭 Tầng Lớp Tính Cách</h4>
              <div className={styles.layersGrid}>
                <div className={styles.layerCard}>
                  <h5>🌟 Bề Ngoài</h5>
                  <ul>
                    {personality.personalityLayers.surface.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.layerCard}>
                  <h5>💎 Cốt Lõi</h5>
                  <ul>
                    {personality.personalityLayers.core.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.layerCard}>
                  <h5>🌘 Ẩn Giấu</h5>
                  <ul>
                    {personality.personalityLayers.hidden.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.layerCard}>
                  <h5>🚀 Tiềm Năng</h5>
                  <ul>
                    {personality.personalityLayers.potential.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Life Philosophy */}
            <div className={styles.philosophySection}>
              <h4>🧘 Triết Lý Sống</h4>
              <div className={styles.philosophyContent}>
                <div className={styles.philosophyCard}>
                  <h5>Mục Đích</h5>
                  <p>{personality.lifePhilosophy}</p>
                </div>
                <div className={styles.philosophyCard}>
                  <h5>Ra Quyết Định</h5>
                  <p>{personality.decisionMaking}</p>
                </div>
                <div className={styles.philosophyCard}>
                  <h5>Phản Ứng Stress</h5>
                  <p>{personality.stressResponse}</p>
                </div>
              </div>
            </div>

            {/* Career Analysis */}
            <div className={styles.careerSection}>
              <h4>💼 Phân Tích Nghề Nghiệp</h4>
              <div className={styles.careerGrid}>
                <div className={styles.careerCard}>
                  <h5>🎯 Thiên Hướng Tự Nhiên</h5>
                  <ul>
                    {personality.careerAnalysis.naturalPath.map((career, index) => (
                      <li key={index}>{career}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.careerCard}>
                  <h5>👑 Phong Cách Lãnh Đạo</h5>
                  <ul>
                    {personality.careerAnalysis.leadershipStyle.map((style, index) => (
                      <li key={index}>{style}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.careerCard}>
                  <h5>🎨 Sáng Tạo</h5>
                  <ul>
                    {personality.careerAnalysis.creativeExpression.map((expr, index) => (
                      <li key={index}>{expr}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.careerCard}>
                  <h5>🤝 Phục Vụ</h5>
                  <ul>
                    {personality.careerAnalysis.serviceOrientation.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.entrepreneurialPotential}>
                <h5>🚀 Tiềm Năng Khởi Nghiệp</h5>
                <p>{personality.careerAnalysis.entrepreneurialPotential}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'elements' && (
          <div className={styles.elementsTab}>
            {/* Element Balance */}
            <div className={styles.balanceSection}>
              <h4>⚖️ Cân Bằng Ngũ Hành</h4>
              <div className={styles.balanceGrid}>
                <div className={styles.balanceCard}>
                  <h5>💪 Mạnh</h5>
                  <div className={styles.elementList}>
                    {elementSystem.elementBalance.strong.map((element, index) => (
                      <span key={index} className={`${styles.elementTag} ${styles[element.toLowerCase()]}`}>
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.balanceCard}>
                  <h5>🔋 Yếu</h5>
                  <div className={styles.elementList}>
                    {elementSystem.elementBalance.weak.map((element, index) => (
                      <span key={index} className={`${styles.elementTag} ${styles[element.toLowerCase()]}`}>
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.balanceCard}>
                  <h5>❌ Thiếu</h5>
                  <div className={styles.elementList}>
                    {elementSystem.elementBalance.missing.map((element, index) => (
                      <span key={index} className={`${styles.elementTag} ${styles[element.toLowerCase()]}`}>
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.balanceCard}>
                  <h5>⚡ Thừa</h5>
                  <div className={styles.elementList}>
                    {elementSystem.elementBalance.excessive.map((element, index) => (
                      <span key={index} className={`${styles.elementTag} ${styles[element.toLowerCase()]}`}>
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar Harmony */}
            <div className={styles.harmonySection}>
              <h4>🔗 Tương Hợp Tứ Trụ</h4>
              <div className={styles.harmonyGrid}>
                <div className={styles.harmonyCard}>
                  <h5>Năm - Ngày</h5>
                  <p><strong>{elementSystem.pillarHarmony.yearDayRelation.relationship}</strong></p>
                  <p>{elementSystem.pillarHarmony.yearDayRelation.effect}</p>
                  <p className={styles.advice}>{elementSystem.pillarHarmony.yearDayRelation.advice}</p>
                </div>
                <div className={styles.harmonyCard}>
                  <h5>Tháng - Ngày</h5>
                  <p><strong>{elementSystem.pillarHarmony.monthDayRelation.relationship}</strong></p>
                  <p>{elementSystem.pillarHarmony.monthDayRelation.effect}</p>
                  <p className={styles.advice}>{elementSystem.pillarHarmony.monthDayRelation.advice}</p>
                </div>
                <div className={styles.harmonyCard}>
                  <h5>Giờ - Ngày</h5>
                  <p><strong>{elementSystem.pillarHarmony.hourDayRelation.relationship}</strong></p>
                  <p>{elementSystem.pillarHarmony.hourDayRelation.effect}</p>
                  <p className={styles.advice}>{elementSystem.pillarHarmony.hourDayRelation.advice}</p>
                </div>
              </div>
            </div>

            {/* Balancing Strategies */}
            <div className={styles.strategiesSection}>
              <h4>🎯 Chiến Lược Cân Bằng</h4>
              <div className={styles.strategiesGrid}>
                <div className={styles.strategyCard}>
                  <h5>🎨 Màu Sắc</h5>
                  <div className={styles.colorList}>
                    {elementSystem.balancingStrategies.colors.map((color, index) => (
                      <span key={index} className={styles.colorTag}>{color}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.strategyCard}>
                  <h5>🧭 Hướng</h5>
                  <ul>
                    {elementSystem.balancingStrategies.directions.map((dir, index) => (
                      <li key={index}>{dir}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.strategyCard}>
                  <h5>🏃 Hoạt Động</h5>
                  <ul>
                    {elementSystem.balancingStrategies.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.strategyCard}>
                  <h5>🍎 Thực Phẩm</h5>
                  <ul>
                    {elementSystem.balancingStrategies.foods.map((food, index) => (
                      <li key={index}>{food}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'life' && (
          <div className={styles.lifeTab}>
            {/* Current Phase */}
            <div className={styles.currentPhaseSection}>
              <h4>🎯 Giai Đoạn Hiện Tại ({currentAge} tuổi)</h4>
              <div className={styles.currentPhaseCard}>
                <h5>{lifeEvolution.currentPhase.name}</h5>
                <div className={styles.phaseGrid}>
                  <div className={styles.phaseAspect}>
                    <h6>Đặc Điểm</h6>
                    <ul>
                      {lifeEvolution.currentPhase.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.phaseAspect}>
                    <h6>Cơ Hội</h6>
                    <ul>
                      {lifeEvolution.currentPhase.opportunities.map((opp, index) => (
                        <li key={index}>{opp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.phaseAspect}>
                    <h6>Thách Thức</h6>
                    <ul>
                      {lifeEvolution.currentPhase.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.phaseAspect}>
                    <h6>Tập Trung</h6>
                    <ul>
                      {lifeEvolution.currentPhase.focus.map((focus, index) => (
                        <li key={index}>{focus}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Stages */}
            <div className={styles.stagesSection}>
              <h4>🌱 Các Giai Đoạn Cuộc Đời</h4>
              <div className={styles.stagesGrid}>
                <div className={styles.stageCard}>
                  <h5>👶 Thời Thơ Ấu (0-18)</h5>
                  <div className={styles.stageContent}>
                    <p><strong>Mô hình:</strong> {lifeEvolution.lifeStages.childhood.patterns[0]}</p>
                    <p><strong>Phát triển:</strong> {lifeEvolution.lifeStages.childhood.development.join(', ')}</p>
                  </div>
                </div>
                <div className={styles.stageCard}>
                  <h5>🚀 Tuổi Trẻ (18-35)</h5>
                  <div className={styles.stageContent}>
                    <p><strong>Cơ hội:</strong> {lifeEvolution.lifeStages.youth.opportunities[0]}</p>
                    <p><strong>Tập trung:</strong> {lifeEvolution.lifeStages.youth.focus.join(', ')}</p>
                  </div>
                </div>
                <div className={styles.stageCard}>
                  <h5>👔 Trung Niên (35-60)</h5>
                  <div className={styles.stageContent}>
                    <p><strong>Thành tựu:</strong> {lifeEvolution.lifeStages.midlife.achievements[0]}</p>
                    <p><strong>Trách nhiệm:</strong> {lifeEvolution.lifeStages.midlife.responsibilities.join(', ')}</p>
                  </div>
                </div>
                <div className={styles.stageCard}>
                  <h5>🧓 Tuổi Già (60+)</h5>
                  <div className={styles.stageContent}>
                    <p><strong>Trí tuệ:</strong> {lifeEvolution.lifeStages.elderhood.wisdom[0]}</p>
                    <p><strong>Di sản:</strong> {lifeEvolution.lifeStages.elderhood.legacy[0]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Guidance Sample */}
            <div className={styles.monthlySection}>
              <h4>📅 Hướng Dẫn Theo Tháng (Mẫu)</h4>
              <div className={styles.monthlyGrid}>
                {[1, 6, 9, 12].map(month => {
                  const guidance = lifeEvolution.monthlyGuidance[month];
                  return (
                    <div key={month} className={styles.monthCard}>
                      <h5>Tháng {month}</h5>
                      <p><strong>Năng lượng:</strong> {guidance.energy}</p>
                      <p><strong>Tập trung:</strong> {guidance.focus}</p>
                      <p><strong>Cơ hội:</strong> {guidance.opportunities[0]}</p>
                      <p><strong>Lưu ý:</strong> {guidance.cautions[0]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveAnalysis;
