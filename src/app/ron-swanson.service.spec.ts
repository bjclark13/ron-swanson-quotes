import { TestBed } from '@angular/core/testing';

import { RonSwansonService } from './ron-swanson.service';

describe('RonSwansonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RonSwansonService = TestBed.get(RonSwansonService);
    expect(service).toBeTruthy();
  });
});
