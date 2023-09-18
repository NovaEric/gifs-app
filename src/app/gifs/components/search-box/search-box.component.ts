import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtGifsInput')
  public gifInput!: ElementRef<HTMLInputElement>;

  constructor ( private GifsService: GifsService ) {};

  searchGif() {

    const newGif = this.gifInput.nativeElement.value;

    this.GifsService.searchGifs(newGif);

    this.gifInput.nativeElement.value = '';

  }
}
