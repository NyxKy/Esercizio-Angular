import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponent } from './components/secondo.component/secondo.component';
import { TerzoComponent } from './components/terzo.component/terzo.component';
import { QuartoComponent } from './components/quarto.component/quarto.component';

@Component({
  selector: 'app-root',
  imports: [SecondoComponent, TerzoComponent, QuartoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  name = 'app'
  protected readonly title = signal('angular-cheng');
}
