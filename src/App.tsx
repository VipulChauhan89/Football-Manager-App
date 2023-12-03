import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
