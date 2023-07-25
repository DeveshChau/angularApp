import { Component } from '@angular/core';
import { SlideService } from './slide.service';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'app-root',
  template: `<app-gallery [parentToChild]="'parentToChild'">
              <!-- <app-slide></app-slide> -->
              <h1 #header>Projected Header</h1>
            </app-gallery>`,
  providers: [{ provide: GalleryLoggerService, useExisting: SlideService}]
})
export class AppComponent {
  title = 'angularApp';
}
