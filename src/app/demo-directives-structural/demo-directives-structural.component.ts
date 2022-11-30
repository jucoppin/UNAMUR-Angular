import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directives-structural',
  templateUrl: './demo-directives-structural.component.html',
  styleUrls: ['./demo-directives-structural.component.scss']
})
export class DemoDirectivesStructuralComponent implements OnInit {
	public fruitname: string = '';

	public isOpen: boolean = false;

	public choice: number = 1;

	public fruits: string[] = ['Pomme', 'Poire', 'Pêche'];

  constructor() { }

  ngOnInit(): void {
  }

	addFruit() {
		if (this.fruitname.trim()) {
			this.fruits.push(this.fruitname.trim());
			this.fruitname = '';
		}
	}

}
