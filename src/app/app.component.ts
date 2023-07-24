import { Component } from '@angular/core';
import { SlideService } from './slide.service';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'app-root',
  template: `<app-gallery>
              <app-slide></app-slide>
            </app-gallery>`,
  providers: [{ provide: GalleryLoggerService, useExisting: SlideService}]
})
export class AppComponent {
  title = 'angularApp';
}
