import { Component, OnInit } from '@angular/core';
import { fbo } from './fbo';
import { Router } from "@angular/router";
import { FboService } from './fbo-service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import repeaterModule = require("ui/repeater");
import wrapLayoutModule = require("ui/layouts/wrap-layout");

@Component({
    selector: "fbo-detail",
    template: `
            <ScrollView>
              <StackLayout>
                <label text={{fbo.name}} class="name"></label>
                <label textwrap="true" text={{fbo.description}} class="desc"></label>
                
                <label text="Amenities" class="amenities"></label>
                <label textwrap="true" text={{fbo.amenities}} class="amenitieslist"></label>
                
                <label text="Services" class="services"></label>
                <label textwrap="true" text={{fbo.services}} class="serviceslist"></label>
                <label></label>

                <StackLayout class="contactbox">
                    <label text="Contact" class="contact"></label>
                    <label textwrap="true" text={{fbo.contact}} class="contactlist"></label>
                    <label></label>
                </StackLayout>

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

    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;

    

  constructor(
    private fboService: FboService,
    private route: ActivatedRoute,
    private location: Location
  ) 
   {
}

  ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
          this.id = +params['id']; 
          this.fbo = this.fboService.getFbo(this.id);
      });

  }
}
 