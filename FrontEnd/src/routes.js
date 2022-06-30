import react from 'react';

import { BrowserRouter, Route, Swicht, } from 'react-router-dom';

import menu_index from "/pages/Menu/menu_index";
import projeto_index from "/pages/Projetos/projeto_index";
import projetoDT_index from "/pages/projeto_DT/projetoDT_index";

const Routes = () =>{
    return(
        <BrowserRouter>
            <Swicht>
                <Route exect path="/" component={menu_index}/>
                <Route exect path="/projetos" component={projeto_index}/>
                <Route exect path="/projetos/DT" component={projetoDT_index}/>
            </Swicht>
        </BrowserRouter>
    );
}

export default Routes;