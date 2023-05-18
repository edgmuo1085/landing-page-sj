import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleArriendoComponent } from './inmueble-arriendo.component';

describe('InmuebleArriendoComponent', () => {
  let component: InmuebleArriendoComponent;
  let fixture: ComponentFixture<InmuebleArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebleArriendoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmuebleArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
