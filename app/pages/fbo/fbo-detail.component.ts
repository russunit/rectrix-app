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
        <StackLayout height={{height-140}}>
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
                <Repeater [items]="services" class="serviceslist">
                    <template let-item="item">
                      <label textwrap = "true" [text]="item" class="medium-spacing"></label>
                    </template>
                </Repeater>
                <label></label>

                <StackLayout class="contactbox">
                    <label text="Contact" class="contact"></label>
                    <Repeater [items]="contact" class="contactlist">
                        <template let-item="item">
                          <label textwrap = "true" [text]="item" class="medium-spacing"></label>
                        </template>
                    </Repeater>
                    <label></label>
                </StackLayout>

              </StackLayout>
            </ScrollView>
        </StackLayout>
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
    contact: string[];

    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;

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
          this.amenities = this.fboService.getAmenities(this.id);
          this.services = this.fboService.getServices(this.id);
          this.contact = this.fboService.getContactInfo(this.id);
      });


  }
}
 