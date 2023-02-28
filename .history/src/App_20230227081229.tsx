import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductProvider } from './contexts/ProductContext';
import { LessonProvider } from './contexts/BlogContext';
import { UserAndCartContextProvider } from './contexts/UserAndCartContext';


import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import Tutorials from './pages/Blog';
import ProductDetail from './pages/ProductDetail';
import CourseDetail from './pages/PostDetail';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Account from './pages/Account';
import ButtonNav from './components/ButtonNav';
import Comfirm from './pages/Comfirm';
import CartBar from './components/CartBar';


function App() {
  return (
    <BrowserRouter>
      <UserAndCartContextProvider>
        <LessonProvider>
          <ProductProvider>
            <Header />
            <CartBar />
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/account' element={<Account />} />
              <Route path={"/shop"} element={<Shop />} />
              <Route path={"/tutorials"} element={<Tutorials />} />
              <Route path={"/product/:slug"} element={<ProductDetail />} />
              <Route path={"/course/:slug"} element={<CourseDetail />} />
              <Route path={"/comfirm/:token"} element={<Comfirm />} />
            </Routes>
            <ButtonNav />
          </ProductProvider>
        </LessonProvider>
      </UserAndCartContextProvider>
    </BrowserRouter>
  );
}

export default App;
