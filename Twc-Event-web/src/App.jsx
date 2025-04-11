import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Nav from './component/navbar';
import Footer from './component/Footer';

// Pages
import Twc from './component/landingpage';
import Corporate from './component/Corporate';
import Social from './component/sociall';
import Burial from './component/Burial';
import Team from './component/teamtwc';
import About from './component/abouttwc';
import Wedding from './component/wedd';
import History from './component/history';
import Gallery from './component/Gallery';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-full">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Twc />} />
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/sociall" element={<Social />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/Burial" element={<Burial />} />
          <Route path="/abouttwc" element={<About />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/history" element={<History />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
