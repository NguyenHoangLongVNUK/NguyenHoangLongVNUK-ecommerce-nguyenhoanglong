/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { CartContext } from '../../../CartContext';
import s from './styles.module.scss';

export default function ListProduct({ name = 'DANH SÁCH SẲN PHẨM', list }) {
    const { addToCart } = useContext(CartContext);

    if (list?.length > 0) {
        return (
            <div className={s.section}>
                <h5>{name}</h5>
                <div className={s.list_product_phone}>

                    {list?.map((item, index) => {
                        return (
                            <div key={index} className={s.col6_responsive}>
                                <div className={s.product_sell}>
                                    <a href="">
                                        <img src={item?.image || "/Home/iphone.jpg"} alt="" />
                                    </a>
                                    <div className={s.info}>
                                        <a href="">
                                            {item?.name}
                                        </a>
                                        <h6 className={s?.price}>{item?.price}</h6>
                                        <div className={s.buy_now}>
                                            <a href={`/product/${item?.id}`} className={s.btn_dark}>Chi tiết sản phẩm</a>
                                            <a href='/cart' className={s.btn_danger} onClick={() => addToCart(item?.id)}>Mua ngay</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={s.section}>
                <h5>{name}</h5>
                <div className={s.list_product_phone}>
                    <h6>CHƯA CÓ SẢN PHẨM NÀO</h6>
                </div>
            </div>
        )
    }
}
