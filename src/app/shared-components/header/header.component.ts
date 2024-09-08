import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TranslocoDirective,
  TranslocoPipe,
  TranslocoService,
} from '@jsverse/transloco';
import { LanguageServiceService } from '../../services/language-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoDirective, TranslocoPipe, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedLanguage = 'ar';
  constructor(
    private _transLoco: TranslocoService,
    private languageService: LanguageServiceService
  ) {
    this.languageService.selectedLanguage$.subscribe((lang) => {
      this.selectedLanguage = lang;
      this._transLoco.setActiveLang(lang);
    });
  }

  onLangChange(event: any) {
    const selectedLang = event.target.value;
    this.languageService.setLanguage(selectedLang);
  }
}
