import { environment } from './../../../../environments/environment';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    //return this.http.get<User[]>(`${this.url}/user`);
    return of([
      {
        id: 1,
        firstName : 'Ahmed',
        lastNAme: 'EL KOUCH',
        dateOfBirth: new Date(),
        address:{
          address1: '9 rue du Bois Joly',
          address2: '',
          city: {code: '92', value: 'Nanterre'},
          zipCode: 92000,
          country: {code: 'fr', value: 'France'}
        }
      },      
      {
        id: 2,
        firstName : 'Zakaria',
        lastNAme: 'ABOUHAMZA',
        dateOfBirth: new Date(),
        address:{
          address1: '9 rue du Bois Joly',
          address2: '',
          city: {code: '75', value: 'Paris'},
          zipCode: 75000,
          country: {code: 'fr', value: 'France'}
        }
      },      
      {
        id: 3,
        firstName : 'Azzeddine',
        lastNAme: 'ALKHAWA',
        dateOfBirth: new Date(),
        address:{
          address1: '9 rue du Bois Joly',
          address2: '',
          city: {code: '75', value: 'Paris'},
          zipCode: 75000,
          country: {code: 'fr', value: 'France'}
        }
      },      
      {
        id: 4,
        firstName : 'Driss',
        lastNAme: 'ABOUZINAD',
        dateOfBirth: new Date(),
        address:{
          address1: '15 rue du Bois Joly',
          address2: '',
          city: {code: '93', value: 'Montrueil'},
          zipCode: 93000,
          country: {code: 'fr', value: 'France'}
        }
      }
    ]);
  }
  
}
