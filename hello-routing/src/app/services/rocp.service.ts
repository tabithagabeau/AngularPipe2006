import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RocpService {

  constructor(private httpCli: HttpClient) { }

  postTodo(todoForm): Observable <string[]> {
    const httpHead = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Controll-Alllow-Origin': '*'
    })
    };
    return this.httpCli.post<string[]>('http://ec2-18-218-5-243.us-east-2.compute.amazonaws.com:8080/todos', todoForm, httpHead);
  }

  getTodos(): Observable<string[]> {
    const httpHead = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Controll-Alllow-Origin': '*' // this is absolutely necessary
    })
    };
    return this.httpCli.get<string[]>('http://ec2-18-218-5-243.us-east-2.compute.amazonaws.com:8080/todos', httpHead);
  }
}
