import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Asset, Instructions } from '../components/CourseDetails';
import LessonContext from '../contexts/LessonContext';
import ProductContext from '../contexts/ProductContext';
import Button from '../shared/Button';

type menuType = "intructions"  | "assets"

const CourseDetail = () => {
    const params = useParams()
    const { getLessonDetails, data:{lesson} } = useContext(LessonContext)
    const {getLessonAssets,} = useContext(ProductContext)
    const [menu, setMenu] = useState<menuType>("intructions")
    useEffect(() => {
        getLessonDetails(params.slug)
        getLessonAssets(params.slug)
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
                 : menu === "assets" ? <Asset assets={lesson.assets}/> : null }
              </>
          ) :  <p>Loading</p> }
    </main>
  )
}

export default CourseDetail
