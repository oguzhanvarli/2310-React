import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useLocation, useParams } from 'react-router-dom'
import { increment } from '../store/features/cartSlice'
import { useDispatch } from 'react-redux'

function ProductDetail() {

    const { state } = useLocation()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})

    const refSample = useRef()


    //    `asdsadasads${state}asdasdasdas${sad}`

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        axios.get(`https://dummyjson.com/products/${state}`).then(res => setProduct(res.data))
            .catch(err => console.log('Get Product Error', err))
    }

    //refSample.current.style.backgroundColor = 'red'



    return (
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div ref={refSample} class="row-span-3 max-w-sm mx-auto mt-20">
                <Carousel autoPlay dynamicHeight>
                    {product.images && product.images.map((img) => (
                        <div>
                            <img src={img} alt='product'/>
                        </div>
                    ))}

                </Carousel>
            </div>
            <div class="col-span-2 m-auto ">
                <h2 className='text-3xl text-blue-600'>{product.title}</h2>
            </div>
            <div class="row-span-2 col-span-2 m-auto">
                <h5 className='text-gray-700'>{product.description}</h5>
                <p className='text-red-500 text-xl text-center'>{product.price}$</p>
                <button className='bg-red-600 text-white p-2 rounded mt-10' onClick={() => dispatch(increment())}>Add To Card</button>
            </div>
        </div>
    )
}

export default ProductDetail