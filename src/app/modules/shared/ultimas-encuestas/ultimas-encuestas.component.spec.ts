import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasEncuestasComponent } from './ultimas-encuestas.component';

describe('UltimasEncuestasComponent', () => {
  let component: UltimasEncuestasComponent;
  let fixture: ComponentFixture<UltimasEncuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimasEncuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimasEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
