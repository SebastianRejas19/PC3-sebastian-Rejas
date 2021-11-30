import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemon-delete',
  templateUrl: './pokemon-delete.page.html',
  styleUrls: ['./pokemon-delete.page.scss'],
})
export class PokemonDeletePage implements OnInit {
  pokemon_id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.pokemon_id = data.get('pokemon_id');
      }
    );
  }

  deletePokemon(pokemon_id:any){
    this.pokemonService.deletePokemon(pokemon_id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    );
  }

}