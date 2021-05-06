import { TestBed } from '@angular/core/testing';

import { CarRegisterService } from './car-register.service';

describe('CarRegisterService', () => {
  let service: CarRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
