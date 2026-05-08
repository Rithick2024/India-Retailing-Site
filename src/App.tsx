import Header from "./components/Header";
import TopCardsRow from "./components/TopCardsRow";
import HeroSection from "./sections/HeroSection";
import WebSpecials from "./sections/WebSpecials";
import TrendingSection from "./sections/TrendingSection";
import LeadersInkSection from "./sections/LeadersInkSection";
import DarkSection from "./sections/DarkSection";
import BottomSections from "./sections/BottomSections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen font-sans overflow-x-hidden">
      <Header />
      <TopCardsRow />
      <main className="w-full">
        <div className="max-w-[1240px] mx-auto bg-white px-4 pt-6">
          <HeroSection />
        </div>
        
        <div className="max-w-[1240px] mx-auto bg-white px-4 py-6 mt-8 border-t border-gray-100">
          <WebSpecials />
          <TrendingSection />
          <LeadersInkSection />
        </div>
        
        <DarkSection />
        <BottomSections />
      </main>
      <Footer />
    </div>
  );
}
