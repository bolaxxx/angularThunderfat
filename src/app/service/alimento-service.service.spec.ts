import { TestBed } from '@angular/core/testing';

import { AlimentoServiceService } from './alimento-service.service';

describe('AlimentoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlimentoServiceService = TestBed.get(AlimentoServiceService);
    expect(service).toBeTruthy();
  });
});
