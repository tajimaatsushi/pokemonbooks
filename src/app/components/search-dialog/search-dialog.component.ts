import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Searchpokemon } from 'src/app/services/searchpokemon.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
  providers:  [ Searchpokemon ]
})
export class SearchDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public searchpokemon: Searchpokemon
    // public searchpokemon: Searchpokemon
    // @Inject(MAT_DIALOG_DATA) public data: Common) 
  ) {}

  ngOnInit(): void {
  }

  onOK(): void {
    this.dialogRef.close();
  }
  onClose(): void {
    this.searchpokemon.Init();
    this.dialogRef.close();
  }
}
