//3
// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Lấy danh sách sản phẩm
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Thêm sản phẩm mới
router.post('/products', async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await Product.create({ name, price });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Xóa sản phẩm
router.delete('/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    await Product.destroy({ where: { id: productId } });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
