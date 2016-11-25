import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { mro } from './mro';
import { MroService } from './mro-service';

@Component({
    selector: 'mro',
    template: `
    <Label text="MROs" class="header"></Label>
	<ListView [items]="mroList" (itemTap)="onItemTap($event)" class="small-spacing">
    <template let-item="item">
      <label [text]="item.name" class="medium-spacing"></label>
    </template>
  </ListView>
  `,
    styleUrls: ["pages/mro/mro-common.css"],
    providers: [MroService]
})
export class MroComponent implements OnInit {
    mroList: mro[];

    constructor(private router: Router, private location: Location, private mroService: MroService)
    { }

    ngOnInit() {
        this.mroList = this.mroService.getMroList();
    }

    public onItemTap(args) {
        this.router.navigate(["/mro-detail", args.index]);
    }
}
