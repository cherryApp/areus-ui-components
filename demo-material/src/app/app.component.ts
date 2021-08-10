import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFormGridItem } from './areus-form-controls/controls/hg-form-price-grid/hg-form-price-grid.component';
import { ServiceEditorComponent } from './dialog/service-editor/service-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-material';
  animal: string = '';
  testService: any = {
    label: 'Szolgáltatásod rövid címe',
    value: 'Autó és egyéb járműfényezést vállalok',
    maxLength: 75
  };
  testTextarea: any = {
    label: 'Szolgáltatásaid bővebb kifejtése',
    value: `Édesapámtól ellesett fortélyokkal és trükkökkel igazán
vagány, egyedi külsőt varázsolok az autódnak. Külön
szenvedélyem az old timerek javítása, fényezése. Ezen
felül informatikában is jártas vagyok.`,
    maxLength: 250
  };

  priceItems: IFormGridItem[] = [
    {title: 'Mosás', value: true, itemType: 'autó', price: 20000},
    {title: 'Belső takarítás', value: false, itemType: 'autó', price: 20000},
    {title: 'Egyedi fényezés', value: true, itemType: 'autó', price: 20000},
  ];

  constructor(
    private dialog: MatDialog,
  ) {}

  openServiceDialog(): void {
    this.dialog.open(ServiceEditorComponent, {
      width: '400px',
      data: {animal: this.animal},
    }).afterClosed().subscribe(
      data => console.log(data)
    );
  }
}
