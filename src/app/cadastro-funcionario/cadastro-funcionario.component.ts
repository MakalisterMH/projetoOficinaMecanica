import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrl: './cadastro-funcionario.component.css'
})
export class CadastroFuncionarioComponent {


  constructor(private router: Router) {}


  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  

}
