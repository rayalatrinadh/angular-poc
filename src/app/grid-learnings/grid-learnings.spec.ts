import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLearnings } from './grid-learnings';

describe('GridLearnings', () => {
  let component: GridLearnings;
  let fixture: ComponentFixture<GridLearnings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLearnings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLearnings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
