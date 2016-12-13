
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
    questionsOne$: Observable<Question[]>;

    questions: Question[];
    currentQuestion: Question;
    currentPosition = 1;

    constructor(private service: QuizzesService,
        private route: ActivatedRoute,
        private router: Router) {

    }


    ngOnInit() {

        this.url = this.route.snapshot.params['url'];

        this.questions$ = this.service.loadFirstQuestionPageAll(this.url);
        this.questionsOne$ = this.questions$.map(qs => qs.slice(0, 1));

        this.questions$.subscribe(qs => this.questions = qs);
        console.log('questions:',this.questions);
    }

    next() {

        this.currentPosition++;
        
        this.questionsOne$ = this.questions$.map(qs => qs.slice(this.currentPosition, this.currentPosition + 1));

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
