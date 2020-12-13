import { UserState } from './user.reducer';
import { AppState } from './../../../core/store/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<UserState>(
    'user'
);

export const UserStateSelector = createSelector(
    selectUserState,
    (state: UserState) => state
  );
  
  export const UsersSelector = createSelector(
    selectUserState,
    (state: UserState) => state.users
  );

  export const selectedUserSelector = createSelector(
    selectUserState,
    (state: UserState) => state.selectedUser
  );
