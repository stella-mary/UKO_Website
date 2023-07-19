import React from 'react'
import ProductTop from './ProductTop/index'
import ProductBottom from './ProductBottom/index'
import './ProductTop/index.css'

const Product = () => {
    return (
        <div className='product'>
            <ProductTop />
            {/* <ProductBottom /> */}
        </div>
    )
}

export default Product
