import { Question } from './../question/question.model';
import { Quiz } from './../quiz-detail/quiz.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2";
import { Observable } from "rxjs/Rx";

import { FirebaseListFactoryOpts } from "angularfire2/interfaces";

@Injectable()
export class QuizzesService {


    //
    constructor(private db: AngularFireDatabase) { }

    findAllQuizzes(): Observable<Quiz[]> {
        return this.db.list('quizzes').map(Quiz.fromJsonList);
    }

    findQuizByUrlTakeOne(url: string): Observable<any> {
        return this.db.list('quizzes', {
            query: {
                orderByChild: 'url',
                equalTo: url
            }
        })
            .take(1)
    }

    findQuizByUrl(url: string): Observable<Question> {
        return this.db.list('quizzes', {
            query: {
                orderByChild: 'url',
                equalTo: url
            }
        })
            .map(results => results[0]);
    }


    findQuestionsKeysForQuiz(url: string, query: FirebaseListFactoryOpts = {}): Observable<string[]> {

        return this.findQuizByUrl(url)
            .do(val => console.log('quiz', val))
            .filter(quiz => !!quiz)
            .switchMap(quiz => this.db.list(`quiz_questions/${quiz.$key}`, query))
            .map(lspc => lspc.map(lpc => lpc.$key));
    }


    findQuestionsForQuestionKeys(questionKeys$: Observable<string[]>): Observable<Question[]> {

        return questionKeys$
            .map(lspc => lspc.map(questionKey => this.db.object('questions/' + questionKey)))
            .flatMap(fbojs => Observable.combineLatest(fbojs))

    }


    findAllQuestionsForQuiz(url: string): Observable<Question[]> {
        return this.findQuestionsForQuestionKeys(this.findQuestionsKeysForQuiz(url));
    }


    loadFirstQuestionPage(quizUrl: string, pageSize: number): Observable<Question[]> {

        const firstPageQuestionKeys$ = this.findQuestionsKeysForQuiz(quizUrl,
            {
                query: {
                    limitToFirst: pageSize
                }
            });

        return this.findQuestionsForQuestionKeys(firstPageQuestionKeys$);
    }
    loadFirstQuestionPageAll(quizUrl: string): Observable<Question[]> {

        const firstPageQuestionKeys$ = this.findQuestionsKeysForQuiz(quizUrl);
        return this.findQuestionsForQuestionKeys(firstPageQuestionKeys$);

    }

    loadFirstQuestion(quizUrl: string): Observable<Question[]> {

        const firstPageQuestionKeys$ = this.findQuestionsKeysForQuiz(quizUrl,
            {
                query: {
                    limitToFirst: 2
                }
            });

        return this.findQuestionsForQuestionKeys(firstPageQuestionKeys$);
    }

    loadQuestionsForQuiz(quizUrl: string) {

        const questionKeys$ = this.findQuestionsKeysForQuiz(quizUrl);
        /*
        {
            query: {
                limitToFirst:2
            }
        });
        */

        return this.findQuestionsForQuestionKeys(questionKeys$);
    }

    loadNextQuestion(quizUrl: string, questionKey: string): Observable<Question[]> {

        const questionKeys$ = this.findQuestionsKeysForQuiz(quizUrl,
            {
                query: {
                    orderByKey: true,
                    startAt: questionKey,
                    limitToFirst: 1 + 1
                }
            });

        return this.findQuestionsForQuestionKeys(questionKeys$)
            .map(lessons => lessons.slice(1, lessons.length));



    }

    loadNextQuestionPage(url: string, questionKey: string, pageSize: number): Observable<Question[]> {

        const questionKeys$ = this.findQuestionsKeysForQuiz(url,
            {
                query: {
                    orderByKey: true,
                    startAt: questionKey,
                    limitToFirst: pageSize + 1
                }
            });

        return this.findQuestionsForQuestionKeys(questionKeys$)
            .map(lessons => lessons.slice(1, lessons.length));


    }

    loadPreviousQuestionPage(url: string,
        questionKey: string, pageSize: number): Observable<Question[]> {


        const questionKeys$ = this.findQuestionsKeysForQuiz(url,
            {
                query: {
                    orderByKey: true,
                    endAt: questionKey,
                    limitToLast: pageSize + 1
                }
            });

        return this.findQuestionsForQuestionKeys(questionKeys$)
            .map(lessons => lessons.slice(0, lessons.length - 1));

    }

    loadPreviousQuestion(quizUrl: string, questionKey: string): Observable<Question[]> {


        const questionKeys$ = this.findQuestionsKeysForQuiz(quizUrl,
            {
                query: {
                    orderByKey: true,
                    endAt: questionKey,
                    limitToLast: 1 + 1
                }
            });

        return this.findQuestionsForQuestionKeys(questionKeys$)
            .map(lessons => lessons.slice(0, lessons.length - 1));

    }


}
