import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent }  from './app.component';
import { InteractionModule }  from './interaction/interaction.module';
import { ContactModule }  from './contact/contact.module';
import { CourseModule }  from './courses/course.module';

@NgModule({
  imports: [ BrowserModule, InteractionModule, ContactModule, CourseModule, routing ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
