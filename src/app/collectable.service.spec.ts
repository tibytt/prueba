import { TestBed, inject } from '@angular/core/testing';

import { CollectableService } from './collectable.service';

describe('CollectableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectableService]
    });
  });

  it('should be created', inject([CollectableService], (service: CollectableService) => {
    expect(service).toBeTruthy();
  }));
});
