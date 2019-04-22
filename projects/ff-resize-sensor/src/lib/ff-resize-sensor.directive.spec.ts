import {FFResizeSensorDirective} from './ff-resize-sensor.directive';
import {ElementRef, PLATFORM_ID} from '@angular/core';
import {FFResizeSensorService} from './ff-resize-sensor.service';

const mockElementRef = {
  nativeElement: {}
};
const mockService = {
  subscribe: (el, callback) => {
    callback({el});
  }
};

describe('FFResizeSensorDirective', () => {
  let directive;
  beforeEach(() => {
    directive = new FFResizeSensorDirective(mockElementRef as ElementRef, mockService as FFResizeSensorService, PLATFORM_ID);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should change values', () => {
    expect(directive.oldWidth).toBe(undefined);
    expect(directive.oldHeight).toBe(undefined);
    expect(directive.width).toBe(undefined);
    expect(directive.height).toBe(undefined);
    directive.onResize({oldWidth: 1, oldHeight: 2, width: 3, height: 4});
    expect(directive.oldWidth).toBe(1);
    expect(directive.oldHeight).toBe(2);
    expect(directive.width).toBe(3);
    expect(directive.height).toBe(4);
  });
  it('should subscribe afterViewInit', () => {
    spyOn(directive.service, 'subscribe').and.callFake(() => {
      directive.onResize({oldWidth: 1, oldHeight: 2, width: 3, height: 4});
    });
    directive.ngAfterViewInit();
    expect(directive.service.subscribe).toHaveBeenCalled();
    expect(directive.oldWidth).toBe(1);
    expect(directive.oldHeight).toBe(2);
    expect(directive.width).toBe(3);
    expect(directive.height).toBe(4);
  });
});
