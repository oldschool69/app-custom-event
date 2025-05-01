import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextDrawerService implements OnDestroy{
  
  observable$ = new Observable<string>();
  subscription!: Subscription;

  private messageSubject = new BehaviorSubject<string>('');
  public message$: Observable<string> = this.messageSubject.asObservable();

  constructor() { 
  }

  ngOnDestroy(): void {
    console.log('CONTEXT DRAWER SERVICE ON DESTROY');
  }

  sendMessage(newMessage: string) {
    this.messageSubject.next(newMessage);
  }
}
