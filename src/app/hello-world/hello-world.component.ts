import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnDestroy {
	private _title: string;

  constructor() {
		this._title = "Hello";
	}

	ngOnDestroy(): void {
		throw new Error('Method not implemented.');
	}

  ngOnInit(): void {
  }

	public get title() : string {
		return this._title;
	}


}
