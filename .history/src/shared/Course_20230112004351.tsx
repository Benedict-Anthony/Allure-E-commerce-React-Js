import React from 'react'
import { Link } from 'react-router-dom';
import { lessonInterface } from '../types/reducerTypes';
import Button from './Button';
import Card from './Card';

interface courseInterface{
    item:lessonInterface | any
}
const Course = ({item}: courseInterface) => {
  return (
          <Card>
          <div className="course_card">
            <img src={"http://127.0.0.1:8000"+item.thumbnail_url} alt="" className="card__img" />
            <div className="card__info">
                <p>{item.title}</p>
              <Button type="button">
              <Link to={`/course/${item.slug}`}>Join class</Link>
              </Button>
            </div>
          </div>
          </Card> 
  )
}

export default Course
