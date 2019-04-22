import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FFResizeSensorService} from 'ff-resize-sensor';

@Component({
  selector: 'ff-root',
  template: `
    <div class="myCss" ffResizeSensor (resize)="onResize($event)"></div>
    <div class="myCss" #domElem></div>`,
  styles: [`
    .myCss {
      background-color: red;
      height: 100px;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('domElem') domElem: ElementRef;
  title = 'ff-resize-sensor-app';

  constructor(private service: FFResizeSensorService) {
  }

  onResize(e) {
    console.log('Event from view template', e);
  }

  ngAfterViewInit(): void {
    this.service.subscribe(this.domElem.nativeElement, (event) => {
      console.log('Event from service', event);
    });
  }
}
