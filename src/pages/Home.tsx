import React from 'react';
import Landing from '../components/Landing';
import Courses from '../components/Courses';
import Products from '../components/Products';
import ServiceSlice from '../components/ServiceSlice';
import { FC } from "react";
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion';
import Head from '../shared/Head';


const Home: FC = () => {
  return (
    <>
      <Head title='Welcome' href='/' description='Allure shopping store and more' keyword=' Blog, makeup, fashion, lotions, clothes' />

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
    </>
  )
}

export default Home