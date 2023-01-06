import { TestBed } from '@angular/core/testing';

import { ScnListService } from './scn-list.service';

describe('ScnListService', () => {
  let service: ScnListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScnListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
