import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-custom-event';
  showComponent = true;

  onShowHideClick() {
    this.showComponent = !this.showComponent;
  }

  onSendEvent() {
    window.dispatchEvent(
      new CustomEvent('pageHelp', {
        detail: { message: 'FROM ROOT!' },
      })
    );
  }
}
