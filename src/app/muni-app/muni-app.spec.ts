import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuniApp } from './muni-app';

describe('MuniApp', () => {
  let component: MuniApp;
  let fixture: ComponentFixture<MuniApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuniApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuniApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
