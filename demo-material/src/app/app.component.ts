import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
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

  constructor(
    private dialog: MatDialog,
    private service: ServiceService,
  ) {}

  openServiceDialog(): void {
    this.dialog.open(ServiceEditorComponent, {
      panelClass: 'service-editor-dialog',
      width: '575px',
      data: this.service.get('')
    }).afterClosed().subscribe(
      data => console.log(data)
    );
  }
}
