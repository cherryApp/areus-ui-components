import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFormGridItem } from '../areus-form-controls/controls/hg-form-price-grid/hg-form-price-grid.component';

export interface IBaseService {
  title: string;
  description: string;
  priceItems: IFormGridItem[];
  isVisible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private service: IBaseService = {
    title: 'Autó és egyéb járműfényezést vállalok',
    description: `Édesapámtól ellesett fortélyokkal és trükkökkel igazán
vagány, egyedi külsőt varázsolok az autódnak. Külön
szenvedélyem az old timerek javítása, fényezése. Ezen
felül informatikában is jártas vagyok.`,
    priceItems: [
      { title: 'Mosás', value: true, itemType: 'mosás', price: 4900 },
      { title: 'Belső takarítás', value: false, itemType: 'autó', price: 20000 },
      { title: 'Egyedi fényezés', value: true, itemType: 'autó', price: 20000 },
    ],
    isVisible: true,
  };

  constructor() { }

  getAll(): Observable<IBaseService[]> {
    return of([this.service]);
  }

  get(_id: string): Observable<IBaseService> {
    return of(this.service);
  }
}
