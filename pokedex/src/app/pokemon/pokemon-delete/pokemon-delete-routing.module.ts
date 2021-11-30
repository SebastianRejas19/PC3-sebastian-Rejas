import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDeletePage } from './pokemon-delete.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDeletePageRoutingModule {}
