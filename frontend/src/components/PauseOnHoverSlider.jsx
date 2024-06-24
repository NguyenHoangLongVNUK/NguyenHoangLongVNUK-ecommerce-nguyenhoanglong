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
                {products.map((product, item) => (
                    <div className="bg-white " key={item}>
                        <Link to={`?mod=product&id=${product?.id}`} className="p-1">
                            <img src={`/${product?.image_url}`} className="product-img" alt="" />
                        </Link>
                        <div className="info">
                            <Link to={`?mod=product&id=${product?.id}`}>{product?.name}</Link>
                            <h6 className="price text-danger mt-2">{product?.price}</h6>
                            <div className="buy-now d-flex">
                                <Link to={`?mod=cart&action=add&id=${product?.id}`} className="btn-sm btn-dark mr-2">Thêm giỏ hàng</Link>
                                <Link to={`?mod=checkout&action=buyNow&id=${product?.id}`} className="btn-sm btn-danger">Mua ngay</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PauseOnHover;
