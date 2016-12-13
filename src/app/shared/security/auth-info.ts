


export class AuthInfo {

    constructor(public $uid:string,public displayName) {

    }


    isLoggedIn() {
        return !!this.$uid;
    }

}
