import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRow} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import {provideNativeDateAdapter} from '@angular/material/core';
import {User} from "../model/user";
import {MatDivider} from "@angular/material/divider";
const CUSTOM_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MMM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
@Component({
  selector: 'app-form-section',
  standalone: true,
  providers: [provideNativeDateAdapter(),
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT }
  ],
  imports: [MatInputModule, MatFormFieldModule, MatButton, MatAnchor, MatChipGrid, MatChipRow,
    MatChipInput, MatIcon, MatAutocomplete, MatOption, ReactiveFormsModule, MatAutocompleteTrigger,
    AsyncPipe, MatDatepickerToggle, MatDatepickerInput, MatDatepicker, MatDivider, FormsModule],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.css'
})
export class FormSectionComponent {

  minDate: Date | undefined;
  maxDate: Date | undefined;
  public user: User | undefined;
  public documento = '' ;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> | undefined;

  announcer = inject(LiveAnnouncer);

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 18, 0, 1);
    this.maxDate = new Date(currentYear + 0, 0, 1);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    // @ts-ignore
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  formatDoc() {
    const regex = /^(\d{8})-(\d{1})$/;
    if (regex.test(this.documento)) {
      this.documento = this.documento.replace(regex, '$1-$2');
    }
  }
}
