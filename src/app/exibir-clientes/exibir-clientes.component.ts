import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

interface Cliente {
  nome: string;
  telefone: string;
  cpf: string;
  email: string;
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@Component({
  selector: 'app-exibir-clientes',
  templateUrl: './exibir-clientes.component.html',
  styleUrls: ['./exibir-clientes.component.css']
})
export class ExibirClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private http: HttpClient, private router: Router,private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.http.get<Cliente[]>('http://localhost:8080/clientes')
      .subscribe(data => {
        this.clientes = data;
        console.log('Clientes carregados:', this.clientes);
      });
  }

  editarCliente(cliente: Cliente): void {
    console.log('Cliente a ser editado:', cliente);
    this.clienteService.setCliente(cliente);
    this.router.navigate(['/editar-cliente']);
  }

  entrarPrincipal(): void {
    this.router.navigate(['/tela-principal']);
  }
}
