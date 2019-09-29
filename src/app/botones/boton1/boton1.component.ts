import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton1',
  templateUrl: './boton1.component.html',
  styleUrls: ['./boton1.component.css']
})
export class Boton1Component implements OnInit {

  bubblyButtons = document.getElementsByClassName("bubbly-button");


  animateButton = function(e:any) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
    for (var i = 0; i < this.bubblyButtons.length; i++) {
      this.bubblyButtons[i].addEventListener('click', this.animateButton, false);
    }
  };
  
  
  

  constructor() { }

  ngOnInit() {
    this.animateButton(this.bubblyButtons);
  }

}
