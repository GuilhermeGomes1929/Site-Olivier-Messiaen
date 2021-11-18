import { Route, Routes } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import EditBiografia from "../components/EditBiografia";
import EditObras from "../components/EditObras";
import Style from './pagesStyle/AdminPage.module.css'

export default function AdminPage(){
    return(
        <div>
            <AdminHeader/>

            <div className={Style.content}>
                <Routes>
                    <Route path="/biografia" element={ <EditBiografia/>}/>
                    <Route path="/obras" element={ <EditObras/>}/>
                </Routes>
            </div>
        </div>
    );

}