import { TestBed } from '@angular/core/testing';

import { AjaxServicesService } from './ajax-services.service';

describe('AjaxServicesService', () => {
  let service: AjaxServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjaxServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
