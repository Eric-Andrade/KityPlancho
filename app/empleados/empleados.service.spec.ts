import { TestBed, inject } from '@angular/core/testing';

import { EmpleadosService } from './empleados.service';

describe('EmpleadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleadosService]
    });
  });

  it('should ...', inject([EmpleadosService], (service: EmpleadosService) => {
    expect(service).toBeTruthy();
  }));
});
