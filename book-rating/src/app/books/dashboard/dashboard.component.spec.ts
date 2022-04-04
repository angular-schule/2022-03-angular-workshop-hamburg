import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const bookRatingMock = {
      rateUp: (b: Book) => b
    }

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponent // Integration Test
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should forward all calls to BookRating service', () => {

    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    const testBook = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
    };
    component.doRateUp(testBook);

    expect(rs.rateUp).toHaveBeenCalledOnceWith(testBook);
  });
});
