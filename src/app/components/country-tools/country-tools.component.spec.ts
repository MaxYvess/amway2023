import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryToolsComponent } from './country-tools.component';

describe('CountryToolsComponent', () => {
  let component: CountryToolsComponent;
  let fixture: ComponentFixture<CountryToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
