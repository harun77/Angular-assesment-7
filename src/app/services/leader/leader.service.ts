import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Leader } from 'src/app/shared/leader';
import { LEADERS } from 'src/app/shared/leaders';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter(e => e.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter(e => e.featured)[0]).pipe(delay(2000));
  }
}
