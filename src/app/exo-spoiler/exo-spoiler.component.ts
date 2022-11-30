import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-spoiler',
  templateUrl: './exo-spoiler.component.html',
  styleUrls: ['./exo-spoiler.component.scss']
})
export class ExoSpoilerComponent implements OnInit {
	public messageButton: string = 'Afficher';
	public show: boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

	displaySecret(){
		this.show = !this.show;

		// if (this.show) {
		// 	this.messageButton = 'Cacher';
		// }else {
		// 	this.messageButton = 'Afficher'
		// }

		this.messageButton = this.show ? 'Cacher': 'Afficher';
	}

}
