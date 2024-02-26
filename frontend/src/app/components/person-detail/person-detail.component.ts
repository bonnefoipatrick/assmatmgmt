import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormGroup, FormControl, UntypedFormBuilder, Validators } from '@angular/forms';

import { map, tap } from 'rxjs/operators';

import { Person } from '../../interfaces/persons.interface';
import { PersonApiService } from '../../services/person.api.service';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit, OnDestroy {

  public form: UntypedFormGroup;

  personId!: string;
  private person: Person;

  constructor(private formBuilder: UntypedFormBuilder,
              private personApiService: PersonApiService,
              private route: ActivatedRoute,
              private router: Router) {
    console.log ('constructor ' + this.route.snapshot.params['personId']);
    this.accountId = this.route.snapshot.params['personId'];
  }

  public ngOnInit(): void {
    this.buildForm();
    this.getDetails();
  }

  public buildForm(): void {
    this.form = this.formBuilder.group ({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      no_ss: ['', [Validators.required]]
    });
  }

  public ngOnDestroy(): void {
  }

  public updateForm(person: Person): void {
      console.log('update form ' + JSON.stringify(person));

    this.form.setValue({
      first_name: person.first_name,
      last_name: person.last_name,
      phone: person.phone,
      mobile: person.mobile,
      no_ss: person.no_ss,
    });
  }

  public getDetails(): void {
    this.personApiService.find(this.personId)
      .subscribe((person : Person) => {
        this.updateForm(person);
        this.person = person;
      });
    console.log('getDetails ' + this.person);
  }

  get f() {
    return this.form.controls;
  }

  public submit() : void {
    console.log(this.form.value);
    if (this.form.invalid) {
      return
    }
    this.setPerson();
    this.personApiService.update(this.person)
      .subscribe((personUpdated : Person) => {
        this.router.navigate(['person']);
    });
  }


  public setPerson() : void {
    this.person.first_name = this.f['first_name'].value;
  }
}
