## Mô tả Dự án
Dự án này nhằm phát triển một trang web bán hàng trực tuyến với các chức năng chính bao gồm: hiển thị sản phẩm, giỏ hàng, thanh toán và quản lý đơn hàng. Trang web sẽ có giao diện thân thiện với người dùng và tích hợp các tính năng bảo mật cần thiết.

## Kế hoạch thực hiện

### 1. Lập kế hoạch và thiết kế
- **Nghiên cứu yêu cầu**: Thu thập và phân tích yêu cầu từ người dùng và giảng viên.
- **Lên kế hoạch**: Xác định các chức năng chính của trang web bán hàng và lập kế hoạch phát triển chi tiết.
- **Thiết kế giao diện người dùng (UI)**: Vẽ wireframe và thiết kế mockup cho các trang chính như trang chủ, trang sản phẩm, trang giỏ hàng, và trang thanh toán.
- **Thiết kế cơ sở dữ liệu (DB)**: Thiết kế cấu trúc cơ sở dữ liệu để lưu trữ thông tin sản phẩm, đơn hàng, và người dùng.

### 2. Thiết lập môi trường phát triển
- **Cài đặt công cụ**: Thiết lập các công cụ cần thiết như IDE, version control (Git), các thư viện và framework (ví dụ: React, Node.js, MongoDB).
- **Khởi tạo dự án**: Tạo dự án mới, khởi tạo kho Git và cài đặt các gói cần thiết.

### 3. Phát triển Frontend
- **Trang chủ**: Tạo giao diện trang chủ với danh sách sản phẩm nổi bật và các chương trình khuyến mãi.
- **Trang sản phẩm**: Tạo giao diện trang chi tiết sản phẩm với thông tin chi tiết, hình ảnh và đánh giá.
- **Trang giỏ hàng**: Tạo giao diện giỏ hàng cho phép người dùng thêm, xóa và cập nhật số lượng sản phẩm.
- **Trang thanh toán**: Tạo giao diện thanh toán với các bước nhập thông tin giao hàng và phương thức thanh toán.

### 4. Phát triển Backend
- **Thiết lập server**: Thiết lập server với Node.js/Express hoặc một framework tương tự.
- **API endpoints**: Tạo các API endpoints để xử lý yêu cầu từ frontend (CRUD sản phẩm, quản lý giỏ hàng, xử lý thanh toán).
- **Kết nối cơ sở dữ liệu**: Thiết lập kết nối với cơ sở dữ liệu (MongoDB, MySQL, v.v.) để lưu trữ và truy xuất dữ liệu sản phẩm và đơn hàng.
- **Xử lý logic**: Viết các hàm xử lý logic cho các chức năng như thêm, sửa, xóa sản phẩm, quản lý đơn hàng và xác thực người dùng.

### 5. Tích hợp và kiểm thử
- **Kiểm thử đơn vị (Unit Testing)**: Viết các test case cho từng module và chức năng.
- **Kiểm thử tích hợp (Integration Testing)**: Kiểm thử sự tương tác giữa các module frontend và backend.
- **Kiểm thử hệ thống (System Testing)**: Kiểm thử toàn bộ hệ thống để đảm bảo mọi thứ hoạt động như mong đợi.
- **Sửa lỗi**: Khắc phục các lỗi phát sinh trong quá trình kiểm thử.

### 6. Triển khai
- **Triển khai trên server**: Đưa trang web lên một server thật (ví dụ: Heroku, Vercel).
- **Cấu hình domain**: Liên kết domain với server để người dùng có thể truy cập trang web.
- **Đảm bảo bảo mật**: Thiết lập các biện pháp bảo mật như SSL, bảo vệ API, mã hóa dữ liệu thanh toán.

### 7. Tài liệu và báo cáo
- **Viết tài liệu**: Soạn thảo tài liệu hướng dẫn sử dụng và cài đặt hệ thống.
- **Báo cáo dự án**: Viết báo cáo chi tiết về quá trình phát triển và kết quả đạt được.
- **Chuẩn bị bài thuyết trình**: Chuẩn bị slide và nội dung thuyết trình cho buổi bảo vệ.

### 8. Bảo trì và nâng cấp
- **Bảo trì**: Sửa lỗi và cập nhật trang web sau khi triển khai.
- **Nâng cấp**: Thêm các tính năng mới và cải thiện hiệu suất dựa trên phản hồi của người dùng.

## Tiến độ và phân công
- **Tuần 1-2**: Lập kế hoạch và thiết kế.
- **Tuần 3-4**: Thiết lập môi trường và phát triển frontend.
- **Tuần 5-6**: Phát triển backend.
- **Tuần 7**: Tích hợp và kiểm thử.
- **Tuần 8**: Triển khai và viết tài liệu.
- **Tuần 9**: Báo cáo và bảo vệ dự án.

## Công nghệ sử dụng
- **Base**: HTML, CSS, Javascript
- **FE**: Reactjs, React-router-dom, Slick-carousel, Bootstrap css, Axios, Sass, ...
- **BE**: Nodejs (express), Mysql2
- **Database**: Mysql
- **Server**: Apache

## Tiến hành chạy dự án
- **1**: Clone source code từ git
- **2**: Mở source code bằng vs code, và mở terminal, chia đôi terminal Split (Ctrl+Shift+5)
## FE
- **3**: Vào thư mục frontend với cú pháp trong terminal bên trái: `cd frontend`
- **4**: Cài đặt các package cần thiết: `npm i`
- **5**: Chạy dự án: `npm run dev`, [http://localhost:5173/](http://localhost:5173/)
## BE:
- **6**: Tải xampp về để hỗ trợ chạy be bằng mysql: [📦 Download Xampp](https://www.apachefriends.org/download.html)
- **7**: Nhớ đúng theo thứ tự các bước tránh gặp lỗi không mong muốn (Bắt buộc): `start Apache -> start MySql` và khi tắt thì `stop MySql -> stop Apache`
- **8**: Tạo database mới có tên `ecommerce_reactjssql` vào [phpMyAdmin](http://localhost/phpmyadmin/index.php), vào phần `Nhập` thực thi trên header của db vừa tạo, kéo file sql lên `ecommerce_reactjssql.sql`
- **9**: Vào thư mục frontend với cú pháp trong terminal bên phải: `cd backend`
- **10**: Cài đặt các package cần thiết: `npm i`
- **11**: Chạy dự án: `npm run dev`, [http://localhost:5000/](http://localhost:5000/)
