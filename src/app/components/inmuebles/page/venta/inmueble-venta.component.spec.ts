import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleVentaComponent } from './inmueble-venta.component';

describe('InmuebleVentaComponent', () => {
  let component: InmuebleVentaComponent;
  let fixture: ComponentFixture<InmuebleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebleVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmuebleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
