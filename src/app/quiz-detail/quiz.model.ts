export class Quiz{

    constructor(private $key:string,
                private title: string,
                private titleUrl: string,
                private number: number,
                private category: string,
                private level: string){}


    // class level
    static fromJsonList(array): Quiz[] {
        //return array.map(qzs => Quiz.fromJson(qzs));
        return array.map(Quiz.fromJson);

    }

    // class level
    static fromJson({$key, title, titleUrl, number, category, level}): Quiz {
        return new Quiz($key,  title, titleUrl, number, category, level);
    }

}

