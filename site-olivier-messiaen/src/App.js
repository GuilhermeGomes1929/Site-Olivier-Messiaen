import { BrowserRouter as Router,
   Routes,
    Route,} from 'react-router-dom';
import DefaultHeader from './components/DefaultHeader';
import ContatoPage from './pages/ContatoPage';
import Home from './pages/Home';
import PageObras from './pages/ObrasPAge';

function App() {
  
  return (
   <Router>
     <DefaultHeader/>
     <Routes>
      <Route exact path="/" element={<Home/>}>
      </Route>
      <Route path="/obras" element={<PageObras/>}>
      </Route>
      <Route path="/contato" element={<ContatoPage/>}>
      </Route>
     </Routes>
   </Router>
  );
}

export default App;
