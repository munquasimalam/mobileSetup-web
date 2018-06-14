import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { User } from '../models/user';
 
@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }
 
    login(username: String,password: String) {
    var user = {username:username,password:password}
        return this.http.post('http://localhost:3000/v1/login', user);
    }
}