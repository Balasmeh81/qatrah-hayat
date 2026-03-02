import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/services/language.service';
@Component({
  selector: 'app-campaigns-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './campaigns-card.component.html',
  styleUrls: ['./campaigns-card.component.css']
})
export class CampaignsCardComponent {
  langService = inject(LanguageService);
}
