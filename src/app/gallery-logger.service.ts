import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class GalleryLoggerService implements Logger {

  private __prefix = 'Gallery Logger'
  constructor() { }

  log(msg: string) {
    console.log(`${this.__prefix}: ${msg}`);
  }
}
