import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { fbo } from './fbo';
import { FboService } from './fbo-service';

@Component({
  selector: 'my-app',
  template: `
	<ListView [items]="fboList" (itemTap)="onItemTap($event)" class="small-spacing">
    <template let-item="item">
      <label [text]="item.name" class="medium-spacing"></label>
    </template>
  </ListView>
  `,
  styleUrls: ["pages/fbo/fbo-common.css"],
  providers: [FboService]
})
export class FboComponent implements OnInit {
    title = 'Fbos';
    fboList: fbo[];
	
    constructor(private router: Router, private location: Location, private fboService: FboService)
	{}

	ngOnInit() 
    {
        var i: number;
        this.fboList = this.fboService.getFboList();

        /*for (var _i = 0; _i < this.fboList.length; _i++)
        {
            var item = this.fboList[_i];
        }*/
	}
  
	public onItemTap(args) 
	{
        this.router.navigate(["/fbo-detail", args.index]);
	}
}
