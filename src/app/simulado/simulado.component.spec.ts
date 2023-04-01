import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoComponent } from './simulado.component';

describe('SimuladoComponent', () => {
  let component: SimuladoComponent;
  let fixture: ComponentFixture<SimuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
