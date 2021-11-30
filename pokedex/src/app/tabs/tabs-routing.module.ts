import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'pokemon',
        loadChildren: () => import('../pokemon/pokemon.module').then(m => m.PokemonPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: '',
        redirectTo: '/pokemon',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
