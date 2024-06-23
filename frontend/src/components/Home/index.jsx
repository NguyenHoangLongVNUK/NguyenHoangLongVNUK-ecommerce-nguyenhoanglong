/* eslint-disable no-unused-vars */
import React from 'react';
import s from './styles.module.scss'

function Home() {
    return (
        <>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.col_lg_3}>

                        <div className={s.product_category}>
                            <h5>Danh mục sản phẩm</h5>
                            <ul>
                                <li className={s.border_bottom}>
                                    <a href="">
                                        Điện thoại
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                                        </i>
                                    </a>
                                </li>
                                <li className={s.border_bottom}>
                                    <a href="">
                                        Laptop
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                                        </i>
                                    </a>
                                </li>
                                <li className={s.border_bottom}>
                                    <a href="">
                                        Đồng hồ
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                                        </i>
                                    </a>
                                </li>
                                <li className={s.border_bottom}>
                                    <a href="">
                                        Phụ kiện
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                                        </i>
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

                        <img src="" alt="" className={s.thumbnail} />
                        <img src="" alt="" className={s.thumbnail} />
                        <img src="" alt="" className={s.thumbnail} />
                        <img src="" alt="" className={s.thumbnail} />
                        <img src="" alt="" className={s.thumbnail} />
                        <img src="" alt="" className={s.thumbnail} />
                        <img src="" alt="" className={s.thumbnail} />
                    </div>
                    <div className={s.col_lg_9}></div>
                </div>
            </div>
        </>
    );
}

export default Home;
