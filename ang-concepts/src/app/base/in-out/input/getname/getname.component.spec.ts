import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnameComponent } from './getname.component';

describe('GetnameComponent', () => {
  let component: GetnameComponent;
  let fixture: ComponentFixture<GetnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
