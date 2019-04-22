import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FFResizeSensorModule} from 'ff-resize-sensor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FFResizeSensorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
