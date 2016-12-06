import { Observable } from 'rxjs';
import { Quiz } from './../quiz-detail/quiz.model';
import { QuizzesService } from './../quizzes/quizzes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.scss']
})
export class QuizzesListComponent implements OnInit {
 
  @Input() quizzes: Observable<Quiz[]>;
  constructor(private service: QuizzesService) { }

  ngOnInit() {
    this.quizzes = this.service.findAllQuizzes();
  
  }

}
