import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeModalComponent } from './fridge-modal.component';

describe('Fridge.ModalComponent', () => {
  let component: FridgeModalComponent;
  let fixture: ComponentFixture<FridgeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
