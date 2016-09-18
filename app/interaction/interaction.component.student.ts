import { Component, Input } from '@angular/core';

@Component({
    selector: 'interaction-student',
    templateUrl: './app/interaction/interaction.component.student.html'
})
export class StudentComponent {
    @Input('student-name') student: string;
    @Input('master') master: string;
}