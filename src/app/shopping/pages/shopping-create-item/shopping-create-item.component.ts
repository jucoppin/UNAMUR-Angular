import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-shopping-create-item',
  templateUrl: './shopping-create-item.component.html',
  styleUrls: ['./shopping-create-item.component.scss']
})
export class ShoppingCreateItemComponent implements OnInit, OnDestroy {
  form!: FormGroup; // formGroup,

  isPromo!: boolean;

  private destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private readonly fb: FormBuilder
  ) {
  }

  ngOnDestroy(): void {
    console.error('DESTROYED : ' + this.constructor.name);

    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      adEmail: [null, [Validators.email, Validators.minLength(5), Validators.required]],
      name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]{4,}$/)]],
      price: [null],
      quantity: [0],
      description: [null, [Validators.maxLength(10)]],
      promo: [true],
      promoPrice: [{ value: null, disabled: true }],
    });

    this.form.get('promo')?.disable()

    this.form.get('promo')?.valueChanges!.pipe(takeUntil(this.destroyed$)).subscribe(value => {
      this.isPromo = value;
    });

    interval(1000).pipe(takeUntil(this.destroyed$)).subscribe(x => {
      console.log(x);
    });

    this.form.get('promo')?.updateValueAndValidity();

    // setInterval(() => {
    //   console.log(this.form.getRawValue(), this.form.value);
    // }, 5000);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      console.log(this.form.errors);
      console.log(this.form.get('adEmail')?.errors);
      return alert('Formulaire invalide');
    }

    console.log(this.form.getRawValue(), this.form.valid);
  }

  validateKey(evt: KeyboardEvent) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      evt.stopPropagation();
    }
  }
}
