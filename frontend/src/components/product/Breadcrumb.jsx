import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';
const Breadcrumb = ({ product }) => {
    return (
        <nav className="breadcrumb-container">
            <Link to="/" className="breadcrumb-link">
                <i className="fa-solid fa-house mr-2"></i>Trang chủ
            </Link>
            <span className="breadcrumb-separator"> &raquo;</span>
            <Link to={`/product/${product?.id}`} className="breadcrumb-link">
                {product?.category_name}
            </Link>
            <span className="breadcrumb-separator"> &raquo;</span>
            <span className="breadcrumb-current">{product?.name}</span>
        </nav>
    );
}

export default Breadcrumb;
