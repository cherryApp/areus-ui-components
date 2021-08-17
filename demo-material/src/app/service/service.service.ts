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

  private titles: string[] = [
    'Autófényezést vállalok',
    'Gázszerelés garanciával',
    'Takarítás és Rendrakás',
  ];

  private descriptions: string[] = [
    'Kiváló alapanyagokkal dolgozunk vevőink elégedettségére',
    'Soha nem fogja megbánni ha minket választ',
    'A legjobb árakon garanciával',
  ];

  private priceTitles: string[] = [
    'Mosás',
    'Takarítás',
    'Polírozás',
    'Alvázmosás',
    'Porszívózás',
  ];

  private get service(): IBaseService {
    return {
      title: this.getRandomItem(this.titles),
      description: this.getRandomItem(this.descriptions),
      priceItems: [
        {
          title: this.getRandomItem(this.priceTitles),
          value: [true, false][Math.floor(Math.random()*2)],
          itemType: ['mosás', 'autó', 'ház'][Math.floor(Math.random()*3)],
          price: Math.floor(Math.random() * 10**4)
        },
        {
          title: this.getRandomItem(this.priceTitles),
          value: [true, false][Math.floor(Math.random()*2)],
          itemType: ['mosás', 'autó', 'ház'][Math.floor(Math.random()*3)],
          price: Math.floor(Math.random() * 10**4)
        },
      ],
      isVisible: [true, false][Math.floor(Math.random()*2)],
    }
  };

  constructor() { }

  getRandomItem(arrayLike: any[]): any {
    return arrayLike[Math.floor(Math.random() * arrayLike.length)];
  }

  getAll(): Observable<IBaseService[]> {
    return of([this.service]);
  }

  get(_id: string): Observable<IBaseService> {
    return of(this.service);
  }
}
