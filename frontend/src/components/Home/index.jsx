/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from '../layout/Sidebar'
import s from './styles.module.scss'

function Home() {
    return (
        <>
            <div className={s.container}>
                <div className={s.row}>
                    <Sidebar />

                    <div className={s.col_lg_9}>
                        <div className={s.carousel}></div>

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

                        <div className={s.header_title}>

                        </div>

                        <div className={s.section}>
                            <h5>Điện thoại 1</h5>
                            <div className={s.list_product_phone}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
