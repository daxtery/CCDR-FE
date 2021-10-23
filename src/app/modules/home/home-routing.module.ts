import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddEquipmentComponent } from './pages/add-equipment/add-equipment.component';
import { SearchEquipmentComponent } from './pages/search-equipment/search-equipment.component';
import { EquipmentDetailsPageComponent } from './pages/equipment/equipment-page.component';
import { AddInfraestructureComponent } from './pages/add-infraestructure/add-infraestructure.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from 'src/app/core/guards/login.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoggedGuard } from 'src/app/core/guards/logged.guard';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
        children: [
          {
            path: '',
            component: SearchComponent,
          },
          {
            path: 'login',
            component: LoginComponent,
            canActivate: [LoggedGuard]
          }
        ]
      },
      {
        path: 'add_equipment',
        component: AddEquipmentComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'add_infrastructure',
        component: AddInfraestructureComponent,
        canActivate: [LoginGuard]
      },
      
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'search',
        component: SearchEquipmentComponent
      },
      {
        path: 'equipment/:id',
        component: EquipmentDetailsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
