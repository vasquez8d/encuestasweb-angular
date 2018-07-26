import { CandidatoModule } from './candidato.module';

describe('CandidatoModule', () => {
  let candidatoModule: CandidatoModule;

  beforeEach(() => {
    candidatoModule = new CandidatoModule();
  });

  it('should create an instance', () => {
    expect(candidatoModule).toBeTruthy();
  });
});
