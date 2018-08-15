import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClientModule} from "@angular/common/http";

fdescribe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [DataService]
    });
  });

  fit('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
