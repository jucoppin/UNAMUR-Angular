import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent implements OnInit {
	public name: string = "";

	public isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

	handleClick() {
		this.isDisabled = !this.isDisabled;
	}

}
