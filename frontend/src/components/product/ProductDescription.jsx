import React, { useState } from 'react';

const ProductDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="section">
            <h5 className="text-uppercase mb-3 mt-5">Mô tả sản phẩm</h5>
            <div className={`wr-content p-3 ${isExpanded ? 'show-full' : ''}`}>
                <div className="desc-content">
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                    {!isExpanded && <div className="bg-article"></div>}
                </div>
                {!isExpanded && (
                    <div id="watch">
                        <p className="btn-show" onClick={toggleExpand}>Xem thêm</p>
                    </div>
                )}
            </div>
            {isExpanded && (
                <div id="collapse" className="mt-3">
                    <p className="btn-show" onClick={toggleExpand}>Thu gọn</p>
                </div>
            )}
        </div>
    );
};

export default ProductDescription;