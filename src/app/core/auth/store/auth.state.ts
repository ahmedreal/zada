import { authLogin, authLogout } from './auth.action';
import { createReducer, on, Action  } from '@ngrx/store';

export interface AuthState {
    isAuthenticated: boolean
}

export const initialState: AuthState = {
    isAuthenticated: false
};
  
const reducer = createReducer(
initialState,
on(authLogin, (state) => ({ ...state, isAuthenticated: true })),
on(authLogout, (state) => ({ ...state, isAuthenticated: false }))
);

export function authReducer(
state: AuthState | undefined,
action: Action
): AuthState {
return reducer(state, action);
}