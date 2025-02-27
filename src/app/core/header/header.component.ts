import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../user/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<IUser>;
  user: IUser | undefined;

  constructor( userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe({
      next: (user) => {
        this.user = user;
      },
    });
  }

  ngOnInit() {}
}
