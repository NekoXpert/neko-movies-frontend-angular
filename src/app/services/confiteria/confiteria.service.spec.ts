import { TestBed } from '@angular/core/testing';

import { ConfiteriaService } from './confiteria.service';

describe('ConfiteriaService', () => {
  let service: ConfiteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
