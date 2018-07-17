import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCityComponent} from './search-city/search-city.component';

//define array of routes
const routes: Routes = [
  {
    path: 'search',
    component: SearchCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}