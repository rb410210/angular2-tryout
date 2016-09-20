import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { MasterComponent } from './interaction/interaction.component.master';

const appRoutes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: MasterComponent },
  { path: '**', component: MasterComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
