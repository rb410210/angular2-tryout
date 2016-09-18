import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AwesomePipe } from './awesome.pipe';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [AwesomePipe, ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule {

}