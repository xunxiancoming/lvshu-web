import { Component } from '@angular/core';
import {MdDialog} from '@angular/material';
import {LoginDialogComponent} from '../loginDialog/loginDialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './mine.html',
  styleUrls: ['./mine.css']
})
export class MineComponent {
  constructor(public loginDialog: MdDialog) {
  }

  showLoginDialog() {
    this.loginDialog.open(LoginDialogComponent)
      .afterClosed()
      .subscribe()
  }
}
