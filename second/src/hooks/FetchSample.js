// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function FetchSample() {

    //let response = []
    const [data, setData] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        getProducts()
    }, [])


    //useEffect(() => {},[])
    

    //console.log(typeof(data))
    const getProducts = async () => {
        console.log('worked')
        let response = await fetch("https://dummyjson.com/products").then((res) => res.json())
        // response = response.products
        setData(response.products)

    }
    //getProducts()

    
    //BAU-Wissen23




    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Arttır</button>
            <button onClick={() => setCounter(counter - 1)}>Arttır</button>
            {
                data && data.map((product, key) => (
                    <Card key={key} sx={{ maxWidth: 350 }}>
                        <CardMedia
                            sx={{ height: 350}}
                            image={product.thumbnail}
                            title={product.title}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                ))
            }

        </div>
    )
}

export default FetchSample