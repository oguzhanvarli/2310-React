import axios from "axios"
import { useEffect, useState } from "react"
import CardComponent from "../components/CardComponent"
import { useDispatch } from "react-redux"
import { clearCart } from "../store/features/cartSlice"

function Home() {

    const dispatch = useDispatch()
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get('https://dummyjson.com/products').then(res => {
            if(res.status === 200){
                setData(res.data.products)
            }
        }).catch(err => console.log('Get Products Error', err))
    }
    
    
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* <button onClick={() => dispatch(clearCart())} className=" text-white bg-red-600 max-w-xs">Clear Cart</button> */}
    {data && data.map((product) => {
        return <CardComponent key={product.id} product={product}/>
    })}
    </div>
  )
}

export default Home