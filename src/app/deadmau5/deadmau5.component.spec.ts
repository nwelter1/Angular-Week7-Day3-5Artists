import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deadmau5Component } from './deadmau5.component';

describe('Deadmau5Component', () => {
  let component: Deadmau5Component;
  let fixture: ComponentFixture<Deadmau5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deadmau5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deadmau5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
