import React from 'react'
import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
import Product from '../shared/Product';

type PostDetail = {
  post: {
    id: number,
    slug: string,
    description: string,
    excerpt: string
    step: string,
    content: string,
    image_url: string
  }[]
}


type asset = {
  assets: {
    id: number
    name: string
    uses: string
  }[]
}



export const Asset = ({ assets }: asset) => {
  const { data: { lessonAssets } } = useContext(ProductContext)
  console.log(lessonAssets)
  return (
    <section className="section">

      <div className="grid">
        {lessonAssets.length > 0 && lessonAssets.map((asset) => (
          <Product item={asset} key={asset.id} />
        ))}
      </div>
    </section>
  )
}



