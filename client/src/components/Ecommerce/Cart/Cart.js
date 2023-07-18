import React from 'react'
import CartLeft from './CartLeft/index'
import CartRight from './CartRight/index'
import './CartLeft/index.css'

const Cart = () => {
    return (
        <div className='cart'>
            <CartLeft />
            <CartRight />
        </div>
    )
}

export default Cart
