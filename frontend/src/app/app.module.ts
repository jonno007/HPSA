import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

@NgModule({
   declarations: [
      AppComponent,
      PropertyCardComponent,
      NavBarComponent,
      PropertyListComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
