import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../question/Question.model';

@Injectable()
export class QuestionsService {

  constructor(private fire: AngularFire) { 

  }
  
  allQuestions(): Observable<Question[]> {
      return this.fire.database.list('questions');
  }

}
