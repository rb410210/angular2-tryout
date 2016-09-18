import { Component } from '@angular/core';

@Component({
    selector: 'interaction-master',
    template: `
        <h2>{{master}} controls {{students.length}} students</h2>
        <interaction-student *ngFor="let student of students"
            [student]="student"
            [master]="master">
        </interaction-student>
        `
})
export class MasterComponent {
    master: string = 'Chutiya Master';
    students: string[] = ['Mr. IQ', 'Magneta', 'Bombasto',];
}