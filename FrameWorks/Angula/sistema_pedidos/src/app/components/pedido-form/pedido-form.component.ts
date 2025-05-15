import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ItemPedido, Pedido } from 'src/app/models/pedido.model';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit{
  //atributos
  clientes: Cliente[] = []; //Lista de cliente
  produtos: Produto[] = []; //Lista de produtos
  clienteID = ""; //qunado o cliente é selecionado
  desconto = 0 ; // calcula o desconto a se plicado
  itens : ItemPedido[] = [];  

  constructor(private dadosService: DadosService){}

  ngOnInit(): void { //vai aconter ao inicar o site
    this.dadosService.getClientes().subscribe(c => this.clientes = c);
    this.dadosService.getProdutos().subscribe(p => {
      this.produtos=p;
      this.itens=p.map(prod => ({produtoID:prod.id, quantidade:0}));
    });
  }

  salvarPedidio(){
    const cliente = this.clientes.find(c => c.id.toString()===this.clienteID);
    if(!cliente) return;
    
    const itensSelecionados = this.itens.filter(i=>i.quantidade>0);
    const pedido = new Pedido(this.dadosService.getPedidos.length+1,cliente,itensSelecionados,this.desconto);
    this.dadosService.adicionarPedido(pedido).subscribe();

    //limpar os campos
    this.clienteID="";
    this.desconto = 0
    this.itens.forEach(i=>i.quantidade=0);
  }

}


