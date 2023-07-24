import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'app-slide',
  template: `<p>i am slide</p>`
})
export class SlideComponent implements OnInit {
  constructor(private logger: GalleryLoggerService){}
  ngOnInit(): void {
    this.logger.log('slide component');
  }
}
