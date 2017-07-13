import { Component } from '@angular/core';

@Component({
  selector: 'app-msh',
  templateUrl: './msg.html',
  styleUrls: ['./msg.css']
})
export class MsgComponent {

  items = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 3, color: 'lightpink'}
  ];
}
