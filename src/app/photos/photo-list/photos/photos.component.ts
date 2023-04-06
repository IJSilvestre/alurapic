import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IPhoto } from '../../photo/Iphoto';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnChanges {
  @Input() photos: IPhoto[] = [];
  rows: any[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: IPhoto[]) {
    const newRows = [];
    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }
    return newRows;
  }
}
