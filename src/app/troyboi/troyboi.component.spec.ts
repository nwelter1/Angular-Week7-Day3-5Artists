import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroyboiComponent } from './troyboi.component';

describe('TroyboiComponent', () => {
  let component: TroyboiComponent;
  let fixture: ComponentFixture<TroyboiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroyboiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroyboiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
