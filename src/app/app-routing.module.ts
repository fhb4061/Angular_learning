import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCityComponent} from './search-city/search-city.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component'
//define array of routes
const routes: Routes = [
  {
    path: 'search',
    component: SearchCityComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'users',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}