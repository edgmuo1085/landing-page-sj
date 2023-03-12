import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjModalComponent } from './sj-modal.component';

describe('SjModalComponent', () => {
  let component: SjModalComponent;
  let fixture: ComponentFixture<SjModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SjModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SjModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
