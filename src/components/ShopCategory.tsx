import React, { useState, useEffect } from 'react'
import getData from '../utils/fetchFunc'
import { FaSearch } from "react-icons/fa"
import "../css/filter.css"

type shopCategory = {
    handleSearch: (name: any) => void
}


const ShopCategory = ({ handleSearch }: shopCategory) => {
    const [category, setCategory] = useState<{ id: number, name: string }[]>([])

    useEffect(() => {
        async function getCategory() {
            const data = await getData("category")
            setCategory(data.results)
        }
        getCategory()
    }, [])


    return (
        <div className="filter">

            <select>
                <option value="All" >All</option>

                {category.length > 0 && category.map((item) => (
                    <option value={item.name} key={item.id}>{item.name}</option>
                ))}

            </select>

            <div className="search">
                <input type="text" placeholder='Search for  products....' onChange={(e) => handleSearch(e.target.value
                )} />
                <FaSearch />
            </div>
        </div>
    )
}

export default ShopCategory
