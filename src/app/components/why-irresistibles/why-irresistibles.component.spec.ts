import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyIrresistiblesComponent } from './why-irresistibles.component';

describe('WhyIrresistiblesComponent', () => {
  let component: WhyIrresistiblesComponent;
  let fixture: ComponentFixture<WhyIrresistiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyIrresistiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyIrresistiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
