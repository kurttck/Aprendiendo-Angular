import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for(game of games; track game.id){
        <li (click)="fav(game.name)" >{{ game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username: string = "";
  @Output() addFavoriteEvent= new EventEmitter<string>();

  games =[
    {
      id:1,
      name:"Megaman X"
    },
    {
      id:2,
      name:"Super Mario"
    },
    {
      id:3,
      name:"Zelda"
    }
  ]

  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName);
  }
}
