import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
    public mensagem: String = "";

    public entrar(){
        this.mensagem = "Seja bem vindo ao site!";
    }
}