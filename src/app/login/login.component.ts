import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';

type FormData = {
	login: string;
	pwd: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public connectedUser: User | undefined;

	public dataForm: FormData = {
		login: '',
		pwd: ''
	};

  constructor(
		private loginService: LoginService
	) { }

  ngOnInit(): void {
		this.connectedUser = this.loginService.connectedUser;
  }

	login(): void {
		this.loginService.connect(this.dataForm.login, this.dataForm.pwd);
		this.connectedUser = this.loginService.connectedUser;

		if (this.connectedUser) {
			this.dataForm = {
				login: '',
				pwd: ''
			};
		}
	}

	logout(): void {
		this.loginService.disconnect();
		this.connectedUser = this.loginService.connectedUser;
	}
}
