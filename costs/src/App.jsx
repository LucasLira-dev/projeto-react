import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/contatos">Contatos</Link>
          </li>
          <li>
            <Link to="/newproject">New Project</Link>
          </li>
        </ul>
      </nav>

      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contatos" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>
      
      <p> Footer </p>
    </BrowserRouter>
  );
}

export default App;