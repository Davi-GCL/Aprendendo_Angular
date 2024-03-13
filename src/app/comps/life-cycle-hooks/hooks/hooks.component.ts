import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges,
                                       OnInit,
                                       DoCheck,
                                       AfterContentInit,
                                       AfterContentChecked,
                                       AfterViewInit,
                                       AfterViewChecked,
                                       OnDestroy 
{

  ngOnChanges(changes: SimpleChanges): void {
      console.log("OnChanges: ", changes);
  }

  ngOnInit(): void {
    console.log("OnInit");    
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit(): void{
    console.log("AfterViewChecked");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
  }

  @Input() entrada:any;

}
