import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkrillexComponent } from './skrillex.component';

describe('SkrillexComponent', () => {
  let component: SkrillexComponent;
  let fixture: ComponentFixture<SkrillexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkrillexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkrillexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
