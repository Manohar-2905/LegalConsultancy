import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// English Components
import First from './components/First';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Meeting from './components/Meeting';

// Hindi Components
import FirstHindi from './components/FirstHindi';
import Card1Hindi from './components/Card1Hindi';
import Card2Hindi from './components/Card2Hindi';
import Card3Hindi from './components/Card3Hindi';
import MeetingHindi from './components/MeetingHindi';

function App() {
  const [language, setLanguage] = useState('en'); // 'en' or 'hi'

  return (
    <Router>
      <Navbar language={language} setLanguage={setLanguage} />
      
      <Routes>
        {language === 'en' ? (
          <>
            <Route path="/" element={<First />} />
            <Route path="/Card1" element={<Card1 />} />
            <Route path="/Card2" element={<Card2 />} />
            <Route path="/Card3" element={<Card3 />} />
            <Route path="/Meeting" element={<Meeting />} />
          </>
        ) : (
          <>
            <Route path="/" element={<FirstHindi />} />
            <Route path="/Card1" element={<Card1Hindi />} />
            <Route path="/Card2" element={<Card2Hindi />} />
            <Route path="/Card3" element={<Card3Hindi />} />
            <Route path="/Meeting" element={<MeetingHindi />} />
          </>
        )}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
