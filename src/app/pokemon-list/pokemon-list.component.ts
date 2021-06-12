import { Component, Input, OnChanges, OnInit, SimpleChanges, Inject } from '@angular/core';
import { POKEMONS } from '../models/pokemons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SearchDialogComponent } from '../components/search-dialog/search-dialog.component';
import { Searchpokemon } from '../services/searchpokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons = POKEMONS;
  constructor(
    public dialog: MatDialog,
    public searchpokemon: Searchpokemon,
    // @Inject(MAT_DIALOG_DATA) public searchpokemon: Common
    ) {}

  ngOnInit(): void {
  }

  Search() {
    console.log(this.searchpokemon.name);
    this.pokemons = [];
    if(this.searchpokemon.name == '') {
      this.searchpokemon.name = '';
    }
    if(this.searchpokemon.HP == null) {
      this.searchpokemon.HP = 0;
    }
    if(this.searchpokemon.Attack == null) {
      this.searchpokemon.Attack = 0;
    }
    if(this.searchpokemon.Defense == null) {
      this.searchpokemon.Defense = 0;
    }
    if(this.searchpokemon.SpAttack == null) {
      this.searchpokemon.SpAttack = 0;
    }
    if(this.searchpokemon.SpDefense == null) {
      this.searchpokemon.SpDefense = 0;
    }
    if(this.searchpokemon.Speed == null) {
      this.searchpokemon.Speed = 0;
    }

    for(let pokemon of POKEMONS){
      if(pokemon.name.japanese.indexOf(this.searchpokemon.name) > -1
         && pokemon.base.HP >= this.searchpokemon.HP
         && pokemon.base.Attack >= this.searchpokemon.Attack
         && pokemon.base.Defense >= this.searchpokemon.Defense
         && pokemon.base.SpAttack >= this.searchpokemon.SpAttack
         && pokemon.base.SpDefense >= this.searchpokemon.SpDefense
         && pokemon.base.Speed >= this.searchpokemon.Speed
         ){
        this.pokemons.push(POKEMONS[pokemon.id - 1]);
      }
    }

    
    this.searchpokemon.Init();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '300px',
      data: this.searchpokemon
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.Search();
      // this.animal = result;
    });
  }
}
// @Component({
//   selector: 'dialog-search',
//   templateUrl: '../components/search-dialog/search-dialog.component.html',
// })
// export class searchDialog {

// }