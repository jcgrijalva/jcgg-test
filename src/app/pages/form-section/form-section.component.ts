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
import {User} from "../../model/user";
import {MatDivider} from "@angular/material/divider";
import {Router} from "@angular/router";
import {AppService} from "../../app.service";
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
  public edad: string = '';
  public doc = '' ;
  public birthday : any  ;
  public uname = '' ;
  tipoDocumento: string = 'Documento'
  docPattern: string = "(\\d{8})-(\\d{1})";
  req : boolean = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  chooses: string[] = [];
  allChooses: string[] = ['Jugar Fútbol', 'Jugar Basketball', 'Jugar Tennis', 'Jugar Voleibol', 'Jugar Fifa', 'Jugar videojuegos'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> | undefined;

  announcer = inject(LiveAnnouncer);

  constructor(private dateAdapter: DateAdapter<Date>,private router: Router,
              private appService : AppService) {

    this.dateAdapter.setLocale('es');
    this.appService.getEdad.subscribe(ed => this.edad = ed);
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allChooses.slice())),
    );
    const currentYear = new Date().getFullYear();
    if(this.edad == "Menor") {
      this.minDate = new Date(currentYear - 18, 0, 1);
      this.docPattern='';
      this.tipoDocumento='Carnet de minoridad';
      this.maxDate = new Date(currentYear + 0, 0, 1);
      this.req = false;
    }else{
      this.minDate = new Date(currentYear - 120, 0, 1);
      this.maxDate = new Date(currentYear -18, 0, 0, 1);
    }

  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.chooses.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.chooses.indexOf(fruit);

    if (index >= 0) {
      this.chooses.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.chooses.push(event.option.viewValue);
    // @ts-ignore
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allChooses.filter(choose => choose.toLowerCase().includes(filterValue));
  }

  sendInfo() {
    console.log("Submit info");
    let user : User = {username:this.uname,hobbies:this.chooses,
      birthdate:this.getAgeFromDateOfBirth(this.birthday),document: this.doc};
    this.appService.setUserInfo(user);
    this.appService.setModoProfile("Profile");
    this.router.navigate([`/loading`]);
  }

  getAgeFromDateOfBirth(dateOfBirth: Date): string {
    const currentDate = new Date();

    // @ts-ignore
    const ageInMilliseconds = currentDate - dateOfBirth;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = Math.floor(ageInDays / 365.25);

    return `${ageInYears} años`;
  }

}
