import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'interaction-student',
    templateUrl: 'interaction.component.student.html'
})
export class StudentComponent {
    @Input('student-name') studentName: string;
    @Input('master') master: string;
}