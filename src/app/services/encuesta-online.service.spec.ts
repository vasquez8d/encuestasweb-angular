import { TestBed, inject } from '@angular/core/testing';

import { EncuestaOnlineService } from './encuesta-online.service';

describe('EncuestaOnlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncuestaOnlineService]
    });
  });

  it('should be created', inject([EncuestaOnlineService], (service: EncuestaOnlineService) => {
    expect(service).toBeTruthy();
  }));
});
