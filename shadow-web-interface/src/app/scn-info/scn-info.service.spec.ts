import { TestBed } from '@angular/core/testing';

import { ScnInfoService } from './scn-info.service';

describe('ScnInfoService', () => {
  let service: ScnInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScnInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
