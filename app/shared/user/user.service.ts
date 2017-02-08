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


  //converts whole profile to string for our http server
  userProfileToString(user: User) 
  {
    charterHistorySize: number;
    shuttleHistorySize: number;
    outString: string;

    charterHistorySize = user.charterHistory().size();
    shuttleHistorySize = user.shuttleHistory().size();
    outString = "";

    outString += user.firstName + "$";
    outString += user.lastName + "$";
    outString += user.address + "$";
    outString += user.city + "$";
    outString += user.country + "$";
    outString += user.zip + "$";
    outString += user.username + "$";
    outString += user.password + "$";
    outString += user.email + "$";
    
    outString += charterHistorySize + "$";
    for(int x = 0; x < charterHistorySize; x++)
    {
      outString += user.charterHistory.get(x).firstName + "$";
      outString += user.charterHistory.get(x).lastName + "$";
      outString += user.charterHistory.get(x).phoneNumber + "$";
      outString += user.charterHistory.get(x).tripType + "$";
      outString += user.charterHistory.get(x).departLocation + "$";
      outString += user.charterHistory.get(x).departDate + "$";
      outString += user.charterHistory.get(x).departTime + "$";
      outString += user.charterHistory.get(x).arriveLocation + "$";
      outString += user.charterHistory.get(x).arriveDate + "$";
      outString += user.charterHistory.get(x).arriveTime + "$";
      outString += user.charterHistory.get(x).requirements + "$";
      outString += user.charterHistory.get(x).preferredCraft + "$";
    }

    outString += shuttleHistorySize + "$";
    for(int x = 0; x < shuttleHistorySize; x++)
    {
      outString += user.shuttleHistory.get(x).firstName + "$";
      outString += user.shuttleHistory.get(x).lastName + "$";
      outString += user.shuttleHistory.get(x).phoneNumber + "$";
      outString += user.shuttleHistory.get(x).tripType + "$";
      outString += user.shuttleHistory.get(x).departLocation + "$";
      outString += user.shuttleHistory.get(x).departDate + "$";
      outString += user.shuttleHistory.get(x).departTime + "$";
      outString += user.shuttleHistory.get(x).arriveLocation + "$";
      outString += user.shuttleHistory.get(x).arriveDate + "$";
      outString += user.shuttleHistory.get(x).arriveTime + "$";
      outString += user.shuttleHistory.get(x).numAdults + "$";
      outString += user.shuttleHistory.get(x).numChildren + "$";
      outString += user.shuttleHistory.get(x).numInfants + "$";
    }
    
    return outString;
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
