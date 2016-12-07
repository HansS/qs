import { Question } from './../question/question.model';
import { Quiz } from './../quiz-detail/quiz.model';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2";
import {Observable} from "rxjs/Rx";
//import {Quiz} from "./quiz";
//import {Question} from "./question";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";

@Injectable()
export class QuizzesService {


    
    constructor(private db:AngularFireDatabase) {
      
    }

    findAllQuizzes():Observable<Quiz[]> {
        return this.db.list('quizzes').map(Quiz.fromJsonList);
    }


    findQuizByUrl(url:string): Observable<Quiz> {
        return this.db.list('quizzes', {
            query: {
                orderByChild: 'url',
                equalTo: url
            }
        })
        .map(results => results[0]);
    }


    findQuestionKeysPerQuizUrl(url:string, query: FirebaseListFactoryOpts = {}): Observable<string[]> {

        return this.findQuizByUrl(url)
            .do(val => console.log("quiz",val))
            .filter(quiz => !!quiz)
            .switchMap(quiz => this.db.list(`quiz_questions/${quiz.$key}`,query))
            .map( lspc => lspc.map(lpc => lpc.$key) );
    }


    findQuestionsForQuestionKeys(questionKeys$: Observable<string[]>) :Observable<Question[]> {

        return questionKeys$
            .map(lspc => lspc.map(questionKey => this.db.object('questions/' + questionKey)) )
            .flatMap(fbojs => Observable.combineLatest(fbojs) )

    }


    findAllQuestionsForQuiz(url:string):Observable<Question[]> {
        return this.findQuestionsForQuestionKeys(this.findQuestionKeysPerQuizUrl(url));
    }

/*
    loadFirstLessonsPage(courseUrl:string, pageSize:number): Observable<Lesson[]> {

        const firstPageLessonKeys$ = this.findLessonKeysPerCourseUrl(courseUrl,
            {
                query: {
                    limitToFirst:pageSize
                }
            });

        return this.findLessonsForLessonKeys(firstPageLessonKeys$);
    }




    loadNextPage(courseUrl:string,
                 lessonKey:string, pageSize:number): Observable<Lesson[]> {

        const lessonKeys$ = this.findLessonKeysPerCourseUrl(courseUrl,
            {
                query: {
                    orderByKey: true,
                    startAt: lessonKey,
                    limitToFirst:pageSize + 1
                }
            });

        return this.findLessonsForLessonKeys(lessonKeys$)
            .map(lessons => lessons.slice(1, lessons.length));


    }

    loadPreviousPage(courseUrl:string,
                     lessonKey:string, pageSize:number): Observable<Lesson[]> {


        const lessonKeys$ = this.findLessonKeysPerCourseUrl(courseUrl,
            {
                query: {
                    orderByKey: true,
                    endAt: lessonKey,
                    limitToLast:pageSize + 1
                }
            });

        return this.findLessonsForLessonKeys(lessonKeys$)
            .map(lessons => lessons.slice(0, lessons.length - 1));

    }
*/

}
