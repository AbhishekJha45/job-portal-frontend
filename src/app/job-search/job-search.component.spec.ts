import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobSearchComponent } from './job-search.component';

describe('JobSearchComponent', () => {
  let component: JobSearchComponent;
  let fixture: ComponentFixture<JobSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// describe('JobListComponent', () => {
//   let component: JobListComponent;
//   let fixture: ComponentFixture<JobListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ JobListComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(JobListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

