import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IFormGridItem } from './areus-form-controls/controls/hg-form-price-grid/hg-form-price-grid.component';
import { ServiceEditorComponent } from './dialog/service-editor/service-editor.component';
import { IBaseService, ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-material';
  animal: string = '';

  service$: Observable<IBaseService> = this.service.get('');

  constructor(
    private dialog: MatDialog,
    private service: ServiceService,
  ) {}

  openServiceDialog(): void {
    this.dialog.open(ServiceEditorComponent, {
      width: '400px',
      data: { animal: this.animal },
    }).afterClosed().subscribe(
      data => console.log(data)
    );
  }
}
