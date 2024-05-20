import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroEnderecoComponent } from './cadastro-endereco/cadastro-endereco.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { CadastroRevisaoComponent } from './cadastro-revisao/cadastro-revisao.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClienteService } from './cliente.service';
import { FuncionarioService } from './funcionario.service';
import { ExibirClientesComponent } from './exibir-clientes/exibir-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaPrincipalComponent,
    CadastroClienteComponent,
    CadastroFuncionarioComponent,
    CadastroEnderecoComponent,
    CadastroVeiculoComponent,
    CadastroRevisaoComponent,
    ExibirClientesComponent,
    EditarClienteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [ClienteService,FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
