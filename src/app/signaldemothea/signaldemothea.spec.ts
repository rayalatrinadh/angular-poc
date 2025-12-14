import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signaldemothea } from './signaldemothea';

describe('Signaldemothea', () => {
  let component: Signaldemothea;
  let fixture: ComponentFixture<Signaldemothea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signaldemothea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signaldemothea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
