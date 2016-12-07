export class Quiz{

    constructor(public $key:string,
                public title: string,
                public url: string,
                public number: number,
                public category: string,
                public level: string){}


    // class level
    static fromJsonList(array): Quiz[] {
        //return array.map(qzs => Quiz.fromJson(qzs));
        return array.map(Quiz.fromJson);

    }

    // class level
    static fromJson({$key, title, url, number, category, level}): Quiz {
        return new Quiz($key,  title, url, number, category, level);
    }

}

