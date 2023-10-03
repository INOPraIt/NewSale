import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Bascet from './pages/Bascet/Bascet';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/bascet' element={
          <Layout>
            <Bascet />
          </Layout>
        } />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

      </Routes>
    </div>
  )
}
