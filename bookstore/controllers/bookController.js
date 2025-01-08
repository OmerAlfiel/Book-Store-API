const bookService = require('../services/bookService');

module.exports = {
  getAllBooks(req, res) {
    res.json(bookService.getAllBooks());
  },

  getBookByISBN(req, res) {
    const book = bookService.getBookByIsbn(req.params.isbn);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  },

  getBooksByAuthor(req, res) {
    res.json(bookService.getBooksByAuthor(req.params.author));
  },

  getBookByTitle(req, res) {
    const book = bookService.getBookByTitle(req.params.title);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  },

  getBookReviews(req, res) {
    const reviews = bookService.getBookReviews(req.params.isbn);
    if (reviews) {
      res.json(reviews);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  },

  addOrModifyReview(req, res) {
    const { username, review } = req.body;
    const reviews = bookService.addReview(req.params.isbn, username, review);
    if (reviews) {
      res.json(reviews);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  },

  deleteReview(req, res) {
    const { username } = req.body;
    const reviews = bookService.deleteReview(req.params.isbn, username);
    if (reviews) {
      res.json(reviews);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  }
};
