import { Component } from '@angular/core';

@Component({
  selector: 'app-hooks-page',
  templateUrl: './hooks-page.component.html',
  styleUrls: ['./hooks-page.component.css']
})
export class HooksPageComponent {

  hookInput:string = "oi"

  testarHook(){
    this.hookInput = 'Tchau'
  }

}
