import Header from "./components/Header";
import Hero from "./components/Hero";
import TopicCards from "./components/TopicCards";
import ChatWidget from "./components/ChatWidget";
import SuggestedQuestions from "./components/SuggestedQuestions";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TopicCards />
      </main>
      <Footer />
      <ChatWidget />
      <SuggestedQuestions />
    </div>
  );
}
