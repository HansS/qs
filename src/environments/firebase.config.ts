

import {AuthMethods, AuthProviders} from "angularfire2";

export const config = {
    apiKey: "AIzaSyCibFI8rOxsMbLogy_JK93U1JCMmD1J0PQ",
    authDomain: "questions-c301f.firebaseapp.com",
    databaseURL: "https://questions-c301f.firebaseio.com",
    storageBucket: "questions-c301f.appspot.com",
    messagingSenderId: "410329841640"
};


export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};