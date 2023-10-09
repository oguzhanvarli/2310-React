// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardComponents from '../components/CardComponents';

export function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        console.log('worked')
        let response = await fetch("https://dummyjson.com/products").then((res) => res.json())
        // response = response.products
        setData(response.products)
    }

    return (
        <div>
            {
                data && data.map((product, key) => (
                    <CardComponents key={key} product={product} />
                ))
            }

        </div>
    )
}

export default Home