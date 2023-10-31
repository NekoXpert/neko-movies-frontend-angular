import { TestBed } from '@angular/core/testing';

import { FuncionService } from './funcion.service';

describe('FuncionService', () => {
  let service: FuncionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
