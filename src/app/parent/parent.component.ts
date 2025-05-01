import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  standalone: true,
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    console.log('PARENT ON DESTROY');
  }
  ngOnInit(): void {
    console.log('PARENT ON INIT');
  }

}
