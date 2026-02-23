import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mk-i';
  @HostListener('ontouchstart', ['$event'])
  touchstart(event: any)
  {
    const tr: any = document.querySelectorAll('tr');
    const td: any = document.querySelectorAll('td')

    for (let data of td)
    {
      data.style.background = 'darkseagreen';
    }


    let p = event.target.parentNode;

    //console.log(event.target.tagName)
    if (event.target.tagName == 'TD' || p.tagName == 'TD')
    {
      let element: any = event.target;
      //console.log(element.cellIndex);

      for (let row of tr)
      {
        row.children[element.cellIndex].style.background = 'seagreen';
      }


      //console.log(event.target.tagName)
      let siblings = element.parentNode.children;
      for (let sibling of siblings)
        if (sibling == siblings[element.cellIndex - 1] && sibling != undefined)
          sibling.style.background = '#bca58f';
        else if (sibling == siblings[element.cellIndex + 1] && sibling != undefined)
          sibling.style.background = 'brown';
        else if (sibling != siblings[element.cellIndex] && sibling != undefined)
          sibling.style.background = 'seagreen';

      element.style.background = 'rosybrown';
      //console.log(Array.prototype.indexOf.call(tr, element.parentNode))

      if (tr[Array.prototype.indexOf.call(tr, element.parentNode) + 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, element.parentNode) + 1].children[element.cellIndex].style.background = '#a9846a';
      if (tr[Array.prototype.indexOf.call(tr, element.parentNode) - 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, element.parentNode) - 1].children[element.cellIndex].style.background = '#a58fbc';
    }

    if (event.target.tagName == 'INPUT' )
    {
      let elem = event.target
      elem.focus();
    }

  }

  @HostListener('mouseover', ['$event'])
  mouseover(event: any)
  {
    const tr: any = document.querySelectorAll('tr');
    const td: any = document.querySelectorAll('td');
    //
    //const input: any = document.querySelectorAll('td>input');


    for (let data of td)
    {
      data.style.background = 'darkseagreen';
    }


    //console.log(event.target.tagName)
    if (event.target.tagName == 'TD' )
    {
      let element: any = event.target;
      //console.log(element.cellIndex);

      for (let row of tr)
      {
        row.children[element.cellIndex].style.background = 'seagreen';
      }


      //console.log(event.target.tagName)
      let siblings = element.parentNode.children;
      for (let sibling of siblings)
        if (sibling == siblings[element.cellIndex - 1] && sibling != undefined)
          sibling.style.background = '#bca58f';
        else if (sibling == siblings[element.cellIndex + 1] && sibling != undefined)
          sibling.style.background = 'brown';
        else if (sibling != siblings[element.cellIndex] && sibling != undefined)
          sibling.style.background = 'seagreen';

      element.style.background = 'rosybrown';
      //console.log(Array.prototype.indexOf.call(tr, element.parentNode))

      if (tr[Array.prototype.indexOf.call(tr, element.parentNode) + 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, element.parentNode) + 1].children[element.cellIndex].style.background = '#a9846a';
      if (tr[Array.prototype.indexOf.call(tr, element.parentNode) - 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, element.parentNode) - 1].children[element.cellIndex].style.background = '#a58fbc';
    }

    if (event.target.tagName == 'INPUT')
    {
      let elem = event.target
      elem.focus();
      let parent = elem.parentNode;
      let siblings = parent.parentNode.children;
      for (let sibling of siblings)
        if (sibling == siblings[parent.cellIndex - 1] && sibling != undefined)
          sibling.style.background = '#bca58f';
        else if (sibling == siblings[parent.cellIndex + 1] && sibling != undefined)
          sibling.style.background = 'brown';
        else if (sibling != siblings[parent.cellIndex] && sibling != undefined)
          sibling.style.background = 'seagreen';

      parent.style.background = 'rosybrown';

      if (tr[Array.prototype.indexOf.call(tr, parent.parentNode) + 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, parent.parentNode) + 1].children[parent.cellIndex].style.background = '#a9846a';
      if (tr[Array.prototype.indexOf.call(tr, parent.parentNode) - 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, parent.parentNode) - 1].children[parent.cellIndex].style.background = '#a58fbc';
    }

  }
}
