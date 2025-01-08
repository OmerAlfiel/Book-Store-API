# Book-Store-API
This project is a Book Store API built using Node.js and Express. It provides endpoints for managing books and users, including functionalities for book reviews and user authentication.

### Key Components

1. **`app.js`**: 
   - Sets up the Express application.
   - Imports and uses the book and user routes.
   - Middleware to parse JSON requests.

2. **`server.js`**:
   - Starts the server on port 3000.

3. **`bookstore/config/db.js`**:
   - Configures and connects to a MongoDB database using Mongoose.

4. **`Controllers`**:
   - **`bookController.js`**: Handles book-related requests such as fetching books, adding reviews, etc.
   - **`userController.js`**: Manages user-related requests like registration and login.

5. **`Routes`**:
   - **`bookRoutes.js`**: Defines routes for book-related endpoints.
   - **`userRoutes.js`**: Defines routes for user-related endpoints.

6. **`Services`**:
   - **`bookService.js`**: Contains business logic for managing books and reviews.
   - **`userService.js`**: Contains business logic for user registration and login.

7. **`Tests`**:
   - **`book.test.mjs`**: Contains tests for book-related functionalities using Mocha, Chai, and Supertest.
   - **`user.test.mjs`**: Contains tests for user-related functionalities.

8. **`Utilities`**:
   - **`validator.js`**: Provides validation functions for usernames and passwords.

### Example Endpoints

- **`Books`**:
  - `GET /books`: Fetch all books.
  - `GET /books/isbn/:isbn`: Fetch a book by ISBN.
  - `GET /books/author/:author`: Fetch books by author.
  - `GET /books/title/:title`: Fetch a book by title.
  - `GET /books/:isbn/reviews`: Fetch reviews for a book.
  - `POST /books/:isbn/reviews`: Add or modify a review for a book.
  - `DELETE /books/:isbn/reviews`: Delete a review for a book.

- **`Users`**:
  - `POST /users/register`: Register a new user.
  - `POST /users/login`: Login a user.

### Dependencies

- **`Express`**: Web framework for Node.js.
- **`Mongoose`**: MongoDB object modeling tool.
- **`Axios`**: Promise-based HTTP client.
- **`Mocha`**: Test framework.
- **`Chai`**: Assertion library.
- **`Supertest`**: HTTP assertions for testing.

This project provides a RESTful API for managing books and users, with functionalities for adding, fetching, and deleting book reviews, as well as user registration and authentication.
