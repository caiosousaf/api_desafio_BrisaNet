import react from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import Menu_index from ".//pages/Menu/menu_index";
import Projeto from ".//pages/Projetos/projeto_index";
import Projeto_DT from ".//pages/Projeto_DT/projetoDT_index";

const Rout = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exect path="/" element={<Menu_index />}/>
                <Route exect path="/projetos" element={<Projeto />}/>
                <Route exect path="/projetos/DT" element={<Projeto_DT />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rout;