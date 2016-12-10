
export class Question {

    constructor(public $key: string,
        public number: number,
        public title: string,
        public category: string,
        public level: string) {

    }


    // class level
    static fromJsonList(array): Question[] {

        return array.map(Question.fromJson);

    }

    // class level
    static fromJson({$key, number, title, category, level}): Question {
        return new Question($key, number, title, category, level);
    }

}

