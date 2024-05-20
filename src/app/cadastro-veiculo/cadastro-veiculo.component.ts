import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.css'
})
export class CadastroVeiculoComponent implements OnInit {

  cliente = {
    nome:'',
    cpf: ''
  };


  constructor(private router: Router) {}

  ngOnInit(): void {
    // Carregar os dados do cliente salvos anteriormente
    const clienteSalvo = history.state.cliente;
    if (clienteSalvo) {
      this.cliente.cpf = clienteSalvo.cpf;
      this.cliente.nome = clienteSalvo.nome;
    }
  }

  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  

}
