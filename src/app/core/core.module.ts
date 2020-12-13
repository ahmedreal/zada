import { environment } from './../../environments/environment';
import { SharedModule } from './../shared/shared.module';
import { AppReducers } from './store/app.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HttpClientModule,
    // ngrx
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'zada',
			maxAge: 25,
			logOnly: environment.production
		}),
  ]
})
export class CoreModule { }
