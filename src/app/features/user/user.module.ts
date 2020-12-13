import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { UserEffects } from './store/user.effect';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
		path: '',
		component: UserComponent
	}
]

@NgModule({
  declarations: [UserComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
