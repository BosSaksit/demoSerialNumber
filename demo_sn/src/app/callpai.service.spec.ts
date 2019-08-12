import { TestBed } from '@angular/core/testing';

import { CallpaiService } from './callpai.service';

describe('CallpaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallpaiService = TestBed.get(CallpaiService);
    expect(service).toBeTruthy();
  });
});
