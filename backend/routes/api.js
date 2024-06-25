const express = require('express');
const router = express.Router();
const db = require('../config/db.config');

router.get('/', (req, res) => {
  res.json('Hello apis');
});
// Homepage

// Danh sách danh mục
router.get('/categories', (req, res) => {
  db.query('SELECT * FROM category', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// "Lấy danh sách theo danh mục, nếu truyền vào :
// 1 - Điện thoại, 2 - Laptop, 3 - Đồng hồ"
router.get('/products/category/:id', (req, res) => {
  const categoryId = req.params.id;
  db.query('SELECT product_id, name,  price, discount, image_url, category_id, desc_detail FROM products WHERE category_id = ?', [categoryId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// Lấy danh sách sản phẩm giảm giá
router.get('/products/discounts', (req, res) => {
  const query = `
    SELECT 
      p.product_id, p.name, p.desc_detail, p.price, p.discount, p.image_url, p.category_id, c.name as category_name
    FROM 
      products p
    JOIN 
      category c ON p.category_id = c.category_id
    WHERE 
      p.discount > 0`;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
});
// Lấy danh sách gợi ý sản phẩm( random cho đỡ đau đầu)
router.get('/products/suggestions', (req, res) => {
  const limit = 6;
  const query = `
    SELECT 
      p.product_id, p.name, p.desc_detail, p.price, p.discount, p.image_url, p.category_id, c.name as category_name
    FROM 
      products p
    JOIN 
      category c ON p.category_id = c.category_id
    ORDER BY 
      RAND()
    LIMIT ?`;

  db.query(query, [limit], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
});
// Lấy danh sách theo search
router.get('/products/search', (req, res) => {
  const searchTerm = req.query.q;
  const query = `
    SELECT 
      p.product_id, p.name, p.desc_detail, p.price, p.discount, p.image_url, p.category_id, c.name as category_name
    FROM 
      products p
    JOIN 
      category c ON p.category_id = c.category_id
    WHERE 
      p.name LIKE ?`;

  db.query(query, [`%${searchTerm}%`], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
});
// http://localhost:5000/products/search?q=T-s
// Detail product
// Danh sách sp
router.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


router.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const productQuery = `
    SELECT 
      p.*, c.name as category_name
    FROM 
      products p
    JOIN
      category c ON p.category_id = c.category_id
    WHERE 
      p.product_id = ?`;

  const imagesQuery = `
    SELECT 
      * 
    FROM 
      product_images 
    WHERE 
      product_id = ?`;

  db.query(productQuery, [productId], (err, productResult) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (productResult.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    db.query(imagesQuery, [productId], (err, imagesResult) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const product = productResult[0];
      product.images = imagesResult.map(row => ({
        id: row.image_id,
        thumbnail: row.image_url
      }));

      res.json(product);
    });
  });
});
// Danh sách sản phẩm theo mảng ids product (cart)
router.post('/products/by-ids', (req, res) => {
  const productIds = req.body.ids;
  if (!Array.isArray(productIds) || productIds.length === 0) {
    return res.status(400).json({ error: 'Invalid input. Expecting an array of product IDs.' });
  }

  const query = `
    SELECT 
      p.product_id, p.name, p.desc_detail, p.price, p.discount, p.image_url, p.category_id, c.name as category_name
    FROM 
      products p
    JOIN 
      category c ON p.category_id = c.category_id
    WHERE 
      p.product_id IN (?)`;

  db.query(query, [productIds], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
});

module.exports = router;
