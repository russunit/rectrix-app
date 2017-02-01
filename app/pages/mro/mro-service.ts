import { Injectable }    from '@angular/core';
import { mro } from './mro';

@Injectable()
export class MroService {

    MROS: mro[] = [
        {
            id: 0,
            name: 'Bedford, MA',
            description: '\t\tAt Rectrix Aerodrome Boston/Bedford we have the capability and knowledge to meet your maintenance requirements and demands. No matter the task, our highly trained technicians can deliver services in a timely manner on your schedule. Our facility provides a wide-range of services, including routine and unscheduled maintenance, airframe and line maintenance, avionics, as well as 24-hour AOG services.',
            subdescription: 'L.G.Hanscom Field (KBED)',
            services: 
                '- Base maintenance airframe and avionics\n'+
                '- Line maintenance\n'+
                '- Scheduled and unscheduled maintenance\n'+
                '- AOG services\n'+
                '- Scheduled inspections and maintenance\n'+
                '- RSVM qualified pitot static and transponder testing\n'+
                '- Battery capacity testing & analysis\n'+
                '- Emergency AOG repairs\n'+
                '- Phase and docket inspections\n'+
                '- ELT installation and testing\n'+
                '- Engine overhaul assistance and replacement\n'+
                '- Corrosion inspection',
            servicesDescription: 'Located just 15 miles northwest of Boston, Rectrix MRO by AirFlyte at KBED has the capabilities and experience to serve the many needs of our passengers and crew to ensure their stay with us is a pleasant one. Rectrix offers routine and unscheduled maintenance services for most business jet models. We are proud to have highly skilled technicians with years of experience in airframes, line maintenance, avionics, repair and overhaul.',
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
            name: 'Sarasota, FL',
            description: '\t\tAt Rectrix MRO by AirFlyte KSRQ, we have the capability and experience to meet your maintenance requirements and demands. Our team can get your aircraft back on-line and on schedule in a safe, efficient manner at a price that won\'t be matched.',
            subdescription: 'Sarasota-Bradenton International Airport (KSRQ)',
            services: 
                '- Scheduled inspections\n'+
                '- Scheduled and unscheduled maintenance\n'+
                '- RVSM qualified pitot static and transponder testing\n'+
                '- Battery capacity testing & analysis\n'+
                '- Emergency AOG repairs\n'+
                '- Phase and docket inspections\n'+
                '- ELT installation and testing\n'+
                '- Engine overhaul assistance and replacement\n'+
                '- Corrosion inspection\n'+
                '- Tire service',
            servicesDescription: 'When you use Rectrix MRO by AirFlyte at KSRQ, you will see that we have comprehensive facilities that can provide you with industry leading corporate aircraft maintenance. Our facility at KSRQ is FAA Authorized Repair Station #QFYD349K.',
            contact: 
				'8250 15th Street East\n'+ 
				'Sarasota, FL 34243\n'+ 
				'Email: srqmail@rectrix.aero\n'+
				'Phone: 941.358.9600\n'+ 
				'ASRI: 130.225\n'+
				'AOG: 941.724.9779'
        },
        {
            id: 2,
            name: 'Westfield, MA',
            description: '\t\tWith almost 30 years of experience and recognized as an industry leader, Rectrix MRO by AirFlyte at KBAF provides everything you need and expect for a first in class maintenance organization.',
            subdescription: 'Westfield-Barnes Airport (KBAF)',
            services: 
                '- Scheduled inspections and maintenance\n'+
                '- RVSM qualified pitot static and transponder testing\n'+
                '- Battery capacity testing & analysis\n'+
                '- Emergency AOG repairs\n'+
                '- Phase and docket inspections\n'+
                '- ELT installation and testing\n'+
                '- Engine overhaul assistance and replacement\n'+
                '- Corrosion inspection',
            servicesDescription: 'When you use Rectrix MRO by AirFlyte at KSRQ, you will see that we have comprehensive facilities that can provide you with industry leading corporate aircraft maintenance. Our facility at KSRQ is FAA Authorized Repair Station #QFYD349K.',
            contact: 
				'32 Airport Drive\n'+ 
				'Westfield, MA 01085\n'+ 
				'Email: bafmail@rectrix.aero\n'+ 
				'Phone: 413.568.4686'
        },
    ];

    getMroList(): mro[] {
        return this.MROS;
    }

	getMro(id: number): mro {
        return this.MROS.find(mro => mro.id === id);    
    }

    getMroName(id: number): string {
        return this.MROS.find(mro => mro.id === id).name; 
    }

    getServices(id: number): string {
        return this.MROS.find(mro => mro.id === id).services;
    }

    getContactInfo(id: number): string {
        return this.MROS.find(mro => mro.id === id).contact;
    }
} 
