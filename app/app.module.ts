import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CoursesComponent } from './courses.component';
import { AutoGrowDirective } from './autogrow.directive';
import { InteractionModule }  from './interaction/interaction.module';
import { ContactModule }  from './contact/contact.module';

@NgModule({
  imports: [ BrowserModule, InteractionModule, ContactModule ],
  declarations: [ AppComponent, CoursesComponent, AutoGrowDirective ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
