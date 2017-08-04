import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
  /*
  @HostListener('click') toggleOpen(eventData: Event) {
    if (!this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'show');
    }
    this.isOpen = !this.isOpen;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  */
}
