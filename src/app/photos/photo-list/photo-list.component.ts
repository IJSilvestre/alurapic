import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../photo/Iphoto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.photos = this.activatedRoute.snapshot.data['photos'];
    this.activatedRoute.data.subscribe(({ photos }) => {
      this.photos = photos;
    });
  }
}
