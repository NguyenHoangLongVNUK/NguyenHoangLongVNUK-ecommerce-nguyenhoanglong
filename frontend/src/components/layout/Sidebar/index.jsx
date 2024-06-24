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
                        <a href="">
                            Điện thoại
                        </a>
                    </li>
                    <li className={s.border_bottom}>
                        <a href="">
                            Laptop
                        </a>
                    </li>
                    <li className={s.border_bottom}>
                        <a href="">
                            Đồng hồ
                        </a>
                    </li>
                    <li className={s.border_bottom}>
                        <a href="">
                            Phụ kiện
                        </a>
                    </li>
                </ul>

            </div>

            <div className={s.featured_product}>
                <h5>Sản phẩm nổi bật</h5>
                <div>
                    <ul className={s.list_unstyled_shadow_sm}>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={s.product}>
                            <div className={s.d_flex_product}>
                                <a href="" className={s.thumb}>
                                    <img src="/lenovo.jpg" alt="" />
                                </a>

                                <div className={s.info}>
                                    <a className={s.text_dark} href="">Lenovo_Ideapad 14IML05</a>
                                    <div className={s.price}>
                                        <span className={s.text}>14.000.000</span>
                                    </div>
                                    <div className={s.buy}>
                                        <a href="">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <img src="/Home/banner1.jpg" alt="" className={s.thumbnail} />
            <img src="/Home/banner2.jpg" alt="" className={s.thumbnail} />
            <img src="/Home/banner3.jpg" alt="" className={s.thumbnail} />
            <img src="/Home/banner4.jpg" alt="" className={s.thumbnail} />
            <img src="/Home/banner5.jpg" alt="" className={s.thumbnail} />
            <img src="/Home/banner6.jpg" alt="" className={s.thumbnail} />
            <img src="/Home/banner7.png" alt="" className={s.thumbnail} />
        </div>
    )
}