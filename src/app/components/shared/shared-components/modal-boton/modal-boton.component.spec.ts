import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBotonComponent } from './modal-boton.component';

describe('ModalBotonComponent', () => {
  let component: ModalBotonComponent;
  let fixture: ComponentFixture<ModalBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalBotonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
