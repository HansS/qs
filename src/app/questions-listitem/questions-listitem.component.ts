import { Question } from './../question/question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'questions-listitem',
  templateUrl: './questions-listitem.component.html',
  styleUrls: ['./questions-listitem.component.scss']
})
export class QuestionsListitemComponent implements OnInit {

 @Input() question: Question
  constructor() { }

  ngOnInit() {
  }

}
