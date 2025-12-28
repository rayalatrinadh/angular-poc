import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpApp } from './corp-app';

describe('CorpApp', () => {
  let component: CorpApp;
  let fixture: ComponentFixture<CorpApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
