import React, { useState } from 'react';
import './cart.css';

const CartPage = () => {
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
    ];
    const [cart, setCart] = useState(cartItems);

    const handleQuantityChange = (productId, newQty) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                const newTotal = item.price * newQty;
                return { ...item, qty: newQty, total: newTotal };
            }
            return item;
        });

        setCart(updatedCart);
    };

    const totalMoney = cart.reduce((total, product) => total + product.total, 0);

    // Định dạng tiền tệ
    const currencyFormat = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    };

    return (
        <div id="main-content-wp" className="cart-page container">
            <nav className="container">
                <div className="d-flex align-items-center">
                    <a href="/" className="text-decoration-none text-dark">
                        <i className="fas fa-house text-dark mr-2"></i>Trang chủ
                    </a>
                    <span className="text-muted mx-2">&raquo;</span>
                    <span>Giỏ hàng</span>
                </div>
            </nav>
            <div id="wrapper" className="wp-inner clearfix mt-4">
                {cart.length > 0 ? (
                    <div className="section" id="info-cart-wp">
                        <div className="section-detail table-responsive">
                            <div className="table-container">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Ảnh sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá sản phẩm</th>
                                            <th>Giảm giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(product => (
                                            <tr key={product.id}>
                                                <td>
                                                    <a href={`?mod=product&id=${product.id}`} title="" className="thumb">
                                                        <img src={`/${product.thumbnail}`} width="92px" alt="" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`?mod=product&id=${product.id}`} title="" className="name-product text-primary text-decoration-none">{product.title}</a>
                                                </td>
                                                <td>{currencyFormat(product.price)}</td>
                                                <td>{currencyFormat1(product.discount)}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        name="num-order"
                                                        min="1"
                                                        max="10"
                                                        id="num-order"
                                                        data-id={product.id}
                                                        value={product.qty}
                                                        className="num-order"
                                                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                                    />
                                                </td>
                                                <td id={`total-${product.id}`}>{currencyFormat(product.total)}</td>
                                                <td>
                                                    <a href={`?mod=cart&action=delete&id=${product.id}`} title="" className="del-product">
                                                        <i className="fa-solid fa-trash text-dark"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="checkout mt-4">
                                <p id="total-price" className="fl-right">Tổng giá: <span id="total_money">{currencyFormat(totalMoney)}</span></p>
                                <br />
                                <div className="update">
                                    <a href="?mod=checkout" title="" className="btn btn-info text-uppercase">Thanh toán</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center">
                        <img src="public/img/empty-cart.png" alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

// Định dạng giảm giá
const currencyFormat1 = (value) => {
    // Thực hiện định dạng giảm giá ở đây (nếu cần)
    return value; // Cần thay đổi để định dạng theo đúng yêu cầu
};

export default CartPage;
