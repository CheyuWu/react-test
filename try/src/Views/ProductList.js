import React, { useEffect, useState } from 'react'

import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import {useAxiosGet} from '../Hooks/HttpRequests'

function ProductList() {
    const url = `https://5f8191825b1f3f00161a6b46.mockapi.io/product?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null

    
    if (products.error) {
        content =
            <div className="bg-blue-300 mb-2 p-3">
                There was a problem when trying to fetch the product.
            </div>         
    }

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data) {
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard 
                    product = {product}
                    />
                        
                </div>
            )

    }
    return (
        <div>
            <h1 className="font-bold text-2xl ">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default ProductList