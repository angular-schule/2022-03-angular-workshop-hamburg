import { Book } from './book';

import { BookRatingService } from './book-rating.service';

fdescribe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };
  });

  // JIRA-1555 (book rating like Amazon)
  it('should rate up a book by one', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('should rate down a book by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not be allowed to have a rating smaller than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });

  it('should respect immutability and return a new book (on change)', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook).not.toBe(book);

    const ratedBook2 = service.rateDown(book);
    expect(ratedBook2).not.toBe(book);
  });
});
