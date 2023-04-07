import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPhoto } from '../photo/Iphoto';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: IPhoto[] = [];
  filter: string = '';

  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) {}

  setVlrFilter(vlrFilter: string) {
    this.debounce.next(vlrFilter);
  }

  ngOnInit(): void {
    // this.photos = this.activatedRoute.snapshot.data['photos'];
    this.activatedRoute.data.subscribe(({ photos }) => {
      this.photos = photos;
    });

    this.debounce.pipe(debounceTime(300)).subscribe((vlr) => {
      console.log(vlr);
      this.filter = vlr;
    });
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
