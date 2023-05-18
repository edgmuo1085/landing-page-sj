import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInmueblesComponent } from './home-inmuebles.component';

describe('HomeInmueblesComponent', () => {
  let component: HomeInmueblesComponent;
  let fixture: ComponentFixture<HomeInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
