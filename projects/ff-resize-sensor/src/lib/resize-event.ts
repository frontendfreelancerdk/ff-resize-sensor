export class FFResizeSensorEvent {
  constructor(
    readonly el: HTMLElement,
    readonly oldWidth: number,
    readonly oldHeight: number,
    readonly width: number,
    readonly height: number
  ) {
  }
}
