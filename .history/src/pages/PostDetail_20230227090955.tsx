import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Asset } from '../components/PostDetail';
import ProductContext from '../contexts/ProductContext';
import Button from '../shared/Button';
import { useBlogContext } from '../contexts/BlogContext';

type menuType = "intructions" | "assets"

const PostDetail = () => {
    const params = useParams()
    const { getLessonDetails, data: { post } } = useBlogContext()
    const { getLessonAssets, } = useContext(ProductContext)
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

            <section>
                <h2>{post.title}</h2>

                <div>
                    <img src={`http://127.0.0.1:8000${post.image_url}`} alt="" />
                </div>

                <div>
                    <p>{post.description}</p>
                </div>
            </section>



        </main>
    )
}

export default PostDetail
