//imports
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";
import { DatePicker } from "ui/date-picker";

import { CharterRequest } from '../../shared/charter-request/charter-request';
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Subscription } from 'rxjs/Subscription';

@Component
({

selector: "charter",
template: `
 
 <ScrollView orientation="vertical">
 <StackLayout class="layout">
	<label text='Charter Request' class="title"></label>

    <StackLayout class="form">
        <label text='Personal Information' class="detail-label"></label>

	    <TextField  autocapitalizationType="none" [(ngModel)]="charterRequest.firstName" hint="John"></TextField>
        <label text='First Name' class='field-label'></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.lastName" hint="Smith"></TextField>
        <label text='Last Name' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.phoneNumber" hint="Ex. 123.456.7890"></TextField>
        <label text='Phone Number' class='field-label'></label>

        <label height="1" class="divider"></label>
        <label text='Trip Details' class="detail-label"></label>

	    <DropDown #dd [items]="tripTypes" [selectedIndex]="selectedIndex" 
		(selectedIndexChanged)="onchange($event)" row="0" colSpan="2" class="dropdown"></DropDown>
        <label text='Trip Type' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.departLocation" hint="New York, NY"></TextField>
		<label text='Depart Location' class='field-label'></label>
	    
	    <DatePicker #datePicker height="100" (loaded)="configure(datePicker, 1)" class="date"></DatePicker>
        <label text='Depart Date' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.departTime" hint="12:00 PM"></TextField>
        <label text='Depart Time' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.arriveLocation" hint="Los Angeles, CA"></TextField>
        <label text='Arrive Location' class='field-label'></label>
	    
	    <DatePicker #datePicker2 height="100" (loaded)="configure(datePicker2, 2)" class="date"></DatePicker>
		<label text='Arrive Date' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.arriveTime" hint="12:00 PM"></TextField>
        <label text='Arrive Time' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.requirements" hint="(optional) Any special requirements"></TextField>
        <label text='Requirements' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.preferredCraft" hint="(optional) Challenger 3000/Lear 45"></TextField>
        <label text='Preferred Craft' class='field-label'></label>
    </StackLayout>	

	<Button text="Request Charter" width={{buttonW}} height="50" (tap)="sendRequest(this.charterRequest)" horizontalAlignment='center'></Button>

 </StackLayout>
 </ScrollView>
	`,
providers: [UserService],
styleUrls: ["pages/charter/charter.component.css"]
//moduleID
//selector: "charter",
//templateUrl: "charter-component.html",
//styleUrls: "charter-component.css",
//provider

})

export class CharterComponent implements OnInit
{
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonW: number = this.width * .6;
    public selectedIndex = 0;
	user: User;
    loggedIn: boolean;
	public tripTypes: Array<string>;
    subscription1:Subscription;
    subscription2:Subscription;

	charterRequest: CharterRequest;
	
	private date;
	private departDate;
	private arriveDate;

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService)
	{
		this.charterRequest = new CharterRequest();
		this.tripTypes = ["Round-Trip", "One-Way"];
		this.charterRequest.tripType = "Round-Trip";
		this.date =  new Date();
		this.departDate = new Date();
		this.arriveDate = new Date();
	}

	ngOnInit()
	{
		//gets the current user from service
        this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
        this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.user = currentUser );

        if(this.loggedIn)
        {
        	this.charterRequest.firstName = this.user.firstName;
        	this.charterRequest.lastName = this.user.lastName;
        }
	}
	public onchange(args)
	{
          if(args.newIndex == 0)
		{
			this.charterRequest.tripType = "Round-Trip";
		}
		else if(args.newIndex == 1)
		{
			this.charterRequest.tripType = "One-Way";
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
			this.charterRequest.departDate = this.departDate;
		}
		else if(picker == 2)
		{
			this.arriveDate = this.date;
		}
    }


	sendRequest(request: CharterRequest)
	{
		if( this.charterRequest.arriveDate == null
			||this.charterRequest.arriveLocation == null
			||this.charterRequest.arriveTime == null
			||this.charterRequest.departDate == null
			||this.charterRequest.departLocation == null
			||this.charterRequest.departTime == null
			||this.charterRequest.firstName == null
			||this.charterRequest.lastName == null
			||this.charterRequest.phoneNumber == null
			||this.charterRequest.tripType == null)
		{
			alert("Please fill out all fields.");
		}
		else if ((this.loggedIn) &&(this.charterRequest.departLocation != this.charterRequest.arriveLocation)&&(+this.charterRequest.departDate <= +this.charterRequest.arriveDate  ))
		{
		this.profileReload();

		this.user.charterHistory.push(this.charterRequest);
		//this.departDate = this.datePicker.day;

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
					alert("Charter Requested:\nName: "+this.charterRequest.firstName+" "+this.charterRequest.lastName +
						"\nPhone: "+this.charterRequest.phoneNumber +
						"\nTrip Type: "+this.charterRequest.tripType +
						"\nFrom: "+this.charterRequest.departLocation +
						"\n at: "+this.charterRequest.departTime + ", " + this.departDate +
						"\nTo: "+this.charterRequest.arriveLocation +
						"\n at: "+this.charterRequest.arriveTime + ", " + this.arriveDate +
						"\n\nRequirements: " + this.charterRequest.requirements + 
						"\nCraft Preference: " + this.charterRequest.preferredCraft);
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
		else
		{
			alert("Please log in or sign up to place a charter request.");
			this.router.navigate(["/dashboard"]);
		}

	}

}