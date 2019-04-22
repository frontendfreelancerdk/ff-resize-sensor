import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ResizeSensor} from 'css-element-queries';
import {FFResizeSensorEvent} from './resize-event';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FFResizeSensorService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  subscribe(el, callback) {
    if (!el || typeof callback !== 'function') {
      return;
    }
    if (isPlatformBrowser(this.platformId)) {
      let {width, height} = el.getBoundingClientRect();
      width = Math.round(width);
      height = Math.round(height);
      new ResizeSensor(el, (s) => {
        const event = new FFResizeSensorEvent(
          el,
          width,
          height,
          s.width,
          s.height
        );
        callback(event);
        width = s.width;
        height = s.height;
      });
      callback(new FFResizeSensorEvent(el, width, height, width, height));
    }
  }
}
