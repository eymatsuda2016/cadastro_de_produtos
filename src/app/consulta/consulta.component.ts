import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  imports: [ MatInputModule,
             MatCardModule,
             FlexLayoutModule,
             MatInputModule,
             MatIconModule,
             FormsModule,
             MatTableModule,
             MatButtonModule,
             CommonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  nomeBusca: string= ' ';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = [ "id", "nome", "cpf", "dataNascimento", "email", "acoes" ];

  constructor(
    private service: ClienteService,
    private  router: Router

  ){
    
  }
  
  ngOnInit(){

    this.listaClientes = this.service.pesquisarCliente (' ');

  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarCliente(this.nomeBusca);
  }

  preparaEditar(id: string){
    this.router.navigate(['/cadastro'], {queryParams: {"id": id} } )
  }

}
