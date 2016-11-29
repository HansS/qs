//import { Question } from './question.model';
export class Question {

    constructor(public $key: string,
                public number: number,
                public title: string,
                public category: string,
                public level: string) {

    }



    static fromJsonList(array): Question[] {
        return array.map(qs => Question.fromJson(qs));
    }
    static fromJson({$key, number, title, category, level}): Question {
        return new Question($key, number, title, category, level);
    }
}

