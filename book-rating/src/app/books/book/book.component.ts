import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent  {

  // book: Book | undefined = undefined;
  @Input()
  book?: Book;

  @Output()
  rateUp = new EventEmitter<Book | undefined>();

  @Output()
  rateDown = new EventEmitter<Book | undefined>();

  get starCount() {
    return new Array(this.book?.rating);
  }

  /* istanbul ignore next trivial statement */
  doRateUp() {
    this.rateUp.next(this.book);
  }

  /* istanbul ignore next trivial statement */
  doRateDown() {
    this.rateDown.next(this.book);
  }

  log() {
    console.log('Change Detection!', +new Date())
  }
}
