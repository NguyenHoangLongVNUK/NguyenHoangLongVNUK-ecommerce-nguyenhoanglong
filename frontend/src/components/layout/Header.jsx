/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'; // Import CSS Module

function Header() {
    return (
        <header className={styles.mb_4}>

            <div className={styles.nav_header}>
                <div className={styles.container}>
                    <div className={styles.row_py_2}>
                        <div className={styles.col_md_6}>
                            <a href="">
                                <i></i>
                                Hình thức thanh toán
                            </a>
                        </div>
                        <ul className={styles.col_md_6_ul}>
                            <li>
                                <a href="#">Trang chủ</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.row_py_3}>

                        <div className={styles.col_sm_1}>
                            <a href="">
                                <img src="/logoi8.png" alt="" />
                            </a>
                        </div>

                        <div className={styles.col_sm_2}>
                            <form>
                                <input type="text" placeholder='Nhập từ khóa...' />
                                <button>Tìm kiếm</button>
                            </form>
                        </div>

                        <div className={styles.col_sm_3}>
                            <div className={styles.d_flex}>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" /></svg>
                                </i>
                                <div className={styles.flex_column}>
                                    <span>Tư vấn 24/7</span>
                                    <span className={styles.h6}>098.123.4567</span>
                                </div>
                            </div>
                            <div className={styles.show_product}>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="white" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                    </svg>

                                </i>
                                <span> 0 </span>
                                <div className={styles.m_0}>Bạn chưa có sản phẩm trong giỏ hàng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
