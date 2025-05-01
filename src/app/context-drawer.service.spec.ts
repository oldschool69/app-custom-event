import { TestBed } from '@angular/core/testing';

import { ContextDrawerService } from './context-drawer.service';

describe('ContextDrawerService', () => {
  let service: ContextDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
