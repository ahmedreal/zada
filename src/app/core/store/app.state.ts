import { authReducer, AuthState } from './../auth/store/auth.state';
import { ActionReducerMap, createReducer } from '@ngrx/store';




export interface AppState {
    auth :AuthState
}

export const AppReducers: ActionReducerMap<AppState> = {
    auth: authReducer,
};


