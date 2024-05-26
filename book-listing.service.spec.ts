import { TestBed } from '@angular/core/testing';

import { BookListingService } from './book-listing.service';

describe('BookListingService', () => {
  let service: BookListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
