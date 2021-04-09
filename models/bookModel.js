class Book {
  constructor(id,
    name,
    author,
    year,
    genres) {
    this.author = author;
    this.year = year;
    this.genres = genres;
    this.name = name;
  }
}

class BookService {
  constructor() {
    this.GENRES = {
      0: { id: 0, name: 'Romance' },
      1: { id: 1, name: 'Fairytale' },
      2: { id: 2, name: 'Drama' },
      3: { id: 3, name: 'Fantasy' },
      4: { id: 4, name: 'Mystery' },
      5: { id: 5, name: 'Science fiction' },
      6: { id: 6, name: 'Suspense' },
      7: { id: 7, name: 'Young Adult' },
      8: { id: 8, name: 'Action and adventure' }
    };

    this.GENRELIST = [
      { id: 0, name: 'Romance' },
      { id: 1, name: 'Fairytale' },
      { id: 2, name: 'Drama' },
      { id: 3, name: 'Fantasy' },
      { id: 4, name: 'Mystery' },
      { id: 5, name: 'Science fiction' },
      { id: 6, name: 'Suspense' },
      { id: 7, name: 'Young Adult' },
      { id: 8, name: 'Action and adventure' }
    ];

    this.BOOKLIST = [
      {
        id: 1,
        name: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        year: 1859,
        genres: [this.GENRES[4], this.GENRES[0]],
      },
      {
        id: 2,
        name: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        year: 1954,
        genres: [this.GENRES[8], this.GENRES[5]],
      },
      {
        id: 3,
        name: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        year: 1943,
        genres: [this.GENRES[1], this.GENRES[7], this.GENRES[5]],
      },
      {
        id: 4,
        name: "Harry Potter and the Philosopher's Stone",
        author: 'J. K. Rowling',
        year: 1997,
        genres: [this.GENRES[7], this.GENRES[1], this.GENRES[2]],
      },
      {
        id: 5,
        name: 'The Hobbit',
        author: 'J. R. R. Tolkien',
        year: 1937,
        genres: [this.GENRES[1], this.GENRES[8]],
      },
      {
        id: 6,
        name: "Alice's Adventures in Wonderland",
        author: 'Lewis Carroll',
        year: 1865,
        genres: [this.GENRES[3], this.GENRES[8], this.GENRES[7]],
      }
    ];
  }

  getBooks() {
    return this.BOOKLIST;
  }


  findBookById(id) {
    return this.BOOKLIST[id];
  }

  putBook(book) {
    let success = false;
    const i = this.BOOKLIST.findIndex(x => x.id === book.id);
    if (i > -1) {
      this.BOOKLIST[i] = book;
      success = true;
    }
    return success;
  }

  delete(book) {
    let success = false;
    const i = this.BOOKLIST.findIndex(x => x.id === book.id);
    if (i > -1) {
      this.BOOKLIST.splice(i, 1);
      success = true;
    }
    return success;
  }
}

exports.Book = Book;
exports.BookService = BookService;
