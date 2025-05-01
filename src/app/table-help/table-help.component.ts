import { Component, Host } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  standalone: true,
  selector: 'table-help',
  templateUrl: './table-help.component.html',
  styleUrl: './table-help.component.css'
})
export class TableHelpComponent {
  
  constructor(@Host() private drawer: MatDrawer) {}
  
  onClose() {
    this.drawer.close();
  }
}
