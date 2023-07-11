import { TestBed } from '@angular/core/testing';

import { ListarusuariosService } from './listarusuarios.service';

describe('ListarusuariosService', () => {
  let service: ListarusuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarusuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
