import { Component } from '@angular/core';
import { Person } from './interaction.person';

@Component({
	selector: 'interaction-master',
	templateUrl: './app/interaction/interaction.component.master.html'
})
export class MasterComponent {
	master: string = 'Chutiya Master';
	students: Person[] = [
		{ id: 1, name: 'Mr. IQ' },
		{ id: 2, name: 'Magneta' },
		{ id: 3, name: 'Bombasto' }];
}