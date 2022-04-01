import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent  {

  // book: Book | undefined = undefined;
  @Input()
  book?: Book;

  get starCount() {
    return new Array(this.book?.rating);
  }
}