const express = require('express');
const { getCart, addItemToCart, removeItemFromCart } = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getCart);
router.post('/', auth, addItemToCart);
router.delete('/:id', auth, removeItemFromCart);

module.exports = router;
