import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({selector: '[appHighlightHostbinding]'})
export class HighlightHostbindingDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue';
  @HostBinding('style.color') color: string = 'white';


  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.backgroundColor = 'blue';
  }


  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}
}
