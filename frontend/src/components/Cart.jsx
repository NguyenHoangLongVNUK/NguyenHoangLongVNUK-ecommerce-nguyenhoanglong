import React from 'react'
import CartPage from './cart/CartPage';

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            thumbnail: 'product1.png',
            title: 'Sản phẩm 1',
            price: 100000,
            discount: 5000,
            qty: 2,
            total: 200000
        },
        {
            id: 2,
            thumbnail: 'product2.png',
            title: 'Sản phẩm 2',
            price: 150000,
            discount: 0,
            qty: 1,
            total: 150000
        },
        {
            id: 3,
            thumbnail: 'product3.png',
            title: 'Sản phẩm 3',
            price: 12000,
            discount: 0,
            qty: 2,
            total: 12000

        },
        // Thêm các sản phẩm khác vào đây
    ];
    return (
        <CartPage cartItems={cartItems} />
    )
}

export default Cart
