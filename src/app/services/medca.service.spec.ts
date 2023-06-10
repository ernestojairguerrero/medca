import { TestBed } from '@angular/core/testing';

import { MedcaService } from './medca.service';

describe('MedcaService', () => {
  let service: MedcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
