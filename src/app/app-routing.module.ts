import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroEnderecoComponent } from './cadastro-endereco/cadastro-endereco.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { CadastroRevisaoComponent } from './cadastro-revisao/cadastro-revisao.component';
import { ExibirClientesComponent } from './exibir-clientes/exibir-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes: Routes = [

  {path: 'tela-login', component: TelaLoginComponent},
  {path: 'tela-principal', component: TelaPrincipalComponent},
  {path: 'cadastro-cliente', component: CadastroClienteComponent},
  {path: 'cadastro-funcionario', component: CadastroFuncionarioComponent},
  {path: 'cadastro-endereco', component: CadastroEnderecoComponent},
  {path: 'cadastro-veiculo', component: CadastroVeiculoComponent},
  {path: 'cadastro-revisao', component: CadastroRevisaoComponent},
  {path: 'exibir-clientes', component: ExibirClientesComponent},
  {path: 'editar-cliente', component: EditarClienteComponent},
  { path: '', redirectTo: 'tela-login', pathMatch: 'full' }, // Rota inicial para a NavBarComponent
  { path: '**', redirectTo: 'tela-login' } // Rota de fallback, caso a rota não seja encontrada

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
