import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { RoseBouquet } from './components/RoseBouquet';
import { Envelope } from './components/Envelope';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ padding: '20px', textAlign: 'center', background: '#222', borderBottom: '2px solid #ff4d62' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none', fontSize: '1.1rem' }}>
          Flores y Agradecimiento 🌹
        </Link>
        <Link to="/invitation" style={{ color: '#ff4d62', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Nueva Invitación Especial ❤️
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<RoseBouquet />} />
        <Route path="/invitation" element={<Envelope />} />
      </Routes>
    </Router>
  );
}

export default App;
