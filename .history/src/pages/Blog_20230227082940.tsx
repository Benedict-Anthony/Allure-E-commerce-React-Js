import React from 'react'
import Post from '../shared/Post';
import { useBlogContext } from '../contexts/BlogContext';

const Blog = () => {
  const { data: { posts } } = useBlogContext()
  return (
    <section className="container grid section">
      {posts.map((item) => (
        <Post item={item} key={item.id} />
      ))}
    </section>
  )
}

export default Blog
