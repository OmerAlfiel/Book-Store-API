
const books = [
    { isbn: '123', title: 'Book One', author: 'Author One', reviews: [] },
    { isbn: '456', title: 'Book Two', author: 'Author Two', reviews: [] },
    { isbn: '789', title: 'Book Three', author: 'Author One', reviews: [] }
  ];
  
  class BookService {
    static getAllBooks() {
      return books;
    }
  
    static getBookByIsbn(isbn) {
      return books.find(book => book.isbn === isbn);
    }
  
    static getBooksByAuthor(author) {
      return books.filter(book => book.author === author);
    }
  
    static getBookByTitle(title) {
      return books.find(book => book.title === title);
    }
  
    static getBookReviews(isbn) {
      const book = books.find(b => b.isbn === isbn);
      return book ? book.reviews : null;
    }
  
    static addReview(isbn, username, review) {
      const book = books.find(b => b.isbn === isbn);
      if (!book) {
        return null;
      }
      const existingReview = book.reviews.find(r => r.username === username);
      if (existingReview) {
        existingReview.review = review;
      } else {
        book.reviews.push({ username, review });
      }
      return book.reviews;
    }
  
    static deleteReview(isbn, username) {
      const book = books.find(b => b.isbn === isbn);
      if (!book) {
        return null;
      }
      book.reviews = book.reviews.filter(r => r.username !== username);
      return book.reviews;
    }
  }
  
  module.exports = BookService;
  