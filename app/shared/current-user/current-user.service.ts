import { User } from '../user/user'
import { EventEmitter } from '@angular/core';
import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrentUserService
{
	  private currentUserSource = new BehaviorSubject<User>(null);
	  currentUser$ = this.currentUserSource.asObservable();


	  private loggedInSource = new BehaviorSubject<boolean>(false);
	  loggedIn$ = this.loggedInSource.asObservable();

	  changeUser(user: User)
	  {
	  	this.currentUserSource.next(user);
	  }

	  toggleLoggedIn(bool: boolean)
	  {
	  	this.loggedInSource.next(bool);
	  }
}