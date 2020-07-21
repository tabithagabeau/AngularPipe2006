import {Injectable} from '@angular/core';
import {ISuperhero} from '../hero-list/hero';

/*
Dependency Injection (DI).
It is a part of large concept of the IoC.
IoC stands for Invesion of Control. We re giving out control to something else.
We re giving control up of a portion of our application to another entity in the framework 
(in our case in Angular it is an injector)
Eg. ActivatedRoute in ts file is dependency: something depends on service to provide this "route"

A singleton class is a class that can only be instiantiated once, ever subquent calling of 
the class constructor (in the ts class) will return the same object.

Dependency Injection (DI) is a design pattern, and the Angular Injector is the entity that controls it.
Classes with the @injectable() and the @Component() are handled by the Injector.

The injector is a singleton class
*/

@Injectable(
    /* To Create a Service
    1. create an exportable TS class
    2. put the @Ijectable() above the class
    3. register it in the PROVIDERS attribute in the app.module.ts
    */
)
export class HeroService {

    getCharacters(): ISuperhero[]{
        return [
            {
                name: 'Frozone',
                rank: 4,
                ability: 'cold generation',
                organization: 'incredibles',
                image: 'http://www.cultjer.com/img/ug_photo/2014_03/sf2_lg20140331142439.jpg'
            },
            {
                name: 'Eraser Head',
                rank: 5,
                ability: 'power nullification',
                organization: 'pro hero',
                image: 'https://media.tenor.co/images/788cc935108fb487b6af1e152bcec6bf/raw'
            },
            {
                name: 'Static Shock',
                rank: 4.7,
                ability: 'electric manipulation',
                organization: 'duo',
                image: 'https://t00.deviantart.net/CsfqTmmnwQAltUe4HYS8A7gsk-s=/300x200/filters:fixed_height(100,100)' +
                    ':origin()/pre00/64ea/th/pre/f/2012/125/4/1/static_shock_by_deshockwav-d4ynm1o.png'
            },
            {
                name: 'Saitama',
                rank: 2.3,
                ability: 'punches',
                organization: 'the hero association',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx0maPoLAqImOmsoTnxRwBronngiLYfeOVYFSSs2UBLsjXDDT&s'
            },
            {
                name: 'TEst',
                rank: 3,
                ability: "test",
                organization: "test",
                image: " "
            }
  
        ];
    }

}