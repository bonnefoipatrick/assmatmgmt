import { TestBed } from '@angular/core/testing';

import { Person.ApiService } from './person.api.service';

describe('Person.ApiService', () => {
  let service: Person.ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Person.ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
