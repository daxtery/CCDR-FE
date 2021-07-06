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
import { SocialFormComponent } from './components/social-form/social-form.component';

import { MaterialModule } from '../../material.module';
import { CultureFormComponent } from './components/culture-form/culture-form.component';
import { SportFormComponent } from './components/sport-form/sport-form.component';
import { HealthFormComponent } from './components/health-form/health-form.component';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { EquipmentPreviewComponent } from './components/equipment-preview/equipment-preview.component';
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';
import { EquipmentDetailsPageComponent } from './pages/equipment/equipment-page.component';
import { CultureDetailsComponent } from './components/equipment-culture-details/equipment-culture-details.component';
import { SportDetailsComponent } from './components/equipment-sport-details/equipment-sport-details.component';
import { EducationDetailsComponent } from './components/equipment-education-details/equipment-education-details.component';
import { SocialDetailsComponent } from './components/equipment-social-details/equipment-social-details.component';
import { HealthDetailsComponent } from './components/equipment-health-details/equipment-health-details.component';

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
    NavigationComponent,
    SocialFormComponent,
    CultureFormComponent,
    SportFormComponent,
    HealthFormComponent,
    EducationFormComponent,
    EquipmentDetailsComponent,
    EquipmentDetailsPageComponent,
    EquipmentPreviewComponent,
    CultureDetailsComponent,
    SportDetailsComponent,
    EducationDetailsComponent,
    SocialDetailsComponent,
    HealthDetailsComponent,
  ]
})
export class HomePageModule { }
