import {AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Output, PLATFORM_ID} from '@angular/core';
import {FFResizeSensorService} from './ff-resize-sensor.service';
import {FFResizeSensorEvent} from './resize-event';

@Directive({
  selector: '[ffResizeSensor]',
  exportAs: 'ffResizeSensor'
})
export class FFResizeSensorDirective implements AfterViewInit {
  public width: number;
  public height: number;
  public oldWidth: number;
  public oldHeight: number;
  @Output()
  readonly resize = new EventEmitter<FFResizeSensorEvent>();

  constructor(public el: ElementRef, private service: FFResizeSensorService, @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngAfterViewInit(): void {
    this.service.subscribe(this.el.nativeElement, event => {
      this.onResize(event);
    });
  }

  private onResize(event) {
    this.oldWidth = event.oldWidth;
    this.oldHeight = event.oldHeight;
    this.width = event.width;
    this.height = event.height;
    this.resize.emit(event);
  }
}
