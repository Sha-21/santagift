import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeauCardComponent } from './cadeau-card.component';

describe('CadeauCardComponent', () => {
  let component: CadeauCardComponent;
  let fixture: ComponentFixture<CadeauCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeauCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeauCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
