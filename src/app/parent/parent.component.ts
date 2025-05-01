import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { ContextDrawerService } from '../context-drawer.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, OnDestroy{
  constructor(private contextDrawerService: ContextDrawerService) {}

  subscription!: Subscription;
  message = '';

  ngOnDestroy(): void {
    console.log('PARENT ON DESTROY');
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    console.log('PARENT ON INIT');
    this.subscription = this.contextDrawerService.message$.subscribe((value) => {
      console.log('MESSAGE RECEIVED ON PARENT COMPOMENT ', value);
      this.message += value + '\n';
    });
  }

}
