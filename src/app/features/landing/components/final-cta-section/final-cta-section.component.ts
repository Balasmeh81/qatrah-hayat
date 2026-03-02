import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-final-cta-section',
  imports: [RouterLink, TranslateModule],
  templateUrl: './final-cta-section.component.html',
  styleUrl: './final-cta-section.component.css'
})
export class FinalCtaSectionComponent {
  langService = inject(LanguageService);
}
