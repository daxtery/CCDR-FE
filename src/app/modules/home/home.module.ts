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
import { SocialFormComponent } from './components/equipment-forms/social-form/social-form.component';

import { MaterialModule } from '../../material.module';
import { CultureFormComponent } from './components/equipment-forms/culture-form/culture-form.component';
import { SportFormComponent } from './components/equipment-forms//sport-form/sport-form.component';
import { HealthFormComponent } from './components/equipment-forms//health-form/health-form.component';
import { EducationFormComponent } from './components/equipment-forms/education-form/education-form.component';
import { AddInfraestructureComponent } from './pages/add-infraestructure/add-infraestructure.component';

import { EquipmentPreviewComponent } from './components/equipment-preview/equipment-preview.component';
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';
import { EquipmentDetailsPageComponent } from './pages/equipment/equipment-page.component';
import { CultureDetailsComponent } from './components/equipment-details/equipment-culture-details/equipment-culture-details.component';
import { SportDetailsComponent } from './components/equipment-details//equipment-sport-details/equipment-sport-details.component';
import { EducationDetailsComponent } from './components/equipment-details/equipment-education-details/equipment-education-details.component';
import { SocialDetailsComponent } from './components/equipment-details//equipment-social-details/equipment-social-details.component';
import { HealthDetailsComponent } from './components/equipment-details//equipment-health-details/equipment-health-details.component';
import { EnergyFormComponent } from './components/infrastructure-form/energy-form/energy-form.component';
import { CommunicationFormComponent } from './components/infrastructure-form/communication-form/communication-form.component';
import { ExtrasFormComponent } from './components/extras-form/extras-form.component';
import { EnergyDetailsComponent } from './components/equipment-details/infrastructure-energy-details/infrastructure-energy-details.component';
import { CommunicationDetailsComponent } from './components/equipment-details/infrastructure-communication-details/infrastructure-communication-details.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HomePageRoutingModule,
    MaterialModule,
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
    AddInfraestructureComponent,
    EquipmentDetailsComponent,
    EquipmentDetailsPageComponent,
    EquipmentPreviewComponent,
    CultureDetailsComponent,
    SportDetailsComponent,
    EducationDetailsComponent,
    SocialDetailsComponent,
    HealthDetailsComponent,
    EnergyFormComponent,
    CommunicationFormComponent,
    ExtrasFormComponent,
    EnergyDetailsComponent,
    CommunicationDetailsComponent,
    LoginComponent,
    ProfileComponent,
    LandingPageComponent,
  ]
})
export class HomePageModule { }
