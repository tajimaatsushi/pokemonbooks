import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { POKEMONS } from '../models/pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  
  pokemons = POKEMONS;
  pokemon: any;
  // { base: { HP: number; Attack: number; Defense: number; Speed: number}; id: number; name: { english: string; japanese: string; chinese: string; french: string; }; type: string[]; };

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend:{
      display: false
    },
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0
      }
    }
  };
  public radarChartLabels: Label[] = ['体力', '攻撃', '防御', '特攻', '特防', '速度'];

  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';
  constructor(
    private route: ActivatedRoute
  ) { 
  }
  ngOnInit(){
    this.route.paramMap.subscribe(map =>{
      const id = +map.get('id')!;
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.push
      ({
          data: [
            this.pokemon.base.HP,
            this.pokemon.base.Attack,
            this.pokemon.base.Defense,
            this.pokemon.base.SpDefense,
            this.pokemon.base.SpDefense,
            this.pokemon.base.Speed
          ]
        
      })
    });
  }

}
