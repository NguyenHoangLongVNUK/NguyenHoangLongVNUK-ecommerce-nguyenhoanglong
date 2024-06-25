/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import s from './styles.module.scss'; // Import CSS Module

export default function Sidebar() {
    return (
        <div className={s.col_lg_3}>
            <div className={s.product_category}>
                <h5>Danh mục sản phẩm</h5>
                <ul>
                    <li className={s.border_bottom}>
                        <a href="/dienthoai">
                            Điện thoại
                        </a>
                    </li>
                    <li className={s.border_bottom}>
                        <a href="/laptop">
                            Laptop
                        </a>
                    </li>
                    <li className={s.border_bottom}>
                        <a href="/dongho">
                            Đồng hồ
                        </a>
                    </li>
                    <li className={s.border_bottom}>
                        <a href="phukien">
                            Phụ kiện
                        </a>
                    </li>
                </ul>
            </div>

            <img src="/Home/banner2.jpg" alt="" className={s.thumbnail} />
            <img src="/Home/banner3.jpg" alt="" className={s.thumbnail} />
            <img src="/Home/banner4.jpg" alt="" className={s.thumbnail} />
        </div>
    )
}