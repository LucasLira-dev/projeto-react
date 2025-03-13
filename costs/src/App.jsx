import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';
import './index.css'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <BrowserRouter>
    
      <Navbar/>
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contatos" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>
      
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;