import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [CommonModule,TranslateModule,RouterLink],
  templateUrl: './landing-hero.component.html',
  styleUrls: ['./landing-hero.component.css']
})
export class LandingHeroComponent
{

}
