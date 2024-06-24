/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from '../layout/Sidebar'
import { Carousel } from 'antd';
import s from './styles.module.scss'

function Home() {
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

                        <div className={s.section}>
                            <h5>SẢN PHẨM GIẢM GIÁ</h5>
                            <div className={s.list_product_phone}>
                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.section}>
                            <h5>DÀNH CHO BẠN</h5>
                            <div className={s.list_product_phone}>
                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.col6_responsive}>
                                    <div className={s.product_sell}>
                                        <a href="">
                                            <img src="/Home/iphone.jpg" alt="" />
                                        </a>
                                        <div className={s.info}>
                                            <a href="">
                                                Iphone 11 64GB
                                            </a>
                                            <h6 className={s.price}>15.000.000</h6>
                                            <div className={s.buy_now}>
                                                <a href="" className={s.btn_dark}>Thêm giỏ hàng</a>
                                                <a href="" className={s.btn_danger}>Mua ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
