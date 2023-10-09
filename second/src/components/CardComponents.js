import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';

function CardComponents({product}) {

    const navigate = useNavigate()

    const handleNavigate = () => {
        /////yapmak isteğim işlemler
        //veri çekme, veri post etme vs vs
        navigate('/product')

    }
    
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height: 350 }}
                image={product.thumbnail}
                title={product.title} />
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
                <Button size="small" onClick={() => handleNavigate()}>Learn More</Button>                
                <Link to={'/product'} >Go</Link>
            </CardActions>
        </Card>

    )
}

export default CardComponents