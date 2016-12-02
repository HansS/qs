import { Quiz } from './../quiz-detail/quiz.model';
import { Observable } from 'rxjs/Rx';
import { QuizzesService } from './quizzes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  quizzes$: Observable<Quiz[]>;
  constructor(private service: QuizzesService) { }

  ngOnInit() {
    this.quizzes$ = this.service.findAllQuizzes();
  }

}
