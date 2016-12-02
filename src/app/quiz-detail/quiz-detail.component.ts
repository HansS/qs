import { Quiz } from './quiz.model';

import { routerConfig } from './../app.routing';
import { Route, ActivatedRoute } from '@angular/router';
import { Question } from './../question/question.model';
import { Observable } from 'rxjs/Rx';
import { QuizzesService } from './../quizzes/quizzes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {

  quiz$: Observable<Quiz[]>;
  questions$: Observable<Question[]>;
  constructor(private service: QuizzesService, private route: ActivatedRoute) { 

  }


  ngOnInit() {

    const titleUrl:string = this.route.snapshot.params['titleUrl'];

    this.quiz$ = this.service.findQuizByTitleUrl(titleUrl)
      .do(console.log);

      
    
  
  }

}
