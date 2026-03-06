import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
    public mensagem: String = "";

    public cadastrar(){
        this.mensagem = "Cadastro realizado com sucesso!";
    }
}
