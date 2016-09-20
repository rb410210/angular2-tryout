import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { AutoGrowDirective } from './autogrow.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [ CoursesComponent, AutoGrowDirective],
    exports: [CoursesComponent, AutoGrowDirective]
})
export class CourseModule {

}