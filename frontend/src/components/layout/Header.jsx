import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import CSS Module

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <Link to="/">MyShop</Link>
                </div>
                <nav className={styles.navLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/product">Products</Link>
                    <Link to="/card">Card</Link>
                </nav>
                <div className={styles.cart}>
                    <Link to="/cart">Cart</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
