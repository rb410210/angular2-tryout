import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses: </h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul> 
        `,
    providers: [CourseService]
})
export class CoursesComponent {
    title: string = "The title of courses page";
    courses: string[] = null;

    constructor(courseService: CourseService) {
        courseService.getCourses().subscribe(
                     courses => this.courses = courses,
                     error =>  this.title = <any>error);
    }
}