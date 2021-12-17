import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeauFormComponent } from './cadeau-form.component';

describe('CadeauFormComponent', () => {
  let component: CadeauFormComponent;
  let fixture: ComponentFixture<CadeauFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeauFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeauFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
