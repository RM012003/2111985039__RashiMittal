const express = require('express');
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', auth, auth.isAdmin, addProduct);
router.put('/:id', auth, auth.isAdmin, updateProduct);
router.delete('/:id', auth, auth.isAdmin, deleteProduct);

module.exports = router;
