import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-menu',
  templateUrl: './exo-menu.component.html',
  styleUrls: ['./exo-menu.component.scss']
})
export class ExoMenuComponent implements OnInit {
	public isOpen: boolean = false;

	public links: string[] = [
		'Link 1',
		'Link 2',
		'Link 3'
	];

  constructor() { }

  ngOnInit(): void {
  }

}
