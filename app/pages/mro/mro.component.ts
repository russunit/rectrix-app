import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { mro } from './mro';
import { MroService } from './mro-service';

@Component({
    selector: 'mro',
    template: `
    <StackLayout height={{height-140}}>
        <Label text="MRO Locations" class="header"></Label>
	    <ListView [items]="mroList" (itemTap)="onItemTap($event)" class="list">
            <template let-item="item">
              <label [text]="item.name" class="lines"></label>
            </template>
        </ListView>
    </StackLayout>
  `,
    styleUrls: ["pages/mro/mro-common.css"],
    providers: [MroService]
})
export class MroComponent implements OnInit {
    mroList: mro[];
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;

    constructor(private router: Router, private location: Location, private mroService: MroService)
    { }

    ngOnInit() {
        this.mroList = this.mroService.getMroList();
    }

    public onItemTap(args) {
        this.router.navigate(["/mro-detail", args.index]);
    }
}
