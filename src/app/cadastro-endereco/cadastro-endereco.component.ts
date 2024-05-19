import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrl: './cadastro-endereco.component.css'
})
export class CadastroEnderecoComponent {

  constructor(private router: Router) {}


  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  

}
