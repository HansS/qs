import { Question } from '../question/question.model';
import { QuestionsService } from './questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  constructor(private service: QuestionsService) { }

  ngOnInit() {

    this.service.allQuestions()
      .do(console.log)
      .subscribe(questions => this.questions = questions);

  }

}
