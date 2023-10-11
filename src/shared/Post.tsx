import React from 'react'
import { Link } from 'react-router-dom';
import { blogInterface } from '../types/reducerTypes';
import Button from './Button';
import Card from './Card';
import { imageURL } from '../lib';

interface courseInterface {
  item: blogInterface
}
const Post = ({ item }: courseInterface) => {
  return (
    <Card>
      <div className="post_card">
        <img src={imageURL + item.thumbnail_url} alt="" className="card__img" />
        <div className="card__info">
          <h2>{item.title}</h2>
          <p>{item.excerpt}</p>
        </div>
      </div>
      <Button type="button">
        <Link to={`/course/${item.slug}`}>Read More</Link>
      </Button>
    </Card>
  )
}

export default Post
