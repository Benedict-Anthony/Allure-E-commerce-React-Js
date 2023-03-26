import React from 'react'
import Post from '../shared/Post';
import { useBlogContext } from '../contexts/BlogContext';
import "../css/blog.css"
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion';


const Blog = () => {
  const { data: { posts } } = useBlogContext()
  return (
    <motion.section className="container grid-3 section"
      variants={PageXVariant}
      initial="initial"
      animate="animate">
      {posts.map((item) => (
        <Post item={item} key={item.id} />
      ))}
    </motion.section>
  )
}

export default Blog
