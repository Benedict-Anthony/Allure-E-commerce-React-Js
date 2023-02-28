import React from 'react'
import Post from '../shared/Post';
import { useBlogContext } from '../contexts/BlogContext';
import "../css/blog.css"
const Blog = () => {
  const { data: { posts } } = useBlogContext()
  return (
    <section className="container grid-3 section">
      {posts.map((item) => (
        <Post item={item} key={item.id} />
      ))}
    </section>
  )
}

export default Blog
