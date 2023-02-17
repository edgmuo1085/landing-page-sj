import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActualizarComponent } from './modal-actualizar.component';

describe('ModalActualizarComponent', () => {
  let component: ModalActualizarComponent;
  let fixture: ComponentFixture<ModalActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalActualizarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
