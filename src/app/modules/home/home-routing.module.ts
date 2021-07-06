import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddEquipmentComponent } from './pages/add-equipment/add-equipment.component';
import { SearchEquipmentComponent } from './pages/search-equipment/search-equipment.component';
import { EquipmentDetailsPageComponent } from './pages/equipment/equipment-page.component';
import { AddInfraestructureComponent } from './pages/add-infraestructure/add-infraestructure.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'add_equipment',
        component: AddEquipmentComponent,
      },
      {
        path: 'add_infrastructure',
        component: AddInfraestructureComponent,
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
