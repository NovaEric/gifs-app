import { Component, Input, OnInit } from '@angular/core';
import { IGif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: IGif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gifs property required.');
  }

}
