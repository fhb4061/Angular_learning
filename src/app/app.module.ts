import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchCityComponent } from './search-city/search-city.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
