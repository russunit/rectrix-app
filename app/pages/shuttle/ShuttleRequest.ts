<<<<<<< HEAD:app/pages/shuttle/ShuttleRequest.ts
<<<<<<< HEAD:app/ShuttleRequest.ts
//import craft
=======
=======
>>>>>>> origin/master:app/pages/shuttle/ShuttleRequest.ts
import { Component } from "@angular/core";

@Component({
  selector: "shuttle",
  template: "<Label text='Shuttle Comonent'></Label>"
})
export class ShuttleComponent {}

/import craft
>>>>>>> origin/master:app/pages/shuttle/ShuttleRequest.ts
export class ShuttleRequest
{
   firstName:String;
lastName:String;
phoneNumber:String;
tripType:String;
departLocation:String;
departDate: String;
departTime: String;
arriveLocation: String;
arriveDate: String;
arriveTime: String;
requirements: String;
prefferedCraft: Craft;
numAdults: int;
numChild: int;
numInfants: int;

}