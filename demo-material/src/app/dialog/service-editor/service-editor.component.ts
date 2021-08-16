import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { IBaseService } from 'src/app/service/service.service';

@Component({
  selector: 'app-service-editor',
  templateUrl: './service-editor.component.html',
  styleUrls: ['./service-editor.component.scss']
})
export class ServiceEditorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ServiceEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public service$: Observable<IBaseService | null>,
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
