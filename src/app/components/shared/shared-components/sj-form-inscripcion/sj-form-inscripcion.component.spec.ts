import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjFormInscripcionComponent } from './sj-form-inscripcion.component';

describe('SjFormInscripcionComponent', () => {
  let component: SjFormInscripcionComponent;
  let fixture: ComponentFixture<SjFormInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SjFormInscripcionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SjFormInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
