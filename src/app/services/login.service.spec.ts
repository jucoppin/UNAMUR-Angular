import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('user login success', () => {
		service.connect('psantos', '1234');
		expect(service.connectedUser).toBeDefined();
	});

	it('user login not success', () => {
		service.connect('psantos', '2323242');
		expect(service.connectedUser).toBeUndefined();
	});

	it('user logout', () => {
		service.disconnect();
		expect(service.connectedUser).toBeUndefined();
	});
});
