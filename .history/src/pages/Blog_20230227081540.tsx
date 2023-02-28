import React from 'react'
import { useContext } from 'react';
import LessonContext from '../contexts/BlogContext';
import Course from '../shared/Course';

const Blog = () => {
  const { data: { posts } } = useContext(LessonContext)
  return (
    <section className="container grid section">
      {posts.map((item) => (
        <Course item={item} key={item.id} />
      ))}
    </section>
  )
}

export default Blog
