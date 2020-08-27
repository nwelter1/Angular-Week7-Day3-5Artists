import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyFavorComponent } from './party-favor.component';

describe('PartyFavorComponent', () => {
  let component: PartyFavorComponent;
  let fixture: ComponentFixture<PartyFavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyFavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyFavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
