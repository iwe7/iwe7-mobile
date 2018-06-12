import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iwe7AccountComponent } from './iwe7-account.component';

describe('Iwe7AccountComponent', () => {
  let component: Iwe7AccountComponent;
  let fixture: ComponentFixture<Iwe7AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iwe7AccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iwe7AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
