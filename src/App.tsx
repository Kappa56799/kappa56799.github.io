import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Page404 from './components/Page404';
import Contact from './components/contact';
import './index.css';

function App() {
  return( 
  <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />              
          <Route path="/contact" element={<Contact />} />              
          <Route path="*" element={<Page404 />} />
        </Routes>
    </Router>
  </>
  );
}

export default App;
