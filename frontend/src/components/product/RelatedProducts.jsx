import React from 'react';
import { Link } from 'react-router-dom';
import PauseOnHover from '../PauseOnHoverSlider';

const RelatedProducts = ({ products }) => {
    return (
        <div className="section">
            <h5 className="text-uppercase mb-0 mt-5">Cùng danh mục</h5>
            <PauseOnHover products={products} />
        </div>
    );
}

export default RelatedProducts;
