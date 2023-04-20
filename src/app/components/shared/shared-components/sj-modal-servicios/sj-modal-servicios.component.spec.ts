import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjModalServiciosComponent } from './sj-modal-servicios.component';

describe('SjModalServiciosComponent', () => {
  let component: SjModalServiciosComponent;
  let fixture: ComponentFixture<SjModalServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SjModalServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SjModalServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
