import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDeletePageRoutingModule } from './pokemon-delete-routing.module';

import { PokemonDeletePage } from './pokemon-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDeletePageRoutingModule
  ],
  declarations: [PokemonDeletePage]
})
export class PokemonDeletePageModule {}
