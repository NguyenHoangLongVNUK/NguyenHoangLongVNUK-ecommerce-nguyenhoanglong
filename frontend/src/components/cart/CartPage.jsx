import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../CartContext';
import { listCartWithIdsProduct } from '../../config/api';
import './cart.css';

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchCartProducts = async () => {
            try {
                const response = await listCartWithIdsProduct({ ids: cart });
                const productsWithQty = response.data.map(product => ({
                    ...product,
                    qty: 1,
                    total: (product.price - (product.price * (product.discount / 100)))
                }));
                setProducts(productsWithQty);
            } catch (error) {
                console.error('Error fetching cart products:', error);
            }
        };

        if (cart?.length > 0) {
            fetchCartProducts();
        } else {
            setProducts([]);
        }
    }, [cart]);

    const handleQuantityChange = (productId, newQty) => {
        const updatedProducts = products.map(product => {
            if (product.product_id === productId) {
                const newTotal = (product.price - (product.price * (product.discount / 100))) * newQty;
                return { ...product, qty: newQty, total: newTotal };
            }
            return product;
        });

        setProducts(updatedProducts);
    };

    const totalMoney = products.reduce((total, product) => total + product.total, 0);

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
                {products.length > 0 ? (
                    <div className="section" id="info-cart-wp">
                        <div className="section-detail table-responsive">
                            <div className="table-container">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Ảnh sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá sản phẩm</th>
                                            <th>Giảm giá (%)</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(product => (
                                            <tr key={product.product_id}>
                                                <td>
                                                    <a href={`/product/${product.product_id}`} title="" className="thumb">
                                                        <img src={`${product.image_url}`} width="92px" alt="" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`/product/${product.product_id}`} title="" className="name-product text-primary text-decoration-none">{product.name}</a>
                                                </td>
                                                <td>{currencyFormat(product.price)}</td>
                                                <td>{product.discount}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        name="num-order"
                                                        min="1"
                                                        max="10"
                                                        id="num-order"
                                                        value={product.qty}
                                                        className="num-order"
                                                        onChange={(e) => handleQuantityChange(product.product_id, parseInt(e.target.value))}
                                                    />
                                                </td>
                                                <td id={`total-${product.product_id}`}>{currencyFormat(product.total)}</td>
                                                <td>
                                                    <button type='button' onClick={() => removeFromCart(product.product_id)} title="" className="del-product">
                                                        <i className="fa-solid fa-trash text-dark"></i>
                                                    </button>
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
                        <img src="/empty-cart.png" alt="Empty Cart" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
