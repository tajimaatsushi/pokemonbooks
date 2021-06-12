import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese: any = {
    Grass:'くさ',
    Poison:'どく',
    Fire:'ほのお',
    Water:'みず',
    Bug:'むし',
    Flying:'ひこう',
    Normal:'ノーマル',
    Electric:'でんき',
    Ground:'じめん',
    Fiary:'フェアリー',
    Fighting:'かくとう',
    Psychic:'エスパー',
    Rock:'いわ',
    Steel:'はがね',
    Ice:'こおり',
    Ghost:'ゴースト',
    Dark: 'あく',
    Dragon: 'ドラゴン'
  };

  transform(types: string[], ...args: any[]): any {
    return types.map(type => 
      this.japanese[type] || type);
  }

}
