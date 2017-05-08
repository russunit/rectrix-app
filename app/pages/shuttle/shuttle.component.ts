import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";
import { DatePicker } from "ui/date-picker";

import { ShuttleRequest } from '../../shared/shuttle-request/shuttle-request';
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: "shuttle",
  template: `
 <StackLayout>
 <ScrollView>
 <StackLayout class="layout">
	<label text='Shuttle Request' class="title"></label>

    <StackLayout class="form">
        <label text='Personal Information' class="detail-label"></label>

	    <TextField  autocapitalizationType="none" [(ngModel)]="shuttleRequest.firstName" hint="John"></TextField>
        <label text='First Name' class='field-label'></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.lastName" hint="Smith"></TextField>
        <label text='Last Name' class='field-label'></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.phoneNumber" hint="123.456.7890"></TextField>
        <label text='Phone Number' class='field-label'></label>
	
        <label height="1" class="divider"></label>
        <label text='Trip Details' class="detail-label"></label>

	    <DropDown #dd [items]="tripTypes" [selectedIndex]="selectedIndex" 
			(selectedIndexChanged)="onchange($event)" row="0" colSpan="2" class="dropdown"></DropDown>
		<label text='Trip Type' class='field-label'></label>
	
	    <DropDown #dd [items]="destinations" [selectedIndex]="selectedIndex1" 
			(selectedIndexChanged)="onchange1($event)" row="0" colSpan="2" class="dropdown"></DropDown>
        <label text='Depart Location' class='field-label'></label>
	
	    <DatePicker #datePicker height="100" (loaded)="configure(datePicker, 1)" class="date"></DatePicker>
        <label text='Depart Date' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departTime" hint="12:00 PM"></TextField>
        <label text='Depart Time' class='field-label'></label>
	
		<DropDown #dd [items]="destinations" [selectedIndex]="selectedIndex2" 
			(selectedIndexChanged)="onchange2($event)" row="0" colSpan="2" class="dropdown"></DropDown>
        <label text='Arrive Location' class='field-label'></label>
	
	    <DatePicker #datePicker2 height="100" (loaded)="configure(datePicker2, 2)" class="date"></DatePicker>
        <label text='Arrive Date' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveTime" hint="12:00 PM"></TextField>
        <label text='Arrive Time' class='field-label'></label>
	
	    <TextField keyboardType ="number" autocapitalizationType="none" [(ngModel)]="shuttleRequest.numAdults" hint="#"></TextField>
        <label text='Number of Adults' class='field-label'></label>
	
	    <TextField keyboardType ="number" autocapitalizationType="none" [(ngModel)]="shuttleRequest.numChildren" hint="#"></TextField>
        <label text='Number of Children' class='field-label'></label>
	
	    <TextField keyboardType ="number" autocapitalizationType="none" [(ngModel)]="shuttleRequest.numInfants" hint="#"></TextField>
        <label text='Number of Infants' class='field-label'></label>
     </StackLayout>

	<Button text="Request" width={{buttonW}} height="50" (tap)="sendRequest(this.shuttleRequest)" horizontalAlignment='center'></Button>


 </StackLayout>
 </ScrollView>
 </StackLayout>
	`,
  providers: [UserService],
  styleUrls: ["pages/shuttle/shuttle.component.css"]
  //templateUrl: 'shuttle-component.html'
})

export class ShuttleComponent implements OnInit
{
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonW: number = this.width * .6;

	user: User;
    loggedIn: boolean;

    subscription1:Subscription;
    subscription2:Subscription;

	shuttleRequest: ShuttleRequest;
	
	public selectedIndex = 0;
	public selectedIndex1 = 0;
	public selectedIndex2 = 0;

    public tripTypes: Array<string>;
	public destinations: Array<string>;
	
	private date;
	private departDate;
	private arriveDate;
	
	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService)
	{
		this.shuttleRequest = new ShuttleRequest();
		
		this.tripTypes = ["Round-Trip", "One-Way"];
		this.destinations = ["Hyannis", "Nantucket"];
		this.shuttleRequest.tripType = "Round-Trip";
		this.shuttleRequest.departLocation = "Hyannis";
		this.shuttleRequest.arriveLocation = "Nantucket";
		this.date =  new Date();
		this.departDate = new Date();
		this.arriveDate = new Date();
	}
	public onchange1(args)
{
          if(args.nextIndex == 0)
          {
              this.shuttleRequest.departLocation = "Hyannis";
          }
          if(args.Index == 1)
          {
              this.shuttleRequest.departLocation = "Nantucket";
          }
}
	public onchange2(args)
{
          if(args.nextIndex == 0)
          {
              this.shuttleRequest.arriveLocation = "Hyannis";
          }
          if(args.Index == 1)
          {
              this.shuttleRequest.arriveLocation = "Nantucket";
          }
}
	public onchange(args) 
	{
		if(args.newIndex == 0)
		{
			this.shuttleRequest.tripType = "Round-Trip";
		}
		else if(args.newIndex == 1)
		{
			this.shuttleRequest.tripType = "One-Way";
		}
    }
	
	configure(datePicker: DatePicker, picker: number) 
	{
        datePicker.year = this.date.getFullYear();
        datePicker.month = this.date.getMonth()+1;
        datePicker.day = this.date.getDate();
        datePicker.minDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
        datePicker.maxDate = new Date(2045, 4, 12);
		
		if(picker == 1)
		{
			this.departDate = this.date;
			this.shuttleRequest.departDate = this.departDate;
		}
		else if(picker == 2)
		{
			this.arriveDate = this.date;
			this.shuttleRequest.departDate = this.departDate;
		}
    }

	ngOnInit()
	{
		//gets the current user from service
        this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
        this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.user = currentUser );

        if(this.loggedIn)
        {
        	this.shuttleRequest.firstName = this.user.firstName;
        	this.shuttleRequest.lastName = this.user.lastName;
        }
	}

	profileReload()
	{
		this.userService.reload(this.user)
		.subscribe(response => 
        {
          var responseString = response.json().toString();

          console.log(responseString);
		
		  if(responseString.startsWith("OK"))
          //success
          {
            let loggingInUser = this.userService.stringToUserProfile(responseString);
            this.currentUserService.changeUser(loggingInUser);
            this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.user = currentUser );
          }
          else
          //the parse or server returned garbage
          {alert("INTERNAL ERROR");}

        }//end subscribe
        );//end subscribe
	}
	
	sendRequest(request:ShuttleRequest)
	{

		if (!this.loggedIn)
		{
			alert("Please log in or sign up to place a shuttle request.");
			this.router.navigate(["/dashboard"]);
		}
		else if (this.shuttleRequest.departLocation == this.shuttleRequest.arriveLocation)
		{
			alert("Please specify separate depart/arrive locations.");
		}
		else if (+this.shuttleRequest.departDate > +this.shuttleRequest.arriveDate)
		{
			alert("Please specify an arrive date on or after the depart date.");
		}
		else if( this.shuttleRequest.arriveTime == null
			//||this.shuttleRequest.arriveLocation == null
			//||this.shuttleRequest.arriveDate == null
			//||this.shuttleRequest.departDate == null
			//||this.shuttleRequest.departLocation == null
			||this.shuttleRequest.departTime == null
			||this.shuttleRequest.firstName == null
			||this.shuttleRequest.lastName == null
			||this.shuttleRequest.phoneNumber == null
			||this.shuttleRequest.numAdults == null
			||this.shuttleRequest.numChildren == null
			||this.shuttleRequest.numInfants == null
			//||this.shuttleRequest.tripType == null
			)
		{
			alert("Please fill out all fields.");
		}
		else
		{
		this.profileReload();
		this.user.shuttleHistory.push(this.shuttleRequest);

			this.userService.update(this.user)
            .subscribe(response => 
            {
              	var responseString = response.json().toString();
				if(responseString == "notloggedin")
				{
					alert("this profile is not logged into the server...\nPlease log in.");
					this.currentUserService.changeUser(null);
	      			this.currentUserService.toggleLoggedIn(false);
	      			this.router.navigate(["/dashboard"]);
				}
				else if (responseString == "OK")
				//success
				{
					this.currentUserService.changeUser(this.user);
					alert("Shuttle Requested.");
					this.router.navigate(["/dashboard"]);

				}
				else
				//the parse or server returned garbage
	            {
	              alert("INTERNAL ERROR");
	            }
	        }
	        );//end subscribe


		}

	}
}

//imports