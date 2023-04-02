import React from 'react'
import Post from '../shared/Post';
import { useBlogContext } from '../contexts/BlogContext';
import "../css/blog.css"
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion';
import Head from '../shared/Head';


const Blog = () => {
  const { data: { posts } } = useBlogContext()
  return (
    <>
      <Head title='Trending Topics about beauty' href='/blog' description='Latest topics about beauty, fashion, best dressing manners' keyword='Blog, makeup, fashion, lotions, clothes' />
      <motion.section className="container grid-3 section"
        variants={PageXVariant}
        initial="initial"
        animate="animate">
        {posts.map((item) => (
          <Post item={item} key={item.id} />
        ))}
      </motion.section>
    </>
  )
}

export default Blog
