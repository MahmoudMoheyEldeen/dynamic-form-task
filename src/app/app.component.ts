import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import Swal from 'sweetalert2';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { LanguageServiceService } from './services/language-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    TranslocoDirective,
    TranslocoPipe,
    SidebarComponent,
    HeaderComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentLanguage: string = ''; /// to get observable  object

  title = 'dynamic_form_task2';
  isCollapsedApp: boolean = false;

  constructor(private languageService: LanguageServiceService) {
    this.languageService.selectedLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
      console.log('from formOne component', this.currentLanguage);
    }); /////to get observable  object
  }

  ngOnInit(): void {
    this.toggleSidebar();
  }

  toggleSidebar() {
    console.log(
      'Sidebar collapsed state in AppComponent:',
      this.isCollapsedApp
    );
  }

  handleSidebarToggle(isCollapsed: boolean) {
    this.isCollapsedApp = isCollapsed;
    console.log(
      'Data passed from SidebarComponent to AppComponent:',
      this.isCollapsedApp
    );
  }
}
