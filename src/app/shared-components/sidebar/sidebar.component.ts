import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { LanguageServiceService } from '../../services/language-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TranslocoDirective, TranslocoPipe],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentLanguage: string = ''; /// to get observable  object
  @Input() isCollapsed: boolean = false;
  @Output() isCollapsedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private languageService: LanguageServiceService) {
    this.languageService.selectedLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
      console.log('from sidebar', this.currentLanguage);
    }); /////to get observable  object
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
    console.log(this.isCollapsed); // Test if it works when clicked
  }
}
