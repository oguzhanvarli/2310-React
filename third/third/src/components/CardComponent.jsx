import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../store/features/cartSlice'

function CardComponent({ product }) {

    const dispatch = useDispatch()

    return (
        <div className="max-w-sm mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img style={{ maxHeight: 250, minHeight: 250, minWidth: '100%' }} className="rounded-t-lg" src={product.thumbnail} alt={product.title} />
            </a>
            <div className="p-5">
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            {product.title}
                        </h5>
                    </a>
                    <p className="mb-3 truncate font-normal text-gray-700 dark:text-gray-400">
                        {product.description}
                    </p>
                </div>
                <div className='relative my-12'>
                    <button
                        onClick={() => dispatch(increment())}
                        className="absolute bottom-0 right-0 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CardComponent