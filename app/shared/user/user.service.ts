import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from './user'
import { Config } from "../config";
import { CharterRequest } from "../charter-request/charter-request";
import { ShuttleRequest } from "../shuttle-request/shuttle-request";


@Injectable()
export class UserService {
	constructor(private http: Http) {}

	register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "Users",
      JSON.stringify({
        Username: user.username,
        Email: user.email,
        Password: user.password,
        FirstName: user.firstName,
        LastName: user.lastName,
        Address: user.address,
        City: user.city,
        Country: user.country,
        zip: user.zip
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
  }

  login(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "oauth/token",
      JSON.stringify({
        username: user.username,
        password: user.password,
        grant_type: "password"
      }),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
      Config.token = data.Result.access_token;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

//empty user placeholder
nullUser: User = {
	firstName: "",
	lastName: "",
	address: "",
	city: "",
	country: "",
	zip: "",
	username: "",
	password: "",
	email: "",
	charterHistory: null,
	shuttleHistory: null,
}



//will add new users as they sign up.
USERS: User[] = [ 
{
firstName: "Chris",
lastName: "Evans",
address: "234 Kendall Street",
city: "Ludlow, MA",
country: "United States",
zip: "01056",
username: "cevans",
password: "sfd4567t",
email: "cevans999@gmail.com", 
charterHistory: null,
shuttleHistory: null,

}, 

{
firstName: "Malcolm",
lastName: "Chisholm",
address: "4478 Williams Street",
city: "Cambridge",
country: "England",
zip: "34354",
username: "mchisholm",
password: "rgr56ds",
email: "russunit@gmail.com", 
charterHistory: null,
shuttleHistory: null,
}, 

{
firstName: "Anthony",
lastName: "Kapotsis",
address: "345 Levy Lane",
city: "Cardiff",
country: "Wales",
zip: "05947",
username: "akapotsis",
password: "gdfgerges",
email: "akapotsis999@gmail.com", 
charterHistory: null,
shuttleHistory: null,

},
];
getUserList(): User[] {
 return this.USERS;
}
getUser(username: string): User {
return this.USERS.find(user => user.username == username);
}
getName(username: string): string {
return this.USERS.find(user => user.username == username).firstName;
} 
getlastName(username: string): string {
return this.USERS.find(user => user.username == username).lastName;
}
getAddress(username: string): string {
return this.USERS.find(user => user.username == username).address;
}
getCity(username: string): string {
return this.USERS.find(user => user.username == username).city;
}
getCountry(username: string): string {
return this.USERS.find(user => user.username == username).country;
}
getZip(username: string): string {
return this.USERS.find(user => user.username == username).zip;
}
getPassword(username: string): string {
return this.USERS.find(user => user.username == username).password;
}
getCharterHistory(username: string): Array<CharterRequest> {
return this.USERS.find(user => user.username == username).charterHistory;
}
getShuttleHistory(username: string): Array<ShuttleRequest> {
return this.USERS.find(user => user.username == username).shuttleHistory;
}

}
