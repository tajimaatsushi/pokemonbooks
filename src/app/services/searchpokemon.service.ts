import { Injectable, OnInit } from '@angular/core';
// import { Interface } from 'readline';

export interface In_SearchPokemon {
  name: string;
  HP: number;
  Attack: number,
  Defense: number;
  SpAttack: number;
  SpDefense: number;
  Speed: number;
}

@Injectable({
  providedIn: 'root'
})

export class Searchpokemon implements In_SearchPokemon, OnInit {
  
  public name!: string;
  public HP: any;
  public Attack: any;
  public Defense: any;
  public SpAttack: any;
  public SpDefense: any;
  public Speed: any;
  // searchpokemon: In_SearchPokemon | undefined;
  constructor(
  ) {
    this.Init();
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Init(){
    this.name = '';
    this.HP = null;
    this.Attack = null;
    this.Defense = null;
    this.SpAttack = null;
    this.SpDefense = null;
    this.Speed = null;
  }
}
