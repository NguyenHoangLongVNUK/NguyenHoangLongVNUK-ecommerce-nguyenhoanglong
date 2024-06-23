import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function PauseOnHover({ products }) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {products.map(product => (
                    <div className="bg-white " key={product.idProduct}>
                        <Link to={`?mod=product&id=${product.idProduct}`} className="p-1">
                            <img src={`/${product.thumbnail}`} className="product-img" alt="" />
                        </Link>
                        <div className="info">
                            <Link to={`?mod=product&id=${product.idProduct}`}>{product.title}</Link>
                            <h6 className="price text-danger mt-2">{product.price}</h6>
                            <div className="buy-now d-flex">
                                <Link to={`?mod=cart&action=add&id=${product.idProduct}`} className="btn-sm btn-dark mr-2">Thêm giỏ hàng</Link>
                                <Link to={`?mod=checkout&action=buyNow&id=${product.idProduct}`} className="btn-sm btn-danger">Mua ngay</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PauseOnHover;
