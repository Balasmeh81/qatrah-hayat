import { Component } from '@angular/core';
import { LandingHeaderComponent } from "../../features/landing/components/landing-header/landing-header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, LandingHeaderComponent, FooterComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css'
})
export class PublicLayoutComponent {

}
