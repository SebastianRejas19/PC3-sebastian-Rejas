import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonCreatePageRoutingModule } from './pokemon-create-routing.module';

import { PokemonCreatePage } from './pokemon-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonCreatePage]
})
export class PokemonCreatePageModule {}
