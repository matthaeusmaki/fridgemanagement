import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeDeleteModalComponent } from './fridge-delete-modal.component';

describe('FridgeDeleteModalComponent', () => {
  let component: FridgeDeleteModalComponent;
  let fixture: ComponentFixture<FridgeDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
