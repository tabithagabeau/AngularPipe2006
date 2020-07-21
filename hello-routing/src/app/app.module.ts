import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HttpClientModule } from '@angular/common/http';
import { HeroService} from './services/hero.service';
import { PokeService} from './services/poke.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RocpService} from './services/rocp.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeroListComponent,
    WelcomeComponent
    // HeroComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule,
    /*
    the router module allows us to have SPA(single page application). We can 
    define paths to quickly swap components in and out of a specified view.
    To do this, you need to use the .forRoot([]) in the app.module.ts for this reason
    you should keep RouterModule as the last module in your imports
    */
    RouterModule.forRoot([// these paths will simelously change from page to page without reloading the page
      // these paths will be linked in the app.component.html via <li><a routerLink="/profile/NoHero">Profile</a></li>
      {path: 'superheroes', component: HeroListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'profile/:heroname', component: ProfileComponent},
      // {path: '', redirectTo: 'superheroes', pathMatch: 'full'}
      //the above path full does not catch all, only blank; use ** to catch all
      //the below path redirect must be the last line to superceed the previous
      {path: '**', redirectTo: 'superheroes'}
    ])
  ],
  providers: [HeroService, PokeService, RocpService ],
  bootstrap: [AppComponent]

})
export class AppModule { }
