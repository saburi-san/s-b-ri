import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogue',
  imports: [FormsModule, CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

  data: any = [
    {
      unit: 'LN01',
      name: 'le nuage',
      class: 'couch',
      quantity: 30,
      orderdate: '31-01-2026',
      isedit: false
    },
    {
      unit: 'LN02',
      name: 'les petite nuages',
      class: 'ottoman',
      quantity: 30,
      orderdate: '31-02-2026',
      isedit: false
    },
    {
      unit: 'TB01',
      name: 'table basse',
      class: 'coffee table',
      quantity: 5,
      orderdate: '10-02-2026',
      isedit: false
    },
    {
      unit: 'TB02',
      name: 'petite table basse',
      class: 'accent table',
      quantity: 10,
      orderdate: '10-02-2026',
      isedit: false
    },
    {
      unit: 'TP01',
      name: 'tapis persan',
      class: 'persian rug',
      quantity: 5,
      orderdate: '10-02-2026',
      isedit: false
    }
  ]

  constructor()
  {

  }

  edit(item: any)
  {
    for (let item of this.data)
    {
      item.isedit = false;
    }
    item.isedit = true;
    //console.log(item)
  }

  post(item: any, index: number)
  {
    this.data[index] = item;

    item.isedit = !item.isedit
    const tds = document.querySelectorAll('td');
    for (const td of tds)
    {
      td.style.background = 'darkseagreen';
    }
    //console.log(index)
    //console.log(item)
    //console.log(this.data)
  }

  @HostListener('window:keyup.escape', ['$event'])
  escape(event: any)
  {
      for (let entry of this.data)
      {
        entry.isedit = false;
      }
  }

  sameplace: any = [];
  i = 0;
  @HostListener('touchstart', ['$event'])
  doubletap(event: any)
  {
    this.sameplace[this.i] = event.target
    if (this.sameplace[this.i] != this.sameplace[this.i - 1] && event.target.tagName != 'INPUT')
    {
      for (let entry of this.data)
      {
        entry.isedit = false;
      }
    }

    if (event.target.tagName == 'TD')
    {

      if (this.sameplace[this.i] == this.sameplace[this.i - 1])
      {
        const element = event.target
        const tr: any = document.querySelectorAll('tr');
        let item = Array.prototype.indexOf.call(tr, element.parentNode)
        //console.log(item)
        if (event.target.tagName != 'INPUT')
        {
          this.edit(this.data[item])
        }
        //console.log('check')
      }
    }
    this.i++;
  }

  @HostListener('ontouchstart', ['$event'])
  touchstart(event: any)
  {
    const tr: any = document.querySelectorAll('tr');
    const td: any = document.querySelectorAll('td')

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
          sibling.style.background = '#926851';
        else if (sibling != siblings[element.cellIndex] && sibling != undefined)
          sibling.style.background = 'seagreen';

      element.style.background = 'rosybrown';
      //console.log(Array.prototype.indexOf.call(tr, element.parentNode))

      if (tr[Array.prototype.indexOf.call(tr, element.parentNode) + 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, element.parentNode) + 1].children[element.cellIndex].style.background = '#a9846a';
      if (tr[Array.prototype.indexOf.call(tr, element.parentNode) - 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, element.parentNode) - 1].children[element.cellIndex].style.background = '#a17a7a';
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

      /*for (let row of tr)
      {
        row.children[element.cellIndex].style.background = 'seagreen';
      }*/

      //console.log(event.target.tagName)
      let siblings = element.parentNode.children;
      for (let sibling of siblings)
        if (sibling == siblings[element.cellIndex - 1] && sibling != undefined)
          sibling.style.background = '#bca58f';
        else if (sibling == siblings[element.cellIndex + 1] && sibling != undefined)
          sibling.style.background = '#926851';
        //else if (sibling != siblings[element.cellIndex] && sibling != undefined)
          //sibling.style.background = 'seagreen';

      element.style.background = 'rosybrown';
      //console.log(Array.prototype.indexOf.call(tr, element.parentNode))

      if (tr[Array.prototype.indexOf.call(tr, element.parentNode) + 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, element.parentNode) + 1].children[element.cellIndex].style.background = '#a9846a';
      if (tr[Array.prototype.indexOf.call(tr, element.parentNode) - 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, element.parentNode) - 1].children[element.cellIndex].style.background = '#a17a7a';
    }

    if (event.target.tagName == 'INPUT' || event.target.tagName == 'SPAN')
    {
      let elem = event.target
      elem.focus();
      let parent = elem.parentNode;
      let siblings = parent.parentNode.children;

     /* for (let row of tr)
      {
        row.children[parent.cellIndex].style.background = 'seagreen';
      }*/

      for (let sibling of siblings)
        if (sibling == siblings[parent.cellIndex - 1] && sibling != undefined)
          sibling.style.background = '#bca58f';
        else if (sibling == siblings[parent.cellIndex + 1] && sibling != undefined)
          sibling.style.background = '#926851';
        //else if (sibling != siblings[parent.cellIndex] && sibling != undefined)
          //sibling.style.background = 'seagreen';

      if (tr[Array.prototype.indexOf.call(tr, parent.parentNode) + 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, parent.parentNode) + 1].children[parent.cellIndex].style.background = '#a9846a';
      if (tr[Array.prototype.indexOf.call(tr, parent.parentNode) - 1] != undefined)
        tr[Array.prototype.indexOf.call(tr, parent.parentNode) - 1].children[parent.cellIndex].style.background = '#a17a7a';

      parent.style.background = 'rosybrown';
    }

  }

}
