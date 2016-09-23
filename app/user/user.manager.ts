import {  Injectable, OnInit, OnDestroy } from '@angular/core';

export class UserManager implements OnInit, OnDestroy {
    userName = 'Sherlock Holmes';

    private static instance: UserManager = null;

    private constructor() { }

    public static getInstance(): UserManager {
        if (UserManager.instance === null) {
            console.log("UserService instance IS null");
            UserManager.instance = new UserManager();
        } else {
            console.log("UserService instance WAS created");
        }
        return UserManager.instance;
    }


    ngOnInit() {
        console.log('UserService: On Init');
    }

    ngOnDestroy() {
        console.log('UserService: On Destroy');
    }
}

