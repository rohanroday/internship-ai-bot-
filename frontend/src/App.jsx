import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import TopicCards from "./components/TopicCards";
import HowItWorks from "./components/HowItWorks";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import SuggestedQuestions from "./components/SuggestedQuestions";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <TopicCards />
        <HowItWorks />
        <ContactBanner />
      </main>
      <Footer />
      <ChatWidget />
      <SuggestedQuestions />
    </div>
  );
}
