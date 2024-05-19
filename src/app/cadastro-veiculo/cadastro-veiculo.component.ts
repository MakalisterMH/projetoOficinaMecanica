import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.css'
})
export class CadastroVeiculoComponent {

  constructor(private router: Router) {}


  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  

}
