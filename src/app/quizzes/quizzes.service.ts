
import { Quiz } from './../quiz-detail/quiz.model';
import { Observable } from 'rxjs/Rx';
import { AngularFire, AngularFireDatabase } from 'angularfire2';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class QuizzesService {

  constructor(private db:AngularFireDatabase) { 


  }


  ngOnInit(){

  }

  findAllQuizzes():Observable<Quiz[]> {
    return this.db.list('quizzes').map(Quiz.fromJsonList);
  }

  findQuizByTitleUrl(titleUrl: string): Observable<Quiz[]> {
    //console.log(titleUrl);

    const quiz$ = this.db.list('quizzes',{
      query: {
        orderByChild: 'titleUrl',
        equalTo: titleUrl
      }
    })
    
    return quiz$;
  }

  findQuestionsByQuiz(titleUrl: string): Observable<Quiz[]> {
    const quiz$ = this.findQuizByTitleUrl(titleUrl)
     .do(console.log)

     .subscribe();
      
/*
    const quiz_lessons$ = quiz$
      .switchMap(quiz => this.db.list('quiz_questions/' + quiz.$key))
      .do(console.log);

      quiz_lessons$.subscribe();
      
      return Observable.of([]);
*/
  return Observable.of([]);
  }
}