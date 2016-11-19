import { Injectable }    from '@angular/core';
import { fbo } from './fbo';

@Injectable()
export class FboService {

    FBOS: fbo[] = [
        {
            id: 0,
            name: 'Bedford, MA',
            street: '777 Virginia Road',
            city: 'Concord, MA 01742',
            email: 'bedmail@rectrix.aero',
            phone: '978.341.8400',
            fax: '978.341.8410',
            asri: '131.40',
            description: '\t\tThe Rectrix Aerodrome Center in Bedford/Boston is our flagship FBO, located just 15 miles northwest of Boston at Hanscom Field. Rectrix customers can relax in the FBO lounge, which includes multiple widescreen televisions and a roaring fireplace, or conduct meetings in one of our executive conference rooms. Our crew lounge has flight planning and weather briefing areas, along with a "snooze room" for rest between flights. Our Bedford FBO has a complimentary coffee bar, refreshments, snack center, and is available 24/7. Rectrix is proud to be the CAA Preferred FBO at Hanscom Field.',
            subdescription: 'L.G.Hanscom Field (KBED)',
            amenities: [
                '60,000 square feet of heated hanger space',
                '20,000 square feet of office and FBO space',
                'Executive meeting and conference rooms',
                'Crew lounge and snooze room',
                'Flight planning room and weather briefing area',
                '24 hour security',
                'Complimentary Wifi throughout the FBO',
                'Complimentary coffee bar and snacks'
            ],
            services: [
                '- Domestic and international handling',
                '- NATA trained and pre-screened line service personnel',
                '- Discounted Jet Fuel',
                '- CAA preferred',
                '- Aircraft Maintenance',
                '- Deicing',
                '- Charter Services',
                '- Overnight, heated hangar service',
                '- Contract Fuel available',
                '- Ground power units and service equipment available',
                '- Crew Cars',
                '- Gourmet in-flight catering service',
                '- Onsite Rental Car Services',
                '- Concierge Services',
                ' -Tesla charging station on premises'
            ]
        },
        {
            id: 1,
            name: 'Hyannis, MA',
            street: '730 Barnstable Road',
            city: 'Hyannis, MA 02601',
            email: 'hyamail@rectrix.aero',
            phone: '508.771.7520',
            fax: '508.771.7522',
            asri: '128.825',
            description: '\t\tRectrix Aerodrome Centers opened its first FBO facility at Barnstable Municipal Airport (KHYA) in September 2005. The Hyannis facility features more than 22,000 square feet of heated hangar space designed to accommodate any type of aircraft. Encompassing 45,000 square feet, the combination of ample hangar space, well-appointed conference facilities, lavish passenger lounges, and comfortable crew quarters makes our Hyannis facility a favorite among international and domestic travelers. Serving the resort area of Cape Cod, its location offers ideal proximity to the metropolitan areas of the Northeastern United States.',
            subdescription: 'Cape Cod',
            amenities: [
                '22,000 square feet of heated hangar space',
                'Ability to service all aircraft needs, both transient and based',
                'Executive meeting and conference rooms',
                'Passenger and crew lounge',
                'Flight planning room',
                'Crew snooze room',
                'Complimentary coffee bar and snacks',
                'Complimentary Wifi throughout the FBO'
            ],
            services: [
                '- NATA trained and pre-screened line service personnel',
                '- Ground power units and service equipment',
                '- Lav Services',
                '- Potable Water',
                '- In-Flight Catering',
                '- Secure Aircraft Apron',
                '- Jet-A (Agreement Only)',
                '- Overnight hangar service',
                '- Crew cars',
                '- Rental Cars on premises'
            ]
        },
        {
            id: 2,
            name: 'Sarasota, FL',
            street: '8250 15th Street East',
            city: 'Sarasota, FL 34243',
            email: 'srqmail@rectrix.aero',
            phone: '941.358.9600',
            fax: '941.358.9611',
            asri: '130.225',
            description: '\t\tThe Rectrix Aerodrome Centers opened its luxurious Sarasota facility in December 2008. With a stunning design and luxurious, world-class accommodations, our Sarasota facility is situated on nearly 20 acres of airport property developed to accommodate more than 180,000 square feet of aircraft hangars and passenger service facilities. The Rectrix private terminal was created to exceed the expectations of the discerning air traveler. Located between Tampa and Naples, Sarasota is known the world over as a premier southwest Florida destination.',
            subdescription: 'Florida’s Gulf Coast',
            amenities: [
                '180,000 square feet of aircraft hangars and passenger facilities',
                'Private passenger terminal',
                'Elegant passenger and crew lounge',
                'Executive meeting and conference rooms',
                'Crew lounge and snooze room',
                'Flight planning room and weather briefing area',
                'Complimentary Wifi throughout the FBO'
            ],
            services: [
                '- Domestic and international handling',
                '- NATA trained and pre-screened line service personnel',
                '- Discounted jet fuel',
                '- CAA preferred',
                '- Aircraft Maintenance',
                '- Overnight hangar service',
                '- Contract fuel available',
                '- Ground power units and service equipment available',
                '- Crew cars',
                '- Gourmet in-flight catering service',
                '- Rental Cars on premises',
                '- Tesla charging station on premises'
            ]
        },
        {
            id: 3,
            name: 'Westfield, MA',
            street: '110 Airport Road',
            city: 'Westfield, MA 01085',
            email: 'bafmail@rectrix.aero',
            phone: '413.485.0078',
            fax: '413.485.0054',
            asri: '122.95',
            description: '\t\tAs the region\'s premier FBO and service provider, Rectrix Aerodrome Center at KBAF is well equipped to competently and properly handle all aspects of your flight. Corporate aircraft operators cite our facility as the finest FBO in the region with the amenities and operations rivaling many of the larger chain FBO\'s but with a refreshingly affordable price.',
            subdescription: 'Western Massachusetts',
            amenities: [
                '56,000 square feet of hangar space',
                'NATA trained and pre-screened line service personnel',
                'Closed circuit video surveillance system',
                'Crew lounge and quiet rooms',
                'Executive conference center and business suites',
                'Outdoor observation deck',
                'Complimentary Wifi throughout the FBO'
            ],
            services: [
                '- Jet-A and Avgas fuel',
                '- Deicing available',
                '- Aircraft Maintenance',
                '- Concierge services for hotel and ground transportation',
                '- Gourmet in-flight catering service',
                '- Aircraft exterior and interior cleaning',
                '- Ground power units and service equipment available',
                '- Overnight hangar service',
                '- Restaurant'
            ]
        },
        {
            id: 4,
            name: 'Worcester, MA',
            street: '375 Airport Drive #12',
            city: 'Worcester, MA 01602',
            email: 'orhmail@rectrix.aero',
            phone: '508.755.5870',
            fax: '508.753.5541',
            asri: '122.95',
            description: '\t\tThe Rectrix Aerodrome Center at Worcester Regional Airport opened its brand new facility in November 2015. With 20,000 square feet of new heated hangar space, this facility is outfitted with the latest features including concierge services, a flight planning room, and pilots\' lounge. Our Worcester FBO mimics the sleek and spacious designs of our other locations.',
            subdescription: 'Boston Metro',
            amenities: [
                'Over 40,000 square feet of hangar space',
                'Private passenger terminal',
                'Elegant passenger and crew lounge',
                'Executive meeting and conference rooms',
                'Crew lounge and snooze room',
                'Flight planning room and weather briefing area',
                'Complimentary Wifi throughout the FBO'
            ],
            services: [
                '- Jet-A and Avgas fuel',
                '- Deicing available',
                '- Aircraft Maintenance',
                '- Concierge services for hotel and ground transportation',
                '- Gourmet in-flight catering service',
                '- Aircraft exterior and interior cleaning',
                '- Ground power units and service equipment available',
                '- Overnight hangar service',
                '- Rental Cars on premises'
            ]
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

    getAmenities(id:number): string[] {
        return this.FBOS.find(fbo => fbo.id === id).amenities; 
    }

    getServices(id: number): string[] {
        return this.FBOS.find(fbo => fbo.id === id).services;
    }
} 
