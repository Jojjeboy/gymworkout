import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartListComponent } from './body-part-list.component';

describe('BodyPartListComponent', () => {
  let component: BodyPartListComponent;
  let fixture: ComponentFixture<BodyPartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyPartListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
