import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

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
  start(event: any)
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
  }

}
