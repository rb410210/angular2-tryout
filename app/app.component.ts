import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
        <nav>
            <a routerLink="/" routerLinkActive="active">Interaction</a>
            <a routerLink="/courses" routerLinkActive="active">Courses</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
       </nav>
       <router-outlet></router-outlet>`
})
export class AppComponent { }
