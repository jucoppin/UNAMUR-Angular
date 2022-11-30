import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	private users: User[] = [
		new User(0, 'Santos', 'Pierre', 'psantos', '1234'),
		new User(1, 'Ly', 'Khun', 'khunl', '1234'),
		new User(2, 'Coppin', 'Julien', 'jcoppin', '1234'),
	];

	public connectedUser: User | undefined;

  constructor() { }

	connect(login: string, password: string) {
		// On va vérifier si le login recu est présent dans la base de donnée
		this.connectedUser = this.users.find((user) => {
			return user.login === login;
		});
		// Si il a trouvé un utilisateur et que le password ne correspond pas
		if (this.connectedUser?.password !== password) {
			this.connectedUser = undefined;
		}
	}

	disconnect() {
		this.connectedUser = undefined;
	}
}
