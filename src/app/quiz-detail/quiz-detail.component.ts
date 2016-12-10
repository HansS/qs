
import { Quiz } from './quiz.model';

import { routerConfig } from './../app.routing';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Question } from './../question/question.model';
import { Observable } from 'rxjs/Rx';
import { QuizzesService } from './../quizzes/quizzes.service';
import { Component, OnInit } from '@angular/core';
import { MdList, MdListItem, MdRadioGroup, MdRadioButton, MdCard, MdCardTitle, MdCardContent, MdCardHeader, MdCardFooter, MdCardActions } from '@angular/material';


@Component({
    selector: 'quiz-detail',
    templateUrl: './quiz-detail.component.html',
    styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {
    // QuizzesService
    quizzes$: Observable<Quiz[]>;
    quiz$: Observable<Quiz>;
    quizzes: Quiz[];
    url: string;

    // questions
    questions$: Observable<Question[]>;
    
    questions: Question[];
    currentQuestion:Question;

    constructor(private service: QuizzesService,
        private route: ActivatedRoute,
        private router: Router) {

    }


    ngOnInit() {

        this.url = this.route.snapshot.params['url'];

       // get quiz title for quiz
       /*
        this.service.findQuizByUrlTakeOne(this.url)
            .subscribe(qzs => this.quizzes = Quiz.fromJsonList(qzs));
      */

        // get first 2 questions for quiz -> save first to currentQuestion 
        this.questions$ = this.service.loadFirstQuestionPage(this.url,1);
        this.questions$.subscribe(qs => {
            this.questions = qs
            //this.currentQuestion = qs[0];
        });

    }

    next() {
        
            this.service.loadNextQuestionPage(this.url ,this.questions[0].$key,1)
                .subscribe(qs => this.questions = qs);


    }


    previous() {

        this.service.loadPreviousQuestion(
            this.url,
            this.questions[1].$key
        )
            .subscribe(qs => this.questions = qs);

    }

    navigateToQuestion(question: Question) {

        this.router.navigate(['questions', question.$key]);

    }

}
