import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { SuiAccordionModule } from 'ng2-semantic-ui';

import { LoadJsonEffects } from './effects';

import { AppComponent } from './app.component';
import { levelZeroReducer } from './reducers';

import { JsonService } from './json_service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(levelZeroReducer),
    EffectsModule.run(LoadJsonEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    SuiAccordionModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
