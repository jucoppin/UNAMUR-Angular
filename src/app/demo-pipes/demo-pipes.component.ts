import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.scss']
})
export class DemoPipesComponent implements OnInit {
	public birthDate: Date;
	public price: number;
	public message: string;

  constructor() {
		this.birthDate = new Date();
		this.price = 3.54;
		this.message = 'Mon message';
	}

  ngOnInit(): void {
  }

}
