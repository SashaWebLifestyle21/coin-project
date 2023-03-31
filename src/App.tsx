import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
