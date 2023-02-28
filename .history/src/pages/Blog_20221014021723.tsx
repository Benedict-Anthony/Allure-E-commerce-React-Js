import React from 'react'
import { useContext } from 'react';
import LessonContext from '../contexts/LessonContext';
import Course from '../shared/Course';

const Tutorials = () => {
    const {data:{lessons}} = useContext(LessonContext)
  return (
      <section className="container grid section">
          {lessons.map((item) => (
              <Course item={item} key={item.id} />
          ))}
    </section>
  )
}

export default Tutorials
