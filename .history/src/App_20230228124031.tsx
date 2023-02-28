import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductProvider } from './contexts/ProductContext';
import { BlogProvider } from './contexts/BlogContext';
import { UserAndCartContextProvider } from './contexts/UserAndCartContext';


import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Account from './pages/Account';
import ButtonNav from './components/ButtonNav';
import Comfirm from './pages/Comfirm';
import CartBar from './components/CartBar';
import Blog from './pages/Blog';
import CheckOut from './pages/CheckOut';


function App() {
  return (
    <BrowserRouter>
      <UserAndCartContextProvider>
        <BlogProvider>
          <ProductProvider>
            <Header />
            <CartBar />
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/account' element={<Account />} />
              <Route path={"/shop"} element={<Shop />} />
              <Route path={"/blog"} element={<Blog />} />
              <Route path={"/check-out"} element={<CheckOut />} />
              <Route path={"/product/:slug"} element={<ProductDetail />} />
              <Route path={"/course/:slug"} element={<PostDetail />} />
              <Route path={"/comfirm/:token"} element={<Comfirm />} />
            </Routes>
            <ButtonNav />
          </ProductProvider>
        </BlogProvider>
      </UserAndCartContextProvider>
    </BrowserRouter>
  );
}

export default App;
