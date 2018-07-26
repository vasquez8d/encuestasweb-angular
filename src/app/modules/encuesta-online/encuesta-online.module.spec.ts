import { EncuestaOnlineModule } from './encuesta-online.module';

describe('EncuestaOnlineModule', () => {
  let encuestaOnlineModule: EncuestaOnlineModule;

  beforeEach(() => {
    encuestaOnlineModule = new EncuestaOnlineModule();
  });

  it('should create an instance', () => {
    expect(encuestaOnlineModule).toBeTruthy();
  });
});
