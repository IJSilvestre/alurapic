import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPhoto } from '../photo/Iphoto';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: IPhoto[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  debounce: Subject<string> = new Subject<string>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  setVlrFilter(vlrFilter: string) {
    this.debounce.next(vlrFilter);
  }
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

    this.debounce.pipe(debounceTime(300)).subscribe((vlr) => {
      this.filter = vlr;
    });
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
