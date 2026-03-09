import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.css'
})
export class OtpInputComponent implements AfterViewInit {
  @Input() length = 6;

  // 🔥 parent يحدد اذا في error
  @Input() isInvalid = false;

  @Output() otpChange = new EventEmitter<string>();

  @ViewChildren('otpInput') inputsRef!: QueryList<ElementRef>;

  inputs: number[] = [];
  otp: string[] = [];

  focusedIndex: number | null = null;

  ngAfterViewInit() {
    this.inputs = Array(this.length).fill(0);
    this.otp = Array(this.length).fill('');
  }

  onFocus(index: number) {
    this.focusedIndex = index;
  }

  onBlur() {
    this.focusedIndex = null;
  }

  onInput(event: any, index: number) {

    const value = event.target.value;

    if (!/^[0-9]$/.test(value)) {
      event.target.value = '';
      return;
    }

    this.otp[index] = value;

    const next = this.inputsRef.toArray()[index + 1];
    if (next) {
      next.nativeElement.focus();
    }

    this.emitOtp();
  }

  onKeyDown(event: KeyboardEvent, index: number) {

    if (event.key === 'Backspace') {

      this.otp[index] = '';

      if (index > 0) {
        const prev = this.inputsRef.toArray()[index - 1];
        prev.nativeElement.focus();
      }

      this.emitOtp();
    }
  }

  onPaste(event: ClipboardEvent) {

    const pasted = event.clipboardData?.getData('text') || '';

    if (!/^\d+$/.test(pasted)) return;

    const chars = pasted.split('').slice(0, this.length);

    chars.forEach((char, i) => {

      this.otp[i] = char;

      const input = this.inputsRef.toArray()[i];
      input.nativeElement.value = char;

    });

    this.emitOtp();
  }

  emitOtp() {
    this.otpChange.emit(this.otp.join(''));
  }


}
