import { Component } from '@angular/core';
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
} from '@jsverse/transloco';
import Swal from 'sweetalert2';
import { LanguageServiceService } from '../../services/language-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-impact-analysis',
  standalone: true,
  imports: [
    TranslocoDirective,
    TranslocoDirective,
    TranslocoModule,
    CommonModule,
  ],
  templateUrl: './business-impact-analysis.component.html',
  styleUrl: './business-impact-analysis.component.scss',
})
export class BusinessImpactAnalysisComponent {
  currentLanguage: string = ''; /// to get observable  object

  constructor(private languageService: LanguageServiceService) {
    this.languageService.selectedLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
      console.log('from business component', this.currentLanguage);
    }); /////to get observable  object
  }
  trySweetalert() {
    Swal.fire('SweetAlert2 is working!');
  }
}
