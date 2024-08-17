import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS/style.css';
import './CSS/booki.css';
import App from './App';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Call from './pages/tag';
// import Vision from './pages/presentation';
import reportWebVitals from './reportWebVitals';
import Pageheader from './pages/pageheader';
import Back from './pages/infoscadre';
import NotFoundPage from './pages/notfoundpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/'element={<Call/>}></Route>
        <Route path='secondpage/'element={<Vision/>}></Route> */}
        <Route path='/' element={<Pageheader/>}></Route>
        <Route path='/secondpage/:id' element={<Back/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route> 
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
