/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlataformDetectorService } from './plataform-detector.service';

describe('Service: PlataformDetector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlataformDetectorService]
    });
  });

  it('should ...', inject([PlataformDetectorService], (service: PlataformDetectorService) => {
    expect(service).toBeTruthy();
  }));
});
