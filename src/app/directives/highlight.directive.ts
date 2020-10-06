import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({selector: '[highlight]'})

/**
 * Better way to change the style of an element with a directive instead of only
 * ElementRef. This works fine even without a DOM, e.g. with ServiceWorker.
 * You should use the Renderer for any DOM manipulations.
 * More information here: https://angular.io/api/core/Renderer2
 */
export class HighlightDirective implements OnInit {
  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'red');
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'yellow');
  }


  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Set the style of an element
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'yellow');
  }
}
