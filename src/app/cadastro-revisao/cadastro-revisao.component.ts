import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-revisao',
  templateUrl: './cadastro-revisao.component.html',
  styleUrl: './cadastro-revisao.component.css'
})
export class CadastroRevisaoComponent {


  constructor(private router: Router) {}


  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  


}
