//imports
import { Component } from "@angular/core";
import { CharterRequest } from './charter-request';

@Component
({

selector: "charter",
template: "<Label text='Charter Component'></Label>",

//moduleID
//selector: "charter",
//templateUrl: "charter-component.html",
//styleUrls: "charter-component.css",
//provider
})

export class CharterComponent
{

sendRequest(request: CharterRequest)
{}

}