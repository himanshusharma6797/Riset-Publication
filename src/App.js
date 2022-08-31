import './App.css';
import Header from './Components/Headers/Header'
import { BrowserRouter as Router, // Switch,
  Routes,Route, // Link
} from "react-router-dom";
import HeaderTop from './Components/Headers/HeaderTop';
import Footer from './Components/Footers/Footer';
import FooterCopyright from './Components/Footers/FooterCopyright';
import Whatsapp from './Components/WhatsappFixed/Whatsapp';
import Home from './Pages/Home/Home';
import Journals from './Pages/Journals/Journals';
import PublicationProcess from './Pages/PublicationProcess/PublicationProcess';
// scroll to top button
import SetBackToTopButton from './Components/Scroll/SetBackToTopButton';

function App() {
  return (
    <>
      <Router>
        <HeaderTop />
        <Header title="Riset Publication" />
        <Whatsapp />
        <SetBackToTopButton/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/journals' element={<Journals/>}/>
          <Route path='/publication-process' element={<PublicationProcess/>}/>
        </Routes>
        <Footer />
        <FooterCopyright />
      </Router>
    </>
  );
}

export default App;
