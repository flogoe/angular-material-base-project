import {OnInit} from '@angular/core';
import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[exampleAttrDirective]'  // This selector is placed inside the HTML
                                      // Element
})
export class ExampleAttributeDirective implements OnInit {
  /**
   *
   * @param elementRef Reference to the parent element
   */
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}