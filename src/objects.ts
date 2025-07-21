// don't change this interface
interface Book {
  title: string;
  author: string | string[];
  publishedYear: number;
  genre: string;
  pageCount?: number;
  ISBN?: string;
}

/**
 * `createBook` function:
 * - Accepts four parameters:
 *   - `title` (string)
 *   - `author` (string)
 *   - `publishedYear` (number)
 *   - `genre` (string)
 * - Returns a new `Book` object with these properties.
 * Example:
 *  createBook("JavaScript: The Definitive Guide", "David Flanagan", 2020, "Programming");
 *   // => { title: "JavaScript: The Definitive Guide", author: "David Flanagan", publishedYear: 2020, genre: "Programming" }
 */
function createBook(
  title: string,
  author: string,
  publishedYear: number,
  genre: string
): Book {
  return { title, author, publishedYear, genre } as Book;
}

// DO NOT CHANGE THE LINE OF CODE BELOW (you can use it for testing your code)
const book = createBook(
  "Hitchhiker's Guide to The Galaxy",
  "Douglas Adams",
  1965,
  "Sci-Fi"
);

/**
 * `printBookTitleAndYear` function:
 * - Accepts a `book` parameter of type `Book`.
 * - Returns the book’s title with its publish year separated by a space.
 * - Access the book title using dot-notation and access the publish year using bracket-notation.
 * Example:
 *  printBookTitleAndYear(book);
 *   // => "Hitchhiker's Guide to The Galaxy 1965"
 */
function printBookTitleAndYear(book: Book): string {
  return book.title + "" + book.publishedYear;
}
console.log(printBookTitleAndYear(book));
/**
 * `addPageCount` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - A `pageCount` parameter of type `number`.
 * - Returns the same `Book` object with a new `pageCount` property.
 * Example:
 *  addPageCount(book, 320);
 *   // => { title: "Hitchhiker's Guide to The Galaxy", author: "Douglas Adams", publishedYear: 1965, genre: "Sci-Fi", pageCount: 320 }
 */
function addPageCount(book: Book, pageCount: number): Book {
  book.pageCount = pageCount;
  console.log(book.pageCount);
  return book;
}

/**
 * `addISBN` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - An `ISBN` parameter of type `string`.
 * - Returns the same `Book` object with a new `ISBN` property.
 * Example:
 *  addISBN(book, "978-3-16-148410-0");
 *   // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: "Douglas Adams",
 *   //       publishedYear: 1965,
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0" // ✅ added ISBN
 *   //    }
 */
function addISBN(book: Book, ISBN: string): Book {
  book.ISBN = ISBN;
  console.log(book.ISBN);
  return book;
}

/**
 * `updatePublishedYear` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - A `newYear` parameter of type `number` representing the updated publish year.
 * - Returns the same `Book` object with an updated `publishedYear` property.
 * Example:
 *  updatePublishedYear(book, 2022);
 *    // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: "Douglas Adams",
 *   //       publishedYear: 2022, // ✅ updated publishedYear
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0"
 *   //    }
 */
function updatePublishedYear(book: Book, newYear: number): Book {
  book.publishedYear = newYear;

  return book;
}

/**
 * `addSecondAuthor` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - An `additionalAuthor` parameter of type `string`.
 * - Updates the `author` property:
 *   - If `author` is already an array, it adds the new author.
 *   - If `author` is a string, it converts it to an array and adds the new author.
 * - Returns the updated `Book` object.
 * Example:
 *  addSecondAuthor(book, "John Doe");
 *   // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: ["Douglas Adams", "John Doe"], // ✅ two authors now
 *   //       publishedYear: 1965,
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0"
 *   //    }
 */
function addSecondAuthor(book: Book, additionalAuthor: string): Book {
  if (typeof book.author === "string") {
    book.author = [book.author, additionalAuthor];
  } else {
    book.author.push(additionalAuthor);
  }

  return book;
}

export {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  updatePublishedYear,
  addSecondAuthor,
  Book,
};
