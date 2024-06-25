-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 23, 2024 lúc 12:12 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ecommerce_reactjssql`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`category_id`, `name`) VALUES
(1, 'Electronics'),
(2, 'Books'),
(3, 'Clothing');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` decimal(5,2) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `desc_detail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `discount`, `image_url`, `category_id`, `desc_detail`) VALUES
(1, 'Smartphone', ' <p>\r\n                        <a\r\n                            href=\"https://www.thegioididong.com/dtdd/samsung-galaxy-z-fold-3\"\r\n                            target=\"_blank\"\r\n                        >\r\n                            Galaxy Z Fold3 5G\r\n                        </a>\r\n                        , chiếc&nbsp;\r\n                        <a href=\"https://www.thegioididong.com/dtdd\" target=\"_blank\">\r\n                            điện thoại\r\n                        </a>\r\n                        &nbsp;được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn\r\n                        hình gập đầu tiên trên thế giới có camera ẩn (08/2021). Sản phẩm sẽ là một\r\n                        “cú hit” của&nbsp;\r\n                        <a href=\"https://thegioididong.com/samsung\" target=\"_blank\">\r\n                            Samsung\r\n                        </a>\r\n                        &nbsp;góp phần mang đến những trải nghiệm mới cho người dùng.\r\n                    </p>\r\n                    <p>Thiết kế nâng tầm smartphone màn hình gập</p>\r\n                    <p>\r\n                        Có thể thấy mẫu smartphone Galaxy Z Fold3 lần này vẫn giữ nguyên ngoại hình\r\n                        cùng cơ chế màn hình gập mở dạng quyển sách như của tiền nhiệm, hồ biến\r\n                        chiếc smartphone thành một chiếc máy tính bảng mini một cách dễ dàng và\r\n                        ngược lại.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-25.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Thiết kế nâng tầm smartphone màn hình gập\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-25.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Khung viền sử dụng hợp kim nhôm Armor Aluminum cứng cáp, bền bỉ hơn 10% so\r\n                        với các vật liệu trước đây Samsung từng sản xuất. Với cấu tạo chắc chắn sẽ\r\n                        giúp bạn yên tâm tận hưởng các hoạt động yêu thích một cách trọn vẹn nhất.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-9.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Khung viền cao cấp, độ bền cao\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-9.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Bộ khớp nối bản lề được thiết kế mới giúp kết nối bộ khung của Galaxy Z\r\n                        Fold3 hoàn hảo hơn, tăng cao độ bền khi đóng mở liên tục và cố định cực kỳ\r\n                        chắc chắn cho bạn trải nghiệm sử dụng thoải mái nhất.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-30.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Kết cấu khung viền chắc chắn\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-30.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Mặt lưng của Z Fold3 5G được làm nhám hơn so với mặt lưng trên Z Fold2 5G,\r\n                        điều này giúp hạn chế bám bẩn, mồ hôi hay dấu vân tay trong quá trình chúng\r\n                        ta sử dụng máy.&nbsp;\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-18.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Thiết kế mặt lưng\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-18.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Bên cạnh đó, Samsung cho biết họ sử dụng kính Gorilla Glass Victus cho phần\r\n                        màn hình ngoài nhằm tăng cường độ bền cho Galaxy Z Fold3 5G, giúp máy có khả\r\n                        năng chống va đập khi rơi từ độ cao 2m, đồng thời chống xước tới 4 lần.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-24.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Màn hình ngoài trang bị kính Gorilla Glass Victus\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-24.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Hệ thống loa kép stereo kích thước lớn ở 2 cạnh trên dưới, tích hợp công\r\n                        nghệ Dolby Atmos, Z Fold3 5G cho trải nghiệm chơi game, xem phim đã tai với\r\n                        âm lượng lớn, hiệu ứng đa kênh rõ ràng chân thực.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-23.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G  | Hệ thống loa kép hỗ trợ khả năng giải trí ấn tượng\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-23.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Ngoài ra, Galaxy Z Fold3 5G cũng là thiết bị màn hình gập đầu tiên trên thế\r\n                        giới sở hữu công nghệ&nbsp;\r\n                        <a href=\"https://www.thegioididong.com/dtdd-chong-nuoc-bui\" target=\"_blank\">\r\n                            kháng nước\r\n                        </a>\r\n                        &nbsp;chuẩn IPX8 ở mức cao nhất trong thang đo từ 1 - 8 giúp chúng ta yên\r\n                        tâm sử dụng hằng ngày.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-20.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Khả năng kháng nước ấn tượng\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-20.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Với&nbsp;\r\n                        <a\r\n                            href=\"https://www.thegioididong.com/dtdd-bao-mat-van-tay\"\r\n                            target=\"_blank\"\r\n                        >\r\n                            cảm biến vân tay\r\n                        </a>\r\n                        &nbsp;ở cạnh bên, việc mở khóa màn hình trên Z Fold3 5G giờ đây đã được thực\r\n                        hiện một cách nhanh chóng và an toàn chỉ trong một nốt nhạc.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-21.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G  | Cảm biến vân tay cạnh viền\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-21.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <h3>Đột phá màn hình gập với camera ẩn&nbsp;</h3>\r\n                    <p>\r\n                        Màn hình Samsung sử dụng tấm nền Dynamic AMOLED 2X, phần viền của màn hình\r\n                        chính cũng được hãng tối ưu tinh giản lại, thiết kế mang đến phần viền siêu\r\n                        mỏng cho cảm giác tràn viền tinh tế hơn nhìn rất đẹp và bắt mắt.&nbsp;\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-19.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Đột phá màn hình gập siêu tràn viền\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-19.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Đặc biệt, Z Fold3 còn là chiếc điện thoại gập đầu tiên trên thế giới có\r\n                        camera ẩn dưới màn hình mang đến những trải nghiệm liền mạch, đã mắt hơn.\r\n                    </p>\r\n                    <p>\r\n                        Màn hình trong được phủ lớp kính Ultra Thin Glass (UTG) mỏng vượt trội giúp\r\n                        tăng độ bền hơn 80% so với tiền nhiệm, mang đến độ bền cực cao khi có thể\r\n                        đóng mở dễ dàng mà không làm ảnh hưởng đến khả năng hiển thị và cảm ứng của\r\n                        màn hình.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-11.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Màn hình chứa camera selfie ẩn\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-11.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Bên cạnh đó, màn hình phụ cũng được trang bị kích thước khá lớn lên đến 6.2\r\n                        inch, độ phân giải của màn hình này cũng nằm ở mức khá cao cùng khả năng\r\n                        hiển thị cực kỳ sắc nét mượt mà như màn hình chính.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-17.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Màn hình phụ 6.2 inch\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-17.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Cả 2 màn hình cũng được Samsung nâng cấp tần số quét 120 Hz để giúp mọi thao\r\n                        tác chạm vuốt, chuyển động hình ảnh đều được xử lý cực kỳ mượt mà, mang đến\r\n                        trải nghiệm mãn nhãn, giúp bạn thực sự đắm chìm trong không gian giải trí\r\n                        chơi game bất tận.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-7.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Màn hình giải trí 120 Hz\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-7.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Galaxy Z Fold3 5G được hỗ trợ thêm bút S-Pen thần thánh, một điểm cải tiến\r\n                        lớn so với thế hệ tiền nhiệm cho bạn thực hiện thoải mái nhiều tác vụ trên\r\n                        một màn hình lớn.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-6.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Tích hợp bút S-Pen thông minh\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-6.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <h3>Cụm camera chụp ảnh chất lượng cao</h3>\r\n                    <p>\r\n                        Về camera, Z Fold3 sử dụng hệ thống 3 camera 12 MP hoàn toàn giống hệt với Z\r\n                        Fold2 bao gồm camera chính,&nbsp;\r\n                        <a\r\n                            href=\"https://www.thegioididong.com/dtdd-camera-goc-rong\"\r\n                            target=\"_blank\"\r\n                        >\r\n                            camera góc siêu rộng\r\n                        </a>\r\n                        &nbsp;và&nbsp;\r\n                        <a href=\"https://www.thegioididong.com/dtdd-camera-zoom\" target=\"_blank\">\r\n                            camera tele\r\n                        </a>\r\n                        &nbsp;tất cả được đặt trong module hình chữ nhật bo tròn 2 đầu trông khá gọn\r\n                        gàng và tinh tế.&nbsp;\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-20.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Cụm camera chất lượng cao\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-20.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Nhìn chung hệ thống camera của những chiếc điện thoại cao cấp từ Samsung\r\n                        luôn có chất lượng hàng đầu, chắc chắn sẽ cho bạn trải nghiệm chụp ảnh, quay\r\n                        phim vô cùng xuất sắc.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-2.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Giao diện camera\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-2.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Bạn có thể dễ dàng làm mờ hậu cảnh, chống rung và làm đẹp bằng AI, tự động\r\n                        hiệu chỉnh màu sắc, làm chủ màn đêm để đem tới những khung hình đẹp mắt chỉ\r\n                        bằng một nút bấm. Đồng thời màn hình chính cũng cho phép bạn chia đôi màn\r\n                        hình để vừa chụp vừa xem lại ảnh cùng lúc.&nbsp;\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-14.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Khả năng nhiếp ảnh chất lượng\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-14.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Ngoài ra, bộ đôi camera selfie ở hai màn hình đều cho chất lượng ảnh khá\r\n                        tốt, nhưng khi cần chụp ảnh selfie có chất lượng cao người dùng có thể sử\r\n                        dụng 3 camera sau và màn hình ngoài làm kính ngắm để có được những bức ảnh\r\n                        tốt nhất.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-12.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Khả năng chụp ảnh selfie\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-12.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <h3>Cấu hình khủng với Snapdragon 888&nbsp;</h3>\r\n                    <p>\r\n                        Galaxy Z Fold3 sử dụng con chip Snapdragon 888 một trong những bộ vi xử lý\r\n                        mạnh mẽ nhất đến từ nhà Qualcomm, giúp mọi thao tác, mọi ứng dụng đều được\r\n                        xử lý nhanh chóng trên cả 2 màn hình.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-13.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Hiệu năng khủng với Snapdragon 888\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-13.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Bên cạnh đó, Galaxy Z Fold3 sẽ được cải thiện khả năng tản nhiệt khi chơi\r\n                        game, thậm chí có thể mát hơn cả Galaxy S21 Ultra 5G.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-5.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Hiệu năng mượt mà ở cả 2 màn hình\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-5.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Bộ nhớ RAM của Z Fold3 cũng được nâng cấp dung lượng lên đến&nbsp;\r\n                        <a href=\"https://www.thegioididong.com/dtdd-ram-12gb\" target=\"_blank\">\r\n                            12 GB\r\n                        </a>\r\n                        &nbsp;cho khả năng tối ưu đa nhiệm xử lý cực tốt, giúp mọi ứng dụng nặng\r\n                        nhất đều có thể vận hành cùng lúc mượt mà.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-15.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Hiệu năng mạnh mẽ, xử lý mượt mà các tác vụ\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-15.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Samsung cũng cung cấp khả năng lưu trữ rộng rãi với dung lượng chuẩn&nbsp;\r\n                        <a href=\"https://www.thegioididong.com/dtdd-rom-256gb\" target=\"_blank\">\r\n                            256 GB\r\n                        </a>\r\n                        &nbsp;cho người dùng thoải mái sử dụng, không quá lo về dung lượng nhanh\r\n                        hết.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-10.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Khả năng lưu trữ rộng rãi\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-10.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Hệ điều hành Android 11 cũng tối ưu trên giao diện One UI mang đến trải\r\n                        nghiệm tương tác trực quan như trên máy tính đồng thời cho phép chuyển đổi\r\n                        mượt mà nội dung giữa màn hình chính và màn hình phụ mà không phải tải lại\r\n                        ứng dụng hay load lại game.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-8.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Giao diện màn hình chính\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-8.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Ngoài ra, Samsung Galaxy Z Fold3 cũng được trang bị chuẩn kết nối internet\r\n                        5G cho khả năng kết nối internet siêu nhanh giúp bạn có thể sử dụng internet\r\n                        mọi nơi với tốc độ sử dụng siêu cao.\r\n                    </p>\r\n                    <h3>Thời lượng pin đủ dùng</h3>\r\n                    <p>\r\n                        Samsung Galaxy Z Fold3 5G có dung lượng pin 4.400 mAh vừa đủ để bạn có thể\r\n                        sử dụng trong khoảng một ngày với các tác vụ làm việc giải trí thông thường.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold3-5g-256gb-4.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G  | Thời lượng pin đủ dùng\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold3-5g-256gb-4.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Bên canh đó, điện thoại cũng có tính năng&nbsp;\r\n                        <a href=\"https://www.thegioididong.com/dtdd-sac-pin-nhanh\" target=\"_blank\">\r\n                            sạc nhanh\r\n                        </a>\r\n                        &nbsp;25 W,&nbsp;\r\n                        <a href=\"https://www.thegioididong.com/dtdd-sac-khong-day\" target=\"_blank\">\r\n                            sạc không dây\r\n                        </a>\r\n                        &nbsp;hay chia sẻ pin không dây cho các thiết bị hỗ trợ chuẩn Qi khác như\r\n                        smartphone hay tai nghe Galaxy Buds.\r\n                    </p>\r\n                    <p>\r\n                        <a href=\"https://www.thegioididong.com/images/42/226935/samsung-galaxy-z-fold-3-22.jpg\">\r\n                            <img\r\n                                alt=\"Samsung Galaxy Z Fold3 5G | Khả năng sạc nhanh 25 W và sạc không dây\"\r\n                                src=\"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-22.jpg\"\r\n                            />\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        Nhìn chung, Samsung Galaxy Z Fold3 5G đã được nâng cấp rất nhiều so với\r\n                        người tiền nhiệm từ thiết kế, màn hình đến hiệu năng cùng khả năng kháng\r\n                        nước IPX8, sản phẩm giúp Samsung tiếp tục khẳng định vị thế đẳng cấp của\r\n                        mình trên thị trường smartphone màn hình gập.&nbsp;\r\n                    </p>', 699.99, 10.00, 'product1.png', 1, '  <p>Màn hình:&nbsp;AMOLED6.67\"Full HD+</p>\r\n  <p>Hệ điều hành:&nbsp;Android 11</p>\r\n  <p>Camera sau:&nbsp;Chính 108 MP &amp; Phụ 8 MP, 5 MP</p>\r\n  <p>Camera trước:&nbsp;16 MP</p>'),
(2, 'Laptop', 'High-performance laptop for gaming and work', 1299.99, 15.00, 'http://example.com/image2.jpg', 1, '0'),
(3, 'Novel', 'Bestselling fiction novel', 19.99, 5.00, 'http://example.com/image3.jpg', 2, '0'),
(4, 'T-Shirt', '100% cotton t-shirt in various sizes', 9.99, 0.00, 'http://example.com/image4.jpg', 3, '0');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_images`
--

CREATE TABLE `product_images` (
  `image_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_images`
--

INSERT INTO `product_images` (`image_id`, `product_id`, `image_url`) VALUES
(1, 1, 'product1.png'),
(2, 1, 'product2.png'),
(3, 1, 'product3.png'),
(4, 1, 'product4.png');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `product_images`
--
ALTER TABLE `product_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Các ràng buộc cho bảng `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
