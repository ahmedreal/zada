import { User } from './../../models/user.model';
import { Store } from '@ngrx/store';
import { UserState } from './../../store/user.reducer';
import { Component, OnInit } from '@angular/core';
import * as featureActions from '../../store/user.action';
import * as featureSelectors from '../../store/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.select(featureSelectors.UsersSelector).subscribe((users: User[]) => console.log('users : ', users));
  }

  getUsers() {
    this.store.dispatch(featureActions.getUsers());
  }

}
