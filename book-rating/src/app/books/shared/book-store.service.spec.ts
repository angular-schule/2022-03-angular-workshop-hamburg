import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';

describe('BookStoreService with HTTP stub', () => {
  let service: BookStoreService;
  let httpMock: any;

  beforeEach(() => {
    httpMock = { get: (x: any) => x };
    spyOn(httpMock, 'get').and.callThrough();

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock }
      ]
    });
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the correct URL for getSingle', () => {
    service.getSingleBook('123');
    expect(httpMock.get).toHaveBeenCalledWith('https://api.angular.schule/books/123');
  });
});
