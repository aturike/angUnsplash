import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPictures } from 'src/app/models/unsplash.model';
import { UnsplashAPIService } from 'src/app/service/unsplash-api.service';

@Component({
  selector: 'app-imagecontainer',
  templateUrl: './imagecontainer.component.html',
  styleUrls: ['./imagecontainer.component.scss'],
})
export class ImagecontainerComponent {
  images$: Observable<IPictures[]> = this.unplash.getImage();

  constructor(private unplash: UnsplashAPIService) {}

  trackByFunction(index: number, item: IPictures): string {
    return item.id;
  }
}
