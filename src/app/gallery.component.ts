import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'app-gallery',
  template: `<ng-content></ng-content>`,
  viewProviders: [GalleryLoggerService]
})
export class GalleryComponent implements OnInit {
  constructor(private logger: GalleryLoggerService){}
  ngOnInit(): void {
    this.logger.log('gallery component');
  }
}
