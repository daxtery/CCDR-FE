import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddEquipmentComponent } from './pages/add-equipment/add-equipment.component';
import { SearchEquipmentComponent } from './pages/search-equipment/search-equipment.component';

import { NavigationComponent } from './components/navigation/navigation.component';

import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HomePageRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomePageComponent,
    AddEquipmentComponent,
    SearchEquipmentComponent,
    NavigationComponent
  ]
})
export class HomePageModule { }
