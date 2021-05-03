import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  private n1: any;
  private n2: any;
  private result: number;
  private operacao : any;

  constructor(private calculadoraService: CalculadoraService) {
    this.n1= null;
    this.n2 = null;
    this.result = 0;
    this.operacao = null;
   }

  ngOnInit(): void {
  }
  limpar(){
    this.n1= null;
    this.n2 = null;
    this.result = 0;
    this.operacao = null;
  }
  adicionarNumero(numero : string): void{
    if(this.operacao === null){
      this.n1 = this.cocatenarNumero(this.n1, numero);
    }else{
      this.n2 = this.cocatenarNumero(this.n2, numero);
    }
  }
  cocatenarNumero(numAtual: any, numConcat: any): any{
    
    if(numAtual === '0' || numAtual === null ){
        numAtual = '';
    }

    if(numConcat === '.' && numAtual === ''){
      return '0.'; 
    }

    if(numConcat === '.' && numAtual.indexOf('.')>-1){
      return numAtual;
    }
    return numAtual + numConcat;

  }
  definirOperacao(operacao: string): void{
    if(this.operacao === null){
      this.operacao = operacao;
      return;
    }
    if (this.n2 !== null){
      this.calcular();
      this.operacao = operacao;
      this.n1 = this.result.toString();
      this.n2 = null;
      this.result = 0;
    }

  }
  calcular(): void{
    if(this.n2 === null){
      return;
    }
    this.result = this.calculadoraService.calcular(
      parseFloat(this.n1),
      parseFloat(this.n2),
      this.operacao
    )
  }
  get display():string{
    if(this.result !== 0){
      return this.result.toString();
    }
    if(this.n2 !== null){
      return this.n2;
    }
    if(this.n1 !== null){
      return this.n1;
    }

    return '0';
  }

}
