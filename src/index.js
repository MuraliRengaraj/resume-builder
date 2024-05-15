import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Template1 from './templates/template1';
import Template2 from './templates/template2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/templates/template2.js' element={<Template2/>} />
        <Route path='/templates/template1.js' element={<Template1/>} />
      </Routes>
    </BrowserRouter>
);

