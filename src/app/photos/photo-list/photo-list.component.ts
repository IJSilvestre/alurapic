import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPhoto } from '../photo/Iphoto';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  showMore() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];

    // this.photos = this.activatedRoute.snapshot.data['photos'];
    this.activatedRoute.data.subscribe(({ photos }) => {
      this.photos = photos;
    });
  }
}
