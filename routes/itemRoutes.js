const express = require('express');
const router = express.Router();

const itemControllers = require('../controllers/itemControllers');

//* @route   GET /
//* @desc    Get all items, Display todo page
//* @access  Public
router.get('/', itemControllers.getItems);

//* @route   POST /
//* @desc    Add todo item
//* @access  Public
router.post('/add', itemControllers.addItem);

//* @route   POST /
//* @desc    Add todo item
//* @access  Public
router.post('/delete', itemControllers.deleteItem);

module.exports = router;
