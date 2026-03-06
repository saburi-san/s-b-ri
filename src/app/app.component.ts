import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mk-i';

  constructor(private router: Router)
  {
    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd)
    {
      if (document.querySelector('[id=selected]'))
      {
        const selected: any = document.querySelector('[id=selected]')
        selected.innerText = window.location.pathname;
      }
    }
    else
    {

    }
  })
  }



  @HostListener('hashchange', ['$event'])
  load(event: any)
  {

    const selected: any = document.querySelector('[id=selected]')
    selected.innerText = window.location.pathname;
  }

  @HostListener('window:keyup', ['$event'])
  shortcuts(event: any)
  {
    if (event.altKey && event.key == 'h')
    {
      this.router.navigate(['/']);
    }
    else if (event.altKey && event.key == 'c')
    {
      this.router.navigate(['/catalogue']);
    }
    else if (event.altKey && event.key == 'a')
    {
      this.router.navigate(['/about']);
    }
    else if (event.altKey && event.key == 'C')
    {
      this.router.navigate(['/contact']);
    }
  }

  @HostListener('click', ['$event'])
  reveal(event: any)
  {
    const id = event.target.id
    const route: any = document.querySelector('[id=route]')

    if (id == 'start')
    {
      route.style.display = 'grid';

    }
    else
    {
      route.style.display = 'none';
    }


    const options: any = document.querySelector('[id=options]')

    const chevron: any = document.querySelector('[id=chevron]')
    if (id == 'selected' || id == 'chevron')
    {
      options.style.display = 'grid';
      chevron.innerText = 'expand_less';
    }
    else
    {
      options.style.display = 'none';
      chevron.innerText = 'expand_more';
    }
  }

}
