import React from 'react';
import Landing from '../components/Landing';
import Courses from '../components/Courses';
import Products from '../components/Products';
import ServiceSlice from '../components/ServiceSlice';
import { FC } from "react";
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion';


const Home: FC = () => {
  return (
    <motion.main
      variants={PageXVariant}
      initial="initial"
      animate="animate"
    >
      <Landing />
      <Products />
      <Courses />
      <ServiceSlice />
    </motion.main>
  )
}

export default Home