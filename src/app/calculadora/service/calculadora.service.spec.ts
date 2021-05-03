import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('deve garantir que 1 + 4 = 5', inject([CalculadoraService], (service: CalculadoraService)=>{ 
          let soma = service.calcular(1, 4, CalculadoraService.SOMA);
          expect(soma).toEqual(5);
    })
  );
  it ('deve garantir que 4 - 3 = 1', inject([CalculadoraService], (service: CalculadoraService)=>{
      let result = service.calcular(4, 3, CalculadoraService.SUBTRACAO);
      expect(result).toEqual(1)
    })
  );
  it ('deve gatantir que 4 * 2 = 8', inject([CalculadoraService], (service: CalculadoraService)=>{
      let result = service.calcular(4, 2, CalculadoraService.MULTIPLICACAO);
      expect(result).toEqual(8)
    })
  );
  it('deve garantir que 4 / 2 = 2', inject([CalculadoraService], (service: CalculadoraService)=>{
      let result = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(result).toEqual(2);
    })
  );
     
});
