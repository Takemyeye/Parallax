import './styles/App.css'
import NotFound from './components/404'; 
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;