import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private http: HttpClient
  ) { }

  getpokemons() {
    return this.http.get<any>('http://localhost:3000/pokemons');
  }

  getPokemonById(pokemon_id: any) {
    return this.http.get<any>(`http://localhost:3000/pokemons/${pokemon_id}`);
  }

  insertPokemon(pokemon: any){
    return this.http.post<any>('http://localhost:3000/pokemons', pokemon);
  }

  updatePokemon(pokemon_id: any, pokemon: any){
    return this.http.put<any>(`http://localhost:3000/pokemons/${pokemon_id}`, pokemon);
  }

  deletePokemon(pokemon_id:any){
    return this.http.delete<any>(`http://localhost:3000/pokemons/${pokemon_id}`);
  }
}
 
