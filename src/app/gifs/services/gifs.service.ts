import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGif, ISearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public listGifs: IGif[] = [];

  private _gifsHistory: string[] =  localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')!) : [];
  private giphyApiKey = 'D7nGO1T7PGfGlaOjcdK7jVLcnTCcsYAx';
  private giphyServiceUrl = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    if (localStorage.getItem('history')){
      this.searchGifs(this._gifsHistory[0]);
    }
   };

  get gifsHistory() {
    return [...this._gifsHistory];
  };

  private organizedHistory(gif: string) {

    gif = gif.toLowerCase();

    if ( this._gifsHistory.includes(gif) ) {
      this._gifsHistory = this._gifsHistory.filter( oldgif => oldgif !== gif );
    };

    this._gifsHistory.unshift(gif);
    this._gifsHistory = this._gifsHistory.splice(0,10);
    localStorage.setItem('history', JSON.stringify(this._gifsHistory));
  }

  searchGifs(gif: string): void {

    if (gif.length === 0) return;
    this.organizedHistory(gif);

    const params = new HttpParams()
      .set('api_key', this.giphyApiKey)
      .set('limit', '10')
      .set('q', gif)

    this.http.get<ISearchResponse>(`${this.giphyServiceUrl}/search`, { params: params })
      .subscribe( resp => {
        this.listGifs = resp.data;
      })

  }

}
