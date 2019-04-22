import {TestBed} from '@angular/core/testing';

import {FFResizeSensorService} from './ff-resize-sensor.service';

describe('FFResizeSensorService', () => {
  let service: FFResizeSensorService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(FFResizeSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method subscribe should exit when there is no element or callback is not a function', () => {
    const obj = {
      mockCallback(e) {
        console.log(e);
      }
    };
    const htmlElement = document.createElement('div');
    spyOn(obj, 'mockCallback');
    expect(obj.mockCallback).toHaveBeenCalledTimes(0);
    service.subscribe(null, obj.mockCallback);
    expect(obj.mockCallback).toHaveBeenCalledTimes(0);
    service.subscribe(htmlElement, obj.mockCallback);
    expect(obj.mockCallback).toHaveBeenCalledTimes(1);
  });
});
