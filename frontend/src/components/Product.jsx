/* eslint-disable no-unused-vars */
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../config/api';
import Sidebar from './layout/Sidebar';
import Breadcrumb from './product/Breadcrumb';
import ProductDescription from './product/ProductDescription';
import ProductInfo from './product/ProductInfo';
import RelatedProducts from './product/RelatedProducts';
import './product/detail.css';

const ProductPage = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState({
        product: null,
        images: [],
        relatedProducts: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const [productResponse, relatedProductsResponse] = await Promise.all([
                getProductById(productId),
                getRelatedProducts(productId)
            ]);

            setProductData({
                product: productResponse.data,
                images: productResponse.data.images,
                relatedProducts: relatedProductsResponse.data
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch product data');
        } finally {
            setLoading(false);
        }
    }, [productId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (error) return <div>{error}</div>;

    const { product, images, relatedProducts } = productData;

    return (
        <div id="wrapper-container" className="container">
            <div className="row">
                <Sidebar />
                <div className="col-lg-9">
                    <Breadcrumb product={product} />
                    <ProductInfo product={product} images={images} />
                    <ProductDescription description={product?.description} />
                    <RelatedProducts products={relatedProducts} />
                </div>
            </div>
        </div>
    );
}

export default ProductPage;