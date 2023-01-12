import React from 'react';
import Landing from '../components/Landing';
import Courses from '../components/Courses';
import Products from '../components/Products';
import { FC } from "react";


const Home:FC = () =>  {

return (
    <>
      <Landing />
      <Courses />
      <Products/>
    </>
  )
}

export default Home