import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonEditPageRoutingModule } from './pokemon-edit-routing.module';

import { PokemonEditPage } from './pokemon-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonEditPage]
})
export class PokemonEditPageModule {}
