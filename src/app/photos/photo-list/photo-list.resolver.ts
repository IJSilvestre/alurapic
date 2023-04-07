import { inject } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { IPhoto } from '../photo/Iphoto';

export const photoListResolver: ResolveFn<IPhoto[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userName = route.params['userName'];
  return inject(PhotoService).listFromUser(userName);
};
