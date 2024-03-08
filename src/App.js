import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate ,Link} from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import logo from './assets/logo.jpg';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const navigate = useNavigate();

  // Redirect to /HomePage when the root URL is accessed
  useEffect(() => {
    navigate('/HomePage');
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/HomePage' element={<Home />} />
        <Route path='/HistoryPage' element={<History />} />
        <Route path='/AboutPage' element={<About />} />
        <Route path='/GalleryPage' element={<Gallery />} />
        <Route path='/ContactPage' element={<Contact />} />
      </Routes>
    </div>
  );
};

const Header = () => {
  return (
    <section>
    <div id="topbar">
 </div>
    <div id="header">
      <img src={logo} alt="Logo" />
      <ul>
        <li><Link to='/HomePage'>Home</Link></li>
        <li><Link to='/HistoryPage'>History</Link></li>
        <li><Link to='/AboutPage'>About</Link></li>
        <li><Link to='/GalleryPage'>Gallery</Link></li>
        <li><Link to='/ContactPage'>Contact Us</Link></li>
      </ul>
    </div>
    </section>
  );
};

export default App;
