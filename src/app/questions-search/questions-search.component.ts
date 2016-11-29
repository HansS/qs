import { Question } from './../question/question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'questions-search',
  templateUrl: './questions-search.component.html',
  styleUrls: ['./questions-search.component.scss']
})
export class QuestionsSearchComponent implements OnInit {

  //@Input() questions: Question[];
  constructor() { }

  ngOnInit() {
  }
  /*
  search(term:string){
    this.questions.filter( q => q.title.includes(term));
  }
  */
}
