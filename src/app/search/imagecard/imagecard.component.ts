import { Component, Input } from '@angular/core';
import { IPictures } from 'src/app/models/unsplash.model';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.scss'],
})
export class ImagecardComponent {
  @Input() imgData: IPictures = { id: '', name: '', src: '' };
}
