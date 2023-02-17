import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPropiedadesComponent } from './co-propiedades.component';

describe('CoPropiedadesComponent', () => {
  let component: CoPropiedadesComponent;
  let fixture: ComponentFixture<CoPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoPropiedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
