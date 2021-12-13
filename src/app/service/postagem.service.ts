import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { postagem } from '../model/postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

token = {

  headers: new HttpHeaders().set("Authorization", environment.token)
}

refreshToken(){
  this.token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }
} 

getAllPostagem(): Observable<postagem[]>{
  return this.http.get<postagem[]>("https:///blogpessoalcami.herokuapp.com/postagens", this.token)
}

postPostagem(postagem: postagem): Observable<postagem>{
  return this.http.post<postagem>("https:///blogpessoalcami.herokuapp.com/postagens", postagem, this.token)
}

}