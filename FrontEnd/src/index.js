import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Link } from "react-router-dom";
import './index.css';
//import App from './App'
//import SideBar from './components/SideBar/SideBar'
//import projeto_index from './pages/Projetos/projeto_index'
import Rout from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Rout />
);
