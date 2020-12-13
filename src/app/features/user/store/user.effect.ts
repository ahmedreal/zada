import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { UserState } from './user.reducer';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as featureActions from './user.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
	constructor(
		private store: Store<UserState>,
        private actions$: Actions,
        private userService: UserService
	) {}

	getUsersEffect$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(featureActions.getUsers),
                switchMap(() => this.userService.getUser().pipe(
                    map((users: User[]) => featureActions.getUsersSuccess({users})),
                    catchError((error: HttpErrorResponse) => of(featureActions.getUsersError({error: error.message})))
                ))
			)
	);
}
