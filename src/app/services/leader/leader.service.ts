import { Injectable } from '@angular/core';
import { Leader } from 'src/app/shared/leader';
import { LEADERS } from 'src/app/shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getLeader(id: string): Promise<Leader> {
    return Promise.resolve(LEADERS.filter(e => e.id === id)[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter(e => e.featured)[0]);
  }
}
