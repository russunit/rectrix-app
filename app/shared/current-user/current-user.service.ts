import { User } from '../user/user'
import { EventEmitter } from '@angular/core';


export class CurrentUserService
{
	  public currentUserEmitter: EventEmitter<User> = new EventEmitter<User>();
	  public loggedInEmitter:   EventEmitter<boolean> = new EventEmitter<boolean>();
}