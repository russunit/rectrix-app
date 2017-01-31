import { User } from '../user/user'
import { EventEmitter } from '@angular/core';
import {Injectable}      from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class CurrentUserService
{
	  tempUser: User;

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

	  public getCurrentUser(): Observable<User>
	  {
          return this.currentUser$;
	  }

	  public getLoggedIn(): Observable<boolean>
	  {
	  	return this.loggedInSource.asObservable();
	  }

	  
}