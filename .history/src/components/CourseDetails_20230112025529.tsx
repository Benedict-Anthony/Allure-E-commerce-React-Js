import React from 'react'
import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
import Product from '../shared/Product';



type instructions = {
    instructions: {
        id: number,
        slug: string,
        description: string,
        step: string,
        content: string, 
        image: string
    }[]
}


type asset = {
    assets: {
    id: number
    name: string
    uses:string
    }[]
}
export const Instructions = ({ instructions }: instructions) => {    
  return (
    <section className="section instructions">
          { instructions && instructions.map((item) => (
              <article key={item.id}>
                  <h2>{ item.step}</h2>
                  <div className="instructions__step flex">
                    <div className="image">
                      <img src={"http://127.0.0.1:8000"+item.image} alt="" />
                    </div>

                  <div className="text">
                      <p>{ item.content}</p>
                  </div>
                </div>
              </article>
        ))}
    </section>
  )
}


export const Asset = ({ assets }: asset) => {
    const {data:{lessonAssets}} = useContext(ProductContext)
    console.log(lessonAssets)
    return (
        <section className="section assets">
            <p>These are all the asset to get started.</p>

            <div className="assets__items">
                {/* {assets && assets.map((item) => (
                    
                    <ul key={item.id}>
                        <li> {item.name} </li>
                        <p>{ item.uses}</p>
                    </ul>
                ))} */}

                
            </div>

          
            <div className="grid">
                {lessonAssets.length > 0 && lessonAssets.map((asset) => (
                <Product item={asset} key={ asset.id} />
            ))}
            </div>
        
    )
}



