import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { tema } from '../model/tema';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: tema = new tema
  listaTemas: tema[]

  constructor(

    private router: Router,
    private temaService: TemaService
    

  ) { }

  ngOnInit(){

if(environment.token ==""){
  this.router.navigate(["/entrar"])

}
this.temaService.refreshToken()
this.findAllTemas()
  

  }

findAllTemas(){
  this.temaService.getAllTema().subscribe((resp: tema[]) => {
    this.listaTemas = resp
  })
}



cadastrar(){
  this.temaService.postTema(this.tema).subscribe((resp: tema)=>{
    this.tema = resp
    alert("Tema cadastrado com sucesso!")
    this.findAllTemas()
    this.tema = new tema()
  })
}

}
