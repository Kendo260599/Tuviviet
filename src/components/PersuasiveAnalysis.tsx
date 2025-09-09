import React, { useState } from 'react';
import { BirthChart } from '../data/canChiData';
import { persuasiveCanData, persuasiveChiData, PersuasiveAnalysis as AnalysisType } from '../data/persuasiveAnalysisDataMain';
import styles from './PersuasiveAnalysis.module.css';

interface PersuasiveAnalysisProps {
  birthChart: BirthChart;
}

const PersuasiveAnalysisComponent: React.FC<PersuasiveAnalysisProps> = ({ birthChart }) => {
  const [activeSection, setActiveSection] = useState<'evidence' | 'stories' | 'psychology' | 'practical' | 'predictions'>('evidence');
  const [analysisType, setAnalysisType] = useState<'can' | 'chi'>('can');
  
  const canAnalysis = persuasiveCanData[birthChart.dayMaster];
  const chiAnalysis = persuasiveChiData[birthChart.year.chi];
  const currentAnalysis = analysisType === 'can' ? canAnalysis : chiAnalysis;

  const SectionButton = ({ section, label, icon }: {
    section: string;
    label: string;
    icon: string;
  }) => (
    <button
      className={`${styles.sectionButton} ${activeSection === section ? styles.active : ''}`}
      onClick={() => setActiveSection(section as any)}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );

  const EvidenceSection = ({ analysis }: { analysis: AnalysisType }) => (
    <div className={styles.evidenceSection}>
      <div className={styles.statisticalBox}>
        <h4>📊 Thống Kê & Nghiên Cứu Khoa Học</h4>
        <p className={styles.statisticalData}>{analysis.evidenceBasedInsights.statisticalData}</p>
      </div>
      
      <div className={styles.examplesBox}>
        <h4>🌟 Case Studies Thực Tế</h4>
        {analysis.evidenceBasedInsights.realWorldExamples.map((example, index) => (
          <div key={index} className={styles.example}>
            <p>{example}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.psychologyBox}>
        <h4>🧠 Cơ Sở Tâm Lý & Thần Kinh Học</h4>
        <p>{analysis.evidenceBasedInsights.psychologicalBasis}</p>
      </div>
      
      <div className={styles.historyBox}>
        <h4>📚 Bằng Chứng Lịch Sử & Văn Hóa</h4>
        <p>{analysis.evidenceBasedInsights.historicalEvidence}</p>
      </div>
    </div>
  );

  const StoriesSection = ({ analysis }: { analysis: AnalysisType }) => (
    <div className={styles.storiesSection}>
      <div className={styles.storyCard}>
        <h4>🏆 Success Story - Câu Chuyện Thành Công</h4>
        <p>{analysis.persuasiveStories.successStory}</p>
      </div>
      
      <div className={styles.storyCard}>
        <h4>⚡ Challenge Story - Vượt Qua Thử Thách</h4>
        <p>{analysis.persuasiveStories.challengeStory}</p>
      </div>
      
      <div className={styles.storyCard}>
        <h4>🦋 Transformation - Câu Chuyện Biến Đổi</h4>
        <p>{analysis.persuasiveStories.transformationStory}</p>
      </div>
      
      <div className={styles.quoteBox}>
        <h4>💭 Trích Dẫn Truyền Cảm Hứng</h4>
        <blockquote>{analysis.persuasiveStories.inspirationalQuote}</blockquote>
      </div>
    </div>
  );

  const PsychologySection = ({ analysis }: { analysis: AnalysisType }) => (
    <div className={styles.psychologySection}>
      <div className={styles.psychologyGrid}>
        <div className={styles.psychologyCard}>
          <h4>🔮 Unconscious Patterns - Mẫu Hình Tiềm Thức</h4>
          <ul>
            {analysis.deepPsychology.unconsciousPatterns.map((pattern, index) => (
              <li key={index}>{pattern}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.psychologyCard}>
          <h4>🛡️ Defense Mechanisms - Cơ Chế Phòng Vệ</h4>
          <ul>
            {analysis.deepPsychology.defenseMechanisms.map((mechanism, index) => (
              <li key={index}>{mechanism}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.psychologyCard}>
          <h4>❤️ Core Needs - Nhu Cầu Cốt Lõi</h4>
          <ul>
            {analysis.deepPsychology.coreNeeds.map((need, index) => (
              <li key={index}>{need}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.psychologyCard}>
          <h4>🌑 Shadow Aspects - Khía Cạnh Tối</h4>
          <ul>
            {analysis.deepPsychology.shadowAspects.map((aspect, index) => (
              <li key={index}>{aspect}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={styles.integrationPath}>
        <h4>🌈 Integration Path - Con Đường Tích Hợp</h4>
        <p>{analysis.deepPsychology.integrationPath}</p>
      </div>
    </div>
  );

  const PracticalSection = ({ analysis }: { analysis: AnalysisType }) => (
    <div className={styles.practicalSection}>
      <div className={styles.practicalGrid}>
        <div className={styles.practicalCard}>
          <h4>📅 Daily Practices - Thực Hành Hằng Ngày</h4>
          <ul>
            {analysis.practicalGuidance.dailyPractices.map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.practicalCard}>
          <h4>🎯 Weekly Goals - Mục Tiêu Tuần</h4>
          <ul>
            {analysis.practicalGuidance.weeklyGoals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.practicalCard}>
          <h4>🔍 Monthly Reflections - Suy Ngẫm Tháng</h4>
          <ul>
            {analysis.practicalGuidance.monthlyReflections.map((reflection, index) => (
              <li key={index}>{reflection}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.practicalCard}>
          <h4>🌟 Yearly Milestones - Cột Mốc Năm</h4>
          <ul>
            {analysis.practicalGuidance.yearlyMilestones.map((milestone, index) => (
              <li key={index}>{milestone}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={styles.lifeMission}>
        <h4>🎭 Life Mission - Sứ Mệnh Đời</h4>
        <p>{analysis.practicalGuidance.lifeTimeMission}</p>
      </div>
    </div>
  );

  const PredictionsSection = ({ analysis }: { analysis: AnalysisType }) => (
    <div className={styles.predictionsSection}>
      <div className={styles.probabilityScore}>
        <h4>🎯 Confidence Score - Độ Tin Cậy Dự Đoán</h4>
        <div className={styles.scoreBar}>
          <div 
            className={styles.scoreProgress}
            style={{ width: `${analysis.scientificPredictions.probabilityScore}%` }}
          ></div>
        </div>
        <span className={styles.scoreText}>{analysis.scientificPredictions.probabilityScore}% Confidence</span>
      </div>
      
      <div className={styles.timelineCards}>
        <div className={styles.timelineCard}>
          <h4>📈 Next 3 Months - 3 Tháng Tới</h4>
          <p>{analysis.scientificPredictions.next3Months}</p>
        </div>
        
        <div className={styles.timelineCard}>
          <h4>🚀 Next 6 Months - 6 Tháng Tới</h4>
          <p>{analysis.scientificPredictions.next6Months}</p>
        </div>
        
        <div className={styles.timelineCard}>
          <h4>🎊 Next Year - Năm Tới</h4>
          <p>{analysis.scientificPredictions.nextYear}</p>
        </div>
        
        <div className={styles.timelineCard}>
          <h4>🌅 Next 3 Years - 3 Năm Tới</h4>
          <p>{analysis.scientificPredictions.next3Years}</p>
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    if (!currentAnalysis) {
      return (
        <div className={styles.noData}>
          <h3>🔄 Đang cập nhật dữ liệu...</h3>
          <p>Dữ liệu phân tích cho {analysisType === 'can' ? 'Thiên Can' : 'Địa Chi'} này đang được nghiên cứu và hoàn thiện.</p>
        </div>
      );
    }

    switch (activeSection) {
      case 'evidence':
        return <EvidenceSection analysis={currentAnalysis} />;
      case 'stories':
        return <StoriesSection analysis={currentAnalysis} />;
      case 'psychology':
        return <PsychologySection analysis={currentAnalysis} />;
      case 'practical':
        return <PracticalSection analysis={currentAnalysis} />;
      case 'predictions':
        return <PredictionsSection analysis={currentAnalysis} />;
      default:
        return <EvidenceSection analysis={currentAnalysis} />;
    }
  };

  return (
    <div className={styles.persuasiveAnalysis}>
      <div className={styles.header}>
        <h3>🎭 Advanced Research-Based Analysis</h3>
        <div className={styles.typeSwitch}>
          <button 
            className={analysisType === 'can' ? styles.activeSwitch : styles.inactiveSwitch}
            onClick={() => setAnalysisType('can')}
          >
            🌟 Thiên Can ({birthChart.dayMaster})
          </button>
          <button 
            className={analysisType === 'chi' ? styles.activeSwitch : styles.inactiveSwitch}
            onClick={() => setAnalysisType('chi')}
          >
            🐾 Địa Chi ({birthChart.year.chi})
          </button>
        </div>
      </div>

      <div className={styles.navigation}>
        <SectionButton section="evidence" label="Evidence" icon="📊" />
        <SectionButton section="stories" label="Stories" icon="📚" />
        <SectionButton section="psychology" label="Psychology" icon="🧠" />
        <SectionButton section="practical" label="Practical" icon="⚡" />
        <SectionButton section="predictions" label="Predictions" icon="🔮" />
      </div>

      <div className={styles.content}>
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default PersuasiveAnalysisComponent;
