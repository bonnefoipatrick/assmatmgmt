import { ElementRef, Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { UntypedFormGroup, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[inputCurrency]'
})
export class CurrencyFormatterDirective  implements OnInit {

  static defaultDecimalCount = 2;
  static defaultDecimalChar = ',';
  @Input() formControlName: string;
  @Input() formGroup: UntypedFormGroup;
  @Input() formControl: AbstractControl;
  @Input() decimalCount = CurrencyFormatterDirective.defaultDecimalCount;
  @Input() decimalChar = CurrencyFormatterDirective.defaultDecimalChar;

  ctl: AbstractControl;
  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
  }
  /*
    if (this.formControl) {
      this.ctl = this.formControl;
    } else {
      this.ctl = this.formGroup.get(this.formControlName);
    }

    if (this.ctl != null) {
      let dataValue = this.ctl.value.toString();
      if (!dataValue) {
        dataValue = '0.' + '0'.repeat(this.decimalCount);
      }
      if (dataValue.indexOf('.') === -1) {
        dataValue = dataValue + '.' + '0'.repeat(this.decimalCount);
      }

      const decCount = dataValue.length - dataValue.indexOf('.') - 1;
      if (decCount < this.decimalCount) {
        dataValue += '0'.repeat(this.decimalCount - decCount);
      } else if (decCount > this.decimalCount) {
        dataValue = dataValue.substr(0, dataValue.length - (decCount - this.decimalCount));
      }


      if (this.decimalChar !== '.') {
        const dispValue = dataValue.replace('.', this.decimalChar);
        this.setDispValue(dispValue);
      } else {
        this.setDispValue(dataValue);
      }

      this.setDataValue();
    }
  }

  @HostListener('input', ['$event']) onChange($event) {

    let val = this.ctl.value;
    let chgVal = false;
    let chgCurPos = false;
    let newCurPos = 0;

    if (!val) {
      // empty - set default
      val = this.decimalChar + '0'.repeat(this.decimalCount);
      chgVal = true;
    }
    let sval = val.toString();
    let pointPos = sval.indexOf(this.decimalChar);
    if (pointPos < 0) {
      // add decimal part
      sval = sval + this.decimalChar + '0'.repeat(this.decimalCount);
      pointPos = sval.indexOf(this.decimalChar);
      chgVal = true;
    }
    if (sval === this.decimalChar + '0'.repeat(this.decimalCount)) {
      newCurPos = 0;
      chgCurPos = true;
    }
    const curPos = this.el.nativeElement.selectionStart;
    const okPoint = sval.indexOf(this.decimalChar) === sval.length - this.decimalCount - 1;
    const isPoint = sval.indexOf(this.decimalChar) > -1;
    if (isPoint && !okPoint) {
      const deccnt = sval.length - pointPos - 1;
      if (deccnt > this.decimalCount) {
        sval = sval.substr(0, sval.length - (deccnt - this.decimalCount));
        chgVal = true;
        newCurPos = curPos;
        chgCurPos = true;
      } else if (deccnt > 0 && deccnt < this.decimalCount) {
        sval = sval + '0'.repeat(this.decimalCount - deccnt);
        chgVal = true;
        newCurPos = curPos;
        chgCurPos = true;
      }
    }

    if (chgVal) {
      this.ctl.patchValue(sval);
    }
    if (chgCurPos) {
      this.el.nativeElement.setSelectionRange(newCurPos, newCurPos);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): boolean {
    const isWhite = e.key.toString().length > 1;
    const isAllowed = e.key === this.decimalChar || e.key === '-' || e.key === '.';
    const isNumber = e.key !== ' ' && !isNaN(Number(e.key));

    if (!isWhite && !isAllowed && !isNumber) {
      return false;
    }

    const curPos = this.el.nativeElement.selectionStart;
    const val = this.ctl.value;
    let pointPos = -1;
    if (val) {
      pointPos = val.indexOf(this.decimalChar);
      if (pointPos === -1) {
        pointPos = val.indexOf('.');
      }
    }

    // disable add another decimal separator
    if (val && (e.key === this.decimalChar || e.key === '.') && pointPos > -1) {
      this.el.nativeElement.setSelectionRange(pointPos + 1, pointPos + 1);
      return false;
    }


    // cursor is at end, it is number, decimal point is at correct place
    if (pointPos > -1 && isNumber && val[val.length - this.decimalCount - 1] === this.decimalChar && curPos === val.length) {
      return false;
    }

    if (e.key.toString() === 'Backspace' && pointPos > -1 && curPos === pointPos + 1) {
      return false;
    }

    if (e.key.toString() === 'Delete' && pointPos > -1 && curPos === pointPos) {
      return false;
    }

    return true;
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   console.log('cc me');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   console.log('cc ml');
  // }

  @HostListener('blur', ['$event']) onBlur() {
    if (this.decimalChar !== '.') {
      this.setDataValue();
    }
  }

  setDataValue() {

    const dispValue = this.ctl.value;
    const dataValue = dispValue.replace(this.decimalChar, '.');
    this.ctl.patchValue(dataValue,
      {
        onlySelf: false,
        emitEvent: true,
        emitModelToViewChange: false,
        emitViewToModelChange: false
      });

  }

  setDispValue(dispValue: string) {
    this.ctl.patchValue(dispValue,
      {
        onlySelf: true,
        emitEvent: false,
        emitModelToViewChange: true,
        emitViewToModelChange: true
      });
  }
 */
}
