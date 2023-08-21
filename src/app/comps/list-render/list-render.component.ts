import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  comidas = [
    {name: "Maçã", type: "Fruta"},
    {name: "Pizza", type: "Massa"},
    {name: "Alface", type: "Verdura"},
    {name: "Uva", type: "Fruta"},
    {name: "Limão", type: "Fruta"}
  ]
}
