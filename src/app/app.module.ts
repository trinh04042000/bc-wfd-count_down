import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerAliasComponent } from './countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerGetSetComponent } from './countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerEventComponent } from './countdown-timer-event/countdown-timer-event.component';
import { CountdownTimerOnchangesComponent } from './countdown-timer-onchanges/countdown-timer-onchanges.component';
import { CountdownTimerEventAliasComponent } from './countdown-timer-event-alias/countdown-timer-event-alias.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';

// import { CountdownTimerAliasComponent } from './countdown-timer-alias/countdown-timer-alias.component';
//
@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    CountdownTimerAliasComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerEventComponent,
    CountdownTimerOnchangesComponent,
    CountdownTimerEventAliasComponent,
    RatingBarComponent,
 //   RatingComponent,
    // CountdownTimerAliasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
