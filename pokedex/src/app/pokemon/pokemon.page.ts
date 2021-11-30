import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../_services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemon: any[];

  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    
  }

  ionViewWillEnter(): void {
    this.pokemonsService.getpokemons().subscribe(data => {
      this.pokemon = data;
    })
  }

}