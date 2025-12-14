import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Variabledemothea } from './variabledemothea';

describe('Variabledemothea', () => {
  let component: Variabledemothea;
  let fixture: ComponentFixture<Variabledemothea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Variabledemothea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Variabledemothea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
