import { QuestionsService } from './../questions/questions.service';
import { Question } from './../question/question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allQuestions: Question[];
    filtered: Question[];

  constructor(private service: QuestionsService) {


  }

  ngOnInit() {
      this.service.allQuestions()
          //.do(console.log)
          .subscribe(
              questions => this.allQuestions = this.filtered = questions
          );

  }

    search(search:string) {

        this.filtered = this.allQuestions.filter(question => question.title.includes(search) );

    }
}
