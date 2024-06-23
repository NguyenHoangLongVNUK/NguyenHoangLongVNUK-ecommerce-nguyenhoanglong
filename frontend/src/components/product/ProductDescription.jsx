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
                    {description}
                    {/* khi nào xóa phần dưới */}
                    <p>
                        <a
                            href="https://www.thegioididong.com/dtdd/samsung-galaxy-z-fold-3"
                            target="_blank"
                        >
                            Galaxy Z Fold3 5G
                        </a>
                        , chiếc&nbsp;
                        <a href="https://www.thegioididong.com/dtdd" target="_blank">
                            điện thoại
                        </a>
                        &nbsp;được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn
                        hình gập đầu tiên trên thế giới có camera ẩn (08/2021). Sản phẩm sẽ là một
                        “cú hit” của&nbsp;
                        <a href="https://thegioididong.com/samsung" target="_blank">
                            Samsung
                        </a>
                        &nbsp;góp phần mang đến những trải nghiệm mới cho người dùng.
                    </p>
                    <p>Thiết kế nâng tầm smartphone màn hình gập</p>
                    <p>
                        Có thể thấy mẫu smartphone Galaxy Z Fold3 lần này vẫn giữ nguyên ngoại hình
                        cùng cơ chế màn hình gập mở dạng quyển sách như của tiền nhiệm, hồ biến
                        chiếc smartphone thành một chiếc máy tính bảng mini một cách dễ dàng và
                        ngược lại.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-25.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Thiết kế nâng tầm smartphone màn hình gập"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-25.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Khung viền sử dụng hợp kim nhôm Armor Aluminum cứng cáp, bền bỉ hơn 10% so
                        với các vật liệu trước đây Samsung từng sản xuất. Với cấu tạo chắc chắn sẽ
                        giúp bạn yên tâm tận hưởng các hoạt động yêu thích một cách trọn vẹn nhất.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-9.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Khung viền cao cấp, độ bền cao"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-9.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Bộ khớp nối bản lề được thiết kế mới giúp kết nối bộ khung của Galaxy Z
                        Fold3 hoàn hảo hơn, tăng cao độ bền khi đóng mở liên tục và cố định cực kỳ
                        chắc chắn cho bạn trải nghiệm sử dụng thoải mái nhất.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-30.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Kết cấu khung viền chắc chắn"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-30.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Mặt lưng của Z Fold3 5G được làm nhám hơn so với mặt lưng trên Z Fold2 5G,
                        điều này giúp hạn chế bám bẩn, mồ hôi hay dấu vân tay trong quá trình chúng
                        ta sử dụng máy.&nbsp;
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-18.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Thiết kế mặt lưng"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-18.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Bên cạnh đó, Samsung cho biết họ sử dụng kính Gorilla Glass Victus cho phần
                        màn hình ngoài nhằm tăng cường độ bền cho Galaxy Z Fold3 5G, giúp máy có khả
                        năng chống va đập khi rơi từ độ cao 2m, đồng thời chống xước tới 4 lần.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-24.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Màn hình ngoài trang bị kính Gorilla Glass Victus"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-24.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Hệ thống loa kép stereo kích thước lớn ở 2 cạnh trên dưới, tích hợp công
                        nghệ Dolby Atmos, Z Fold3 5G cho trải nghiệm chơi game, xem phim đã tai với
                        âm lượng lớn, hiệu ứng đa kênh rõ ràng chân thực.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-23.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G  | Hệ thống loa kép hỗ trợ khả năng giải trí ấn tượng"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-23.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Ngoài ra, Galaxy Z Fold3 5G cũng là thiết bị màn hình gập đầu tiên trên thế
                        giới sở hữu công nghệ&nbsp;
                        <a href="https://www.thegioididong.com/dtdd-chong-nuoc-bui" target="_blank">
                            kháng nước
                        </a>
                        &nbsp;chuẩn IPX8 ở mức cao nhất trong thang đo từ 1 - 8 giúp chúng ta yên
                        tâm sử dụng hằng ngày.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-20.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Khả năng kháng nước ấn tượng"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-20.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Với&nbsp;
                        <a
                            href="https://www.thegioididong.com/dtdd-bao-mat-van-tay"
                            target="_blank"
                        >
                            cảm biến vân tay
                        </a>
                        &nbsp;ở cạnh bên, việc mở khóa màn hình trên Z Fold3 5G giờ đây đã được thực
                        hiện một cách nhanh chóng và an toàn chỉ trong một nốt nhạc.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-21.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G  | Cảm biến vân tay cạnh viền"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-21.jpg"
                            />
                        </a>
                    </p>
                    <h3>Đột phá màn hình gập với camera ẩn&nbsp;</h3>
                    <p>
                        Màn hình Samsung sử dụng tấm nền Dynamic AMOLED 2X, phần viền của màn hình
                        chính cũng được hãng tối ưu tinh giản lại, thiết kế mang đến phần viền siêu
                        mỏng cho cảm giác tràn viền tinh tế hơn nhìn rất đẹp và bắt mắt.&nbsp;
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-19.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Đột phá màn hình gập siêu tràn viền"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-19.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Đặc biệt, Z Fold3 còn là chiếc điện thoại gập đầu tiên trên thế giới có
                        camera ẩn dưới màn hình mang đến những trải nghiệm liền mạch, đã mắt hơn.
                    </p>
                    <p>
                        Màn hình trong được phủ lớp kính Ultra Thin Glass (UTG) mỏng vượt trội giúp
                        tăng độ bền hơn 80% so với tiền nhiệm, mang đến độ bền cực cao khi có thể
                        đóng mở dễ dàng mà không làm ảnh hưởng đến khả năng hiển thị và cảm ứng của
                        màn hình.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-11.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Màn hình chứa camera selfie ẩn"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-11.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Bên cạnh đó, màn hình phụ cũng được trang bị kích thước khá lớn lên đến 6.2
                        inch, độ phân giải của màn hình này cũng nằm ở mức khá cao cùng khả năng
                        hiển thị cực kỳ sắc nét mượt mà như màn hình chính.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-17.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Màn hình phụ 6.2 inch"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-17.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Cả 2 màn hình cũng được Samsung nâng cấp tần số quét 120 Hz để giúp mọi thao
                        tác chạm vuốt, chuyển động hình ảnh đều được xử lý cực kỳ mượt mà, mang đến
                        trải nghiệm mãn nhãn, giúp bạn thực sự đắm chìm trong không gian giải trí
                        chơi game bất tận.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-7.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Màn hình giải trí 120 Hz"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-7.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Galaxy Z Fold3 5G được hỗ trợ thêm bút S-Pen thần thánh, một điểm cải tiến
                        lớn so với thế hệ tiền nhiệm cho bạn thực hiện thoải mái nhiều tác vụ trên
                        một màn hình lớn.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-6.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Tích hợp bút S-Pen thông minh"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-6.jpg"
                            />
                        </a>
                    </p>
                    <h3>Cụm camera chụp ảnh chất lượng cao</h3>
                    <p>
                        Về camera, Z Fold3 sử dụng hệ thống 3 camera 12 MP hoàn toàn giống hệt với Z
                        Fold2 bao gồm camera chính,&nbsp;
                        <a
                            href="https://www.thegioididong.com/dtdd-camera-goc-rong"
                            target="_blank"
                        >
                            camera góc siêu rộng
                        </a>
                        &nbsp;và&nbsp;
                        <a href="https://www.thegioididong.com/dtdd-camera-zoom" target="_blank">
                            camera tele
                        </a>
                        &nbsp;tất cả được đặt trong module hình chữ nhật bo tròn 2 đầu trông khá gọn
                        gàng và tinh tế.&nbsp;
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-20.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Cụm camera chất lượng cao"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-20.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Nhìn chung hệ thống camera của những chiếc điện thoại cao cấp từ Samsung
                        luôn có chất lượng hàng đầu, chắc chắn sẽ cho bạn trải nghiệm chụp ảnh, quay
                        phim vô cùng xuất sắc.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-2.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Giao diện camera"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-2.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Bạn có thể dễ dàng làm mờ hậu cảnh, chống rung và làm đẹp bằng AI, tự động
                        hiệu chỉnh màu sắc, làm chủ màn đêm để đem tới những khung hình đẹp mắt chỉ
                        bằng một nút bấm. Đồng thời màn hình chính cũng cho phép bạn chia đôi màn
                        hình để vừa chụp vừa xem lại ảnh cùng lúc.&nbsp;
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-14.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Khả năng nhiếp ảnh chất lượng"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-14.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Ngoài ra, bộ đôi camera selfie ở hai màn hình đều cho chất lượng ảnh khá
                        tốt, nhưng khi cần chụp ảnh selfie có chất lượng cao người dùng có thể sử
                        dụng 3 camera sau và màn hình ngoài làm kính ngắm để có được những bức ảnh
                        tốt nhất.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-12.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Khả năng chụp ảnh selfie"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-12.jpg"
                            />
                        </a>
                    </p>
                    <h3>Cấu hình khủng với Snapdragon 888&nbsp;</h3>
                    <p>
                        Galaxy Z Fold3 sử dụng con chip Snapdragon 888 một trong những bộ vi xử lý
                        mạnh mẽ nhất đến từ nhà Qualcomm, giúp mọi thao tác, mọi ứng dụng đều được
                        xử lý nhanh chóng trên cả 2 màn hình.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-13.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Hiệu năng khủng với Snapdragon 888"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-13.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Bên cạnh đó, Galaxy Z Fold3 sẽ được cải thiện khả năng tản nhiệt khi chơi
                        game, thậm chí có thể mát hơn cả Galaxy S21 Ultra 5G.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-5.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Hiệu năng mượt mà ở cả 2 màn hình"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-5.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Bộ nhớ RAM của Z Fold3 cũng được nâng cấp dung lượng lên đến&nbsp;
                        <a href="https://www.thegioididong.com/dtdd-ram-12gb" target="_blank">
                            12 GB
                        </a>
                        &nbsp;cho khả năng tối ưu đa nhiệm xử lý cực tốt, giúp mọi ứng dụng nặng
                        nhất đều có thể vận hành cùng lúc mượt mà.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-15.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Hiệu năng mạnh mẽ, xử lý mượt mà các tác vụ"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-15.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Samsung cũng cung cấp khả năng lưu trữ rộng rãi với dung lượng chuẩn&nbsp;
                        <a href="https://www.thegioididong.com/dtdd-rom-256gb" target="_blank">
                            256 GB
                        </a>
                        &nbsp;cho người dùng thoải mái sử dụng, không quá lo về dung lượng nhanh
                        hết.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-10.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Khả năng lưu trữ rộng rãi"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-10.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Hệ điều hành Android 11 cũng tối ưu trên giao diện One UI mang đến trải
                        nghiệm tương tác trực quan như trên máy tính đồng thời cho phép chuyển đổi
                        mượt mà nội dung giữa màn hình chính và màn hình phụ mà không phải tải lại
                        ứng dụng hay load lại game.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-8.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Giao diện màn hình chính"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-8.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Ngoài ra, Samsung Galaxy Z Fold3 cũng được trang bị chuẩn kết nối internet
                        5G cho khả năng kết nối internet siêu nhanh giúp bạn có thể sử dụng internet
                        mọi nơi với tốc độ sử dụng siêu cao.
                    </p>
                    <h3>Thời lượng pin đủ dùng</h3>
                    <p>
                        Samsung Galaxy Z Fold3 5G có dung lượng pin 4.400 mAh vừa đủ để bạn có thể
                        sử dụng trong khoảng một ngày với các tác vụ làm việc giải trí thông thường.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-4.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G  | Thời lượng pin đủ dùng"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-4.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Bên canh đó, điện thoại cũng có tính năng&nbsp;
                        <a href="https://www.thegioididong.com/dtdd-sac-pin-nhanh" target="_blank">
                            sạc nhanh
                        </a>
                        &nbsp;25 W,&nbsp;
                        <a href="https://www.thegioididong.com/dtdd-sac-khong-day" target="_blank">
                            sạc không dây
                        </a>
                        &nbsp;hay chia sẻ pin không dây cho các thiết bị hỗ trợ chuẩn Qi khác như
                        smartphone hay tai nghe Galaxy Buds.
                    </p>
                    <p>
                        <a href="https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-22.jpg">
                            <img
                                alt="Samsung Galaxy Z Fold3 5G | Khả năng sạc nhanh 25 W và sạc không dây"
                                src="https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-22.jpg"
                            />
                        </a>
                    </p>
                    <p>
                        Nhìn chung, Samsung Galaxy Z Fold3 5G đã được nâng cấp rất nhiều so với
                        người tiền nhiệm từ thiết kế, màn hình đến hiệu năng cùng khả năng kháng
                        nước IPX8, sản phẩm giúp Samsung tiếp tục khẳng định vị thế đẳng cấp của
                        mình trên thị trường smartphone màn hình gập.&nbsp;
                    </p>
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