import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonViewPage } from './pokemon-view.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonViewPageRoutingModule {}
