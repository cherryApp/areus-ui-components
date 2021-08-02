import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceEditorComponent } from './dialog/service-editor/service-editor.component';

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
