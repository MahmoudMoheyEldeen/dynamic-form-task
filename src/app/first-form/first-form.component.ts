import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LanguageServiceService } from '../services/language-service.service';
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
} from '@jsverse/transloco';

@Component({
  selector: 'app-first-form',
  standalone: true,
  imports: [TranslocoDirective, TranslocoPipe, TranslocoModule, CommonModule],
  templateUrl: './first-form.component.html',
  styleUrl: './first-form.component.scss',
})
export class FirstFormComponent {
  currentLanguage: string = ''; /// to get observable  object

  constructor(private languageService: LanguageServiceService) {
    this.languageService.selectedLanguage$.subscribe((lang: any) => {
      this.currentLanguage = lang;
      console.log('from FormOne component', this.currentLanguage);
    }); /////to get observable  object
  }
  trySweetalert() {
    Swal.fire('SweetAlert2 is working!');
  }
}
