import {
  HeroSlide,
  MainInsightSlide,
  FieldResearchSlide,
  ResearcherInsightsSlide,
  AudienceSlide,
  PainDiagramSlide,
  PainDiagram2Slide,
  PainPointsSlide,
  HypothesesSlide,
  CycleSlide,
  CurrencyKingSlide,
  ViralMechanicsSlide,
  BriefProductSlide,
  BriefMarketingSlide,
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
      <PainDiagram2Slide />
      <PainPointsSlide />
      <HypothesesSlide />
      <CycleSlide />
      <CurrencyKingSlide />
      <ViralMechanicsSlide />
      <BriefProductSlide />
      <BriefMarketingSlide />
      <OpenQuestionsSlide />
    </div>
  );
}

export default App;