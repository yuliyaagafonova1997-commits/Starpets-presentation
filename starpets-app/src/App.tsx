import {
  HeroSlide,
  MainInsightSlide,
  FieldResearchSlide,
  ResearcherInsightsSlide,
  AudienceSlide,
  PainDiagramSlide,
  WhyNeverBoughtSlide,
  WhatMattersSlide,
  HypothesesSlide,
  CycleSlide,
  CurrencyKingSlide,
  ViralMechanicsSlide,
  BriefProductSlide,
  BriefMarketingPaidSlide,
  BriefInfluenceCrmSlide,
  OpenQuestionsSlide,
} from './components/slides';
import './App.css';

function App() {
  return (
    <div className="slides-wrapper">
      <HeroSlide />
      <MainInsightSlide />
      <FieldResearchSlide />
      <ResearcherInsightsSlide />
      <AudienceSlide />
      <PainDiagramSlide />
      <WhyNeverBoughtSlide />
      <WhatMattersSlide />
      <HypothesesSlide />
      <CycleSlide />
      <CurrencyKingSlide />
      <ViralMechanicsSlide />
      <BriefProductSlide />
      <BriefMarketingPaidSlide />
      <BriefInfluenceCrmSlide />
      <OpenQuestionsSlide />
    </div>
  );
}

export default App;
