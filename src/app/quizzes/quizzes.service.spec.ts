/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuizzesService } from './quizzes.service';

describe('QuizzesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizzesService]
    });
  });

  it('should ...', inject([QuizzesService], (service: QuizzesService) => {
    expect(service).toBeTruthy();
  }));
});
