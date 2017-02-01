import { Injectable }    from '@angular/core';
import { fbo } from './fbo';

@Injectable()
export class FboService {

    FBOS: fbo[] = [
        {
            id: 0,
            name: 'Bedford, MA',
            description: '\t\tThe Rectrix Aerodrome Center in Bedford/Boston is our flagship FBO, located just 15 miles northwest of Boston at Hanscom Field. Rectrix customers can relax in the FBO lounge, which includes multiple widescreen televisions and a roaring fireplace, or conduct meetings in one of our executive conference rooms. Our crew lounge has flight planning and weather briefing areas, along with a "snooze room" for rest between flights. Our Bedford FBO has a complimentary coffee bar, refreshments, snack center, and is available 24/7. Rectrix is proud to be the CAA Preferred FBO at Hanscom Field.',
            subdescription: 'L.G.Hanscom Field (KBED)',
            amenities: 
				'- 60,000 square feet of heated hanger space\n'+
                '- 20,000 square feet of office and FBO space\n'+
                '- Executive meeting and conference rooms\n'+
                '- Crew lounge and snooze room\n'+
                '- Flight planning room and weather briefing area\n'+
                '- 24 hour security\n'+
                '- Complimentary Wifi throughout the FBO\n'+
                '- Complimentary coffee bar and snacks',
            services:
                '- Domestic and international handling\n'+
                '- NATA trained and pre-screened line service personnel\n'+
                '- Discounted Jet Fuel\n'+
                '- CAA preferred\n'+
                '- Aircraft Maintenance\n'+
                '- Deicing\n'+
                '- Charter Services\n'+
                '- Overnight, heated hangar service\n'+
                '- Contract Fuel available\n'+
                '- Ground power units and service equipment available\n'+
                '- Crew Cars\n'+
                '- Gourmet in-flight catering service\n'+
                '- Onsite Rental Car Services\n'+
                '- Concierge Services\n'+
                '- Tesla charging station on premises',
            contact: 
				'777 Virginia Road\n'+
				'Concord, MA 01742\n'+
				'Email: bedmail@rectrix.aero\n'+
				'Phone: 978.341.8400\n'+
				'Fax: 978.341.8410\n'+
				'ASRI: 131.40'
        },
        {
            id: 1,
            name: 'Hyannis, MA',
            description: '\t\tRectrix Aerodrome Centers opened its first FBO facility at Barnstable Municipal Airport (KHYA) in September 2005. The Hyannis facility features more than 22,000 square feet of heated hangar space designed to accommodate any type of aircraft. Encompassing 45,000 square feet, the combination of ample hangar space, well-appointed conference facilities, lavish passenger lounges, and comfortable crew quarters makes our Hyannis facility a favorite among international and domestic travelers. Serving the resort area of Cape Cod, its location offers ideal proximity to the metropolitan areas of the Northeastern United States.',
            subdescription: 'Cape Cod',
            amenities: 
                '- 22,000 square feet of heated hangar space\n'+
                '- Ability to service all aircraft needs, both transient and based\n'+
                '- Executive meeting and conference rooms\n'+
                '- Passenger and crew lounge\n'+
                '- Flight planning room\n'+
                '- Crew snooze room\n'+
                '- Complimentary coffee bar and snacks\n'+
                '- Complimentary Wifi throughout the FBO',
            services: 
                '- NATA trained and pre-screened line service personnel\n'+
                '- Ground power units and service equipment\n'+
                '- Lav Services\n'+
                '- Potable Water\n'+
                '- In-Flight Catering\n'+
                '- Secure Aircraft Apron\n'+
                '- Jet-A (Agreement Only)\n'+
                '- Overnight hangar service\n'+
                '- Crew cars\n'+
                '- Rental Cars on premises',
            contact: 
				'730 Barnstable Road\n'+ 
				'Hyannis, MA 02601\n'+ 
				'Email: hyamail@rectrix.aero\n'+ 
				'Phone: 508.771.7520\n'+ 
				'Fax: 508.771.7522\n'+ 
				'ASRI: 128.825'
        },
        {
            id: 2,
            name: 'Sarasota, FL',
            description: '\t\tThe Rectrix Aerodrome Centers opened its luxurious Sarasota facility in December 2008. With a stunning design and luxurious, world-class accommodations, our Sarasota facility is situated on nearly 20 acres of airport property developed to accommodate more than 180,000 square feet of aircraft hangars and passenger service facilities. The Rectrix private terminal was created to exceed the expectations of the discerning air traveler. Located between Tampa and Naples, Sarasota is known the world over as a premier southwest Florida destination.',
            subdescription: 'Florida’s Gulf Coast',
            amenities: 
                '- 180,000 square feet of aircraft hangars and passenger facilities\n'+
                '- Private passenger terminal\n'+
                '- Elegant passenger and crew lounge\n'+
                '- Executive meeting and conference rooms\n'+
                '- Crew lounge and snooze room\n'+
                '- Flight planning room and weather briefing area\n'+
                '- Complimentary Wifi throughout the FBO',
            services: 
                '- Domestic and international handling\n'+
                '- NATA trained and pre-screened line service personnel\n'+
                '- Discounted jet fuel\n'+
                '- CAA preferred\n'+
                '- Aircraft Maintenance\n'+
                '- Overnight hangar service\n'+
                '- Contract fuel available\n'+
                '- Ground power units and service equipment available\n'+
                '- Crew cars\n'+
                '- Gourmet in-flight catering service\n'+
                '- Rental Cars on premises\n'+
                '- Tesla charging station on premises',
            contact: 
				'8250 15th Street East\n'+ 
				'Sarasota, FL 34243\n'+ 
				'Email: srqmail@rectrix.aero\n'+ 
				'Phone: 941.358.9600\n'+
				'Fax: 941.358.9611\n'+ 
				'ASRI: 130.225'
        },
        {
            id: 3,
            name: 'Westfield, MA',
            description: '\t\tAs the region\'s premier FBO and service provider, Rectrix Aerodrome Center at KBAF is well equipped to competently and properly handle all aspects of your flight. Corporate aircraft operators cite our facility as the finest FBO in the region with the amenities and operations rivaling many of the larger chain FBO\'s but with a refreshingly affordable price.',
            subdescription: 'Western Massachusetts',
            amenities: 
                '- 56,000 square feet of hangar space\n'+
                '- NATA trained and pre-screened line service personnel\n'+
                '- Closed circuit video surveillance system\n'+
                '- Crew lounge and quiet rooms\n'+
                '- Executive conference center and business suites\n'+
                '- Outdoor observation deck\n'+
                '- Complimentary Wifi throughout the FBO',
            services: 
                '- Jet-A and Avgas fuel\n'+
                '- Deicing available\n'+
                '- Aircraft Maintenance\n'+
                '- Concierge services for hotel and ground transportation\n'+
                '- Gourmet in-flight catering service\n'+
                '- Aircraft exterior and interior cleaning\n'+
                '- Ground power units and service equipment available\n'+
                '- Overnight hangar service\n'+
                '- Restaurant',
            contact: 
				'110 Airport Road\n'+
				'Westfield, MA 01085\n'+ 
				'Email: bafmail@rectrix.aero\n'+
				'Phone: 413.485.0078\n'+ 
				'Fax: 413.485.0054\n'+
				'ASRI: 122.95'
        },
        {
            id: 4,
            name: 'Worcester, MA',
            description: '\t\tThe Rectrix Aerodrome Center at Worcester Regional Airport opened its brand new facility in November 2015. With 20,000 square feet of new heated hangar space, this facility is outfitted with the latest features including concierge services, a flight planning room, and pilots\' lounge. Our Worcester FBO mimics the sleek and spacious designs of our other locations.',
            subdescription: 'Boston Metro',
            amenities:
                '- Over 40,000 square feet of hangar space\n'+
                '- Private passenger terminal\n'+
                '- Elegant passenger and crew lounge\n'+
                '- Executive meeting and conference rooms\n'+
                '- Crew lounge and snooze room\n'+
                '- Flight planning room and weather briefing area\n'+
                '- Complimentary Wifi throughout the FBO',
            services: 
                '- Jet-A and Avgas fuel\n'+
                '- Deicing available\n'+
                '- Aircraft Maintenance\n'+
                '- Concierge services for hotel and ground transportation\n'+
                '- Gourmet in-flight catering service\n'+
                '- Aircraft exterior and interior cleaning\n'+
                '- Ground power units and service equipment available\n'+
                '- Overnight hangar service\n'+
                '- Rental Cars on premises',
            contact: 
				'375 Airport Drive #12\n'+ 
				'Worcester, MA 01602\n'+ 
				'Email: orhmail@rectrix.aero\n'+ 
				'Phone: 508.755.5870\n'+ 
				'Fax: 508.753.5541\n'+ 
				'ASRI: 122.95'
        },
    ];

    getFboList(): fbo[] {
        return this.FBOS;
    }

	getFbo(id: number): fbo {
        return this.FBOS.find(fbo => fbo.id === id);    
    }

    getFboName(id: number): string {
        return this.FBOS.find(fbo => fbo.id === id).name; 
    }

    getAmenities(id:number): string {
        return this.FBOS.find(fbo => fbo.id === id).amenities; 
    }

    getServices(id: number): string {
        return this.FBOS.find(fbo => fbo.id === id).services;
    }

    getContactInfo(id: number): string {
        return this.FBOS.find(fbo => fbo.id === id).contact;
    }
} 
