import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductInfo = ({ product, images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0].thumbnail);
    const [selectedImageId, setSelectedImageId] = useState(images[0].id);

    const handleThumbnailClick = (thumbnail, id) => {
        setSelectedImage(thumbnail);
        setSelectedImageId(id);
    };

    const handlePrevClick = () => {
        const currentIndex = images.findIndex(img => img.id === selectedImageId);
        if (currentIndex > 0) {
            const prevImage = images[currentIndex - 1];
            setSelectedImage(prevImage.thumbnail);
            setSelectedImageId(prevImage.id);
        }
    };

    const handleNextClick = () => {
        const currentIndex = images.findIndex(img => img.id === selectedImageId);
        if (currentIndex < images.length - 1) {
            const nextImage = images[currentIndex + 1];
            setSelectedImage(nextImage.thumbnail);
            setSelectedImageId(nextImage.id);
        }
    };

    return (
        <div className="wr-info-product mt-4">
            <div className="section">
                <h5 className="text-uppercase mb-3">Thông tin sản phẩm</h5>
                <div className="row">
                    <div className="col-md-6">
                        <div className="wrapper">
                            <div className="wrapper-img">
                                <img src={`/${selectedImage}`} id="zoom" width="250px" alt="" />
                                <div className="prev-btn" onClick={handlePrevClick} style={{ opacity: images.findIndex(img => img.id === selectedImageId) === 0 ? 0.5 : 1 }}>
                                    <i className="fa-solid fa-angle-left"></i>
                                </div>
                                <div className="next-btn" onClick={handleNextClick} style={{ opacity: images.findIndex(img => img.id === selectedImageId) === images.length - 1 ? 0.5 : 1 }}>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                            <ul className="list-img">
                                {images.map(img => (
                                    <li
                                        className={`thumb-item ${selectedImageId === img.id ? 'active' : ''}`}
                                        key={img.id}
                                        onClick={() => handleThumbnailClick(img.thumbnail, img.id)}
                                    >
                                        <img src={`/${img.thumbnail}`} className="img-thumbnail" alt="" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 bg-white pt-4">
                        <div className="wr-info">
                            <h6 className="name-product text-uppercase pb-3 pl-2">{product.title}</h6>
                            <small className="desc">
                                {product.desc_detail}
                            </small>
                            <p className="price mt-3 ml-5 text-danger">Giá thành:
                                <span className="badge badge-dark">{product.price_money}</span>
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={`/cart`} className="btn btn-success">Thêm giỏ hàng</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
