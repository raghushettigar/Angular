import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable()

export class ApiService {
    constructor(private http: HttpClient) { }
    private user = new BehaviorSubject('');
    currentMessage = this.user.asObservable();

    getUsers(): Observable<any> {
        return this.http.get(`${environment.apiUrl}users`);
    }
    changeUser(user: string) {
        this.user.next(user)
    }

}