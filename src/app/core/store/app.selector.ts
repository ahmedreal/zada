import { AuthState } from './../auth/store/auth.state';
import { AppState } from './app.state';
import { createFeatureSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
    'auth'
  );