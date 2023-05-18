import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInmueblesComponent } from './navbar-inmuebles.component';

describe('NavbarInmueblesComponent', () => {
  let component: NavbarInmueblesComponent;
  let fixture: ComponentFixture<NavbarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
