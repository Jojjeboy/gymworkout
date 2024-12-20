import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartComponent } from './body-part.component';

describe('BodyPartComponent', () => {
  let component: BodyPartComponent;
  let fixture: ComponentFixture<BodyPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
