import { Component, OnInit } from '@angular/core';
import { mro } from './mro';
import { Router } from "@angular/router";
import { MroService } from './mro-service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import repeaterModule = require("ui/repeater");

@Component({
    selector: "mro-detail",
    template: `
            <ScrollView>
              <StackLayout>
                <label text={{mro.name}} class="name"></label>
                <label textwrap="true" text={{mro.description}} class="desc"></label>
                
                <label text="Services" class="services"></label>
                <label textwrap="true" text={{mro.servicesDescription}} class="servicesdesc"></label>
                
                <Repeater [items]="services" class="serviceslist">
                    <template let-item="item">
                      <label textwrap = "true" [text]="item" class="medium-spacing"></label>
                    </template>
                </Repeater>

                <label text="Contact" class="contact"></label>
                <Repeater [items]="contact">
                    <template let-item="item">
                      <label textwrap = "true" [text]="item"></label>
                    </template>
                </Repeater>
                <label></label>
                </StackLayout>
            </ScrollView>
            `,
    styleUrls: ['pages/mro/mro-detail.css'],
    providers: [MroService]
})
export class MroDetailComponent implements OnInit {
    mro: mro;
    id: number;
    private sub: any;
    services: string[];
    contact: string[];

    constructor(
        private mroService: MroService,
        private route: ActivatedRoute,
        private location: Location
    )
    { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.mro = this.mroService.getMro(this.id);
            this.services = this.mro.services;
            this.contact = this.mroService.getContactInfo(this.id);
        });


    }
}
