import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingThea } from './event-binding-thea';

describe('EventBindingThea', () => {
  let component: EventBindingThea;
  let fixture: ComponentFixture<EventBindingThea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindingThea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingThea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
