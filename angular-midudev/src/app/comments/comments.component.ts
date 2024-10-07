import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg" alt="">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
      eligendi ea impedit cum atque quod corrupti repudiandae blanditiis? 
      Quasi eos architecto velit commodi odit voluptatum officia? Dolorum at quia eligendi.</p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;   
  }
  `
})
export class CommentsComponent {

}
