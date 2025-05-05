import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Nav from './component/navbar';
import Footer from './component/Footer';
import Whatsapp from './component/twcwh';

// Pages
import Twc from './component/landingpage';
import Corporate from './component/Corporate';
import Social from './component/social';
import Burial from './component/Funeral';
import Team from './component/teamtwc';
import About from './component/abouttwc';
import Wedding from './component/wedd';
import History from './component/twchistory';
import Gallery from './component/gallerytwc';
import Contact from './component/contact';
import Mission from './component/mission';
import Testimonial from './component/testimonial';
import Award from './component/award';
import Product from './component/product';
import Party from './component/party';
import Naming from './component/naming';
import Conference from './component/conference';
import Coronation from './component/coronation';
import House from './component/housewarming';
import Birthday from './component/birthday';
import Endyear from './component/party';
import Networking from './component/networking';
import BlogList from './component/Blogpages/BlogList';
import BlogDetailPage from './component/Blogpages/BlogDetailPage';
import AdminDashboard from './component/Blogpages/AdminDashboard';

// Import ErrorBoundary
import ErrorBoundary from './component/ErrorBoundary';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-full relative">
      <Whatsapp />
      <Router>
        <Nav />

        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Twc />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<Social />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/housewarming" element={<House />} />
            <Route path="/naming" element={<Naming />} />
            <Route path="/coronation" element={<Coronation />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="/endyearparty" element={<Endyear />} />
            <Route path="/productlaunch" element={<Product />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/award" element={<Award />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/funeral" element={<Burial />} />
            <Route path="/abouttwc" element={<About />} />
            <Route path="/teams" element={<Team />} />
            <Route path="/history" element={<History />} />
            <Route path="/gallerytwc" element={<Gallery />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/testimonial" element={<Testimonial />} />

            {/* BLOG ROUTES */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/admin/blog" element={<AdminDashboard />} />
          </Routes>
        </ErrorBoundary>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
