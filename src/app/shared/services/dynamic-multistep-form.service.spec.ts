import { TestBed } from '@angular/core/testing';

import { DynamicMultistepFormService } from './dynamic-multistep-form.service';

describe('DynamicMultistepFormService', () => {
  let service: DynamicMultistepFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicMultistepFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
