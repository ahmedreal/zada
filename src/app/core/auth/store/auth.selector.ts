import { selectAuthState } from './../../store/app.selector';
import { AuthState } from './auth.state';
import { createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';


export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);