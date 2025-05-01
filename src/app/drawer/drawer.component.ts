import { Component, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { PageHelpComponent } from '../page-help/page-help.component';
import { TableHelpComponent } from "../table-help/table-help.component";

@Component({
  selector: 'app-drawer',
  imports: [MatSidenavModule, PageHelpComponent, TableHelpComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent implements OnInit, OnDestroy {
  eventType = signal<string>('')
  @ViewChild('drawer') drawer!: MatDrawer;
  private eventListener!: EventListener;
  
  ngOnDestroy(): void {
    console.log('DRAWER ON DESTROY');
    this.removeEventListener();
  }
  
  ngOnInit(): void {
    console.log('DRAWER ON INIT');
    this.addEventListener();
  }
  
  private addEventListener() {
    this.eventListener = (event: Event) => {
        const customEvent = event as CustomEvent;
        console.log('DRAWER EVENT LISTENER CALLED FOR: ', customEvent.type);
        console.log('DRAWER EVENT RECEIVED:', customEvent.detail);
        this.eventType.set(customEvent.type);
        this.drawer.open();
      };
      window.addEventListener('pageHelp', this.eventListener);
      window.addEventListener('tableHelp', this.eventListener);
    }
    
    private removeEventListener() {
      window.removeEventListener('pageHelp', this.eventListener);
      window.removeEventListener('tableHelp', this.eventListener);
    }
}
