import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Asset, Category, Instructions } from '../components/CourseDetails';
import LessonContext from '../contexts/LessonContext';
import Button from '../shared/Button';

type menuType = "intructions" | "category" | "assets"

const CourseDetail = () => {
    const params = useParams()
    const { getLessonDetails, data:{lesson} } = useContext(LessonContext)
    const [menu, setMenu] = useState<menuType>("intructions")
    useEffect(() => {
        getLessonDetails(params.slug)
        // eslint-disable-next-line
    }, [params.slug])

  return (
    <main className="section container">
          <div className="lesson__menu">
              <div className="menu">
                  <Button type="button" hanldleOnclick={() => setMenu("assets")}>
                      Assets
                  </Button>
              </div>
              <div className="menu">
                    <Button type="button" hanldleOnclick={() => setMenu("category")}>
                      Category
                  </Button>
              </div>
              <div className="menu">
                  <Button type="button" hanldleOnclick={() => setMenu("intructions")}>
                      Instructions
                  </Button>
              </div>
        </div>

          
          {lesson ? (
              <>
                  <section className="lesson__intro section">
                      <h2> {lesson.title} </h2>
                      <p> {lesson.description} </p>
                  </section>
                  {menu === "intructions" ? 
                <Instructions instructions={lesson.instructions}/>
                 : menu === "category" ? <Category category={lesson.category}/> : menu === "assets" ? <Asset assets={lesson.assets}/> : null }
              </>
          ) :  <p>Loading</p> }
    </main>
  )
}

export default CourseDetail
