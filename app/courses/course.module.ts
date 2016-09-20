import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { CoursesComponent } from './courses.component';
import { AutoGrowDirective } from './autogrow.directive';

@NgModule({
    imports: [CommonModule, HttpModule, JsonpModule],
    declarations: [ CoursesComponent, AutoGrowDirective],
    exports: [CoursesComponent, AutoGrowDirective]
})
export class CourseModule {

}