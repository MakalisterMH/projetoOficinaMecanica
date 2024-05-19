import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  constructor(private router: Router) {}


  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  

}
