const express = require('express');
const router = express.Router();
const db = require('../config/db.config');

router.get('/', (req, res) => {
    res.json('Hello apis');
});

router.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    db.query('SELECT * FROM products WHERE product_id = ?', [productId], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});

router.post('/products', (req, res) => {
    const { name, description, price, stock_quantity } = req.body;
    db.query('INSERT INTO products (name, description, price, stock_quantity) VALUES (?, ?, ?, ?)',
        [name, description, price, stock_quantity],
        (err, results) => {
            if (err) throw err;
            res.json({ id: results.insertId });
        });
});

router.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const { name, description, price, stock_quantity } = req.body;
    db.query('UPDATE products SET name = ?, description = ?, price = ?, stock_quantity = ? WHERE product_id = ?',
        [name, description, price, stock_quantity, productId],
        (err, results) => {
            if (err) throw err;
            res.json({ message: 'Product updated' });
        });
});

router.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    db.query('DELETE FROM products WHERE product_id = ?', [productId], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Product deleted' });
    });
});

module.exports = router;
