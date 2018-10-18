import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeModal } from './fridge.modal.component';

describe('Fridge.ModalComponent', () => {
  let component: FridgeModal;
  let fixture: ComponentFixture<FridgeModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
