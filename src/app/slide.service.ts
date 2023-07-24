import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class SlideService implements Logger {
  private __prefix = 'From slide'
  constructor() { }

  log(msg: string) {
    console.log(`${this.__prefix}: ${msg}`);
  }
}
