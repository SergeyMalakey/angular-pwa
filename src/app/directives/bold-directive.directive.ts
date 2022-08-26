import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBoldDirective]'
})
export class BoldDirectiveDirective {

  @Input() color: string;

  private fontWeight = "normal";
  private fontSize = "16px";
  private defaultFontSize = "16px";
  private biggerFontSize = "26px";

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = "bold";
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.color || "black"
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.elementRef.nativeElement.style.color = "red"
    this.fontSize = this.biggerFontSize
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.elementRef.nativeElement.style.color = this.color || "black"
    this.fontSize = this.defaultFontSize
  }

  @HostBinding("style.fontSize") get getFontSize(){
    return this.fontSize;
  }
}
