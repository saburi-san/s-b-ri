import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  @HostListener('touchstart', ['$event'])
  tablehighlight(event: any)
  {
      const td: any = document.querySelectorAll('td')

      for (let data of td)
      {
        data.style.background = '#bc8f8f75';
      }

      //console.log(event.target.tagName)
      if (event.target.tagName == 'TD' )
      {
        let element: any = event.target;

        element.style.background = '#bc8f8f95';
      }
  }
}
