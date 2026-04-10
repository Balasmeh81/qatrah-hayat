import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { LanguageService } from './core/services/language.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init(
      {
        once: true
      }
    );
    setTimeout(() => AOS.refresh(), 0)
  }
}
