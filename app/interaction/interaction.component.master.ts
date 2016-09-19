import { Component } from '@angular/core';
import { Person } from './interaction.person';

@Component({
    moduleId: module.id,
	selector: 'interaction-master',
	templateUrl: 'interaction.component.master.html'
})
export class MasterComponent {
	master: string = 'Chutiya Master';
	students: Person[] = [
		{ id: 1, name: 'Mr. IQ' },
		{ name: 'Magneta' },
		{ id: 3, name: 'Bombasto' },
		{ id: 4, name: 'Last Bencher' }
		];
}