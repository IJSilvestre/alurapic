import { Data } from '@angular/router';

export interface IPhoto {
  id: 14;
  postDate: Data;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
