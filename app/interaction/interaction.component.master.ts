import { Component } from '@angular/core';
import { Person } from './interaction.person';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
	selector: 'interaction-master',
	templateUrl: 'interaction.component.master.html'
})
export class MasterComponent {

	constructor(private route: ActivatedRoute,
  private router: Router){}

	master: string = 'Sir jee';
	students: Person[] = [
		{ id: 1, name: 'Mr. IQ' },
		{ name: 'Magneta' },
		{ id: 3, name: 'Bombasto' },
		{ id: 4, name: 'Last Bencher' }
		];
}