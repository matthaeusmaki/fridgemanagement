import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEditModalComponent } from './food-edit-modal.component';

describe('FoodEditModalComponent', () => {
  let component: FoodEditModalComponent;
  let fixture: ComponentFixture<FoodEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
