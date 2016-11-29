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
  //allQuestions: Question[];
  //filtered: Question[];
  constructor(private service: QuestionsService) { }

  ngOnInit() {

    this.service.allQuestions()
      .do(console.log)
      .subscribe(qs => this.questions = qs);

      //.subscribe(questions => this.allQuestions = this.filtered = questions);
      
      //.map(Question.fromJsonList);


  }
/*
  search(term:string){
    this.allQuestions.filter( q => q.title.includes(term));
  }
*/
}
