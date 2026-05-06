import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoseBouquet } from './components/RoseBouquet';
import { Envelope } from './components/Envelope';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Envelope />} />
        <Route path="/invitation" element={<RoseBouquet />} />
      </Routes>
    </Router>
  );
}

export default App;
