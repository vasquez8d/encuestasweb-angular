import { EncuestasModule } from './encuestas.module';

describe('EncuestasModule', () => {
  let encuestasModule: EncuestasModule;

  beforeEach(() => {
    encuestasModule = new EncuestasModule();
  });

  it('should create an instance', () => {
    expect(encuestasModule).toBeTruthy();
  });
});
