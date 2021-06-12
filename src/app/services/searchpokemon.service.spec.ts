import { TestBed } from '@angular/core/testing';

import { Searchpokemon } from './searchpokemon.service';

describe('Searchpokemon.Service.TsService', () => {
  let service: Searchpokemon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Searchpokemon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
