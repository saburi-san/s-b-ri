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
  touchstart(event: any)
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



}
