import React from 'react'
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../shared/Product';
import ProductContext from '../contexts/ProductContext';
import { useBlogContext } from '../contexts/BlogContext';



const PostDetail = () => {
    const params = useParams()
    const { getLessonDetails, data: { post } } = useBlogContext()
    const { getLessonAssets, } = useContext(ProductContext)
    const { data: { blogAssets } } = useContext(ProductContext)

    useEffect(() => {
        getLessonDetails(params.slug)
        getLessonAssets(params.slug)
        // eslint-disable-next-line
    }, [params.slug])


    return (
        <main className="section container posts_detail">
            <section className="post">

                <div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
                <div>
                    <img src={`http://127.0.0.1:8000${post.image_url}`} alt="" />
                </div>
            </section>

            <section className="section">

                <div className="grid">
                    {blogAssets.length > 0 && blogAssets.map((asset) => (
                        <Product item={asset} key={asset.id} />
                    ))}
                </div>
            </section>

        </main>
    )
}

export default PostDetail
