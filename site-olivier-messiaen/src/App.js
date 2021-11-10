import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultHeader from './components/DefaultHeader';
import Home from './pages/Home';
import BioPage from './pages/BiografiaPage';
import ObrasPage from './pages/ObrasPage';
import ContatoPage from './pages/ContatoPage';
function App() {

  return (
   <Router>
      <DefaultHeader/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/biografia" element={<BioPage/>}>
        </Route>
        <Route path="/obras" element={<ObrasPage/>}>
        </Route>
        <Route path="/contato" element={<ContatoPage/>}>
        </Route>
      </Routes>
   </Router>
  );
}

export default App;