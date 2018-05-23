import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntixianComponent } from './untixian.component';

describe('UntixianComponent', () => {
  let component: UntixianComponent;
  let fixture: ComponentFixture<UntixianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntixianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntixianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
