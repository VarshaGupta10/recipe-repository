import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') get opened(){
  return this.isOpen;
}
@HostListener('click') open(){
    return this.isOpen = true;
}
@HostListener('mouseleave') close(){
    return this.isOpen = false;
}
private isOpen = false;

}
