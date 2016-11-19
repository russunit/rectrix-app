import { Component, OnInit } from '@angular/core';
import { fbo } from './fbo';
import { Router } from "@angular/router";
import { FboService } from './fbo-service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import repeaterModule = require("ui/repeater");

@Component({
    selector: "fbo-detail",
    template: `
            <ScrollView>
              <StackLayout>
                <label text={{fbo.name}} class="name"></label>
                <label textwrap="true" text={{fbo.description}} class="desc"></label>
                <label text="Amenities" class="amenities"></label>

                <Repeater [items]="amenities" class="amenitieslist">
                    <template let-item="item">
                      <label textwrap = "true" [text]="item" class="medium-spacing"></label>
                    </template>
                </Repeater>

                <label text="Services" class="services"></label>
                
                <Repeater [items]="services" class="amenitieslist">
                    <template let-item="item">
                      <label textwrap = "true" [text]="item" class="medium-spacing"></label>
                    </template>
                </Repeater>

                <label text="Contact" class="contact"></label>
                <label text="{{fbo.street}}"></label>
                <label text="{{fbo.city}}"></label>
                <label text="Email: {{fbo.email}}"></label>
                <label text="Phone: {{fbo.phone}}"></label>
                <label text="Fax: {{fbo.fax}}"></label>
                <label text="ASRI: {{fbo.asri}}"></label>
                <label></label>
                </StackLayout>
            </ScrollView>
            `,
    styleUrls: ['pages/fbo/fbo-detail.css'],
    providers: [FboService]
})
export class FboDetailComponent implements OnInit{
	fbo: fbo;
    id: number;
    private sub: any;
    amenities: string[];
    services: string[];

  constructor(
    private fboService: FboService,
    private route: ActivatedRoute,
    private location: Location
  ) 
   {}

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.id = +params['id']; 
          this.fbo = this.fboService.getFbo(this.id);
          this.amenities = this.fbo.amenities;
          this.services = this.fbo.services;
      });


  }
}
 