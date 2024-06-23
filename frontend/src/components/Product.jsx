import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Breadcrumb from './product/Breadcrumb';
import ProductDescription from './product/ProductDescription';
import ProductInfo from './product/ProductInfo';
import RelatedProducts from './product/RelatedProducts';
import './product/detail.css';
import { useParams } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
const fakeData = {
    listCate: [
        { id: 1, name: 'Electronics', level: 0, parent_id: null },
        { id: 2, name: 'Laptops', level: 1, parent_id: 1 },
        { id: 3, name: 'Mobile Phones', level: 1, parent_id: 1 },
        { id: 4, name: 'Home Appliances', level: 0, parent_id: null },
        { id: 5, name: 'Refrigerators', level: 1, parent_id: 4 },
        { id: 6, name: 'Microwaves', level: 1, parent_id: 4 }
    ],
    product: {
        id: 1,
        title: 'iPhone 13 Pro Max',
        desc_detail: 'The latest iPhone with amazing features.',
        price_money: '1,299 USD',
        idProduct: 1,
        name: 'Mobile Phones',
        description: 'The iPhone 13 Pro Max comes with a new design and cutting-edge technology. It features a stunning display, powerful processor, and impressive camera capabilities.'
    },
    listImg: [
        { id: 1, thumbnail: 'product1.png' },
        { id: 2, thumbnail: 'product2.png' },
        { id: 3, thumbnail: 'product3.png' },
        { id: 4, thumbnail: 'product4.png' }
    ],
    listProductCate: [
        {
            idProduct: 1,
            title: 'Samsung Galaxy S21',
            price: '111 USD',
            thumbnail: 'product4.png'
        },
        {
            idProduct: 2,
            title: 'Samsung Galaxy S21',
            price: '999 USD',
            thumbnail: 'product1.png'
        },
        {
            idProduct: 3,
            title: 'OnePlus 9 Pro',
            price: '969 USD',
            thumbnail: 'product2.png'
        },
        {
            idProduct: 4,
            title: 'Google Pixel 6',
            price: '899 USD',
            thumbnail: 'product3.png'
        }
    ]
};

const ProductPage = () => {
    let { productId } = useParams();
    const { listCate, product, listImg, listProductCate } = fakeData;

    return (
        <div id="wrapper-container" className="container">
            <div className="row">
                <Sidebar />
                <div className="col-lg-9">
                    <Breadcrumb product={product} />
                    <ProductInfo product={product} images={listImg} />
                    <ProductDescription description={product.description} />
                    <RelatedProducts products={listProductCate} />
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
