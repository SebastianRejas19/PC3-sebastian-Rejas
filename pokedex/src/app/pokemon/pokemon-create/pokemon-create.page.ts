import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.page.html',
  styleUrls: ['./pokemon-create.page.scss'],
})
export class PokemonCreatePage implements OnInit {
  pokemonForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonsService,
    private router: Router
  ) { 
    this.pokemonForm = this.formBuilder.group({
      name_pokemon: [''],
      categoria: [''],
      tipo: [''],
      altura: [''],
      peso: [''],
      habilidad: [''],
      url: ['']

    });
  }

  ngOnInit() {
  }


  addPokemon(values:any){
    this.pokemonService.insertPokemon(values).subscribe(
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
