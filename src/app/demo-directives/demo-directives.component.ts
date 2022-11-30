import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.scss']
})
export class DemoDirectivesComponent implements OnInit {
	public currentStyle: any = {};

	public isBold: boolean = false;
	public isItalic: boolean = false;
	public isBig: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

	setCurrentStyle() {
		this.currentStyle = {
			'font-style': this.isItalic ? 'italic': 'normal',
			'font-weight': this.isBold ? 'bold': 'normal',
			'font-size': this.isBig ? `${Math.floor(Math.random()*50)}px` : '16px'
		}
	}

	toggleBold() {
		this.isBold = !this.isBold;
		this.setCurrentStyle();
	}

	toggleItalic() {
		this.isItalic = !this.isItalic;
		this.setCurrentStyle();
	}

	toggleBig() {
		this.isBig = !this.isBig;
		this.setCurrentStyle();
	}

}
