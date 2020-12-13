import { User } from './../models/user.model';
import { createAction, props } from '@ngrx/store';

export const getUsers = createAction('[User] getUsers');
export const getUsersSuccess = createAction('[User] getUsers sucess', props<{ users: User[] }>());
export const getUsersError = createAction('[User] getUsers error', props<{ error: string }>());

export const addUser = createAction('[User] add user');
export const addUserSuccess = createAction('[User] add user sucess', props<{ user: User }>());
export const addUserError = createAction('[User] add user error', props<{ error: string }>());