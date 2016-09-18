import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './interaction.component.master';
import { StudentComponent } from './interaction.component.student';

@NgModule({
    imports: [CommonModule],
    declarations: [MasterComponent, StudentComponent],
    exports: [MasterComponent]
})
export class InteractionModule {

}