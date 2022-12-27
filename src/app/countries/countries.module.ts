import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountriesPageRoutingModule } from './countries-routing.module';

import { CountriesPage } from './countries.page';
import { HTTP } from '@ionic-native/http/ngx';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CountriesPageRoutingModule],
  declarations: [CountriesPage],
})
export class CountriesPageModule {}
