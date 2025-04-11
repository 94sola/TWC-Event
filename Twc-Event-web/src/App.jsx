import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Nav from './component/navbar';
import Footer from './component/Footer';

// Pages
import Twc from './component/landingpage'; // Home Page (includes Chemxpert, Labsoft, etc.)
import Corporate from './Component/corporate';
import Social from './component/sociall';
import Burial from './Component/burial';
import Team from './component/teamtwc';
import About from './component/abouttwc';
import Wedding from './component/wedd';
import History from './component/history';
import Gallery from './component/gallery';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-full">
      <Router>
        {/* Navbar (Visible on all pages) */}
        <Nav />

        <Routes>
          <Route path="/" element={<Twc />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/sociall" element={<Social />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/burial" element={<Burial />} />
          <Route path="/abouttwc" element={<About />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/history" element={<History />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        {/* Footer (Visible on all pages) */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
