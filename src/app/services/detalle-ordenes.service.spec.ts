import { TestBed } from '@angular/core/testing';

import { DetalleOrdenesService } from './detalle-ordenes.service';

describe('DetalleOrdenesService', () => {
  let service: DetalleOrdenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleOrdenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
