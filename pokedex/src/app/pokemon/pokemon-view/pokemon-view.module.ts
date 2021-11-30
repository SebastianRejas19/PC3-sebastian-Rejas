import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonViewPageRoutingModule } from './pokemon-view-routing.module';

import { PokemonViewPage } from './pokemon-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonViewPageRoutingModule
  ],
  declarations: [PokemonViewPage]
})
export class PokemonViewPageModule {}
