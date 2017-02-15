import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { fbo } from './fbo';
import { FboService } from './fbo-service';

@Component({
  selector: 'fbo',
  template: `
        <Label text="FBO Locations" class="header"></Label>
	    <ListView [items]="fboList" (itemTap)="onItemTap($event)" class="list">
            <template let-item="item">
			  <StackLayout>
				<label [text]="item.name" class="lines"></label>
			  </StackLayout>
            </template>
		</ListView>
  `,
  styleUrls: ["pages/fbo/fbo-common.css"],
  providers: [FboService]
})
export class FboComponent implements OnInit {
    fboList: fbo[];
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
	
    constructor(private router: Router, private location: Location, private fboService: FboService)
	{}

	ngOnInit() 
    {
        this.fboList = this.fboService.getFboList();
	}
  
	public onItemTap(args) 
	{
        this.router.navigate(["/fbo-detail", args.index]);
	}
}
