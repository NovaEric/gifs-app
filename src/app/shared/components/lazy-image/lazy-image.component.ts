import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = 'No title';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('url property required.');
  }

  onLoad() {

    setTimeout(() => {

      this.hasLoaded = true;

    }, 2000);
  }

}
