import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  memory: any = []

  constructor()
  {
  }


  @HostListener('click', ['$event'])
  effect(event: any)
  {

    let element: any = event.target;
    let parent: any = element.parentNode;
    let children: any = parent.children;



    if (element.id == 'root' || element.id == 'stem' || element.id == 'branch')
    {


      if (this.memory[this.memory.length-1] != element)
      {
        if (this.memory.length == 0)
        {
          //this.memory[0] = (children[2]);
          //this.memory.push(element)
          children[2].style.bottom = '80px';
          children[2].style.zIndex = 0;
          children[2].classList.toggle('transition');
          setTimeout(() => {children[2].classList.toggle('transition');}, 500)
          //console.log('check')
        }
        this.memory.push(element)


        this.memory[this.memory.length-1].style.bottom = '0px';
        this.memory[this.memory.length-1].style.zIndex = 1;
        this.memory[this.memory.length-1].classList.toggle('fx');
        setTimeout(() => {this.memory[this.memory.length-1].classList.toggle('fx');}, 500)

      }
      if (this.memory[this.memory.length-2])
      {
        this.memory[this.memory.length-2].style.bottom = '80px';
        this.memory[this.memory.length-2].style.zIndex = 0;
        this.memory[this.memory.length-2].classList.toggle('transition');
        setTimeout(() => {this.memory[this.memory.length-2].classList.toggle('transition');}, 500)
      }

      if (this.memory[this.memory.length-1] != children[0] && this.memory[this.memory.length-2] != children[0])
      {
        children[0].style.bottom = '160px';
        children[0].style.zIndex = -1;
        children[0].classList.toggle('transition');
        setTimeout(() => {children[0].classList.toggle('transition');}, 500)
      }
      else if (this.memory[this.memory.length-1] != children[1] && this.memory[this.memory.length-2] != children[1])
      {
        children[1].style.bottom = '160px';
        children[1].style.zIndex = -1;
        children[1].classList.toggle('transition');
        setTimeout(() => {children[1].classList.toggle('transition');}, 500)
      }
      else
      {
        children[2].style.bottom = '160px';
        children[2].style.zIndex = -1;
        children[2].classList.toggle('transition');
        setTimeout(() => {children[2].classList.toggle('transition');}, 500)
      }

      //console.log(this.memory)


      for (const child of children)
      {
        child.style.pointerEvents = 'none';
        setTimeout(() => child.style.pointerEvents = 'auto', 500)
      }
    }

  }

}
