import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iwe7FormsComponent } from './iwe7-forms.component';

describe('Iwe7FormsComponent', () => {
  let component: Iwe7FormsComponent;
  let fixture: ComponentFixture<Iwe7FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iwe7FormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iwe7FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
