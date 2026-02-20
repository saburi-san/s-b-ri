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


  postdata: any;

  data: any = [
    {
      uno: { data: 'one'},
      dos: { data: 'dos'},
      tres: { data: 'tres'},
      quatro: { data: 'quatro'},
      cinco: { data: 'cinco'},
      isedit: false
    },
    {
      uno: { data: 'uno'},
      dos: { data: 'dos'},
      tres: { data: 'tres'},
      quatro: { data: 'quatro'},
      cinco: { data: 'cinco'}
    },
    {
      uno: { data: 'uno'},
      dos: { data: 'dos'},
      tres: { data: 'tres'},
      quatro: { data: 'quatro'},
      cinco: { data: 'cinco'}
    },
    {
      uno: { data: 'uno'},
      dos: { data: 'dos'},
      tres: { data: 'tres'},
      quatro: { data: 'quatro'},
      cinco: { data: 'cinco'}
    },
    {
      uno: { data: 'uno'},
      dos: { data: 'dos'},
      tres: { data: 'tres'},
      quatro: { data: 'quatro'},
      cinco: { data: 'cinco'}
    }
  ]

  constructor()
  {

  }

  edit(item: any)
  {
    item.isedit = !item.isedit
    //console.log(item)
  }

  post(item: any, index: number)
  {
    this.data[index] = item;



    console.log(index)
    console.log(item)
    console.log(this.data)
    item.isedit = !item.isedit
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
