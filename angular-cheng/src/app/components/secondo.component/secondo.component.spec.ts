import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoComponent } from './secondo.component';

describe('SecondoComponent', () => {
  let component: SecondoComponent;
  let fixture: ComponentFixture<SecondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
