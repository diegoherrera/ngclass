import { Component } from '@angular/core';
import { Cantante } from 'src/Modelo/Cantante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngstyle';

  cantantes: Cantante[] = [
    {
      'artist': 'Michael Jackson',
      'country': 'USA'
    },
    {
      'artist': 'Justin Bieber',
      'country': 'Canada'
    },
    {
      'artist': 'Daddy Yankee',
      'country': 'Purto Rico'
    },
    {
      'artist': 'A R Rehman',
      'country': 'India'
    },
    {
      'artist': 'Selena Gomez',
      'country': 'USA'
    }
  ];
}
