import React from 'react';
import Landing from '../components/Landing';
import Courses from '../components/Courses';
import Products from '../components/Products';
import ServiceSlice from '../components/ServiceSlice';
import { FC } from "react";


const Home: FC = () => {

  return (
    <>
      <Landing />
      <Products />
      <Courses />
      <ServiceSlice />
    </>
  )
}

export default Home