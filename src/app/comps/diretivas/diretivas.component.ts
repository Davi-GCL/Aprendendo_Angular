import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  styleExp:string = '40px'

  objStyle = {
    'border': '1px solid #000',
    'padding': '10px'
  }
}
