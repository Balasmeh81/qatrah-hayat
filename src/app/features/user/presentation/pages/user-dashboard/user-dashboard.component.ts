import { Component } from '@angular/core';
import { UserHeroComponent } from "../../components/user-hero/user-hero.component";

@Component({
  selector: 'app-user-dashboard',
  imports: [UserHeroComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
