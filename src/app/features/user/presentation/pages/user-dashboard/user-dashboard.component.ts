import { Component } from '@angular/core';
import { UserHeroComponent } from "../../components/user-hero/user-hero.component";
import { StatusCardDashboardComponent } from "../../components/status-card-dashboard/status-card-dashboard.component";

@Component({
  selector: 'app-user-dashboard',
  imports: [UserHeroComponent, StatusCardDashboardComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
