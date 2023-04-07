import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() onTyping = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();
  constructor() {}
  setVlrFilter(vlrFilter: string) {
    this.debounce.next(vlrFilter);
  }

  ngOnInit() {
    this.debounce.pipe(debounceTime(400)).subscribe((vlr) => {
      console.log(vlr);
      this.onTyping.emit(vlr)
    });
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
