import { Component } from '@angular/core';
import { UserHeroComponent } from "../../components/user-hero/user-hero.component";
import { StatusCardDashboardComponent } from "../../components/status-card-dashboard/status-card-dashboard.component";
import { UrgentBloodNeedsComponent } from "../../components/urgent-blood-needs/urgent-blood-needs.component";
import { CampaignsSectionComponent } from '../../../../landing/presentation/components/campaigns-section/campaigns-section.component';

@Component({
  selector: 'app-user-dashboard',
  imports: [UserHeroComponent, StatusCardDashboardComponent, UrgentBloodNeedsComponent, CampaignsSectionComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
