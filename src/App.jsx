import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import use3DTilt from './hooks/Use3DTilt';
import BotPage from './pages/BotPage';
import ProductPage from './pages/ProductPage';
import FeedbackPage from './pages/FeedbackPage';
import NewsLetter from './components/main/NewsLetter';
import Aside from './components/header/Aside';
function App() {
  use3DTilt();
  const location = useLocation();
  const show =
    location.pathname !== '/login' && location.pathname !== '/admin';

  return (
    <>
      {show && <Header />}
      <Aside/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bot" element={<BotPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>

      {show && <NewsLetter/>}
      {show && <Footer/>}
    </>
  );
}

export default App;
