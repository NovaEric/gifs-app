import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private GifsService: GifsService) { };

  get gifs(): string[] {
    return this.GifsService.gifsHistory;
  }

  showClickedGif(gif: string): void {
    this.GifsService.searchGifs(gif);
  }

}
