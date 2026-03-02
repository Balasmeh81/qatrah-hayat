import { Component } from '@angular/core';
import { LandingHeroComponent } from "../../components/landing-hero/landing-hero.component";
import { HowItsWorkSectionComponent } from "../../components/how-its-work-section/how-its-work-section.component";
import { CampaignsSectionComponent } from "../../components/campaigns-section/campaigns-section.component";
import { LocationsSectionComponent } from "../../components/locations-section/locations-section.component";
import { BloodNeedSectionComponent } from "../../components/blood-need-section/blood-need-section.component";
import { FaqSectionComponent } from "../../components/faq-section/faq-section.component";
import { FinalCtaSectionComponent } from "../../components/final-cta-section/final-cta-section.component";
import { AboutUsSectionComponent } from "../../components/about-us-section/about-us-section.component";

@Component({
  selector: 'app-landing-page',
  imports: [LandingHeroComponent, HowItsWorkSectionComponent, CampaignsSectionComponent, LocationsSectionComponent, BloodNeedSectionComponent, FaqSectionComponent, FinalCtaSectionComponent, AboutUsSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
