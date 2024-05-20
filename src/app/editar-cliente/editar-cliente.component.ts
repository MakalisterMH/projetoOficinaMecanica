import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: any = {};

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.getCliente();
    if (this.cliente) {
      console.log('Cliente recebido:', this.cliente);
    } else {
      console.log('Nenhum cliente recebido');
    }
  }

  atualizarCliente(): void {
    console.log('Cliente atualizado:', this.cliente);
    // Aqui você pode adicionar a lógica para atualizar o cliente no backend
    this.router.navigate(['/exibir-clientes']);
    this.clienteService.clearCliente();
  }

  entrarPrincipal(): void {
    this.router.navigate(['/tela-principal']);
  }

  entrarExibirClientes(): void {

    this.router.navigate(['/exibir-clientes']);
  }

}
