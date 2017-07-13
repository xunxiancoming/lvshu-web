import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './loginDialog.html',
  styleUrls: ['./loginDialog.css']
})
export class LoginDialogComponent {
  constructor(public dialogRef: MdDialogRef<LoginDialogComponent>) {

  }
}
