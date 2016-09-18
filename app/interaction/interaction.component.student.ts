import { Component, Input } from '@angular/core';

@Component({
    selector: 'interaction-student',
    template: '<h1>I am a {{student}}, {{master}}</h1>'
})
export class StudentComponent {
    @Input('student') student: string;
    @Input('master') master: string;
}