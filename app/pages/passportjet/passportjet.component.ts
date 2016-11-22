import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: "passportjet",
  template: `
  <ScrollView>
   <StackLayout>
  	<label text="Passport Jet Membership" class="title1"></label>
  	<label text={{titlePara}} textwrap="true" class="para1"></label>

	<Button text="Join Passport Jet" (tap)="goJoin()" class="join"></Button>

  	<label text="Membership" class="title2"></label>
  	<label text={{membershipPara}} textwrap="true" class="para1"></label>

  	<label text="Benefits" class="title2"></label>
  	<label text={{benefitsPara}} textwrap="true" class="para1"></label>

  	<label text="Pricing Matrix" class="title2"></label>
  	<GridLayout rows="auto, auto, auto, auto, auto" columns="120, 120, 120" horizontalAlignment="center" class="matrixgrid">
  		<label row="0" col="0" text="Membership Type" class="matrix1" textwrap="true"></label>
  		<label row="0" col="1" text="Lear 45 XR Or Similar" class="matrix1" textwrap="true"></label>
		<label row="0" col="2" text="Challenger C300 Or Similar" class="matrix1" textwrap="true"></label>

		<label row="1" col="0" text="Individual or Corporate" textwrap="true"></label>
		<label row="1" col="1" text="Hourly Rate"></label>
		<label row="1" col="2" text="Hourly Rate"></label>

		<label row="2" col="0" text="$50K"></label>
		<label row="2" col="1" text="$4,500/hr"></label>
		<label row="2" col="2" text="$6,700/hr"></label>

		<label row="3" col="0" text="$100K"></label>
		<label row="3" col="1" text="$4,400/hr"></label>
		<label row="3" col="2" text="$6,600/hr"></label>

		<label row="4" col="0" text="$150K"></label>
		<label row="4" col="1" text="$4,300/hr"></label>
		<label row="4" col="2" text="$6,500/hr"></label>

  	</GridLayout>
  	<label text="Annual dues are $2,500."></label>

  	<Button text="Join Passport Jet" (tap)="goJoin()" class="join"></Button>





   </StackLayout>
  </ScrollView>
  	`,
  	styleUrls: ['pages/passportjet/passportjet.css']
})
export class PassportJetComponent {
	
	titlePara = "The Passport Jet Membership by Rectrix offers you the best features of a jet card and traditional charter in one simple package. Members are assured of guaranteed pricing and availability for the aircraft they want - when and where they need it. A Rectrix Passport Member will have access to any jet, anytime, anywhere.";

	membershipPara = "The Passport Membership does not require a significant up-front financial or long-term commitment like a traditional jet card program. With Rectrix, you become a member of our club. Members purchase an account credit that can be used towards flight hours on a Rectrix aircraft or any other aircraft that fits your needs. A member is charged the hourly rate of the flights against your account balance. An individual or corporate membership with Rectrix means privacy, convenience, comfort and security.";

	benefitsPara = "Passport members have access to the world’s fleet of premium, safety-checked aircraft, including use of Rectrix owned aircraft and the ability to choose any other aircraft that fits your needs. We know that our clients are busy and that plans may materialize at the last minute, so we have guaranteed availability with 4 hours notice and also offer a flexible cancellation policy. We provide complimentary use of our private air terminals and conference rooms to make your travel even easier. Save money and time with Rectrix – there are no surcharges for fuel, ever, and we provide complimentary concierge services.";

	constructor(private router: Router, private location: Location)
	{}

	goJoin()
	{ this.router.navigate(["/passportjet-join"]); }
}