import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonCreatePage } from './pokemon-create.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonCreatePageRoutingModule {}
