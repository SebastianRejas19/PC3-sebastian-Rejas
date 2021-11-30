import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.page.html',
  styleUrls: ['./pokemon-edit.page.scss'],
})
export class PokemonEditPage implements OnInit {
  pokemon_id: any;
  pokemon: any;
  pokemonForm: FormGroup;

  constructor(
    private pokemonService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder : FormBuilder,
    private router: Router
  ) {
    this.pokemonForm = this.formBuilder.group({
      pokemon_id: [''],
      name_pokemon: [''],
      categoria: [''],
      tipo: [''],
      altura: [''],
      peso: [''],
      habilidad: [''],
      url: ['']
    })
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.pokemon_id = data.get('pokemon_id');

        this.pokemonService.getPokemonById(this.pokemon_id).subscribe(
          response => {
            console.log(response)
            this.pokemon = response;
          },
          error => {
            console.error(error)
          }
        )
      }
    )
  }

  updatePokemon(pokemon: any){
    this.pokemonService.updatePokemon(this.pokemon_id, pokemon).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemon']);

      },
      error => {
        console.error(error)
      }
    )

  }
}
