import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { userLogin } from '../model/userLogin';
import { usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  
token = {

  headers: new HttpHeaders().set("Authorization", environment.token)

}

refreshToken(){
  this.token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }
} 

  entrar(userLogin: userLogin): Observable<userLogin>{
    return this.http.post<userLogin>("https://blogpessoalcami.herokuapp.com/usuarios/logar", userLogin)
  
  }

  cadastrar(usuario:usuario): Observable<usuario>{
    return this.http.post<usuario>("https://blogpessoalcami.herokuapp.com/usuarios/cadastrar", usuario)
    //https://blogpessoalcami.herokuapp.com/usuarios/logar
    //http://localhost:8080/usuarios/logar
    //http://localhost:8080/usuarios/cadastrar
  }

  getByIdUsuario(id:number): Observable<usuario>{
    return this.http.get<usuario>(`https://blogpessoalcami.herokuapp.com/usuarios/${id}`, this.token)

  }


  logado(){

    let ok: boolean = false
    if(environment.token !=""){
      ok = true

    }

    return ok
  }

}
