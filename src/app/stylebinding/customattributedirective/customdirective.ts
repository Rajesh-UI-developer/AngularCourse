import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[hoverHighlight]',
    standalone: true, // Indicating that this is a standalone directive
})
export class HoverHighlightDirective {
    //   @Input() hoverHighlight: string = 'yellow'; // Input to allow setting custom color

    constructor(private el: ElementRef) { }

    // Mouse enters the element
    @HostListener('mouseenter') onMouseEnter() {
        // this.highlight(this.hoverHighlight || 'yellow');
        this.highlight('yellow');
    }

    // Mouse leaves the element
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
