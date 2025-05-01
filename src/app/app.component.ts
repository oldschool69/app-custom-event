import { Component } from '@angular/core';
import { DrawerComponent } from "./drawer/drawer.component";

@Component({
  selector: 'app-root',
  imports: [DrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-custom-event';

  onSendEvent(eventType: string) {
    window.dispatchEvent(
      new CustomEvent(eventType, {
        detail: { message: 'FROM ROOT!' },
      })
    );
  }
}
