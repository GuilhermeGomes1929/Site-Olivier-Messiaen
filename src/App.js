import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Biografia from './components/Biografia';
import Obra from './components/Obra';
import Admin from './pages/AdminPage';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import Login from './pages/LoginPage';

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/*" element={<MainPage/>}/>
        <Route path="/admin/*" element={ <Admin/> }/>
        <Route path="/login" element={ <Login/>} />
      </Routes>
   </Router>
  );
}

export default App;