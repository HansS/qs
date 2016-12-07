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

  quizzes$: Observable<Quiz[]>;
  quiz$: Observable<Quiz[]>;

  questions$: Observable<Question[]>;
  questions: Question[];
  url:string;
  constructor(private service: QuizzesService, private route: ActivatedRoute) { 

  }


  ngOnInit() {

        this.url = this.route.snapshot.params['url'];

        //this.quiz$ = this.service.findQuizByUrl(this.url);

        this.questions$ = this.service.findAllQuestionsForQuiz(this.url,);
        
            //.do(console.log)
            //.subscribe();

        //this.questions$.subscribe(questions => this.questions = questions);

        //this.url = this.route.snapshot.params['url'];

        console.log('url:',this.url);
    //this.quiz$ = this.service.findQuizByUrl(this.url)
    //  .do(console.log);
  }

      next() {
/*
        this.service.loadNextPage(
            this.url,
            this.lessons[this.lessons.length - 1].$key,
            3
        )
        .subscribe(lessons => this.lessons = lessons);

*/
    }


    previous() {
/*
        this.coursesService.loadPreviousPage(
            this.courseUrl,
            this.lessons[0].$key,
            3
        )
            .subscribe(lessons => this.lessons = lessons);
*/
    }

    navigateToQuestion(lesson:Question) {

    //    this.router.navigate(['lessons', lesson.url]);

    }

}
