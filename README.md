## Describe project
This project aims to develop an online sales website with main functions including: product display, shopping cart, payment and order management. The website will have a user-friendly interface and integrate necessary security features.

## Implementation plan

### 1. Planning and design
- **Requirements Research**: Collect and analyze requirements from users and instructors.
- **Planning**: Determine the main functions of the sales website and create a detailed development plan.
- **User interface (UI) design**: Draw wireframes and design mockups for main pages such as home page, product page, cart page, and checkout page.
- **Database (DB) design**: Design database structure to store product, order, and user information.

### 2. Set up the development environment
- **Install tools**: Set up necessary tools such as IDE, version control (Git), libraries and frameworks (eg: React, Node.js, MongoDB).
- **Initiate project**: Create a new project, initialize Git repository and install necessary packages.

### 3. Frontend Development
- **Home**: Create a homepage interface with a list of featured products and promotions.
- **Product page**: Create a product detail page interface with detailed information, images and reviews.
- **Cart page**: Create a shopping cart interface that allows users to add, delete and update product quantities.
- **Payment page**: Create a payment interface with steps to enter shipping information and payment methods.

### 4. Backend Development
- **Set up server**: Set up server with Node.js/Express or a similar framework.
- **API endpoints**: Create API endpoints to handle requests from the frontend (product CRUD, cart management, payment processing).
- **Database connection**: Establish a connection to a database (MongoDB, MySQL, etc.) to store and retrieve product and order data.
- **Logic processing**: Write logic processing functions for functions such as adding, editing, deleting products, order management and user authentication.

### 5. Integration and testing
- **Unit Testing**: Write test cases for each module and function.
- **Integration Testing**: Testing the interaction between frontend and backend modules.
- **System Testing**: Testing the entire system to ensure everything works as expected.
- **Error correction**: Fix errors that arise during testing.

### 6. Deployment
- **Deploy on server**: Put the website on a real server (eg: Heroku, Vercel).
- **Domain configuration**: Link the domain to the server so users can access the website.
- **Ensure security**: Set up security measures such as SSL, API protection, payment data encryption.

### 7. Documentation and reports
- **Documentation writing**: Drafting system installation and user manual documents.
- **Project report**: Write a detailed report on the development process and achieved results.
- **Preparing presentations**: Prepare slides and presentation content for the defense session.

### 8. Maintenance and upgrades
- **Maintenance**: Fix errors and update the website after deployment.
- **Upgrade**: Add new features and improve performance based on user feedback.

## Progress and assignments
- **Weeks 1-2**: Planning and design.
- **Week 3-4**: Environment setup and frontend development.
- **Week 5-6**: Backend development.
- **Week 7**: Integration and testing.
- **Week 8**: Deploy and write documents.
- **Week 9**: Report and defend the project.

## Technology used
- **Base**: HTML, CSS, Javascript
- **FE**: Reactjs, React-router-dom, Slick-carousel, Bootstrap css, Axios, Sass, ...
- **BE**: Nodejs (express), Mysql2
- **Database**: Mysql
- **Server**: Apache

## Start running the project
- **1**: Clone source code from git
- **2**: Open the source code with vs code, and open the terminal, split the terminal in half(Ctrl+Shift+5)
## FE
- **3**:Go to the frontend directory with the syntax in the left terminal: `cd frontend`
- **4**: Install necessary packages: `npm i`
- **5**: Run project: `npm run dev`, [http://localhost:5173/](http://localhost:5173/)
## BE:
- **6**: Download xampp to support running be with mysql: [📦 Download Xampp](https://www.apachefriends.org/download.html)
- **7**: Remember to follow the correct order of steps to avoid unexpected errors (Required): `start Apache -> start MySql` và khi tắt thì `stop MySql -> stop Apache`
- **8**: Create a new database named `ecommerce_reactjssql`[phpMyAdmin](http://localhost/phpmyadmin/index.php), vào phần `Nhập` thực thi trên header của db vừa tạo, kéo file sql lên `ecommerce_reactjssql.sql`
- **9**: Go to the frontend folder with the syntax in the right terminal: `cd backend`
- **10**:Install necessary packages: `npm i`
- **11**: Running projects:`npm run dev`, [http://localhost:5000/](http://localhost:5000/)
