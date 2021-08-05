import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-service-editor',
  templateUrl: './service-editor.component.html',
  styleUrls: ['./service-editor.component.scss']
})
export class ServiceEditorComponent implements OnInit {

  testValue: string = 'test';

  constructor(
    public dialogRef: MatDialogRef<ServiceEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {animal: string},
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
