import { TestBed } from '@angular/core/testing';

import { EvenmentService } from './evenment.service';

describe('EvenmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenmentService = TestBed.get(EvenmentService);
    expect(service).toBeTruthy();
  });
});
