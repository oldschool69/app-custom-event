import { Component, Host } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  standalone: true,
  selector: 'page-help',
  templateUrl: './page-help.component.html',
  styleUrl: './page-help.component.css'
})
export class PageHelpComponent{
  constructor(@Host() private drawer: MatDrawer) {}
  
  onClose() {
    this.drawer.close();
  }
}
