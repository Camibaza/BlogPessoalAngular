import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from '../model/userLogin';
import { usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: userLogin): Observable<userLogin>{
    return this.http.post<userLogin>("https://blogpessoalcami.herokuapp.com/usuarios/logar", userLogin)
  
  }

  cadastrar(usuario:usuario): Observable<usuario>{
    return this.http.post<usuario>("https://blogpessoalcami.herokuapp.com/usuarios/cadastrar", usuario)
    //https://blogpessoalcami.herokuapp.com/usuarios/logar
    //http://localhost:8080/usuarios/logar
    //http://localhost:8080/usuarios/cadastrar
  }
}
