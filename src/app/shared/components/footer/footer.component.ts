import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, CommonModule,],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  langService = inject(LanguageService);
}
