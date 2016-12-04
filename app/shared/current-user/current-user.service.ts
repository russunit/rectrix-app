import { User } from '../user/user'
import { EventEmitter } from '@angular/core';
import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrentUserService
{
	  public currentUserSource = new BehaviorSubject<User>(null);
	  currentUser$ = this.currentUserSource.asObservable();


	  public loggedInSource = new BehaviorSubject<boolean>(false);
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