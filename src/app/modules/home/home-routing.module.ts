import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddEquipmentComponent } from './pages/add-equipment/add-equipment.component';
import { SearchEquipmentComponent } from './pages/search-equipment/search-equipment.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'add',
        component: AddEquipmentComponent,
      },
      {
        path: 'search',
        component: SearchEquipmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
