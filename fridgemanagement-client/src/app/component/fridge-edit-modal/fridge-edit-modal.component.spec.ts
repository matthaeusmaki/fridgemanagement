import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeEditModalComponent } from './fridge-edit-modal.component';

describe('Fridge.ModalComponent', () => {
  let component: FridgeEditModalComponent;
  let fixture: ComponentFixture<FridgeEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
