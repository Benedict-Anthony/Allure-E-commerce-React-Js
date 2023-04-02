import React from 'react'
import { Helmet } from 'react-helmet-async'


type headeProps = {
    title?: string
    description?: string
    keyword?: string
    href?: string

}

const Head = ({ title, description, keyword, href }: headeProps) => {
    return (
        <Helmet>
            <meta name='keyword' content={`makeup, allure, shop, store, clothes ${keyword}`} />
            <meta name='description' content={`Allure, ${description} `} />
            <meta name="author" content='Benedict Anthony' />
            <meta name="company" content='benwebdev.org' />
            <link rel="canonical" href={href} />
            <title style={{
                textTransform: 'capitalize'
            }}>{title} | Allure</title>
        </Helmet>
    )
}

export default Head
