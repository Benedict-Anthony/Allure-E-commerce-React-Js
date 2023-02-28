import React from 'react'
import Course from '../shared/Course';
import { useBlogContext } from '../contexts/BlogContext';

const Blog = () => {
  const { data: { posts } } = useBlogContext()
  return (
    <section className="container grid section">
      {posts.map((item) => (
        <Course item={item} key={item.id} />
      ))}
    </section>
  )
}

export default Blog
