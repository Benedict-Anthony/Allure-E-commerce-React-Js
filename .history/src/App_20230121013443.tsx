import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ProductProvider } from './contexts/ProductContext';


import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import { LessonProvider } from './contexts/LessonContext';
import Tutorials from './pages/Tutorials';
import ProductDetail from './pages/ProductDetail';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Account from './pages/account';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <LessonProvider>
          <ProductProvider>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/account' element={<Account/>}/>
              <Route path={"/shop"} element={<Shop />} />
              <Route path={"/tutorials"} element={<Tutorials />} />
              <Route path={"/product/:slug"} element={<ProductDetail />} />
              <Route path={"/course/:slug"} element={<CourseDetail/>} />
            </Routes>
          </ProductProvider>
        </LessonProvider>
    </BrowserRouter>
  );
}

export default App;
