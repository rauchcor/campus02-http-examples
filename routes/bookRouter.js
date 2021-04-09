/* eslint-disable no-param-reassign */
const express = require('express');
const path = require('path');
const booksController = require('../controllers/booksController');

function routes(Book) {
  const bookRouter = express.Router();
  const controller = booksController(Book);

  bookRouter.route('/books')
    .post(controller.post)
    .get(controller.get);

  bookRouter.use('/books/:bookId', (req, res, next) => {
    const book = Book.findBookById(req.params.bookId);
    if (book) {
      req.book = book;
      return next();
    }
    return res.sendStatus(404);
  });

  bookRouter.route('/books/:bookId')
    .get((req, res) => res.json(req.book))
    .put((req, res) => {
      const { book } = req;
      book.name = req.body.name;
      book.author = req.body.author;
      book.genres = req.body.genres;
      book.year = req.body.year;
      const success = Book.putBook(book);
      if (!success) {
        return res.sendStatus(500);
      }
      return res.json(book);
    })
    .patch((req, res) => {
      const { book } = req;
      // eslint-disable-next-line no-underscore-dangle
      if (req.body.id) {
        // eslint-disable-next-line no-underscore-dangle
        delete req.body.id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        book[key] = value;
      });
      const success = Book.putBook(book);
      if (!success) {
        return res.sendStatus(500);
      }
      return res.json(book);
    })
    .delete((req, res) => {
      const success = Book.delete(req.book);
      if (!success) {
        return res.sendStatus(500);
      }
      return res.sendStatus(204);
    });

  bookRouter.route('/image')
    .get((req, res) => res.sendFile('katze.jpg', { root: path.join(__dirname, '../resources') }));

  bookRouter.route('/html')
    .get((req, res) => {
      res.sendFile('index.html', { root: path.join(__dirname, '../resources') });
    });
  return bookRouter;
}

module.exports = routes;
