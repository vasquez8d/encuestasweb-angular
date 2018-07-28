import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestadorasComponent } from './encuestadoras.component';

describe('EncuestadorasComponent', () => {
  let component: EncuestadorasComponent;
  let fixture: ComponentFixture<EncuestadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
