import { Question } from '../question/question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  @Input() questions: Question[];
  //filtered: Question[];
  constructor() { }

  ngOnInit() {
  }
/*
  search(term:string){
    this.filtered = this.questions.filter( q => q.title.includes(term));
  }
*/
}
