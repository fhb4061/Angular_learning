import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCityComponent} from './search-city/search-city.component';
import { DetailsComponent } from './details/details.component';

//define array of routes
const routes: Routes = [
  {
    path: 'search',
    component: SearchCityComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}