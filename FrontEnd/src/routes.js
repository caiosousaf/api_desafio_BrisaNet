import react from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import Menu from "./pages/Menu/menuIndex";
import Projeto from ".//pages/Projetos/projeto_index";
import Projeto_DT from ".//pages/Projeto_DT/projetoDT_index";
import Equipes from ".//pages/Equipes/equipe_index"
import Equipe_DT from ".//pages/Equipe_DT/equipesDT_index"
import Pessoas from ".//pages/Pessoas/pessoa_index"
import Pessoa_DT from ".//pages/Pessoa_DT/pessoaDT_index"
import Tarefas from ".//pages/Tarefas/tarefa_index"
import Tarefa_DT from ".//pages/Tarefa_DT/tarefaDT_index"


const Rout = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exect path="/" element={<Menu/>}/>

                <Route exect path="/projetos" element={<Projeto />}/>
                <Route exect path="/projeto/:id" element={<Projeto_DT />}/>

                <Route exect path="/equipes" element={<Equipes />}/>
                <Route exect path="/equipe/:id" element={<Equipe_DT />}/>

                <Route exect path="/pessoas" element={<Pessoas />}/>
                <Route exect path="/pessoa/:id" element={<Pessoa_DT />}/>

                <Route exect path="/tarefas" element={<Tarefas />}/>
                <Route exect path="/tarefa/:id" element={<Tarefa_DT />}/>
                

            </Routes>
        </BrowserRouter>
    );
}

export default Rout;