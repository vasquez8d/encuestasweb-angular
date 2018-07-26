import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaOnlineComponent } from './encuesta-online.component';

describe('EncuestaOnlineComponent', () => {
  let component: EncuestaOnlineComponent;
  let fixture: ComponentFixture<EncuestaOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
