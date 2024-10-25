import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseListComponent } from './excercise-list.component';

describe('ExcerciseListComponent', () => {
  let component: ExcerciseListComponent;
  let fixture: ComponentFixture<ExcerciseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcerciseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcerciseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
