import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl()
  });

  isInvalid(path: string): boolean {
    const control = this.bookForm.get(path);
    return !!control && control.touched && control.invalid;
  }

  submitForm(): void {
    const book = {
      ...this.bookForm.value,
      rating: 1
    }

    // TODO
    // 1. Feuer ein Event mit dem Namen 'create', payload Book
    // 2. Subscribe dich im Dashboard auf das Event
    // 3. Füge das Buch dem Buch-Array hinzu

    this.bookForm.reset();
  }
}
