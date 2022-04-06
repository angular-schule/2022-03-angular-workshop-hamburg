import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { selectBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books$ = this.store.select(selectBooks);
  loading$ = this.store.select(selectBooksLoading);


  constructor(private store: Store) {

      // this.bs.getBooks().subscribe(books => this.books = books);
   }

  doRateUp(book: Book | undefined): void {
    // if (!book) return;
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating < 5 ? book.rating + 1 : 5
    // // }
    // this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book | undefined): void {
    // if (!book) return;
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    // this.books = this.books
    //   .map(x => x.isbn === ratedBook.isbn ? ratedBook : x)
    //   .sort((a, b) => b.rating - a.rating)
  }

  doAddBook(book: Book): void {
    // this.books = [...this.books, book];
  }
}
