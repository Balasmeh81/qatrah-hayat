import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-hero',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './user-hero.component.html',
  styleUrl: './user-hero.component.css'
})
export class UserHeroComponent {

}
