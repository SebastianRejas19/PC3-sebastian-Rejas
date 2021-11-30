import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonEditPage } from './pokemon-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonEditPageRoutingModule {}
