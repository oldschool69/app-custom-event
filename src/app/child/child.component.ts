import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy {
  private eventListener!: EventListener;
  message = '';

  ngOnDestroy(): void {
    console.log('CHILD ON DESTROY')
    this.removeEventListener();
  }
  ngOnInit(): void {
    console.log('CHILD ON INIT')
    this.addEventListener();
  }

  addEventListener() {
    this.eventListener = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('EVENT RECEIVED:', customEvent.detail);
      this.message = customEvent.detail.message;
    };

    window.addEventListener('pageHelp', this.eventListener);
  }
  
  removeEventListener() {
    window.removeEventListener('pageHelp', this.eventListener);
  }

}
