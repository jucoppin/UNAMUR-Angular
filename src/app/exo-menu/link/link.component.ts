import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
	@Input() text: string = '';
	@Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

	sayHi() {
		console.log(this.index);
	}
}
