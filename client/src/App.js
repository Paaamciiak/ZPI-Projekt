import { useState } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import AddShop from './components/add/AddShop';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <div style={{marginTop:64}}>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home/>}/>
          <Route path='//add' element={<AddShop/>}/>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
