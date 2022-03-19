import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('ServiceService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
