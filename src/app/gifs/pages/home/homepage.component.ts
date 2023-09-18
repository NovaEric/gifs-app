import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { IGif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor( private gifsService: GifsService ) {}

  get gifs(): IGif[] {
    return this.gifsService.listGifs;
  }
}
