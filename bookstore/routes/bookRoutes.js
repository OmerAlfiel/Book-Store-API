const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);

router.get('/isbn/:isbn', bookController.getBookByISBN);

router.get('/author/:author', bookController.getBooksByAuthor);

router.get('/title/:title', bookController.getBookByTitle);

router.get('/:isbn/reviews', bookController.getBookReviews);

router.post('/:isbn/reviews', bookController.addOrModifyReview);

router.delete('/:isbn/reviews', bookController.deleteReview);

module.exports = router;
