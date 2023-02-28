import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Asset, Instructions } from '../components/CourseDetails';
import LessonContext, { useBlogContext } from '../contexts/BlogContext';
import ProductContext from '../contexts/ProductContext';
import Button from '../shared/Button';

type menuType = "intructions" | "assets"

const PostDetail = () => {
    const params = useParams()
    const { getLessonDetails, data: { post } } = useBlogContext()
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


            {post ? (
                <>
                    <section className="lesson__intro section">
                        <h2> {post.title} </h2>
                        <p> {post.description} </p>
                    </section>
                    {menu === "intructions" ?
                        <Instructions instructions={post.instructions} />
                        : menu === "assets" ? <Asset assets={post.assets} /> : null}
                </>
            ) : <p>Loading</p>}
        </main>
    )
}

export default PostDetail
