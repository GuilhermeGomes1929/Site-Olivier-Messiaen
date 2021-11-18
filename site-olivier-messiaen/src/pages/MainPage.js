import { Routes, Route } from 'react-router-dom';
import DefaultHeader from "../components/DefaultHeader";
import Home from './Home';
import BioPage from './BiografiaPage';
import ObrasPage from './ObrasPage';
import ContatoPage from './ContatoPage';

export default function MainPage(){

    return(
       <div>
            <DefaultHeader/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/biografia" element={<BioPage/>}/>
                <Route path="/obras" element={<ObrasPage/>}/>
                <Route path="/contato" element={<ContatoPage/>}/>
            </Routes>
       </div>
    );

}