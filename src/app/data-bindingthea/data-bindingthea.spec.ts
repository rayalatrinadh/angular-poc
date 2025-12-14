import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingthea } from './data-bindingthea';

describe('DataBindingthea', () => {
  let component: DataBindingthea;
  let fixture: ComponentFixture<DataBindingthea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingthea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingthea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
