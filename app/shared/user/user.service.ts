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
export class UserService 
{

  charterHistorySize: number;
  shuttleHistorySize: number;
  outString: string;
  inString: string;
  serverResponse: Observable<Response>;
  stringArray: Array<string>;
  newUser: User;
  newCharter: CharterRequest;
  newShuttle: ShuttleRequest;


	constructor(private http: Http) {}

	OLD_GROCERIES_register(user: User) {
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

  OLD_GROCERIES_login(user: User) {
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

  //^OLD^
  /////////////////////////////////////////////////////////////////////

  //NEW
  register(user: User)
  {
    let headers = new Headers();
    headers.append("Content-type", "application/json");

    //console.log(profileString);
	console.log("Hello3");
    this.http.post("http://192.168.2.12:7777", 
    "~signup#"+this.userProfileToString(user)+"\n")
    .subscribe(response => this.inString = response.json().toString());
     	console.log("Hello4");

    // this.http.get("http://192.168.2.13:7777").subscribe(
    //response => this.inString = response.json());
    //Right now, inString is printing as undefined
    return this.parseResponse(this.inString);
  }

  //NEW
  //TESTING... trying to see if it can read the java server's response as a string
  login(user: User) 
  {
    let headers = new Headers();
    headers.append("Content-type", "application/json");

    //this actually works now....... but on the second try. 
    //the server receives the message on the first try...
    //but the app doesn't seem to get the response until the second try,
    //and then it seems to get them one response too late...
    //like, if I enter fake info, the app says "inernal error",
    //then i enter good info, the app says "account not found" (but the server says i've logged in),
    //then i enter the good login data again, and it says "logged in as username" (but the server says i'm already logged in)
    //so it looks like we're getting the right response one transaction late.

    //good steps in the right direction, let's try to work on this. could be server-side or client-side
    
    this.http.post("http://192.168.2.12:7777", 
    "~login#"+user.username+"#"+user.password+"\n")
    .subscribe(response => this.inString = response.json().toString());


    //.subscribe(response => this.inString = response.json());

    /*
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
    */

    //Right now, inString is printing as undefined
    return this.parseResponse(this.inString);

  }

  //NEW, not used yet
  logout(user: User)//pass in currentUser
  {
    let headers = new Headers();
    headers.append("Content-type", "application/json");

    //console.log(profileString);

    this.http.post("http://192.168.2.12:7777", 
    "~logout#"+user.username+"\n")
    .subscribe(response => this.inString = response.json().toString());

    //Right now, inString is undefined
    return this.parseResponse(this.inString);


  }

  //NEW, not used yet
  update(user: User)//pass in currentUser
  {
    let headers = new Headers();
    headers.append("Content-type", "application/json");

    //console.log(profileString);

    this.http.post("http://192.168.2.12:7777",
      "~update#"+this.userProfileToString(user)+"\n")
    .subscribe(response => this.inString = response.json().toString());

    //Right now, inString is undefined
    return this.parseResponse(this.inString);
    //

    //this is temporary, should be replaced by some check whether 
    //the server request was successful based on the response string,
    //then if successful return true
    //return this.serverResponse.map(response => response.json())
    //.do(data => {
    //  Config.token = data.Result.access_token;
    //})
    //.catch(this.handleErrors);
  }






//talks to the java server to add a new user to the DB
TEST_signup(user: User)
{
 
let headers = new Headers();
    headers.append("Content-type", "application/json");
    let profileString = this.userProfileToString(user);

    //console.log(profileString);

    return this.http.post("http://192.168.2.9:7777", 
    "~signup#"+profileString+"\n")
    .map(response => response.json())
    .do(data => {
      Config.token = data.Result.access_token;
    })
    .catch(this.handleErrors);



}


  //converts whole profile to string for our http server
  userProfileToString(user: User) {

if(user.charterHistory == null || user.shuttleHistory == null )
{

        this.charterHistorySize = 0;
    this.shuttleHistorySize = 0;

}
else
{
    this.charterHistorySize = user.charterHistory.length;
    this.shuttleHistorySize = user.shuttleHistory.length;
}
    this.outString = "";

    this.outString += user.firstName + "$";
    this.outString += user.lastName + "$";
    this.outString += user.address + "$";
    this.outString += user.city + "$";
    this.outString += user.country + "$";
    this.outString += user.zip + "$";
    this.outString += user.username + "$";
    this.outString += user.password + "$";
    this.outString += user.email + "$";
    
    this.outString += this.charterHistorySize + "$";
if(this.charterHistorySize > 0){
    for(let charterRequest of user.charterHistory)
    {
      this.outString += charterRequest.firstName + "$";
      this.outString += charterRequest.lastName + "$";
      this.outString += charterRequest.phoneNumber + "$";
      this.outString += charterRequest.tripType + "$";
      this.outString += charterRequest.departLocation + "$";
      this.outString += charterRequest.departDate + "$";
      this.outString += charterRequest.departTime + "$";
      this.outString += charterRequest.arriveLocation + "$";
      this.outString += charterRequest.arriveDate + "$";
      this.outString += charterRequest.arriveTime + "$";
      this.outString += charterRequest.requirements + "$";
      this.outString += charterRequest.preferredCraft + "$";
    }
}
    this.outString += this.shuttleHistorySize + "$";
if(this.shuttleHistorySize > 0) {
    for(let shuttleRequest of user.shuttleHistory)
    {
      this.outString += shuttleRequest.firstName + "$";
      this.outString += shuttleRequest.lastName + "$";
      this.outString += shuttleRequest.phoneNumber + "$";
      this.outString += shuttleRequest.tripType + "$";
      this.outString += shuttleRequest.departLocation + "$";
      this.outString += shuttleRequest.departDate + "$";
      this.outString += shuttleRequest.departTime + "$";
      this.outString += shuttleRequest.arriveLocation + "$";
      this.outString += shuttleRequest.arriveDate + "$";
      this.outString += shuttleRequest.arriveTime + "$";
      this.outString += shuttleRequest.numAdults + "$";
      this.outString += shuttleRequest.numChildren + "$";
      this.outString += shuttleRequest.numInfants + "$";
    }
}

    
    return this.outString;
}

//converts the string from the server to a user object
stringToUserProfile(str: string)
{

  //
  //console.log(str);
  //

  if(str == null)
  {
    return this.nullUser;
  }

  this.newUser = new User();

  this.stringArray = str.split("$");
  var strArray = this.stringArray[Symbol.iterator]();
  let okFiller = strArray.next().value;
  this.newUser.firstName = strArray.next().value;
  this.newUser.lastName = strArray.next().value;
  this.newUser.address = strArray.next().value;
  this.newUser.city = strArray.next().value;
  this.newUser.country = strArray.next().value;
  this.newUser.zip = strArray.next().value;
  this.newUser.username = strArray.next().value;
  this.newUser.password = strArray.next().value;
  this.newUser.email = strArray.next().value;

  for (var x = 0; x < Number(strArray.next().value); x++)
  {
    this.newCharter = new CharterRequest();

    this.newCharter.firstName = strArray.next().value;
    this.newCharter.lastName = strArray.next().value;
    this.newCharter.phoneNumber = strArray.next().value;
    this.newCharter.tripType = strArray.next().value;
    this.newCharter.departLocation = strArray.next().value;
    this.newCharter.departDate = strArray.next().value;
    this.newCharter.departTime = strArray.next().value;
    this.newCharter.arriveLocation = strArray.next().value;
    this.newCharter.arriveDate = strArray.next().value;
    this.newCharter.arriveTime = strArray.next().value;
    this.newCharter.requirements = strArray.next().value;
    this.newCharter.preferredCraft = strArray.next().value;

    this.newUser.charterHistory.push(this.newCharter);
  }

  for(var y = 0; y < Number(strArray.next().value); y++)
  {
    this.newShuttle = new ShuttleRequest();

    this.newShuttle.firstName = strArray.next().value;
    this.newShuttle.lastName = strArray.next().value;
    this.newShuttle.phoneNumber = strArray.next().value;
    this.newShuttle.tripType = strArray.next().value;
    this.newShuttle.departLocation = strArray.next().value;
    this.newShuttle.departDate = strArray.next().value;
    this.newShuttle.departTime = strArray.next().value;
    this.newShuttle.arriveLocation = strArray.next().value;
    this.newShuttle.arriveDate = strArray.next().value;
    this.newShuttle.arriveTime = strArray.next().value;
    this.newShuttle.numAdults = Number(strArray.next().value);
    this.newShuttle.numChildren = Number(strArray.next().value);
    this.newShuttle.numInfants = Number(strArray.next().value);

    this.newUser.shuttleHistory.push(this.newShuttle);
  }

  return this.newUser;

}

//parses server response string from server response
//TODO; just a stub now

parseResponse(str: string)
{
  if(str == null)
    return "undefined";
  return str;
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
