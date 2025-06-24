import AboutUs from '../components/main/AboutUs';
import Hero from '../components/main/Hero';
import LatestFeedback from '../components/main/LatestFeedback';
import NewsLetter from '../components/main/NewsLetter';
import Services from '../components/main/Services';
import Statis from '../components/main/Statis';

const MainPage = () => {

  return (
    <main className="relative">
      <Hero />
      <AboutUs />
      <Statis />
      <Services />
      <LatestFeedback lightBG={'bg-(--offWhite)'} cardBG={'bg-white'}/>
    </main>
  );
};

export default MainPage;
