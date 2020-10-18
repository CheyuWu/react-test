import React, { useEffect, useState } from 'react'
import { useAxiosGet } from '../Hooks/HttpRequests'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

function Product() {
    const { id } = useParams()
    const url = `https://5f8191825b1f3f00161a6b46.mockapi.io/product/${id}`
    let product = useAxiosGet(url)
    let content = null
    if (product.error) {
        content =
        <div className="bg-blue-300 mb-2 p-3">
        There was a problem when trying to fetch the product.
    </div>
    }

    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.data) {

        content =
            <div className="text-2xl font-bold mb-3">
                <h1>{product.data.name}</h1>

                <div >
                    <img
                        src={product.data.images}
                        alt={product.data.name}
                    ></img>
                </div>
                <div className="text-xl font-bold mb-3">
                    <h1>$ {product.data.price}</h1>
                </div>
                <div>
                    <h1>Description : {product.data.description}</h1>
                </div>

            </div>

    }
    return (
        <div>
            {content}
        </div>
    )

}

export default Product