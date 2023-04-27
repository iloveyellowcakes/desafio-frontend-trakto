import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewareListComponent } from './courseware-list.component';

describe('CoursewareIstComponent', () => {
  let component: CoursewareListComponent;
  let fixture: ComponentFixture<CoursewareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursewareListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursewareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
