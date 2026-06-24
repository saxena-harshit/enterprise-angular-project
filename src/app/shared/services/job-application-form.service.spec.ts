import { TestBed } from '@angular/core/testing';

import { JobApplicationFormService } from './job-application-form.service';

describe('JobApplicationFormService', () => {
  let service: JobApplicationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplicationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
