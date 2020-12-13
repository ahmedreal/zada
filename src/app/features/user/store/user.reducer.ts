import { getUsersSuccess, getUsersError } from './user.action';
import { createReducer, Action, on } from '@ngrx/store';
import { User } from './../models/user.model';

export interface UserState {
    users: User[];
    selectedUser : User;
    error: string;
}

export const initialState: UserState = {
    users: [],
    selectedUser : null,
    error: null
};
  
const reducer = createReducer(
initialState,
on(getUsersSuccess, (state, action) => ({ ...state, users: action.users })),
on(getUsersError, (state, {error}) => ({ ...state, error }))
);

export function userReducer(
state: UserState | undefined,
action: Action
): UserState {
return reducer(state, action);
}