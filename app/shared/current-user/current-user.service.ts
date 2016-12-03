import { User } from '../user/user'
import { EventEmitter } from '@angular/core';


export class CurrentUserService
{
	  public currentUser: EventEmitter<User> = new EventEmitter<User>();
	  public loggedIn:   EventEmitter<boolean> = new EventEmitter<boolean>();
}