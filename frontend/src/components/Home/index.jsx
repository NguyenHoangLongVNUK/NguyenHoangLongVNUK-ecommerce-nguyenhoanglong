/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../layout/Sidebar'
import { Carousel } from 'antd';
import { getDiscountedProducts, getSuggestedProducts, getMenuProducts, getSearchProducts } from '../../config/api';
import ListProduct from './ListProduct';
import s from './styles.module.scss'

const styles = `
.carousel_plus {
    .slick-track{
        background: 'linear-gradient(90deg, #18A5A7, #BFFFC7)';
    }
    .slick-slide.slick-active.slick-current{
        width: 335px !important;
        margin: 0px !important;
    }
    .slick-cloned{
        width: 335px !important;
    }
    .text_center {
        text-align: center !important;
        padding: .5rem !important;
        box-sizing: border-box;
        display: list-item;
        unicode-bidi: isolate;
        list-style: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        height: 160px !important;
        margin-top: 30px !important;
        color: #212529;

        >a {
            color: inherit;
            text-decoration: none;
            background-color: transparent;
            box-sizing: border-box;
            text-align: center !important;
            list-style: none;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;

            >img {
                border: 0 !important;
                padding: .25rem;
                background-color: #fff;
                border-radius: .25rem;
                max-width: 100%;
                height: auto;
                vertical-align: middle;
                box-sizing: border-box;
                color: inherit;
                margin: auto;
            }
        }

        >h6 {
            font-size: 1rem;
            margin-bottom: .5rem;
            font-weight: 500;
            line-height: 1.2;
            margin-top: 10px;
            box-sizing: border-box;
            text-align: center !important;
            list-style: none;
        }

        >small {
            font-size: 80%;
            font-weight: 400;
            box-sizing: border-box;
            text-align: center !important;
            list-style: none;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            line-height: 1.5;
            color: #212529;
        }
    }
    .slick-slide{
        width: 335px !important;
        margin: 0px !important;
    }
}
`;

export default function Home() {
    const { select } = useParams();
    const paramValue = (select != '#' && select != null) ? select : null
    const [listSuggestedProducts, setlistSuggestedProducts] = useState([]);
    const [listDiscountedProducts, setlistDiscountedProducts] = useState([]);
    const [listMenuProducts, setlistMenuProducts] = useState([]);
    const [listSearchProducts, setlistSearchProducts] = useState([]);

    const getListMenuAndSearchProducts = async () => {
        const validValues = ['dienthoai', 'laptop', 'dongho', 'phukien'];
        try {
            if (validValues.includes(paramValue)) {
                const listMenuProducts = await getMenuProducts(paramValue == 'dienthoai' ? 1 : (paramValue == 'laptop' ? 2 : (paramValue == 'dongho' ? 3 : 4)));
                if (listMenuProducts.status == 200) {
                    setlistMenuProducts(listMenuProducts?.data?.map(item => {
                        return {
                            id: item.product_id,
                            name: item.name,
                            price: item.price,
                            image: item.image_url
                        }
                    }));
                }
                else {
                    return [];
                }
            }
            else {
                const listSearchProducts = await getSearchProducts(paramValue);
                if (listSearchProducts.status == 200) {
                    setlistSearchProducts(listSearchProducts?.data?.map(item => {
                        return {
                            id: item.product_id,
                            name: item.name,
                            price: item.price,
                            image: item.image_url
                        }
                    }));
                }
                else {
                    return [];
                }
            }

        }
        catch (err) {
            console.log('Homepage: ', err);
            return [];
        }
    }

    const getListSuggestedProducts = async () => {
        try {
            const listSuggestedProducts = await getSuggestedProducts();
            if (listSuggestedProducts.status == 200) {
                setlistSuggestedProducts(listSuggestedProducts?.data?.map(item => {
                    return {
                        id: item.product_id,
                        name: item.name,
                        price: item.price,
                        image: item.image_url
                    }
                }));
            }
            else {
                return [];
            }
        }
        catch (err) {
            console.log('Homepage: ', err);
            return [];
        }
    }

    const getListDiscountedProducts = async () => {
        try {
            const listDiscountedProducts = await getDiscountedProducts();
            if (listDiscountedProducts.status == 200) {
                setlistDiscountedProducts(listDiscountedProducts?.data?.map(item => {
                    return {
                        id: item.product_id,
                        name: item.name,
                        price: item.price,
                        image: item.image_url
                    }
                }));
            }
            else {
                return [];
            }
        }
        catch (err) {
            console.log('Homepage: ', err);
            return [];
        }
    }

    useEffect(() => {
        getListSuggestedProducts();
        getListDiscountedProducts();
        if (paramValue != null) {
            getListMenuAndSearchProducts();
        }
    }, [])


    return (
        <>
            <style>{styles}</style>
            <div className={s.container}>
                <div className={s.row}>
                    <Sidebar />

                    <div className={s.col_lg_9}>

                        <div className={s.carousel}>
                            <Carousel autoplay className='carousel_plus'>
                                <div className='text_center'>
                                    <a href="">
                                        <img src="/Home/ship1.png" alt="" />
                                    </a>
                                    <h6>Ship toàn quốc</h6>
                                    <small>Giao hàng nhanh nhất</small>
                                </div>

                                <div className='text_center'>
                                    <a href="">
                                        <img src="/Home/ship2.png" alt="" />
                                    </a>
                                    <h6>Tư vấn 24/7</h6>
                                    <small>1900.9999</small>
                                </div>

                                <div className='text_center'>
                                    <a href="">
                                        <img src="/Home/ship3.png" alt="" />
                                    </a>
                                    <h6>Tiết kiệm hơn</h6>
                                    <small>Với nhiều ưu đãi cực lớn</small>
                                </div>

                                <div className='text_center'>
                                    <a href="">
                                        <img src="/Home/ship4.png" alt="" />
                                    </a>
                                    <h6>Thanh toán nhanh</h6>
                                    <small>Hỗ trợ nhiều hình thức</small>
                                </div>

                                <div className='text_center'>
                                    <a href="">
                                        <img src="/Home/ship5.png" alt="" />
                                    </a>
                                    <h6>Đặt hàng online</h6>
                                    <small>Thao tác đơn giản</small>
                                </div>
                            </Carousel>
                        </div>

                        <ul className={s.d_flex}>
                            <li className={s.text_center}>
                                <a href="">
                                    <img src="/Home/ship1.png" alt="" />
                                </a>
                                <h6>Ship toàn quốc</h6>
                                <small>Giao hàng nhanh nhất</small>
                            </li>

                            <li className={s.text_center}>
                                <a href="">
                                    <img src="/Home/ship2.png" alt="" />
                                </a>
                                <h6>Tư vấn 24/7</h6>
                                <small>1900.9999</small>
                            </li>

                            <li className={s.text_center}>
                                <a href="">
                                    <img src="/Home/ship3.png" alt="" />
                                </a>
                                <h6>Tiết kiệm hơn</h6>
                                <small>Với nhiều ưu đãi cực lớn</small>
                            </li>

                            <li className={s.text_center}>
                                <a href="">
                                    <img src="/Home/ship4.png" alt="" />
                                </a>
                                <h6>Thanh toán nhanh</h6>
                                <small>Hỗ trợ nhiều hình thức</small>
                            </li>

                            <li className={s.text_center}>
                                <a href="">
                                    <img src="/Home/ship5.png" alt="" />
                                </a>
                                <h6>Đặt hàng online</h6>
                                <small>Thao tác đơn giản</small>
                            </li>
                        </ul>

                        {paramValue != null ? (
                            ['dienthoai', 'laptop', 'dongho', 'phukien'].includes(paramValue) ? (
                                <ListProduct
                                    name={paramValue == 'dienthoai' ? "ĐIỆN THOẠI" : (paramValue == 'laptop' ? "LAPTOP" : (paramValue == 'dongho' ? "ĐỒNG HỒ" : "PHỤ KIỆN"))}
                                    list={listMenuProducts}
                                />
                            ) : (
                                <ListProduct name={'KẾT QUẢ TÌM KIẾM'} list={listSearchProducts} />
                            )
                        ) : (
                            <></>
                        )}

                        <ListProduct name={'SẢN PHẨM GỢI Ý'} list={listSuggestedProducts} />
                        <ListProduct name={'SẢN PHẨM GIẢM GIÁ'} list={listDiscountedProducts} />
                    </div>
                </div>
            </div>
        </>
    );
}
