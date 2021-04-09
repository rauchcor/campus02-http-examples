function booksController(Book) {
  function post(req, res) {
    const book = new Book(req.body);
    if (!req.body.title) {
      res.status(400);
      return res.send('Title is required');
    }
    res.status(201);
    return res.json(book);
  }

  function get(req, res) {
    let books = Book.getBooks();
    if (req.query.genre) {
      const { genre } = req.query;
      const filteredBooks = books
        .filter(x => x.genres.some(y => y.id === Number.parseInt(genre, 0)));
      books = filteredBooks ? [...filteredBooks] : books;
      if (filteredBooks) {
        return res.json(books);
      }
      return res.status(404);
    }
    return res.json(books);
  }

  return { post, get };
}

module.exports = booksController;
